# IT::React::Practice

## Create a counter component that can increment or decrement a count value

%

```js
// use useState
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
```

```js
// use useReducer
import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      if (state > 0) {
        return state - 1;
      }
      return state;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default Counter;
```

[#React::Hooks]

## Write a useEffect hook that will run call back only once/evertime(on render)

%

```js
// run only once
useEffect(() => {
  console.log("useEffect");
}, []);

// run everytime
useEffect(() => {
  console.log("useEffect");
});
```

[#React::Hooks]

## Create a component with a input and a button, when click on the button we should focus on the input and clear the text automatically

%

```js
const InputWithFocusButton = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
};
```

[#React::Hooks]

## Create a button expose a boolean state called toggle and its parent toggle the state when click on the button, then show/hide "Hello World" based on the state

%

- How to alter a state from parent component?

```js
// child component
import React, { forwardRef, useImperativeHandle, useState } from "react";

const Toggle = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    childToggle() {
      setToggle(!toggle);
    },
  }));
  return <>{toggle && <span>Toggle</span>}</>;
});

export default Toggle;

// parent component
import React, { useRef } from "react";
import Toggle from "./Toggle";

const Test = () => {
  const childRef = useRef(null);

  const onClick = () => {
    childRef.current.childToggle();
  };

  return (
    <div>
      <button onClick={onClick}>Button From Parent</button>
      <Toggle ref={childRef} />
    </div>
  );
};

export default Test;
```

[#React::Hooks]

## how to use useContext hook

create a context and access the context value in child component

%

```js
// parent component
import React, { createContext } from "react";
import ChildComponent from "./Child";

// 1. Create and export the context
export const MyContext = createContext();

const Test = () => {
  // 2. Provide a context value
  const contextValue = {
    name: "klai",
    value: "Hello from Context",
  };

  // 3. wrap child component with context provider
  return (
    <MyContext.Provider value={contextValue}>
      <ChildComponent />
    </MyContext.Provider>
  );
};

export default Test;
```

```js
// child component
import React, { useContext } from "react";
import { MyContext } from "./Test";

const ChildComponent = () => {
  // Child component accessing the context value
  const contextValue = useContext(MyContext);

  return (
    <>
      <p>{contextValue.name}</p>
      <p>{contextValue.value}</p>
    </>
  );
};

export default ChildComponent;
```

[#React::Hooks]

## How to use React.memo() to prevent unnecessary rerender

%

In the example below, wrapped component will only re-rendered if the data prop has changed.

```js
import React from 'react';

const MyComponent = React.memo(({ data }) => {
  // Component logic
  return <div>{data}</div>;
});

export default MyComponent;
```

[#React::Hooks]

## How to use useMemo() to prevent unnecessary rerender

%

In the example below, the expensive computation function will only be called if the data prop has changed.

```js
import React, { useMemo } from 'react';

const MyComponent = ({ data }) => {
  // Expensive computation function
  const computeExpensiveValue = (data) => {
    // Perform some complex calculations using the data
    // ...
    return result;
  };

  // Memoized value using useMemo
  const memoizedValue = useMemo(() => computeExpensiveValue(data), [data]);

  return (
    <div>
      <p>Computed value: {memoizedValue}</p>
      {/* Rest of your component */}
    </div>
  );
};

export default MyComponent;
```

[#React::Hooks]

## How to use useCallback()

%

```js
// parent component
import { useCallback, useState } from "react";
import Child from "./Child";

export default function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, pls sub to the channel!");

  // use useCallback to prevent this function from being created everytime click toggle
  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  const handleClick = () => {
    setToggle(!toggle);
  };

  // returnComment passed to child component
  return (
    <div className="App">
      <Child returnComment={returnComment} />
      <button onClick={handleClick}> Toggle </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}

// child component
import React, { useEffect } from "react";

function Child({ returnComment }) {
  // because returnComment is memoized
  // the reference will not change (unless data change)
  // and useEffect will not be called
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);

  return <div>{returnComment("Pedro")}</div>;
}

export default Child;
```

[#React::Hooks]

## How to access previous value of a state in React?

Let's say we have a input and when type in, we display both current and previous value in a div

%

```js
import { useState, useEffect, useRef } from "react";

export default function Test() {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
    </>
  );
}
```

[#React::Hooks::Advanced]

## Find possible issue in below useEffect code and fix it

```js
useEffect(() => {
  setLoading(true);
  fetch(url)
    .then((res) => res.json())
    .then(setData(data))
    .catch(setError)
    .finally(() => setLoading(false));
}, [url]);
```

%

- url change may resulting multiple fetch request, this may cause fetch request out of sync
- cancel the fetch request

```js
useEffect(() => {
  const controller = new AbortController();
  setLoading(true);
  fetch(url, { signal: controller.signal })
    .then((res) => res.json())
    .then(setData(data))
    .catch(setError)
    .finally(() => setLoading(false));

    return () => controller.abort();
}, [url]);
```

## How to use React Router (v6)

%

```js
// 1. Wrap root component use Router
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

// 2. Router config
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import EffectTutorial from "./UseEffect/EffectTutorial";
import StateTutorial from "./UseState/StateTutorial";

// 2.1 Create Links to navigate
// 2.2 Create Routes set the path and element to render
function App() {
  return (
    <>
      <nav>
        <Link to="/UseState">UseState</Link> <br />
        <Link to="/UseEffect">UseEffect</Link> <br />
      </nav>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/UseState" element={<StateTutorial />} />
        <Route path="/UseEffect" element={<EffectTutorial />} />
      </Routes>
    </>
  );
}

export default App;
```

[#React::Router]

## Create a form with 2 inputs and a submit button

- input1: carName
- input2: carValue
- submit button: when click on the button, we should submit the form and console log the form data

%

```js
function CarForm() {
  const [carName, setCarName] = useState("");
  const [carValue, setCarValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", carName, carValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="carName">Car Name:</label>
      <input
        id="carName"
        type="text"
        value={carName}
        onChange={(e) => setCarName(e.target.value)}
      />
      <label htmlFor="carValue">Car Value:</label>
      <input
        id="carValue"
        type="number"
        value={carValue ? carValue : ""}
        onChange={(e) => setCarValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CarForm;
```

[#React::Basics]
