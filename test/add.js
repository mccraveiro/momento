import test from 'ava'
import { isMoment } from 'moment'
import { __, add, now, parseISO } from '../index'

test('add should return a moment', t => {
  t.true(isMoment(add('days', 2, now())))
})

test('add should set date', t => {
  t.true(add('days', 2, parseISO('1995-12-25')).isSame('1995-12-27'))
})

test('add should accept a placeholder on data argument', t => {
  t.true(add('days', 2, __)(parseISO('1995-12-25')).isSame('1995-12-27'))
})

test('add should not mutate data', t => {
  const data = parseISO('1995-12-25')
  add('days', 2, data)
  t.true(data.isSame('1995-12-25'))
})
