import test from 'ava'
import { isMoment } from 'moment'
import { __, parse } from '../index'

test('parse should return a moment', t => {
  t.true(isMoment(parse('DD/MM/YYYY', '1995-12-25')))
})

test('parse should set date', t => {
  t.true(parse('DD/MM/YYYY', '25/12/1995').isSame('1995-12-25'))
})

test('parse should accept a placeholder on data argument', t => {
  t.true(parse('DD/MM/YYYY', __)('25/12/1995').isSame('1995-12-25'))
})
