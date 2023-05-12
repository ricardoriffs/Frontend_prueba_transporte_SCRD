import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConductorsModel } from '../../core/models/conductors.interface';
import { environment } from 'src/environments/environment';
import { VehicleModel } from 'src/app/core/models/vehicle.interface';
import Swal from 'sweetalert2';
import { ResponseModel } from 'src/app/core/models/response';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private vari = environment.baseUrl;
  private respons = {};
  constructor(private http: HttpClient) {}

  getAllVehicles() {
    return this.http.get(`${this.vari}vehiculo/lista/`);
  }
  createVeh(Veh: VehicleModel) {
    const headers = { 'content-type': 'application/json' };
    const bodys = JSON.stringify(Veh);
    this.http
      .post<ResponseModel>(`${this.vari}vehiculo/`, bodys, {
        headers: headers,
        observe: 'response',
      })
      .subscribe(
        (response) => {
          let mens = response.body?.message
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: `${mens}`,
            confirmButtonText: 'Aceptar',
          });
          this.getAllVehicles()
        },
        (error) => {
          if(error.error.error.placa[0]){
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text:`La placa del vehículo ya se encuentra registrada`,
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
}
