import test from 'ava'
import { isMoment } from 'moment'
import { __, subtract, now, parseISO } from '../index'

test('subtract should return a moment', t => {
  t.true(isMoment(subtract('days', 2, now())))
})

test('subtract should set date', t => {
  t.true(subtract('days', 2, parseISO('1995-12-25')).isSame('1995-12-23'))
})

test('subtract should accept a placeholder on data argument', t => {
  t.true(subtract('days', 2, __)(parseISO('1995-12-25')).isSame('1995-12-23'))
})

test('subtract should not mutate data', t => {
  const data = parseISO('1995-12-25')
  subtract('days', 2, data)
  t.true(data.isSame('1995-12-25'))
})
