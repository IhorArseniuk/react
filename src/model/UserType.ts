import type {CompanyType} from "./TypeCompany.ts";
import type {AddressType} from "./TypeAddress.ts";




export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: CompanyType;
}
