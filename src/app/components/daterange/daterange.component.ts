import { Component,OnInit } from '@angular/core';
import {Services} from '../../services/service';

@Component({
  selector: 'daterange',
  templateUrl: './daterange.component.html',
  providers: [Services]
})


export class DateRangeComponent implements OnInit  {

    dateRange= [];

    constructor(private service: Services){

    }
    ngOnInit(){
      this.dateRange = this.service.getDateRange();
    }
    
}

