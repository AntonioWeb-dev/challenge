import { IEmpresaProps } from "@modules/empresa/domain/interface/IempresaProps";
import { sendUnaryData, ServerUnaryCall } from "grpc";

export interface EmpresaReq {
    id: string;
}

export interface UpdateEmpresa extends Partial<IEmpresaProps> {
    id: string;
}

export interface IEmpresa extends IEmpresaProps {
    id: string;
}

export interface IEmpresaServe {
    CreateEmpresa: (call: ServerUnaryCall<IEmpresaProps>, callback: sendUnaryData<IEmpresa>) => any
    GetEmpresa: (call: ServerUnaryCall<EmpresaReq>, callback: sendUnaryData<IEmpresa>) => any
    UpdateEmpresa: (call: ServerUnaryCall<UpdateEmpresa>, callback: sendUnaryData<{}>) => any
    RemoveEmpresa: (call: ServerUnaryCall<EmpresaReq>, callback: sendUnaryData<{}>) => any
}