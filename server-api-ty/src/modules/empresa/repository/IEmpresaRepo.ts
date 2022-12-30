import { Empresa } from "../domain/empresa";
import { IEmpresaProps } from "../domain/interface/IEmpresaProps";

export interface IEmpresaRepo {
    create(empresa: Empresa): Promise<Empresa | null>;
    update(id: string, data: Partial<IEmpresaProps>): Promise<void>;
    remove(id: string): Promise<void>;
    findById(id: string): Promise<Empresa | null>;
    findAll(): Promise<(Empresa | null)[]>;

}