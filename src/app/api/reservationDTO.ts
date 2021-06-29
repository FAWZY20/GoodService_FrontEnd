import { Time } from "@angular/common";
import { Professional } from "./professional";
import { ProfessionalLightDTO } from "./professionalLightDTO";
import { UserLightDTO } from "./userLightDTO";

export class Reservation {
    id:number;
    client: UserLightDTO;
    professional: Professional;
    prestation: string;
    appointementDate: Date;
    address: string;
    etat: string;
    message:string;
    constructor(){}
}