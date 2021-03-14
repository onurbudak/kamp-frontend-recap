import { CarRental } from "./car-rental";
import { ResponseModel } from "./responseModel";

export interface CarRentalResponseModel extends ResponseModel{
    data:CarRental[]
}