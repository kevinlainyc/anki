# IT::Javascript::Practice

## Write a function createCounter. It should accept an initial integer init. It should return an object with three functions (2 solutions)

The three functions are:

- increment() increases the current value by 1 and then returns it.
- decrement() reduces the current value by 1 and then returns it.
- reset() sets the current value to init and then returns it.
 
Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0

%

```js
// s1: es6
const createCounter = (init) => {
  let count = init;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = init),
  };
};

// s2: factory pattern
var createCounter = function(init) {
    let counter = new Object();
    counter.cur = init;
    counter.increment = function() {
        return ++this.cur;
    }
    counter.decrement = function() {
        return --this.cur;
    }
    counter.reset = function() {
        this.cur = init;
        return this.cur;
    }
    return counter;
};
```

## Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 
Input
"sum"
["call","call","getCallCount","call","getCallCount"]
[[2,2],[2,2],[],[1,2],[]]
Output
[4,4,1,3,2]

Explanation
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
memoizedSum(2, 2); // Returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // Returns 4. However sum() was not called because the same inputs were seen before.
// Total call count: 1
memoizedSum(1, 2); // Returns 3. sum() was called as (1, 2) was not seen before.
// Total call count: 2

%

```js
function memoize(fn) {
  const cache = {};
  return function(...args) {
    // how to generate a unique key for args?
    const key = JSON.stringify(args);
    // 注意 cache[key] 可能返回 0 
    if(cache[key]!==undefined) {
    // or use key `in` operator
    // if(key in cache) {
      return cache[key];
    } 
    cache[key] = fn.call(this, ...args);
    return cache[key];
  }
}
```

## Given a function fn, return a curried version of that function.

A curried function is a function that accepts fewer or an equal number of parameters as the original function and returns either another curried function or the same value the original function would have returned.

In practical terms, if you called the original function like sum(1,2,3), you would call the curried version like csum(1)(2)(3), csum(1)(2,3), csum(1,2)(3), or csum(1,2,3). All these methods of calling the curried function should return the same value as the original.

Example 1:

Input: 
fn = function sum(a, b, c) { return a + b + c; }
inputs = [[1],[2],[3]]
Output: 6
Explanation:
The code being executed is:
const curriedSum = curry(fn);
curriedSum(1)(2)(3) === 6;
curriedSum(1)(2)(3) should return the same value as sum(1, 2, 3).
Example 2:

Input:
fn = function sum(a, b, c) { return a + b + c; }
inputs = [[1,2],[3]]
Output: 6
Explanation:
curriedSum(1, 2)(3) should return the same value as sum(1, 2, 3).
Example 3:

Input:
fn = function sum(a, b, c) { return a + b + c; }
inputs = [[],[],[1,2,3]]
Output: 6
Explanation:
You should be able to pass the parameters in any way, including all at once or none at all.
curriedSum()()(1, 2, 3) should return the same value as sum(1, 2, 3).
Example 4:

Input:
fn = function life() { return 42; }
inputs = [[]]
Output: 42
Explanation:
currying a function that accepts zero parameters should effectively do nothing.
curriedLife() === 42

%

```js
// s1
var curry = function(fn) {
    return function curried(...args) {
        if(args.length < fn.length) {
            return function(...args2) {
                return curried.call(this, ...args, ...args2);
            }
        }
        return fn.call(this, ...args)
    };
};

// s2
function curry(fn) {
  return function curried(...args) {
      if(args.length < fn.length) {
          return function(...args2) {
              return curried(...args, ...args2);
          }
      }
      return fn(...args)
  }
}
```
