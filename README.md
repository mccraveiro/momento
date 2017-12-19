# Momento

Immutable moment.js with composable functions and partial application of data

## Installation

```
$ npm install momento
```

## Example with Ramda pipe

```js
const nextWeek = pipe(
  parse('DD/MM/YYYY'),
  add('days', 7),
  format('DD/MM/YYYY')
)

nextWeek('10/12/2017')
```

## Functions

### add

Same as moment.add()

```js
add('days', 2, now())
```

### format

Same as moment.format()

```js
format('DD/MM/YYYY', now())
```

### getMilliseconds

Same as moment.milliseconds()

```js
getMilliseconds(now())
```

### getSeconds

Same as moment.seconds()

```js
getSeconds(now())
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
parseISO('1993-10-31')
```

### parseUnix

Same as moment.unix()

```js
parseUnix(752041500)
```

### subtract

Same as moment.subtract()

```js
subtract('days', 2, now())
```

## Missing a function?

Fell free to send a Pull Request! :heart:
