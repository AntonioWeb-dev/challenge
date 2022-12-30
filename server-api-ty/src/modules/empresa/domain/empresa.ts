import { AggregateRoot } from "@shared/domain/AggregateRoot";
import { GuardClauses } from "@shared/logic/GuardClauses";
import { Failable } from "@shared/logic/Result";
import { IEmpresaProps } from "./interface/IEmpresaProps";

export class Empresa extends AggregateRoot<IEmpresaProps> { 
    private constructor(props: IEmpresaProps, id?: string) {
      super(props, id);
  }
  
  public get nome(): string {
      return this.props.nome;
  }
  
  public get cnpj(): string {
    return this.props.cnpj;
  }
  
  public get createdAt(): Date {
      return this.props.createdAt || new Date();
  }
  
  public get updatedAt(): Date {
      return this.props.updatedAt || new Date();
  }
  
  public static build(props: IEmpresaProps, id?: string): Failable<Empresa, string> {
      const guardResult = GuardClauses.VerifyNullOrUndefinedArray([
          { fieldValue: props.nome, fieldName: 'nome' },
          { fieldValue: props.cnpj, fieldName: 'cnpj' },
      ])
  
      if (!guardResult.succeeded) {
          return { isError: true, error: guardResult.message || 'Unexpected error' };
      }
      const transaction = new Empresa(props, id);
      return { isError: false, value: transaction };
  }
  }