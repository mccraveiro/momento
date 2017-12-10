import test from 'ava'
import { isMoment } from 'moment'
import { parseISO } from '../index'

test('parseISO should return a moment', t => {
  t.true(isMoment(parseISO('1995-12-25')))
})

test('parseISO should set date', t => {
  t.true(parseISO('1995-12-25').isSame('1995-12-25'))
})
