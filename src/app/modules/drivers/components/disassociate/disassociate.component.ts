import { Component, OnInit,Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DriversService } from 'src/app/services/drivers/drivers.service';

@Component({
  selector: 'app-disassociate',
  templateUrl: './disassociate.component.html',
  styleUrls: ['./disassociate.component.css']
})
export class DisassociateComponent implements OnInit {
  blogList:any;
  dataCh:any;
  posts:any;
  @Input() id_conductor: number;

  constructor(public driversServ:DriversService,public servicioData:DataService) { }

  ngOnInit(): void {

  }
  onCategoriaPressed(categoriaSelected: any, checked: boolean){
    if (checked) {
      this.dataCh = categoriaSelected;
    }
  }
  onSumnit(){
    const id = this.dataCh.id;
    this.driversServ.uptDriversDes(this.id_conductor);
  }

}
