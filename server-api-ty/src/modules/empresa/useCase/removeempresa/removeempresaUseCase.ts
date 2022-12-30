import { IEmpresaRepo } from "@modules/empresa/repository/IEmpresaRepo";
import { Failable } from "@shared/logic/Result";
import { IRemoveEmpresaRequest, IRemoveEmpresaResponse } from "./IRemoveempresaDTO";

type Errors = "Unexpected error" | "Empresa não encontrada";

export class RemoveEmpresaUseCase {
  constructor(private empresaRepo: IEmpresaRepo) {}

  async execute(
    data: IRemoveEmpresaRequest
  ): Promise<Failable<IRemoveEmpresaResponse, Errors>> {
    try {
      const empresa = await this.empresaRepo.findById(data.id);
      if (!empresa) {
        return { isError: true, error: "Empresa não encontrada" };
      }
      await this.empresaRepo.remove(data.id);
      const dataToReturn = {
        id: empresa.id,
        nome: empresa.nome,
        cnpj: empresa.cnpj,
        createdAt: empresa.createdAt,
        updatedAt: empresa.updatedAt,
      };
      return { isError: false, value: dataToReturn };
    } catch (err) {
      return { isError: true, error: "Unexpected error" };
    }
  }
}