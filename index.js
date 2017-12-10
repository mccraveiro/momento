const moment = require('moment')

const isPlaceholder = x =>
  x != null &&
  typeof x === 'object' &&
  x['@@functional/placeholder'] === true

const __ = { '@@functional/placeholder': true }

const curry2 = (fn) => (arg1, arg2) => {
  if (isPlaceholder(arg2)) {
    return fn.bind(null, arg1)
  }

  return fn(arg1, arg2)
}

const now = () => moment()
const parse = value => moment(value)
const fparse = curry2((format, value) => moment(value, format))
const format = curry2((config, value) => value.format(config))

module.exports = {
  __,
  now,
  parse,
  fparse,
  format,
}
