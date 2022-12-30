import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { EmpresaServiceClient as _empresas_EmpresaServiceClient, EmpresaServiceDefinition as _empresas_EmpresaServiceDefinition } from './empresas/EmpresaService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  empresas: {
    Empresa: MessageTypeDefinition
    EmpresaReq: MessageTypeDefinition
    EmpresaService: SubtypeConstructor<typeof grpc.Client, _empresas_EmpresaServiceClient> & { service: _empresas_EmpresaServiceDefinition }
    EmpresaUpdate: MessageTypeDefinition
    NewEmpresa: MessageTypeDefinition
    Void: MessageTypeDefinition
  }
}

