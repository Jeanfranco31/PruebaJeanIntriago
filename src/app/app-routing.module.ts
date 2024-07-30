import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ProductosDashboardComponent } from './Dashboard/Productos/productosDashboard/productosDashboard.component';
import { AuthGuard } from './Service/Auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path :'login', component:LoginComponent},
  {path :'home', component : ProductosDashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
