import { IEmpresaProps } from "@modules/empresa/domain/interface/IEmpresaProps";

export interface IRemoveEmpresaRequest {
  id: string;
}

export interface IRemoveEmpresaResponse extends IEmpresaProps {
  id: string;
}