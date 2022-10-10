import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //The ActivatedRoute is a service, which keeps track of the currently activated route associated with the loaded Component.
import { Invoice } from '../invoice.models';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})

//There are two ways in which you can use the ActivatedRoute to get the parameter value from the ParamMap object.
/*1.Using Snapshot
2.Using observable*/
export class InvoiceComponent implements OnInit {
  list: any;
  invoiceList: Invoice[] = [
    {
      idFacture: 1,
      montantFacture: 120,
      montantRemise: 10,
      dateFacture: '12/12/2021',
      active: true,
    },
    {
      idFacture: 2,
      montantFacture: 1020,
      montantRemise: 90,
      dateFacture: '22/11/2020',
      active: true,
    },
    {
      idFacture: 3,
      montantFacture: 260,
      montantRemise: 30,
      dateFacture: '18/10/2020',
      active: false,
    },
    {
      idFacture: 4,
      montantFacture: 450,
      montantRemise: 40,
      dateFacture: '14/12/2020',
      active: true,
    },
  ];
  id: any;
  //inject modules
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.list = this.invoiceList.find((e) => this.id == e.idFacture);

    /*this.route.paramMap.subscribe((params) => {
      //this.id = params;
     // console.log(this.id.id);
    //
     
    
    });*/
  }
}
