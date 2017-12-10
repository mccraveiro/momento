import test from 'ava'
import { isMoment } from 'moment'
import {
  __,
  now,
  parseISO,
  parse,
  format,
  add,
} from '../index'

test('now should return a moment', t => {
  t.true(isMoment(now()))
})

test('parseISO should return a moment', t => {
  t.true(isMoment(parseISO('1995-12-25')))
})

test('parseISO should set date', t => {
  t.true(parseISO('1995-12-25').isSame('1995-12-25'))
})

test('parse should return a moment', t => {
  t.true(isMoment(parse('DD/MM/YYYY', '1995-12-25')))
})

test('parse should set date', t => {
  t.true(parse('DD/MM/YYYY', '25/12/1995').isSame('1995-12-25'))
})

test('parse should accept a placeholder on data argument', t => {
  t.true(parse('DD/MM/YYYY', __)('25/12/1995').isSame('1995-12-25'))
})

test('format should return a string', t => {
  t.true(typeof format('YYYY', now()) === 'string')
})

test('format should print formated date', t => {
  t.is(format('DD/MM/YYYY', parseISO('1995-12-25')), '25/12/1995')
})

test('format should accept a placeholder on data argument', t => {
  t.is(format('DD/MM/YYYY', __)(parseISO('1995-12-25')), '25/12/1995')
})

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
