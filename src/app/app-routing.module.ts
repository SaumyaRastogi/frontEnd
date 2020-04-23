import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutProjectComponent } from './about-project/about-project.component';
import { ResponseComponent } from './response/response.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component:HomeComponent ,
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent,
  },
  {
    path: 'aboutProject',
    component:AboutProjectComponent ,
  },
  {
    path: 'response/:answer',
    component:ResponseComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
