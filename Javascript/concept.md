# IT::Javascript::Concept

## How to run async functions in parallel (without promise.all)?

%

run them in a for loop

Parallel Execution: When using await inside a for loop, the promises are executed in parallel. The loop doesn't wait for the previous promise to resolve before starting the next iteration. This means that multiple promises can be in progress simultaneously, potentially leading to faster overall execution if the promises are independent and don't rely on each other.

Sequential Execution: Running await one by one outside of a loop ensures that each promise is executed sequentially. The code waits for the previous promise to resolve before moving on to the next one. This guarantees a strict order of execution, which might be necessary if the promises have dependencies or require a specific sequence of operations.

[#Javascript::Async]

## How to cancel a fetch request?

%

```js
const controller = new AbortController();

fetch(url, { signal: controller.singal })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

controller.abort();
```

[#Javascript::Async]