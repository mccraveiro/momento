const moment = require('moment')
const { __, curryN } = require('ramda')

const now = () => moment()
const parseISO = data => moment(data)
const parseUnix = data => moment.unix(data)
const parse = curryN(2, (format, data) => moment(data, format))
const format = curryN(2, (config, data) => data.format(config))
const add = curryN(3, (amount, key, data) => data.clone().add(amount, key))
const subtract = curryN(3, (amount, key, data) => data.clone().subtract(amount, key))
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
