"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaMapper = void 0;
const empresa_1 = require("@modules/empresa/domain/empresa");
class EmpresaMapper {
    static toDomain(raw) {
        const props = {
            nome: raw.nome,
            cnpj: raw.cnpj,
            createdAt: new Date(raw.createdAt),
            updatedAt: new Date(raw.updatedAt),
        };
        const empresaOrError = empresa_1.Empresa.build(props, raw.id);
        if (empresaOrError.isError) {
            console.log(empresaOrError.error);
        }
        if (!empresaOrError.isError) {
            return empresaOrError.value;
        }
        return null;
    }
    static toPersistent(empresa) {
        return {
            nome: empresa.nome,
            cnpj: empresa.cnpj,
        };
    }
}
exports.EmpresaMapper = EmpresaMapper;
