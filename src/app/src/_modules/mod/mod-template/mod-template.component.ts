import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/src/_core/services/user.service';

@Component({
  selector: 'app-mod-template',
  templateUrl: './mod-template.component.html',
  styleUrls: ['./mod-template.component.css']
})
export class ModTemplateComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.LayChiTietGiangVien().subscribe(
      (res:any)=>{
        localStorage.setItem('gv_log',JSON.stringify(res.data));
        
  
      },
      (err:any) => {
        console.log(err)
      })
  }
  openNav(){
    document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "50px";
  }
}
