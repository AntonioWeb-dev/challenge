import { Empresa } from "@modules/empresa/domain/empresa";

export class EmpresaMapper {
  static toDomain(raw: any): Empresa | null {
    const props = {
      nome: raw.nome,
      cnpj: raw.cnpj,
      createdAt: new Date(raw.createdAt),
      updatedAt: new Date(raw.updatedAt),
    };

    const empresaOrError = Empresa.build(props, raw.id);

    if (empresaOrError.isError) {
      console.log(empresaOrError.error);
    }

    if (!empresaOrError.isError) {
      return empresaOrError.value;
    }

    return null;
  }

  static toPersistent(empresa: Empresa): any {
    return {
      nome: empresa.nome,
      cnpj: empresa.cnpj,
    }
  }
}