"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaServer = void 0;
const grpc = __importStar(require("@grpc/grpc-js"));
const createempresa_1 = require("@modules/empresa/useCase/createempresa");
const findempresaById_1 = require("@modules/empresa/useCase/findempresaById");
const removeempresa_1 = require("@modules/empresa/useCase/removeempresa");
const updateempresa_1 = require("@modules/empresa/useCase/updateempresa");
const verifyJwt_1 = require("@shared/infra/verifyJwt");
class EmpresaServer {
    GetEmpresa(call, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(call);
            const empresa = yield findempresaById_1.findEmpresaByIdUseCase.execute(call.request);
            if (!empresa.isError) {
                callback(null, empresa.value);
                return;
            }
            callback({
                code: 400,
                message: empresa.error,
                status: grpc.status.NOT_FOUND
            });
        });
    }
    CreateEmpresa(call, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isValid = (0, verifyJwt_1.verifyJwt)(call.request.jwt);
                if (isValid === null) {
                    callback({
                        code: 403,
                        message: 'Unauthorized',
                        status: grpc.status.PERMISSION_DENIED
                    });
                    return;
                }
                delete call.jwt;
                const empresaResult = yield createempresa_1.createEmpresaUseCase.execute(call.request);
                if (!empresaResult.isError) {
                    callback(null, empresaResult.value);
                    return;
                }
                callback({
                    code: 400,
                    message: empresaResult.error,
                    status: grpc.status.ALREADY_EXISTS
                });
            }
            catch (err) {
                callback({
                    code: 400,
                    message: 'Server Error',
                    status: grpc.status.NOT_FOUND
                });
            }
        });
    }
    RemoveEmpresa(call, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const empresaResult = yield removeempresa_1.removeEmpresaUseCase.execute(call.request);
                if (!empresaResult.isError) {
                    callback(null, empresaResult.value);
                    return;
                }
                callback({
                    code: 404,
                    message: empresaResult.error,
                    status: grpc.status.NOT_FOUND
                });
            }
            catch (err) {
                callback({
                    code: 400,
                    message: 'Server Error',
                    status: grpc.status.UNKNOWN
                });
            }
        });
    }
    UpdateEmpresa(call, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const empresaResult = yield updateempresa_1.updateEmpresaUseCase.execute(call.request);
                if (!empresaResult.isError) {
                    callback(null, empresaResult.value);
                    return;
                }
                callback({
                    code: 400,
                    message: empresaResult.error,
                    status: grpc.status.UNKNOWN
                });
            }
            catch (err) {
                callback({
                    code: 400,
                    message: 'Server Error',
                    status: grpc.status.UNKNOWN
                });
            }
        });
    }
}
exports.EmpresaServer = EmpresaServer;
