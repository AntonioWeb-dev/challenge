import { IEmpresaProps } from "@modules/empresa/domain/interface/IEmpresaProps";

export interface ICreateEmpresaReqDTO {
  nome: string,
  cnpj: string,
}

export interface ICreateEmpresaResDTO extends IEmpresaProps {
  id: string;
}