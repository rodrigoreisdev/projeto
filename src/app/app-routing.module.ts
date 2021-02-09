import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { ListProdComponent } from './list-prod/list-prod.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list', component: ListProdComponent },
  { path: 'detail/:id', component: DetailProdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
