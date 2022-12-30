import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type { Empresa as _empresas_Empresa, Empresa__Output as _empresas_Empresa__Output } from './Empresa';
import type { EmpresaReq as _empresas_EmpresaReq, EmpresaReq__Output as _empresas_EmpresaReq__Output } from './EmpresaReq';
import type { EmpresaUpdate as _empresas_EmpresaUpdate, EmpresaUpdate__Output as _empresas_EmpresaUpdate__Output } from './EmpresaUpdate';
import type { NewEmpresa as _empresas_NewEmpresa, NewEmpresa__Output as _empresas_NewEmpresa__Output } from './NewEmpresa';
import type { Void as _empresas_Void, Void__Output as _empresas_Void__Output } from './Void';
export interface EmpresaServiceClient extends grpc.Client {
    CreateEmpresa(argument: _empresas_NewEmpresa, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    CreateEmpresa(argument: _empresas_NewEmpresa, metadata: grpc.Metadata, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    CreateEmpresa(argument: _empresas_NewEmpresa, options: grpc.CallOptions, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    CreateEmpresa(argument: _empresas_NewEmpresa, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    createEmpresa(argument: _empresas_NewEmpresa, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    createEmpresa(argument: _empresas_NewEmpresa, metadata: grpc.Metadata, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    createEmpresa(argument: _empresas_NewEmpresa, options: grpc.CallOptions, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    createEmpresa(argument: _empresas_NewEmpresa, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    GetEmpresa(argument: _empresas_EmpresaReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    GetEmpresa(argument: _empresas_EmpresaReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    GetEmpresa(argument: _empresas_EmpresaReq, options: grpc.CallOptions, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    GetEmpresa(argument: _empresas_EmpresaReq, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    getEmpresa(argument: _empresas_EmpresaReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    getEmpresa(argument: _empresas_EmpresaReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    getEmpresa(argument: _empresas_EmpresaReq, options: grpc.CallOptions, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    getEmpresa(argument: _empresas_EmpresaReq, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    RemoveEmpresa(argument: _empresas_EmpresaReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    RemoveEmpresa(argument: _empresas_EmpresaReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    RemoveEmpresa(argument: _empresas_EmpresaReq, options: grpc.CallOptions, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    RemoveEmpresa(argument: _empresas_EmpresaReq, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    removeEmpresa(argument: _empresas_EmpresaReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    removeEmpresa(argument: _empresas_EmpresaReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    removeEmpresa(argument: _empresas_EmpresaReq, options: grpc.CallOptions, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    removeEmpresa(argument: _empresas_EmpresaReq, callback: grpc.requestCallback<_empresas_Empresa__Output>): grpc.ClientUnaryCall;
    UpdateEmpresa(argument: _empresas_EmpresaUpdate, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_empresas_Void__Output>): grpc.ClientUnaryCall;
    UpdateEmpresa(argument: _empresas_EmpresaUpdate, metadata: grpc.Metadata, callback: grpc.requestCallback<_empresas_Void__Output>): grpc.ClientUnaryCall;
    UpdateEmpresa(argument: _empresas_EmpresaUpdate, options: grpc.CallOptions, callback: grpc.requestCallback<_empresas_Void__Output>): grpc.ClientUnaryCall;
    UpdateEmpresa(argument: _empresas_EmpresaUpdate, callback: grpc.requestCallback<_empresas_Void__Output>): grpc.ClientUnaryCall;
    updateEmpresa(argument: _empresas_EmpresaUpdate, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_empresas_Void__Output>): grpc.ClientUnaryCall;
    updateEmpresa(argument: _empresas_EmpresaUpdate, metadata: grpc.Metadata, callback: grpc.requestCallback<_empresas_Void__Output>): grpc.ClientUnaryCall;
    updateEmpresa(argument: _empresas_EmpresaUpdate, options: grpc.CallOptions, callback: grpc.requestCallback<_empresas_Void__Output>): grpc.ClientUnaryCall;
    updateEmpresa(argument: _empresas_EmpresaUpdate, callback: grpc.requestCallback<_empresas_Void__Output>): grpc.ClientUnaryCall;
}
export interface EmpresaServiceHandlers extends grpc.UntypedServiceImplementation {
    CreateEmpresa: grpc.handleUnaryCall<_empresas_NewEmpresa__Output, _empresas_Empresa>;
    GetEmpresa: grpc.handleUnaryCall<_empresas_EmpresaReq__Output, _empresas_Empresa>;
    RemoveEmpresa: grpc.handleUnaryCall<_empresas_EmpresaReq__Output, _empresas_Empresa>;
    UpdateEmpresa: grpc.handleUnaryCall<_empresas_EmpresaUpdate__Output, _empresas_Void>;
}
export interface EmpresaServiceDefinition extends grpc.ServiceDefinition {
    CreateEmpresa: MethodDefinition<_empresas_NewEmpresa, _empresas_Empresa, _empresas_NewEmpresa__Output, _empresas_Empresa__Output>;
    GetEmpresa: MethodDefinition<_empresas_EmpresaReq, _empresas_Empresa, _empresas_EmpresaReq__Output, _empresas_Empresa__Output>;
    RemoveEmpresa: MethodDefinition<_empresas_EmpresaReq, _empresas_Empresa, _empresas_EmpresaReq__Output, _empresas_Empresa__Output>;
    UpdateEmpresa: MethodDefinition<_empresas_EmpresaUpdate, _empresas_Void, _empresas_EmpresaUpdate__Output, _empresas_Void__Output>;
}
