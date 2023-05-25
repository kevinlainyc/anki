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

## How to check if a key is in an object?

%

use `in` operator

```js
const obj = { a: 1, b: 2 };

"a" in obj; // true
"c" in obj; // false
```

[#Javascript::Basic]

## Truthy and Falsy in javascript

list all values that are consider falsy in js

%

All values are considered truthy except the following:

- false
- All forms of zero, meaning 0, -0 (output of 0/-1), and 0n (output of BigInt(0))
- NaN ("Not a Number", one way to get it is with 0/0)
- "" (empty string)
- null
- undefined

