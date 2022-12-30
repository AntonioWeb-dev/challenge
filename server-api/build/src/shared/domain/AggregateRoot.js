"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRoot = void 0;
const uuid_1 = require("uuid");
class AggregateRoot {
    constructor(props, id) {
        this._id = id || (0, uuid_1.v4)();
        this.props = props;
    }
    get id() {
        return this._id;
    }
}
exports.AggregateRoot = AggregateRoot;
