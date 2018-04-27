import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class Services{
    getDateRange(){
        return [
        {"id":1,"value":"1 Dec 2014 - 28 Feb 2015"},
        {"id":2,"value":"1 Mar 2015 - 30 Jun 2015"},
        {"id":3,"value":"1 Jul 2015 - 28 Sep 2015"}
        ]
    };

    getService(){
        return {
            "totalMarginvalue":"1,231,462.57",
            "totalMarginvaluepercentage":"+12.5%",
            "totalriskvalue":"1,456,432.34",
            "totalriskvaluepercentage":"-25.65%",
            "totalexposurevalue":"3,865,345.76",
            "totalexposurevaluepercentage":"+14.67%",
            "totalportfoliovalue":"2,783,938.67",
            "totalportfoliovaluepercentage":"+8.45%"
        }
    }
}


