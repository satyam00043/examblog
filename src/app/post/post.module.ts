import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostlistComponent } from "./postlist/postlist.component";
import { PostDetailsComponent } from "./post-details/post-details.component";
import { PostDashboardComponent } from "./post-dashboard/post-dashboard.component";
import { SharedModule } from "../shared/shared.module";
import { PostService } from "./post.service";

const routes:Routes=[
    {path:'blog',component:PostlistComponent},
    {path:'blog/:id',component:PostDetailsComponent},
    {path:'dashboard',component:PostDashboardComponent}

]
@NgModule({
    declarations:[PostDashboardComponent,PostDetailsComponent,PostlistComponent],
    imports:[
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers: [PostService]
})
export class PostModule{}