import { client } from "@infra/prisma/client";
import { Empresa } from "@modules/empresa/domain/empresa";
import { IEmpresaProps } from "@modules/empresa/domain/interface/IEmpresaProps";
import { IEmpresaRepo } from "@modules/empresa/repository/IEmpresaRepo";
import { EmpresaMapper } from "../mapper/EmpresaMapper";

export class EmpresaRepository implements IEmpresaRepo {
  async findAll(): Promise<(Empresa | null)[]> {
    const raws = await client.empresa.findMany();
    return raws.map((raw) => EmpresaMapper.toDomain(raw));
  }
  async create(empresa: Empresa): Promise<Empresa | null> {
    const data = EmpresaMapper.toPersistent(empresa);
    const raw = await client.empresa.create({ data });
    return EmpresaMapper.toDomain(raw);
  }

  async findById(id: string): Promise<Empresa | null> {
    const raw = await client.empresa.findUnique({
      where: { id },
    });
    if (!raw) {
      return null;
    }
    return EmpresaMapper.toDomain(raw);
  }

  async update(id: string, data: Partial<IEmpresaProps>): Promise<void> {
    await client.empresa.update({
      where: {
        id
      },
      data,
    })
  }

  async remove(id: string): Promise<void> {
    await client.empresa.delete({ where: { id } })
  }
}