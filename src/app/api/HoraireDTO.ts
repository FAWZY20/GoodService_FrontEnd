import { ProfessionalLightDTO } from "./professionalLightDTO";

export interface Horaire{

    id: number;
    professional: ProfessionalLightDTO;
    jour: string;
    heureDeb: Date;
    heureFin: Date;
}