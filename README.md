## fetch-values

`fetch(obj, key, [default])`

* `object` - the object that may or may not contain the keys
* `key` - the key for which to search (String or Array of Strings)
* `default` - optional fall-back value in case key does not exist

### Usage

This makes it super simple to fetch values from an object. Example:

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

### Setting a default

You can pass in a "default" argument for the third parameter. If the key does not exist, then we'll return this default value in its stead. This makes it easy to fall back on particular values without having to write more if-then checks.

```js
var fetch = require('fetch-values').fetch;

var example = { foo: "bar" };

console.log(fetch(example, 'foo')); // "bar"
console.log(fetch(example, 'fake_key', "this key doesn't exist")); // "this key doesn't exist"
console.log(fetch(example, 'not_real', 0)); // 0
```