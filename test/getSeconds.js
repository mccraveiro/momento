import test from 'ava'
import { isMoment } from 'moment'
import { getSeconds, now, parseISO } from '../index'

test('getSeconds should return a number', t => {
  t.true(typeof getSeconds(now()) === 'number')
})

test('getSeconds should return moment seconds', t => {
  t.is(getSeconds(parseISO('2017-12-10 22:52:47')), 47)
})
