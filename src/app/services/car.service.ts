import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44377/api/';

  constructor(private httpClient: HttpClient,
    private activatedRoute:ActivatedRoute) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getCarDetails";
    return  this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getCarsByBrandId?brandId="+brandId;
    return  this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getCarsByColorId?colorId="+colorId;
    return  this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
