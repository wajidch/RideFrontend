import { RoleModel } from './role.models';

export class UserModel {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    profileName: string;
    city: string;
    address: string;
    dob: string;
    status: string;
    carId: string; 
    role: RoleModel;
    
    constructor(){
        this.role = new RoleModel();
    }
}