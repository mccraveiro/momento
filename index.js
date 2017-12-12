const moment = require('moment')

const isPlaceholder = x =>
  x != null &&
  typeof x === 'object' &&
  x['@@functional/placeholder'] === true

const __ = { '@@functional/placeholder': true }

const curry = fn => (...args) => {
  const data = args.slice(-1)[0]

  if (isPlaceholder(data)) {
    return fn.bind(null, ...args.slice(0, -1))
  }

  return fn(...args)
}

const now = () => moment()
const parseISO = data => moment(data)
const parseUnix = data => moment.unix(data)
const parse = curry((format, data) => moment(data, format))
const format = curry((config, data) => data.format(config))
const add = curry((amount, key, data) => data.clone().add(amount, key))
const subtract = curry((amount, key, data) => data.clone().subtract(amount, key))
const getMilliseconds = data => data.milliseconds()
const getSeconds = data => data.seconds()

module.exports = {
  __,
  add,
  format,
  getMilliseconds,
  getSeconds,
  now,
  parse,
  parseISO,
  parseUnix,
  subtract,
}
