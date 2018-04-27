import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Services} from '../../services/service'

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  providers: [Services]
})


export class SummaryComponent implements OnInit  {
    summary;
    totalMarginValue;
    totalMarginvaluepercentage;
    totalriskvalue;
    totalriskvaluepercentage;
    totalexposurevalue;
    totalexposurevaluepercentage;
    totalportfoliovalue;
    totalportfoliovaluepercentage;
        constructor(private http: Http, private service: Services) {
      
  }

  ngOnInit(){
    this.summary = this.service.getService();
    this.totalMarginValue = this.summary.totalMarginvalue;
    this.totalMarginvaluepercentage = this.summary.totalMarginvaluepercentage;
    this.totalriskvalue= this.summary.totalriskvalue;
    this.totalriskvaluepercentage= this.summary.totalriskvaluepercentage;
    this.totalexposurevalue= this.summary.totalexposurevalue;
    this.totalexposurevaluepercentage= this.summary.totalexposurevaluepercentage;
    this.totalportfoliovalue= this.summary.totalportfoliovalue;
    this.totalportfoliovaluepercentage= this.summary.totalportfoliovaluepercentage;
  }


}

