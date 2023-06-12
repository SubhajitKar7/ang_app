
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';


import { AuthGuard } from './auth.guard';

import { UserComponent } from './user/user.component';
import { TicketComponent } from './ticket/ticket.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { ShowTicketComponent } from './show-ticket/show-ticket.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'head', component: HeaderComponent},
  { path: '404', component: NotFoundComponent },
  {path:'register',component:RegisterComponent},
  {path:'forget',component:ForgetComponent},
  {path:'updatepassword/:id',component:UpdatepasswordComponent},
  {path:'movie', component:MovieComponent,canActivate:[AuthGuard]},
  {path:'updateMovie/:mid', component:UpdateMovieComponent,canActivate:[AuthGuard]},
  {path:'user',component:UserComponent,canActivate:[AuthGuard]},
  {path:'ticket',component:TicketComponent,canActivate:[AuthGuard]},
  {path:'booking',component:ShowTicketComponent,canActivate:[AuthGuard]},
  {path:'ticket/:mid',component:TicketComponent,canActivate:[AuthGuard]},
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
