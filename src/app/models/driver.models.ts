import { RideModel } from './ride.models';

export class DriverModel{
    _id: string;
     firstName: string;
     lastName: string;
     email: string;
     profileName: string;
     city: string;
     address: string;
     dob: Date;
     status: string;
     rides:RideModel[];
}