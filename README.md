### fetch-values

This makes it super simple to fetch values from an object. Here's an example:

```js
var fetch = require('fetch-values').fetch;

var example = {
  foo: "bar",
  baz: "foo",
  beans: {
    test: "value",
    what: {
      is: "going on here"
    }
  }
};

console.log(fetch(example, 'foo')); // "bar"
console.log(fetch(example, 'baz')); // "foo"
console.log(fetch(example, 'beans')); // { test: "value", what: { is: "going on here " }}
console.log(fetch(example, ['beans', 'test'])); // "value"
console.log(fetch(example, ['beans', 'what', 'is'])); //  "going on here"
```

See? Easy peasy.
