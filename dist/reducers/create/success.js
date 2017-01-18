"use strict";
const common_1 = require("../common");
function success(config, current, addedRecord, clientGenKey) {
    var reducerName = 'createSuccess';
    addedRecord = common_1.default(config, current, addedRecord, reducerName);
    var key = config.key;
    var done = false;
    // Update existing records
    var updatedCollection = current.map(function (record) {
        var recordKey = record[key];
        if (recordKey == null)
            throw new Error('Expected record to have ' + key);
        var isSameKey = recordKey === addedRecord[key];
        var isSameClientGetKey = (clientGenKey != null && clientGenKey === recordKey);
        if (isSameKey || isSameClientGetKey) {
            done = true;
            return addedRecord;
        }
        else {
            return record;
        }
    });
    // Add if not updated
    if (!done) {
        updatedCollection = updatedCollection.concat([addedRecord]);
    }
    return updatedCollection;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = success;