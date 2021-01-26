const realTypeOf = require('realtypeof');

const nestedReplace = (input, findValue, replaceValue) => {
  if (realTypeOf.isString(input))
    return input
      .replace(findValue, replaceValue);

  else if (realTypeOf.isArray(input))
    return input
      .map(value => nestedReplace(value, findValue, replaceValue));

  else if (realTypeOf.isObject(input))
    return Object
      .entries(input)
      .reduce((acc, [key, value]) => {
        acc[key] = nestedReplace(value, findValue, replaceValue);
        return acc;
      }, {});

  return input;
};

module.exports = nestedReplace;
