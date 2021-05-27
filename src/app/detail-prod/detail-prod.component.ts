import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-prod',
  templateUrl: './detail-prod.component.html',
  styleUrls: ['./detail-prod.component.less']
})
export class DetailProdComponent implements OnInit {

  item: any;
  id_prod?: any;

  constructor(private apiService:ApiService, private route: ActivatedRoute) { }
  

  ngOnInit() {
    this.route.params.subscribe(param =>{this.id_prod = param.id})
    this.apiService.GetListProdDetail(this.id_prod).subscribe(data => { this.item = data})
  }

}
