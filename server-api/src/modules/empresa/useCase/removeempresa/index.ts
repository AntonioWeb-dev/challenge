import { EmpresaRepository } from "@modules/empresa/infra/database/EmpresaRepository";
import { RemoveEmpresaUseCase } from "./removeempresaUseCase";

const repo = new EmpresaRepository();
const useCase = new RemoveEmpresaUseCase(repo);

export { useCase as removeEmpresaUseCase};