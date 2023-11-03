import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { book } from './book/book';

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
  path:'nav',
  component:NavbarComponent
},{
  path:'login',
  component:LoginComponent
},
{
  path:'subject/:subject',component:PdfViewerComponent
},{
  path:'listofbook',
  component:book
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
