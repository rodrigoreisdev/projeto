import { ApiService } from './api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProdComponent } from './list-prod/list-prod.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';   



@NgModule({
  declarations: [
    AppComponent,
    ListProdComponent,
    DetailProdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    AccordionModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
