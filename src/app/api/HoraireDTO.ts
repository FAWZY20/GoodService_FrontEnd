import { Time } from "@angular/common";
import { ProfessionalLightDTO } from "./professionalLightDTO";

export interface Horaire{

    id: number;
    professional: ProfessionalLightDTO;
    jour: string;
    heureDeb: Time;
    heureFin: Time;
}