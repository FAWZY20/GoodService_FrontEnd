import { UserLightDTO } from "./userLightDTO";

export interface CardDTO{
    
    id: number;
    client: UserLightDTO;
    nom:string;
    numeroDeCarte:number;
    dateExpiration: Date;
    cvc: number;

}