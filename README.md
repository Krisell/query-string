# QueryString
This packages makes it easy to read URL query string data, and to specify default values, in a very simple way.

# Installation
```npm install @krisell/query-string```

# How to use
```js
import QueryString from '@krisell/query-string'

// The following will return query string value of name, or Martin if the value is not set or is empty.
QueryString.get('name', 'Martin')
```
