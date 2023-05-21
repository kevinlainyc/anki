# IT::Frontend_Monitor::Concept

## How to catch uncaught exception globaly in browser?

%

```js
// track uncaught global error
window.addEventListener('error', (event) => {
  console.log('error event', event);
  ...
});

// track uncaught global promise exception 
window.addEventListener('unhandledrejection', (event) => {
  console.log('unhandledrejection event', event);
  ...
})
```

[#Frontend_Monitor::Basic]

## How to get last event in browser?

%

```js

```

[#Frontend_Monitor::Basic]