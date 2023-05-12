import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DriversService } from 'src/app/services/drivers/drivers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  List: any;
  dataG:any;
  id_number: number;
  data: any;

  constructor(
    public driversServ: DriversService,
    public servicioData: DataService
  ) {}

  ngOnInit(): void {
    this.driversServ.getAllDrivers().subscribe(
      (response) => {
        this.dataG = response;
        this.servicioData.dataListDri = this.dataG.data;
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Se presento un error en el servidor',
          confirmButtonText:'Aceptar',
        });
      }
    );
  }

  GetId(id: number) {

    this.id_number = id;
    this.driversServ.getDriverNotWhiVeh().subscribe((response) => {
      this.data = response.data;
      this.servicioData.dataListAso = this.data;
    });
  }
  GetIdDes(id:number) {
    this.id_number = id;
    this.driversServ.getDriverWhiVeh(id).subscribe((response) => {
      this.data = response.data;
      this.servicioData.dataListDe = this.data;
    });
  }
}
