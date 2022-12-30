import { IEmpresaProps } from "@modules/empresa/domain/interface/IEmpresaProps";

export interface IFindEmpresaRequest {
  id: string;
}

export interface IFindEmpresaResponse extends IEmpresaProps {
  id: string;
}