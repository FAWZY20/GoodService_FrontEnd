import { Time } from "@angular/common";
import { ProfessionalLightDTO } from "./professionalLightDTO";
import { UserLightDTO } from "./userLightDTO";

export class Reservation {
    id:number;
    client: UserLightDTO;
    professional: ProfessionalLightDTO;
    prestation: string;
    prestation1: string;
    prestation2: string;
    prestation3: string;
    prestation4: string;
    appointementDate: Date;
    address: string;
    etat: string;
    constructor(){}
}