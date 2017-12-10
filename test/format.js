import test from 'ava'
import { __, format, now, parseISO } from '../index'

test('format should return a string', t => {
  t.true(typeof format('YYYY', now()) === 'string')
})

test('format should print formated date', t => {
  t.is(format('DD/MM/YYYY', parseISO('1995-12-25')), '25/12/1995')
})

test('format should accept a placeholder on data argument', t => {
  t.is(format('DD/MM/YYYY', __)(parseISO('1995-12-25')), '25/12/1995')
})
