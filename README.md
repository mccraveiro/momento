# Functional moment.js

Immutable moment.js with composable methods and partial application of data

## Example with Ramda pipe

```js
const nextWeek = pipe(
  fparse('DD/MM/YYYY', __),
  add(7, 'days', __),
  format('DD/MM/YYYY', __)
)

nextWeek('10/12/2017')
```
