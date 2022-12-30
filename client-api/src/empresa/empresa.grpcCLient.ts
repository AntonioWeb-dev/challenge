import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './proto/empresa';

const PORT = 50051;

const packageDef = protoLoader.loadSync('./src/empresa/proto/empresa.proto');

const grpcDef = grpc.loadPackageDefinition(
  packageDef,
) as unknown as ProtoGrpcType;

const client = new grpcDef.empresas.EmpresaService(
  `0.0.0.0:${PORT}`,
  grpc.credentials.createInsecure(),
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

export { client };
