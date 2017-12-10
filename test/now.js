import test from 'ava'
import { isMoment } from 'moment'
import { now } from '../index'

test('now should return a moment', t => {
  t.true(isMoment(now()))
})
