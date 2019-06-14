import { Component, OnInit } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-theloai-add',
  templateUrl: './admin-theloai-add.component.html',
  styleUrls: ['./admin-theloai-add.component.css']
})
export class AdminTheloaiAddComponent implements OnInit {

  constructor(private khoaHocS:KhoaHocService) { }

  ngOnInit() {
    
  }
  addTheLoai(thongTin){
    this.khoaHocS.ThemTheLoai(thongTin).subscribe((res:any)=>{
      Swal.fire('Thành công','Thêm thể loại thành công','success');
    })
  }
}
