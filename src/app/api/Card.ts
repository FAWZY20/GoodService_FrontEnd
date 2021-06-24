import { UserLightDTO } from "./userLightDTO";

export class Card{

    id: number;
    client: UserLightDTO;
    nom:string;
    numeroDeCarte:number;
    dateExpiration: Date;
    cvc: number;

}