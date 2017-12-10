# Functional moment.js

Immutable moment.js with composable functions and partial application of data

## Functions

### add

Same as moment.add()

```js
add(2, 'days', now())
```

### format

Same as moment.format()

```js
format('DD/MM/YYYY', now())
```

### now

Same as moment() without arguments

```js
now()
```

### parse

Same as moment() with two arguments

```js
parse('DD/MM/YYYY', '31/10/1993')
```

### parseISO

Same as moment() with one argument

```js
parse('1993-10-31')
```

### parseUnix

Same as moment.unix()

```js
parseUnix(752041500)
```

## Example with Ramda pipe

```js
const nextWeek = pipe(
  parse('DD/MM/YYYY', __),
  add(7, 'days', __),
  format('DD/MM/YYYY', __)
)

nextWeek('10/12/2017')
```
