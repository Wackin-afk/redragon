import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EmplistComponent } from './emplist/emplist.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [{path:'home', component:HomeComponent}, 
{path:'emplist', component:EmplistComponent}, {path:'about', component:AboutComponent}, {path:'product', component:ProductComponent}, {path:'**', component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
