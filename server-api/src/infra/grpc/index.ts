import path from 'path';
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { EmpresaServer } from "@modules/empresa/infra/grpc/empresaServiceGrpc";
import { ProtoGrpcType } from '../../../proto/empresa';
import { API_PORT, PROTO_FILE } from '@config/envoriomentVars';


const empresaServer = new EmpresaServer()

const packageDef = protoLoader.loadSync(path.resolve(__dirname, '../../..', PROTO_FILE))

const grpcDef = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const empresaPackage = grpcDef.empresas

function serverGrpc() {
  const server = new grpc.Server();

  server.addService(empresaPackage.EmpresaService.service, empresaServer)
  server.bindAsync(`127.0.0.1:${API_PORT}`, grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`Server running at http://127.0.0.1:${API_PORT}`)
      server.start()
    }
  )
}

serverGrpc()