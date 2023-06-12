import { ApiService } from 'src/app/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private apiService:ApiService){}

  title = 'MovieApp';

  logout()
  {
    console.log("ty");
    this.apiService.onLogout();
  }

  
RoleCheck()
{
  console.log("roleCheck: "+localStorage.getItem("role"));
 return localStorage.getItem("role");
}

}
