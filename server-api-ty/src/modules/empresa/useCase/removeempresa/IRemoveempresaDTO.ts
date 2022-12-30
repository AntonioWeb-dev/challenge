import { IEmpresaProps } from "@modules/empresa/domain/interface/IempresaProps";

export interface IRemoveEmpresaRequest {
  id: string;
}

export interface IRemoveEmpresaResponse extends IEmpresaProps {
  id: string;
}