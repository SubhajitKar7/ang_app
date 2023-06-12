import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { User } from './user';
import { UserService } from './user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @ViewChild('paginator') paginator: MatPaginator|any;
  @ViewChild('empTbSort') empTbSort = new MatSort();

  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute,private _snackBar:MatSnackBar)
  {
   
  }


  RoleCheck()
  {
    console.log("roleCheck: "+localStorage.getItem("role"));
   return localStorage.getItem("role");
  }

  
  data:{}|any; user:User = new User(); userList:Array<User>=[];
  displayedColumns: string[] = ['loginId','firstName','lastName','password','role','email','question','answer','contact','action'];

  public dataSource: MatTableDataSource<User>|any;

  ngAfterViewInit() {
    this.userService.getAllCustomers().subscribe(data=>
      {
        this.userList=Object.values(data);
        this.dataSource=new MatTableDataSource(this.userList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.empTbSort;
        console.log(this.dataSource);
      },
      error=>
      {
        console.log(error);
      })
  
   
  }

  DeleteUser(loginId:string){
    this.userService.deleteCustomer(loginId).subscribe(data=>
      {
        console.log("deleteeee");
        let Index = this.userList.findIndex(m=>m.loginId ===loginId);
        this.userList.splice(Index,1);
        this.openSnackBar("User is deleted","Close");
        this.router.navigate(['/user']);
        //alert("User is deleted");
        
      },
      error=>
      {
        this.openSnackBar("User cannot be  deleted","Close");
        console.log(error);
      })
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}

