"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
class HttpError extends Error {
    constructor(statusCode, message, context) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.context = context;
    }
}
exports.HttpError = HttpError;
//# sourceMappingURL=HttpError.class.js.map