"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const PORT = 50051;
const packageDef = protoLoader.loadSync('./src/empresa/proto/empresa.proto');
const grpcDef = grpc.loadPackageDefinition(packageDef);
const client = new grpcDef.empresas.EmpresaService(`0.0.0.0:${PORT}`, grpc.credentials.createInsecure());
exports.client = client;
const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (err) => {
    if (err) {
        console.error(err);
        return;
    }
});
//# sourceMappingURL=empresa.grpcCLient.js.map