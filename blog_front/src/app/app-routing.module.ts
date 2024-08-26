import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { AppComponent } from './app.component';
import { ViewAllComponent } from './components/view-all/view-all.component';
import { ViewPostComponent } from './components/view-post/view-post.component';

const routes: Routes = [
{path:'create-post', component:CreatePostComponent},
{path:'view-all', component:ViewAllComponent},
{path:'view-post/:id', component:ViewPostComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
