import { Time } from "@angular/common";
import { ProfessionalLightDTO } from "./professionalLightDTO";
import { UserLightDTO } from "./userLightDTO";

export class Reservation {
    id:number;
    client: UserLightDTO;
    professional: ProfessionalLightDTO;
    prestation: string;
    appointementDate: Date;
    address: string;
    etat: string;
    message:string;
    constructor(){}
}