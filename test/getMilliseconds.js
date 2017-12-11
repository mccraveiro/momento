import test from 'ava'
import { isMoment } from 'moment'
import { getMilliseconds, now, parse } from '../index'

test('getMilliseconds should return a number', t => {
  t.true(typeof getMilliseconds(now()) === 'number')
})

test('getMilliseconds should return moment milliseconds', t => {
  t.is(getMilliseconds(parse('x', 1410715640579)), 579)
})
