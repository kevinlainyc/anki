# IT::React::Concept

## What is React and what are its key features?

%

- Component-based architecture - React applications are built using components that are reusable and can be nested within other components.
- Virtual DOM - React uses a virtual DOM which allows it to efficiently update the parts of the UI that have changed without having to update the entire DOM.
- JSX syntax - React uses a syntax called JSX that allows developers to write HTML-like code within JavaScript.
- Unidirectional data flow - Data flows down from parent components to child components in a unidirectional manner, which makes it easier to manage and debug application data.
- React Native - React can be used to create native mobile applications for iOS and Android platforms.
- Large community and ecosystem - React has a large community of developers and a vast ecosystem of libraries and tools that make it easy to develop applications using React.

[#React::concept]

## What is JSX and why is it used in React?

What is JSX in React and how is it different from HTML?

%

JSX stands for JavaScript XML and it is a syntax extension to JavaScript. JSX allows developers to write HTML-like code in JavaScript, making it easier to create user interfaces (UI) in React.

In React, components are the building blocks of UI and they are written in JSX. When JSX code is compiled, it is converted to JavaScript code that React can understand and execute. This allows developers to write UI code in a more maintainable way and provides a simpler syntax for defining components.

JSX also helps improve the performance of React applications. By using JSX, developers can avoid the performance overhead of manually manipulating the DOM and instead let React handle the heavy lifting. React uses a virtual DOM to render UI changes, which can result in faster and more efficient updates.

In summary, JSX is a syntax extension to JavaScript used in React to simplify the creation of UI components, improve code maintainability, and enhance performance.

[#React::concept]

## Explain the difference between state and props in React.

%

In React, state and props both are used to manage and pass data through the components. However, they have some key differences:

State:

- State is an internal data of a component that may change over time within the component.
- It is a plain JavaScript object that holds reactive data and controls the behavior of the component.
- It should only be updated using the setState() method, which will trigger a re-render of the component and its children.
- State can be passed down to child components as props.

Props:

- Props are read-only data that are passed from parent components to child components.
- They are immutable, meaning they cannot be changed by the child component that receives them.
- Props can only be updated by the parent component that passes them down.
- It is used to pass data or methods from one component to another.

In summary, state pertains to the internal, mutable data of a component, while props are external, immutable data passed down from parent components.

[#React::concept]

## What is virtual DOM in React and how does it work?

%

Virtual DOM is a lightweight copy of the actual DOM tree. In React, instead of updating the actual DOM directly, it makes changes to the virtual DOM. React then compares the previous version of the virtual DOM with the new one, which determines the changes that are needed to be made to the actual DOM.

This process is also known as reconciliation, where React updates only the necessary parts of the DOM to make the user interface more efficient and improve the overall performance. As compared to traditional DOM manipulation, using virtual DOM helps avoid costly operations and makes the application faster.

To summarize, virtual DOM is an abstraction layer between React and the actual DOM that helps React to update the user interface efficiently.

[#React::concept]

## What are React hooks and how do they work?

%

React hooks are a feature introduced in version 16.8 of React that allows developers to use state and other React features in functional components without the need for class components.

The most commonly used ones include:

- useState - Allows functional components to have their own state. It accepts an initial state value and returns an array containing a state variable and a function to update that state.
- useEffect - Allows functional components to perform side effects, such as fetching data or updating the DOM, after each render. It accepts a function that describes the side effect and an optional array of dependencies that trigger the effect when changed.
- useContext - Allows functional components to consume context data provided by a parent component.
- useCallback and useMemo - Allow functional components to optimize performance by memoizing functions and values that are expensive to compute.

[#React::concept]

## What are the differences between functional and class components?

%

Functional components and Class components are two ways to define components in React.

Functional components are simpler, lightweight whereas class components are heavier. With the introduction of hooks, functional components can now also handle state and even lifecycle methods, making them versatile and increasingly popular among developers.

[#React::concept]

## What are higher-order components in React and how are they used?

%

Higher-order components (HOCs) in React are functions that accept a component as an argument and return a new component with additional functionality. HOCs allow for code reuse and and can add new props or modify existing props, add state, and even modify the behavior of the wrapped component.

HOCs are commonly used for cross-cutting concerns such as authentication, logging, and routing. For example, a HOC for authentication could check if a user is logged in and redirect them to a login page if they are not. This component can then be used to wrap other components that require authentication, reducing the amount of code duplication.

```js
import React from 'react';

function withAuthorization(WrappedComponent) {
  return class WithAuthorization extends React.Component {
    state = {
      isAuthenticated: false
    };

    componentDidMount() {
      // 模拟获取用户登录状态
      setTimeout(() => {
        this.setState({ isAuthenticated: true });
      }, 1000);
    }

    render() {
      const { isAuthenticated } = this.state;

      if (isAuthenticated) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <p>Please log in to view this content.</p>;
      }
    }
  };
}

function ProtectedComponent(props) {
  return <div>Protected content. You are logged in.</div>;
}

const AuthorizedComponent = withAuthorization(ProtectedComponent);

export default AuthorizedComponent;
```

[#React::concept]

## Explain the lifecycle of a React components.

%

React components have three main phases or states:

- Mounting - The component is being created and inserted into the DOM.
- Updating - The component is being re-rendered due to changes in its props or state.
- Unmounting - The component is being removed from the DOM.
- Error handling - If there is an error during rendering, the component will be unmounted.
- Each phase has its own lifecycle methods that can be used to perform actions at specific times during the component's lifecycle.

[#React::concept]

## Explain the lifecycle methods of React components.

%

The lifecycle methods can be divided into three categories:

1. Mounting: These methods are called when the component is first created and added to the DOM.

- constructor(): This is called when the component is first created and is used to initialize the state and bind event handlers.
- componentDidMount(): This is called once after the component has been added to the DOM, and is often used to fetch data from a server and update the state.

2. Updating: These methods are called when the component is updated due to changes in its props or state.

- shouldComponentUpdate(): This is called before the component is updated, and is used to determine if the component should be re-rendered. If this method returns false, the component will not be re-rendered.
- componentDidUpdate(): This is called after the component has been updated, and is often used to perform actions such as updating the DOM or fetching data from a server.

3. Unmounting: This method is called when the component is removed from the DOM.

- componentWillUnmount(): This is called just before the component is removed from the DOM, and is often used to clean up any resources used by the component, such as event listeners or timers.

4. Error handling: This method is called when there is an error during rendering.

- componentDidCatch(): This is called when there is an error during rendering, and is used to perform actions such as logging the error or displaying an error message.

[#React::concept]

## What is React router and how is it used for routing in React?

%

React router is a package that allows developers to manage and control the navigation and routing of their React applications. It provides a way to create routes, map them to components, and keep the application URL in sync with the current view shown to the user.

[#React::concept]

## Communication between React components? What are the pros and cons?

%

1. parent -> child：通过 props 传递数据

优点：简单直接，适用于简单的组件层次结构。
缺点：当组件层次较深时，逐层传递数据会导致冗余和难以维护。

2. child -> parent：通过回调函数

优点：实现子组件向父组件传递数据或请求，使得数据流更加清晰。
缺点：当组件层次较深时，逐层传递回调函数也会导致冗余和难以维护。

1. siblings：通过共同的父组件

优点：将数据流集中在父组件中，使数据流更加清晰。
缺点：当组件层次较深或兄弟组件较多时，父组件的管理压力会增加。

4. 跨层级组件通信：通过 Context API

优点：避免逐层传递数据和回调函数，简化组件层次结构。
缺点：可能导致组件过度依赖 Context，降低组件的可复用性。

5. 任意组件通信：通过事件总线（Event Bus）

优点：实现任意组件之间的通信，不受组件层次结构限制。
缺点：事件管理可能变得复杂，可能导致组件之间的耦合过高。

6. 全局状态管理：通过 Redux、MobX 等状态管理库

优点：集中管理全局状态，提供统一的数据流，更易于维护和扩展。
缺点：引入额外的库和概念，可能导致学习曲线较陡峭。

## useState

%

define state in a functional component
use setVarName to update state

[#React::Hooks]

## useReducer

- What is useReducer for?
- When to use useReducer?

%

- useReducer is also used for state management.
- useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
- useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

[#React::Hooks]

## useEffect

- What is useEffect for?
- When to use useEffect?

%

- useEffect is used to perform side effects in functional components. It accepts two arguments
  - Frist argument is the call back function.
  - Second argument is the dependency array.
- If second argument is not provided, useEffect will run after every render, similar to componentDidMount + componentDidUpdate.
- If provided with empty array, the call back runs only once after the initial render, similar to componentDidMount.
- If second argument is provided with values, useEffect will only run when any of the values change.

[#React::Hooks]

## useRef

- What is useRef for?
- When to use useRef?

%

- useRef is used to access DOM nodes or React elements created in the render method.
- useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
- useRef is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.

[#React::Hooks]

## userLayoutEffect

- What is userLayoutEffect for?
- When to use userLayoutEffect?
- userLayoutEffect vs useEffect

%

- useLayoutEffect runs synchronously **after all DOM mutations** but **before the browser has a chance to paint** those changes on the screen
- useEffect runs asynchronously **after the browser has painted** the changes

[#React::Hooks]

## how to set/change child state from parent component?

%

useImperativeHandle and forwardRef

- uses the forwardRef function to receive the ref passed by the parent component
- The useImperativeHandle hook is a way to customize the instance value that is exposed when a parent component uses ref to access a child component.
- It allows you to define what properties or functions of the child component's instance should be accessible to the parent component.

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

## useContext

%

- useContext is a hook provided by React that allows you to access the value of a context directly within a functional component.
- Context provides a way to share data between components without the need to pass props explicitly at each level of the component tree.

[#React::Hooks]

## useMemo and React.memo

%

useMemo is for memoizing a function, React.memo is for memoizing a component.

- useMemo
  - The useMemo hook is a feature in React that allows you to optimize the performance of your functional components by memoizing the result of expensive computations.
  - It is particularly useful when you have a computation that is computationally expensive or has a heavy impact on your component's rendering.
- React.memo
  - React.memo is a higher-order component (HOC) that you can use to wrap your functional component.
  - It performs a shallow comparison of the component's props and determines whether the component needs to re-render.
  - If the props have not changed, React.memo prevents the component from re-rendering, effectively memoizing the component's output.
  - It is useful when you have a component that receives the same props frequently and you want to prevent unnecessary re-renders.

[#React::Hooks]

## useCallback

%

- The useCallback hook in React is used to memoize a callback function, similar to how useMemo memoizes a value.
- It is useful when you want to optimize the performance of components that rely on callback functions, especially **when those callback functions are passed down to child components**.

[#React::Hooks]

## How to access previous value of a state in React?

%

- use useRef and useEffect
- this is the way for functional component presist value between renders

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

## Difference between useMemo and useCallback

%

- useMemo: It is used to memoize the result of a computation. It allows you to **cache and reuse the computed value** based on a dependency array. The memoized value is recalculated only if one or more dependencies in the array have changed.
- useCallback: It is used to memoize a function reference. It returns a memoized version of the callback function that only changes if one or more dependencies in the array have changed. This is useful **when passing callbacks to child components** to prevent unnecessary re-rendering.

[#React::Hooks::Advanced]

## List two main folder structure for React project

and draw the folder structure

%

- by feature
  - recommend by redux
  - does not work well with redux toolkit(hard to solve cicular import using this approach)

src/
  ├── movies/
  │   ├── MoviesList.js/
  │   └── moviesSlice.js/
  ├── songs/
  │   ├── SongsList.js/
  │   └── songsSlice.js/
  ├── store/
  │   ├── actions.js/
  │   └── index.js/
  ├── App.js/
  └── index.js/  

- by function
  - fit better with redux toolkit
  - easier to solve circular import

src/
  ├── components/
  │   ├── MoviesList.js/
  │   └── SongsList.js/
  ├── store/
  │   ├── slices/
  │   │   ├── moviesSlice.js/
  │   │   └── songsSlice.js/
  │   ├── actions.js/
  │   ├── index.js/
  ├── App.js/
  └── index.js/

[#React::Basic]
