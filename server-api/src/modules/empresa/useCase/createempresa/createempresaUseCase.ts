import { Empresa } from "@modules/empresa/domain/empresa";
import { IEmpresaRepo } from "@modules/empresa/repository/IEmpresaRepo";
import { Failable } from "@shared/logic/Result";
import { ICreateEmpresaReqDTO, ICreateEmpresaResDTO } from "./ICreateempresaDTO";

type Errors = 'Unexpected error' | 'Campos invalidos' |
'CNPJ já está sendo usado' | 'Error: criar empresa' | string;

export class CreateEmpresaUseCase {
  constructor(
    private empresaRepo: IEmpresaRepo,
  ) { }

  async execute(data: ICreateEmpresaReqDTO): Promise<Failable<ICreateEmpresaResDTO, Errors>> {
    try {
      const empresaOrError = Empresa.build({
        nome: data.nome,
        cnpj: data.cnpj,
      });
      if (empresaOrError.isError) {
        return { isError: true, error: 'Campos invalidos' };
      }
      const empresaCreated = await this.empresaRepo.create(empresaOrError.value);
      if (empresaCreated) {
        const dataToReturn = {
          id: empresaCreated.id,
          nome: empresaCreated.nome,
          cnpj: empresaCreated.cnpj,
          createdAt: empresaCreated.createdAt,
          updatedAt: empresaCreated.updatedAt,
        };
        return { isError: false, value: dataToReturn };
      }
      return { isError: true, error: 'Error: criar empresa' };
    } catch (err: any) {
      if (err?.meta?.target[0] === 'cnpj') {
        return { isError: true, error: 'Error: empresa já registrada' };
      }
      return { isError: true, error: 'Unexpected error' };
    }
  }
}