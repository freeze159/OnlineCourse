import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/src/_core/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private userService:UserService,private atvRoute: ActivatedRoute) { }

  ngOnInit() {
    this.atvRoute.params.subscribe(res =>{
      let id=res;
      console.log(id.id);
      this.userService.XemChiTietUser(id.id).subscribe((res:any)=>{
        console.log(res);
      });
    })
  }

}
