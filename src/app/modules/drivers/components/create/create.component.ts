import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriversService } from 'src/app/services/drivers/drivers.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  eventForm: FormGroup;
  checkoutForm;
  constructor(
    public driverSer: DriversService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      nombre: '',
      apellido: '',
      telefono: '',
      direccion: '',
      identificacion: '',
    });
  }

  ngOnInit(): void {
    this.eventForm = this.formBuilder.group({
      nombre: this.formBuilder.control(null, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      apellido: this.formBuilder.control(null, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      telefono: this.formBuilder.control(null, [
        Validators.required,
        Validators.maxLength(10),
      ]),
      direccion: this.formBuilder.control(null, [
        Validators.required,
        Validators.maxLength(10),
      ]),
      identificacion: this.formBuilder.control(null, [
        Validators.required,
        Validators.maxLength(10),
      ]),

    });

  }
  createEvento(customerData:any){
    this.driverSer.createDrivers(customerData);

  }
}
