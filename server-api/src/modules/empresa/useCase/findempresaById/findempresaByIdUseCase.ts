import { IEmpresaRepo } from "@modules/empresa/repository/IEmpresaRepo";
import { Failable } from "@shared/logic/Result";
import { IFindEmpresaRequest, IFindEmpresaResponse } from "./IFindempresaByIdDTO";

type Errors = "Unexpected error" | "Empresa não encontrada";

export class FindEmpresaByIDUseCase {
  constructor(private empresaRepo: IEmpresaRepo) {}

  async execute(
    data: IFindEmpresaRequest
  ): Promise<Failable<IFindEmpresaResponse, Errors>> {
    try {
      const empresa = await this.empresaRepo.findById(data.id);
      if (!empresa) {
        return { isError: true, error: "Empresa não encontrada" };
      }
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