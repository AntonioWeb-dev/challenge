import { EmpresaRepository } from "@modules/empresa/infra/database/EmpresaRepository";
import { CreateEmpresaUseCase } from "./createempresaUseCase";


const repo = new EmpresaRepository();
const useCase = new CreateEmpresaUseCase(repo);

export { useCase as createEmpresaUseCase};