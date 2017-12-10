const moment = require('moment')

const isPlaceholder = x =>
  x != null &&
  typeof x === 'object' &&
  x['@@functional/placeholder'] === true

const __ = { '@@functional/placeholder': true }

const now = () => moment()

const parse = (value) => moment(value)

const fparse = (format, value) => {
  if (isPlaceholder(value)) {
    return fparse.bind(null, format)
  }

  return moment(value, format)
}

const format = (config, value) => {
  if (isPlaceholder(value)) {
    return format.bind(null, config)
  }

  return value.format(config)
}

module.exports = {
  __,
  now,
  parse,
  fparse,
  format,
}
