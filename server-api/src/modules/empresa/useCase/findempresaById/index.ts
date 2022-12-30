import { EmpresaRepository } from "@modules/empresa/infra/database/EmpresaRepository";
import { FindEmpresaByIDUseCase } from "./findempresaByIdUseCase";

const repo = new EmpresaRepository();
const useCase = new FindEmpresaByIDUseCase(repo);

export { useCase as findEmpresaByIdUseCase};