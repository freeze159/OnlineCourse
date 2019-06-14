import { Component, OnInit } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-duyet',
  templateUrl: './admin-duyet.component.html',
  styleUrls: ['./admin-duyet.component.css']
})
export class AdminDuyetComponent implements OnInit {

  constructor(private khoahocS: KhoaHocService) { }
  danhSachChuaDuyet: any
  danhsachBaiGiang:any
  ngOnInit() {
    this.khoahocS.LayKhoaHocChuaDuyet().subscribe((res: any) => {
      console.log(res)
      this.danhSachChuaDuyet = res.data;

    })
  }
  layBaiGiang(data){
    this.danhsachBaiGiang =data;
  }
  duyet(id) {
    const body = {
      KhoaHoc_id: id
    }
    
    this.khoahocS.DuyetKhoaHoc(body).subscribe((res:any)=>{
      let index = this.danhSachChuaDuyet.findIndex(x => x.id == id);
      this.danhSachChuaDuyet.splice(index, 1);
      Swal.fire('Thành công','Khóa học đã được duyệt',"success");
    })
  }

}
