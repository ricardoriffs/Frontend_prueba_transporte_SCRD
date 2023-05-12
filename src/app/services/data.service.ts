import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataList: any[] ;
  dataListAso:any[];
  dataListDe:any[];
  dataListDri:any[];
  dataListVeh:any[];

  constructor() { }
}
