import { IAddress } from './address';

export interface IPublicSchool {
  id: string;
  inep: string; 
  name: string;
  address: IAddress
}
