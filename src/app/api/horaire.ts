import { Time } from "@angular/common";
import { ProfessionalLightDTO } from "./professionalLightDTO";

export class Horaire{

    id: number;
    professional: ProfessionalLightDTO;
    jour: string;
    heureDeb: Time;
    heureFin: Time;
}