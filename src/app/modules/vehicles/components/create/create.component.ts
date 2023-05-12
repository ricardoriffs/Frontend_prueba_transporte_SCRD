import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleModel } from 'src/app/core/models/vehicle.interface';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  eventForm: FormGroup;
  checkoutForm: FormGroup;

  constructor(public vehucileService: VehicleService,private formBuilder: FormBuilder ) {
    this.checkoutForm = this.formBuilder.group({
      placa: ['',Validators.required],
      modelo:['',Validators.required],
      capacidad:['',Validators.required],
    });

  }

  ngOnInit(): void {

  }
  createEvento(customerData:VehicleModel){
    if(this.checkoutForm.valid){
      this.vehucileService.createVeh(customerData);
    }
  }
  get modelo() { return this.checkoutForm.get('modelo'); }


}
