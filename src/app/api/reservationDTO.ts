import { ProfessionalLightDTO } from "./professionalLightDTO";
import { UserLightDTO } from "./userLightDTO";

export interface ReservationDTO{
    id:number;
    client:UserLightDTO;
    professional:ProfessionalLightDTO;
    serviceType:string;
    appointmentDateTime:Date;
    durationMinutes:number;
    status:string;
}