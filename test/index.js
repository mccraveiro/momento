import test from 'ava'
import { isMoment } from 'moment'
import {
  __,
  now,
  parse,
  fparse,
  format,
} from '../index'

test('now should return a moment', t => {
  t.true(isMoment(now()))
})

test('parse should return a moment', t => {
  t.true(isMoment(parse('1995-12-25')))
})

test('parse should set date', t => {
  t.true(parse('1995-12-25').isSame('1995-12-25'))
})

test('fparse should return a moment', t => {
  t.true(isMoment(fparse('DD/MM/YYYY', '1995-12-25')))
})

test('fparse should set date', t => {
  t.true(fparse('DD/MM/YYYY', '25/12/1995').isSame('1995-12-25'))
})

test('fparse should accept a placeholder on second argument', t => {
  t.true(fparse('DD/MM/YYYY', __)('25/12/1995').isSame('1995-12-25'))
})

test('format should return a string', t => {
  t.true(typeof format('YYYY', now()) === 'string')
})

test('format should print formated date', t => {
  t.is(format('DD/MM/YYYY', parse('1995-12-25')), '25/12/1995')
})

test('format should accept a placeholder on second argument', t => {
  t.is(format('DD/MM/YYYY', __)(parse('1995-12-25')), '25/12/1995')
})
