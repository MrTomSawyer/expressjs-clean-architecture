"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appContainer = exports.app = void 0;
const inversify_1 = require("inversify");
const app_1 = require("./app");
const exteption_filter_1 = require("./errors/exteption.filter");
const logger_service_1 = require("./logger/logger.service");
const types_1 = require("./types");
const users_controller_1 = require("./users/users.controller");
const appContainer = new inversify_1.Container();
exports.appContainer = appContainer;
appContainer.bind(types_1.TYPES.ILogger).to(logger_service_1.LoggerService);
appContainer.bind(types_1.TYPES.ExceptionFilter).to(exteption_filter_1.ExceptionFilter);
appContainer.bind(types_1.TYPES.UserController).to(users_controller_1.UserController);
appContainer.bind(types_1.TYPES.Application).to(app_1.App);
const app = appContainer.get(types_1.TYPES.Application);
exports.app = app;
app.init();
//# sourceMappingURL=main.js.map