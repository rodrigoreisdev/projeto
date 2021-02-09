import { Component, OnInit } from '@angular/core';
import { ApiService } from '.././api.service';


@Component({
  selector: 'app-list-prod',
  templateUrl: './list-prod.component.html',
  styleUrls: ['./list-prod.component.css']
})
export class ListProdComponent implements OnInit {

  product: any;
  

  constructor(private apiService: ApiService) { }

  ngOnInit()
  {
    this.apiService.GetListProd().subscribe(data => { this.product = data })
  }

}
