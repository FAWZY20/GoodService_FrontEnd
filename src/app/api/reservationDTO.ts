import { Time } from "@angular/common";
import { ProfessionalLightDTO } from "./professionalLightDTO";
import { UserLightDTO } from "./userLightDTO";

export class Reservation {
    id:number;
    client: UserLightDTO;
    professional: ProfessionalLightDTO;
    prestation: string;
    appointementDate: Date;
    heure: Time;
    address: string;
    etat: string;
    constructor(){}
}