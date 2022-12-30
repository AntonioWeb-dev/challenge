import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
export declare class EmpresaController {
    private readonly empresaService;
    constructor(empresaService: EmpresaService);
    create(createEmpresaDto: CreateEmpresaDto): Promise<unknown>;
    findOne(id: string): Promise<unknown>;
    update(id: string, updateEmpresaDto: UpdateEmpresaDto): Promise<unknown>;
    remove(id: string): Promise<unknown>;
}
