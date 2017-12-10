import test from 'ava'
import { isMoment } from 'moment'
import { __, add, now, parseISO } from '../index'

test('add should return a moment', t => {
  t.true(isMoment(add(2, 'days', now())))
})

test('add should set date', t => {
  t.true(add(2, 'days', parseISO('1995-12-25')).isSame('1995-12-27'))
})

test('add should accept a placeholder on data argument', t => {
  t.true(add(2, 'days', __)(parseISO('1995-12-25')).isSame('1995-12-27'))
})

test('add should not mutate data', t => {
  const data = parseISO('1995-12-25')
  add(2, 'days', data)
  t.true(data.isSame('1995-12-25'))
})
