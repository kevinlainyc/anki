# IT::Redux::Concept

## Redux toolkit key components

%

- action: An action is a **plain JavaScript object** that **has a type field**.
  - by convention, we use field `payload` to store the data
- reducers: a function that receives the current state and an action object
  - decides how to update the state if necessary
  - returns the new state: (state, action) => newState.
- store: The current Redux application state lives in an object called the store.
  - The store is **created by passing in a reducer**
  - has a method called **getState** that returns the current state value
- dispatch: Redux store has a method called dispatch.
  - The only way to update the state is to call **store.dispatch()** and pass in an action object.
- selectors: functions that know how to extract specific pieces of information from a store state value

[#Redux::Basic]

## How to watch action dispatched by other slicers?

cons?

%

cons: now we have a dependency on `movieSlice.actions.reset`
how to avoid: create a new action separate from both movie and song slicers (use createAction)

```js
// song slicer watch action from movie slicer
...
extraReducers(builder) {
  // prevent from manual write action type, get the string from slicer instead!
  // builder.addCase("movie/reset", (state, action) => {
  builder.addCase(movieSlice.actions.reset.toString(), (state, action) => {
    ...
  })
}
```

[#Redux::Basic]

## redux store design, steps to think about

%

- identify what state exists in the app
  - identify derived state
- identify how that state changes over time (actions)
- group together common pieces of state
- create a slice for each group (with reducer and actions)

[#Redux::Basic]

## redux store design for a car list component

- we have a page that display a list of cars (name and value)
- you can add a car to the list
- you can remove a car from the list
- you can search a car by name
- display the total value of current list of cars at the bottom
- extra: when type in car name, if partial match any car name, bold the matched car in the list

%

- states: carName: string, carValue: number, searchTerm: string, cars: [{id: string, name: string, value: number}]
  - derived states: totalValue: number, matchedCars: [{id: string, name: string, value: number}]
- actions: changeName, changeCost, changeTerm, addCar, deleteCar
- slices
  - From Slice
    - state: name, cost
    - actions: changeName, changeCost
  - Search Slice
    - state: searchTerm, cars
    - actions: changeTerm, addCar, deleteCar

## can you make fetch request inside a reducer?

%

- no, because reducer should be a pure function
- if you want to make async request, use thunk middleware or rtq

[#Redux::Basic]

## Create a userSlice uses thunk to fetch data from url (localhost:3005/users)

%

```js
// fetchUsers thunk
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:3005";

// users/fetch is the action type
// thunk will automatically dispatch pending, fulfilled, rejected actions
// action.payload will be the response data (if fulfilled)
// action.error will be the error (if rejected)
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get(`${url}/users`);
  return response.data;
});

export { fetchUsers };

// userSlice
import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      // on rejected the error message is in action.error
      // not action.payload!!!
      state.error = action.error;
    });
  },
});

export const usersReducer = usersSlice.reducers;
```

[#Redux::Thunk]

## How to get data(async call) from dispatch thunk?

%

- after dispatch a thunk action, we get a promise
- we can use `unwrap` to unwrap the data from the promise
- now we can use `then` or `catch` to get the data or error

```js
dispatch(fetchUsers())
  .unwrap()
  .then((data) => console.log("fetch", data))
  .finally(() => {
    setIsLoading(false);
  });
```

[#Redux::Thunk]

## Write a resuable thunk hook

- it should take a thunk action as input
- is should return a function that can be called to get the data from the thunk action
- it should also return a boolean to indicate if the data is loading
- `const [doFetchUsers, isLoading] = useThunk(fetchUsers)`

%

```js
export const useThunk = (action) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  // 切记这里的 useCallback
  const runThunk = useCallback(
    (arg) => {
      setIsLoading(true);
      dispatch(action(arg))
        .unwrap()
        .finally(() => {
          setIsLoading(false);
        });
    },
    [dispatch, action]
  );

  return [runThunk, isLoading];
};
```

[#Redux::Thunk]

## List key components of redux toolkit query

%

When using Redux Toolkit Query, there are several key components and concepts that you should be familiar with:

- **API Slice**: An API slice is created using the createApi function from @reduxjs/toolkit/query. It allows you to define your API endpoints and configure various options such as base URL, request types, transformers, and cache behavior.

- **Endpoints**: Endpoints represent individual API requests in your application. You define them within the endpoints callback when creating an API slice. Each endpoint can have a query (read), mutation (write), or both. Endpoints handle the data fetching and mutation logic.

- **Queries**: Queries are read operations that fetch data from your API. They are defined as query properties within an endpoint. Queries can be executed using hooks provided by Redux Toolkit Query, such as useQuery or usePaginatedQuery. They automatically manage the loading, error, and caching behavior for you.

- **Mutations**: Mutations are write operations that modify data on the server. They are defined as mutation properties within an endpoint. Mutations can be executed using hooks provided by Redux Toolkit Query, such as useMutation. They handle the loading, error, and optimistic update behavior automatically.

- **Cache Invalidation**: Redux Toolkit Query includes a built-in caching mechanism that automatically caches API responses and manages cache invalidation. You can specify cache tags for your endpoints to control cache behavior. When data is mutated, the relevant cache tags are invalidated, ensuring that subsequent queries fetch fresh data.

- **Hooks**: Redux Toolkit Query provides a set of hooks that simplify data fetching and mutation in your components. These hooks include useQuery, usePaginatedQuery, and useMutation, among others. They handle the lifecycle of API requests and provide access to the query/mutation state and data.

- **Normalization**: Redux Toolkit Query supports data normalization, which helps you manage complex data structures efficiently. By defining transformers, you can normalize and denormalize your data as it is fetched or mutated, ensuring consistency and reducing redundant data storage.

- **Redux Store Configuration**: When setting up your Redux store, you need to include the API slice reducer and the middleware provided by Redux Toolkit Query. The middleware intercepts dispatched actions related to API requests and manages the lifecycle of those requests.

- **tags**: tags are used to invalidate cache, when a mutation is run, the cache tags associated with that mutation are invalidated

[#Redux::RTQ]

[#Redux::RTQ]

## list pros a rtq fetch query/mutation return value contains?

%

- data: the data returned from the server
- error: the error returned from the server
- isLoading: true if currently loading date **first time only**
- isFetching: true if currently loading data
- refetch: a function that can be called to refetch the data

[#Redux::RTQ]

## rtq query/mutation hooks difference?

%

- `const {data, error, isLoading} useFetchXXQuery(xx)`
- query run immediately when component is mounted on the screen (by default)

- `const [addXX, results] = useAddXXMutation()`
- mutation give you a function(addXX) to run when you want to change data

[#Redux::RTQ]

## what is rtq query tags?

%

- tags are used to invalidate cache
- when a mutation is run, the cache tags associated with that mutation are invalidated
- use provideTags and invalidatesTags to specify tags for a query/mutation

```js
// arg is the param you passed in the hooks (useFetchAlbumsQuery) 
providesTags: (result, error, arg) => {
  return [{ type: "album", id: arg.id }];
}

// arg here is the param you pass in mutation callback (addAlbum)
invalidatesTags: (result, error, arg) => {
  return [{ type: "album", id: arg.userId }];
}
```

[#Redux::RTQ]