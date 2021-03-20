import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarRental } from 'src/app/models/car-rental';
import { CarRentalService } from 'src/app/services/car-rental.service';

@Component({
  selector: 'app-car-rental',
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.css'],
})
export class CarRentalComponent implements OnInit {
  carRentals: CarRental[] = [];
  dataLoaded = false;

  constructor(private carRentalService: CarRentalService,
    private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.getCarRentals();
  }

  getCarRentals() {
    this.carRentalService.getCarRentals().subscribe((response) => {
      this.carRentals = response.data;
      console.log(this.carRentals);
      this.dataLoaded = true;
    });
  }
}
