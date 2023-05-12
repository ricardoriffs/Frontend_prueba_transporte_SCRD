import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  List: any;
  data:any;

  constructor(public driversServ: VehicleService) {}

  ngOnInit(): void {
    this.consult();

  }
  consult() {
    this.driversServ.getAllVehicles().subscribe(
      (response) => {
        this.data = response;
        this.List = this.data.data;
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Se presento un error en el servidor',
          confirmButtonText: 'Aceptar',
        });
      }
    );
  }
}
