import { ProfessionalLightDTO } from "./professionalLightDTO";

export interface Prix{

    id: number;
    professional: ProfessionalLightDTO;
    prestation: string;
    prix: string
}