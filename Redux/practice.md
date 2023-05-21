# IT::Redux::Practice

## Below code cause issue, why? How to fix it?

```js
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  setIsLoading(true);
  dispatch(fetchUsers());
}, [dispatch]);

const { data, error } = useSelector((state) => {
  setIsLoading(false);
  return state.users;
});

if (error) {
  setIsLoading(false);
  return <div>Error fetching data...</div>;
}
```

%

above code causing infinite loop, because `setIsLoading` will trigger a re-render, which will trigger `useEffect` again

```js
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  // start fetching data
  setIsLoading(true);

  // after fetching data, set loading to false
  // the data is processed in the store
  // so we don't use then and catch to retieve data (although it's available to do so) 
  dispatch(fetchUsers()).finally(() => {
    setIsLoading(false);
  });
}, [dispatch]);

// get data from store
const { data, error } = useSelector((state) => {
  // if set isLoading here, it will cause trigger re-render
  // which will trigger useEffect again !!!!!!
  // setIsLoading(false);
  return state.users;
});
```
