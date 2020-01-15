# sort-obj-keys

Sort the key of `object` or `array`
If it's an `array` just call Array.prototype.sort

## install

```shell
npm install sort-obj-keys
```

## example

```javascript

// const sortObjKeys = require('sort-obj-keys') // cjs
import sortObjKeys from 'sort-obj-keys' // es

const obj1 = {
  b: { c: 'c', a: 'a' },
  c: 100,
  a: true
}

const obj2 = sortObjKeys(obj1)

/* 
  {
    a: true
    b: { a: 'a', c: 'c' },
    c: 100,
  } 
*/

```