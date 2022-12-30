import { IEmpresaRepo } from "@modules/empresa/repository/IEmpresaRepo";
import { Failable } from "@shared/logic/Result";
import { IUpdateEmpresaRequest } from "./IUpdateempresaDTO";

type Errors = "Unexpected error" | "Empresa não encontrada";

export class UpdateEmpresaUseCase {
  constructor(private empresaRepo: IEmpresaRepo) {}

  async execute(
    data: IUpdateEmpresaRequest
  ): Promise<Failable<null, Errors>> {
    try {
      const empresa = await this.empresaRepo.findById(data.id);
      if (!empresa) {
        return { isError: true, error: "Empresa não encontrada" };
      }
      const { id } = data;
      await this.empresaRepo.update(id, data);
      return { isError: false, value: null };
    } catch (err) {
      return { isError: true, error: "Unexpected error" };
    }
  }
}