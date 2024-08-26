import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { AppComponent } from './app.component';
import { ViewAllComponent } from './components/view-all/view-all.component';

const routes: Routes = [
{path:'create-post', component:CreatePostComponent},
{path:'view-all', component:ViewAllComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
