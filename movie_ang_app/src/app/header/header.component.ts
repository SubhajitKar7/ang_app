import { LoginService } from 'src/app/login.service';
import { Component, OnInit, OnDestroy } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;


  constructor(
   
    private loginService:LoginService
  ) {
    this.onLogout();
  }


  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    if(localStorage.getItem("token"))
    {
      this.isAuthenticated=true;
    }
    else
    this.isAuthenticated=false;
  }

  onLogout() {
    this.loginService.logout();
  }


}
