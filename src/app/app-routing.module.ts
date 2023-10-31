import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { HeaderComponent } from './dashboard/header/header.component';

const routes: Routes = [{
  path:"",
  component:HomeComponent
},{
  path:'explore',
  component:ExploreComponent
},{
  path:'dashboard',
  component:DashboardComponent
},{
  path:'book',
  component:BookComponent
},{
  path:'header',
  component:HeaderComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
