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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const grpc = __importStar(require("@grpc/grpc-js"));
const protoLoader = __importStar(require("@grpc/proto-loader"));
const empresaServiceGrpc_1 = require("@modules/empresa/infra/grpc/empresaServiceGrpc");
const envoriomentVars_1 = require("@config/envoriomentVars");
const empresaServer = new empresaServiceGrpc_1.EmpresaServer();
const packageDef = protoLoader.loadSync(path_1.default.resolve(__dirname, '../../..', envoriomentVars_1.PROTO_FILE));
const grpcDef = grpc.loadPackageDefinition(packageDef);
const empresaPackage = grpcDef.empresas;
function serverGrpc() {
    const server = new grpc.Server();
    server.addService(empresaPackage.EmpresaService.service, empresaServer);
    server.bindAsync(`127.0.0.1:${envoriomentVars_1.API_PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`Server running at http://127.0.0.1:${envoriomentVars_1.API_PORT}`);
        server.start();
    });
}
serverGrpc();
