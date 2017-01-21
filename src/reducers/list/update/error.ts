import invariants from '../invariants'
import constants         from '../../../constants'
import findByKey         from '../../../utils/findByKey'
import mergeMutable      from '../../../utils/mergeMutable'

import { Config, ReducerName } from '../../../types'

var omit = require('lodash.omit')
var reducerName: ReducerName = 'updateError'

export default function error(config: Config, current: Array<any>, record: any): Array<any> {
	invariants(config, current, record, reducerName)

	// We don't want to rollback
	var key = config.key
	var updatedId = record[key]
	var updatedRecord = findByKey(current, key, updatedId)

	if (updatedRecord) {
		updatedRecord = omit(updatedRecord, 'busy')
		return mergeMutable(current, updatedRecord, key)
	} else {
		return current
	}
}
