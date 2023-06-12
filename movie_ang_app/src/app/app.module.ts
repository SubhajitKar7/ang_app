import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';


import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule } from '@angular/material/button';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';

import { AuthInterceptor } from './auth.interceptor';
import { TicketDtoComponent } from './ticket-dto/ticket-dto.component';
import { TicketComponent } from './ticket/ticket.component';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTreeModule} from '@angular/material/tree';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { UserComponent } from './user/user.component';

import { LoginComponent } from './login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApiService } from './api.service';
import { ShowTicketComponent } from './show-ticket/show-ticket.component';



//open with chrome.exe  --disable-site-isolation-trials --disable-web-security --user-data-dir="D:\Users\SUBHAJIT\angular\MovieApp" in cmd

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    UserComponent,
    LoginComponent,
    TicketDtoComponent,
    TicketComponent,
    HeaderComponent,
    RegisterComponent,
    ForgetComponent,
    UpdatepasswordComponent,
    UpdateMovieComponent,
    NotFoundComponent,
    ShowTicketComponent

  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,MatButtonToggleModule,MatCardModule,MatCheckboxModule,MatDatepickerModule,
    MatDialogModule,MatDividerModule,MatExpansionModule,MatFormFieldModule,MatIconModule,MatInputModule,
    MatListModule,MatMenuModule,MatPaginatorModule,MatProgressBarModule,MatSelectModule,MatSidenavModule,
    MatSlideToggleModule,MatSortModule,MatTableModule,MatTreeModule, MatNativeDateModule,MatSnackBarModule
  


  ],
  providers: [AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
