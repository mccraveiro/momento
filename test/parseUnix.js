import test from 'ava'
import { isMoment } from 'moment'
import { parseUnix } from '../index'

test('parseUnix should return a moment', t => {
  t.true(isMoment(parseUnix(752041500)))
})

test('parseUnix should set date', t => {
  t.true(parseUnix(752041500).isSame('1993-10-31 02:25:00'))
})
