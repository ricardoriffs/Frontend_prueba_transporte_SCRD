import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConductorsModel } from '../../core/models/conductors.interface';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ResponseModel } from 'src/app/core/models/response';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root',
})
export class DriversService {
  private vari = environment.baseUrl;
  data: any;

  constructor(private http: HttpClient, private servicioData: DataService) {}


  createDrivers(Drivers: ConductorsModel) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(Drivers);
    this.http
      .post<ResponseModel>(`${this.vari}conductor/`, body, {
        headers: headers,
        observe: 'response',
      })
      .subscribe(
        (response) => {
          this.getAllDrivers2();
          let mens = response.body?.message
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: `${mens}`,
            confirmButtonText:'Aceptar',
          });
        },
        (error) => {
          if(error.error.error.identificacion[0]){
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text:`La identificación del conductor ya se encuentra registrada`,
              confirmButtonText: 'Aceptar',
            });
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Se presento un error en el servidor',
              confirmButtonText:'Aceptar',
            });
          }
        }
      );
  }
  getAllDrivers() {
    return this.http.get(`${this.vari}conductor/lista/`);
  }
  getDriverWhiVeh(id:number){
    return this.http.get<ResponseModel>(`${this.vari}vehiculo/lista/con-conductor/${id}`);
  }
  getDriverNotWhiVeh(){
    return this.http.get<ResponseModel>(`${this.vari}vehiculo/lista/sin-conductor/`);
  }
  getAllDrivers2() {
     this.http.get<ResponseModel>(`${this.vari}conductor/lista/`).subscribe(
      (response) =>{
      this.data = response.data;
      this.servicioData.dataListDri = this.data;
      }
     )
  }
  getDriverWhiVeh2(id:number){
    return this.http.get<ResponseModel>(`${this.vari}vehiculo/lista/con-conductor/${id}`);
  }
  getDriverNotWhiVeh2(){
    return this.http.get<ResponseModel>(`${this.vari}vehiculo/lista/sin-conductor/`);
  }
  uptDriversAso(id_conductor: number, id: number) {
    const headers = { 'content-type': 'application/json' };
    const body = {
        conductor_id: id_conductor
    };
    this.http
      .put(`${this.vari}vehiculo/${id}/asociar/conductor/`, body, {
        headers: headers,
        observe: 'response',
      })
      .subscribe(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Se asigno el conductor  al vehículo',
            confirmButtonText:'Aceptar',
          });

        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Se presento un error en el servidor',
            confirmButtonText:'Aceptar',
          });
        },
      );
  }
  uptDriversDes(id: number) {
    const headers = { 'content-type': 'application/json' };
    const body = {
        conductor_id: null
    };
    this.http
      .put(`${this.vari}vehiculo/${id}/asociar/conductor/`, body, {
        headers: headers,
        observe: 'response',
      })
      .subscribe(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Se desasocio el conductor delvehículo',
            confirmButtonText:'Aceptar',
          });

        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Se presento un error en el servidor',
            confirmButtonText:'Aceptar',
          });
        },
      );
  }

}
