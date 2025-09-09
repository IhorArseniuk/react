
import type {GeoType} from "./TypeGeo.ts";

export type AddressType = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoType;
}
