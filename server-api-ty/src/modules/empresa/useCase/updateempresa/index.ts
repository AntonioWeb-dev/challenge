import { EmpresaRepository } from "@modules/empresa/infra/database/EmpresaRepository";
import { UpdateEmpresaUseCase } from "./updateempresaUseCase";

const repo = new EmpresaRepository();
const useCase = new UpdateEmpresaUseCase(repo);

export { useCase as updateEmpresaUseCase};