import { DriverModel } from './driver.models';
import { CarModel } from './car.models';

export class RideModel{
    _id: string;
    startPoint: string;
    endPoint: string;
    startTime: Date;
    endTime: Date;
    totalPassengers: number;
    wheelChair: boolean;
    rideType: string;
    paymentMethod: string;
    amount: number;
    note: string;
    customer: string;
    driver: DriverModel;
    car: CarModel; 
    carId: string;
    userId: string;
    createdOn: Date;
    constructor(){
        this.driver = new DriverModel();
        this.car = new CarModel();
        let date = new Date();
        this.createdOn = new Date(date.toLocaleDateString()); 
    }
}