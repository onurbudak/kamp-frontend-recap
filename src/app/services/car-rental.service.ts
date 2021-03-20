import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarRental } from '../models/car-rental';

@Injectable({
  providedIn: 'root'
})
export class CarRentalService {

  apiUrl = 'https://localhost:44377/api/';

  constructor(private httpClient: HttpClient) { }

  getCarRentals():Observable<ListResponseModel<CarRental>> {
    let newPath = this.apiUrl + "rentals/getRentACarDetail?carId=0";
    return  this.httpClient.get<ListResponseModel<CarRental>>(newPath);
  }
}
