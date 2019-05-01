import { UserModel } from './user.models';

export class CarModel{
    _id: string;
    carNumber: string;
    password: string;
    status: string;
    rideCount: number;
    user: UserModel;
    constructor(){
        this.user = new UserModel();
    }
}