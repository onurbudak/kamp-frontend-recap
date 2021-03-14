import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarRentalResponseModel } from '../models/car-rentalResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarRentalService {

  apiUrl = 'https://localhost:44377/api/rentals/getRentACarDetail';

  constructor(private httpClient: HttpClient) { }

  getCarRentals():Observable<CarRentalResponseModel> {
    return  this.httpClient.get<CarRentalResponseModel>(this.apiUrl);
  }
}
