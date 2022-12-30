import { IEmpresaProps } from "@modules/empresa/domain/interface/IempresaProps";

export interface ICreateEmpresaReqDTO {
  nome: string,
  cnpj: string,
}

export interface ICreateEmpresaResDTO extends IEmpresaProps {
  id: string;
}