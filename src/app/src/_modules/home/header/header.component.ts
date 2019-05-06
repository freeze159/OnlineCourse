import { Component, OnInit } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged:boolean=false;
  thongTinUser:Object={
    'Id':'',
    'Ten':'',
  
  };
  constructor(private khoaHocService:KhoaHocService) { }
  danhSachTheLoai:Array<any>=[];
  danhSachMang:Array<any>=[];
  array:Array<any>=[];
  ngOnInit() {
    this.khoaHocService.LayTheLoaiKhoaHoc().subscribe((res:any)=>{
      this.danhSachTheLoai=res.data;
    });
    

    //Kiểm tra đăng nhập
    if(localStorage.getItem('userLogin')){
      this.logged=true;
      let tmp=JSON.parse(localStorage.getItem('userLogin'));
      this.thongTinUser={
        'Id':tmp.data.id,
        'Ten':tmp.data.name,
      };

    }
    // console.log(this.thongTinUser);
  }
  Logout(){
    localStorage.removeItem('userLogin');
    localStorage.removeItem('tokenbearer');
    localStorage.clear();
    window.location.reload();
  }

}
