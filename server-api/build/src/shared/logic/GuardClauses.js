"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardClauses = void 0;
class GuardClauses {
    static VerifyNullOrUndefined(fieldValue, fieldName) {
        if (fieldValue === null || fieldValue === undefined) {
            return {
                succeeded: false,
                message: `${fieldName} is null or undefined`,
            };
        }
        return { succeeded: true };
    }
    static VerifyNullOrUndefinedArray(argument) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < argument.length; i++) {
            if (argument[i].fieldValue === null || argument[i].fieldValue === undefined) {
                return {
                    succeeded: false,
                    message: `${argument[i].fieldName} is null or undefined`,
                };
            }
        }
        return { succeeded: true };
    }
}
exports.GuardClauses = GuardClauses;
