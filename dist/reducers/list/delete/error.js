"use strict";
var r = require("ramda");
var constants_1 = require("../../../constants");
var findByKey_1 = require("../../../utils/findByKey");
var invariants_1 = require("../invariants");
var store_1 = require("../store");
var reducerName = constants_1.default.REDUCER_NAMES.DELETE_ERROR;
var invariantArgs = {
    reducerName: reducerName,
    canBeArray: false,
};
function error(config, current, record) {
    invariants_1.default(invariantArgs, config, current, record);
    var key = config.key;
    var deleteId = record[key];
    var deleteRecord = findByKey_1.default(current, key, deleteId);
    deleteRecord = r.omit(["deleted", "busy"], deleteRecord);
    return store_1.default.merge(current, deleteRecord, key);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = error;
