# Nested Replace

Find a specified string or a regular expression in a string, or a nested array/object value) and returns a new value where the specified string are replaced.

> An Example usage of this package could be when you need to replace a value in entire a big json

## Installation

$ npm install nested-replace

## Usage

```javascript
const nestedReplace = require('nested-replace');

// The usage of this function is similar to the native String replace() method
// The only difference is the first parameter which is the input value that would be processed for replacement

// String value as input
const str = 'this is a string value';
const newStr = nestedReplace(str, 'is', 'XX');
// -> newStr = 'thXX is a string value'

// You can use Regex if you need (i.e. for replace all)
const newStr = nestedReplace(str, /is/g, 'XX');
// -> newStr = 'thXX XX a string value'

// And you also use a callback as third parameter (like native replace())
// to access the found value
const str = '0123456789';
const newStr = nestedReplace(/[0-9]/g, match => match % 2 ? 'x' : 'y')
// -> newStr = 'yxyxyxyxyx'
```

**And finally the most interesting part is that you can do all of this kind of things with any kind of nested array and/or object**

```javascript
const input = {
  a: 'this is a string value',
  b: [
    'this is a string value inside an array',
    [
      'this is a string value inside a nested array'
    ],
    {
      c: {
        d: [
          {
            e: 'this is a string value inside a nested object which is inside a nested array which is inside a nested object which is inside another nested object :)'
          }
        ]
      }
    }
  ],
};

const newInput = nestedReplace(input, /is/g, 'XX');
//  -> newValue = {
//   a: 'thXX XX a string value',
//   b: [
//     'thXX XX a string value inside an array',
//     [
//       'thXX XX a string value inside a nested array'
//     ],
//     {
//       c: {
//         d: [
//           {
//             e: 'thXX XX a string value inside a nested object which XX inside a nested array which XX inside a nested object which XX inside another nested object :)'
//           }
//         ]
//       }
//     }
//   ],
// };

```

> Note: This function always returns a new value and does not modify the input value

If you do not use regex for replace all, it only replaces the first found value in each string value in entire object

For example:

```javascript
const newInput = nestedReplace(input, 'is', 'XX');
// -> newInput = {
//   a: 'thXX is a string value',
//   b: [
//     'thXX is a string value inside an array',
//     [
//       'thXX is a string value inside a nested array'
//     ],
//     {
//       c: {
//         d: [
//           {
//             e: 'thXX is a string value inside a nested object which is inside a nested array which is inside a nested object which is inside another nested object :)'
//           }
//         ]
//       }
//     }
//   ],
// };
```
