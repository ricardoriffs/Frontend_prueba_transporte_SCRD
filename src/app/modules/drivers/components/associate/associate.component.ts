import {
  Component,
  OnInit,
  Input,
} from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { DriversService } from 'src/app/services/drivers/drivers.service';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css'],
})
export class AssociateComponent implements OnInit {
  posts: any;
  dataCh: any;
  @Input() id_conductor: number;
  constructor(public driversServ: DriversService,public servicioData:DataService) {
  }
  ngOnInit(): void {
  }

  onCategoriaPressed(categoriaSelected: any, checked: boolean) {
    if (checked) {
      this.dataCh = categoriaSelected;
      console.log(this.dataCh)
    }
  }
  onSumnit() {
    const id = this.dataCh.id;
    this.driversServ.uptDriversAso(this.id_conductor, id);
  }
}
