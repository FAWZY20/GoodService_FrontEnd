import { ProfessionalLightDTO } from "./professionalLightDTO";

export class Absence{

    id: number;
    professional: ProfessionalLightDTO;
    justificatif: string;
    jourDeb: Date;
    jourFin: Date; 

}