import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { BookComponent } from './book/book.component';
import { PostDashboardComponent } from './post/post-dashboard/post-dashboard.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PostlistComponent } from './post/postlist/postlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    BookComponent,
    PostDashboardComponent,
    PostDetailsComponent,
    PostlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
