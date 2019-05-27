import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/src/_core/services/user.service';

@Component({
  selector: 'app-mod-history',
  templateUrl: './mod-history.component.html',
  styleUrls: ['./mod-history.component.css']
})
export class ModHistoryComponent implements OnInit {

  constructor(private userService:UserService) { }
  idGiangVien:number;
  lichSuThanhToan:any;
  ngOnInit() {
    const thongTin=JSON.parse(localStorage.getItem('gv_log'));
    this.idGiangVien=thongTin.id;
    this.userService.LichSuBanKhoaHoc(this.idGiangVien).subscribe((res:any)=>{
      this.lichSuThanhToan=res.data;
      console.log(res)
    },
    err =>{

    })
  }

}
