import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import 'magnific-popup';
@Component({
  selector: 'app-admin-duyet',
  templateUrl: './admin-duyet.component.html',
  styleUrls: ['./admin-duyet.component.css']
})
export class AdminDuyetComponent implements AfterViewChecked {
  
  ngAfterViewChecked(): void {
    $('.play').magnificPopup(
      {
        type: 'iframe'
      });
      $.extend(true, $.magnificPopup.defaults, {
        iframe: {
          patterns: {
            youtube: {
              index: 'www.youtube.com',
              id: 'embed/',
              src: 'https://www.youtube.com/embed/%id%?autoplay=1'
            }
          }
        }
      });
  }

  constructor(private khoahocS: KhoaHocService) { }
  danhSachChuaDuyet: any
  danhsachBaiGiang: any
  ngOnInit() {
    this.khoahocS.LayKhoaHocChuaDuyet().subscribe((res: any) => {
      this.danhSachChuaDuyet = res.data;

    })
    
  }

  layBaiGiang(data) {
    this.danhsachBaiGiang = data;
    
  }

  duyet(id) {
    const body = {
      KhoaHoc_id: id
    }

    this.khoahocS.DuyetKhoaHoc(body).subscribe((res: any) => {
      let index = this.danhSachChuaDuyet.findIndex(x => x.id == id);
      this.danhSachChuaDuyet.splice(index, 1);
      Swal.fire('Thành công', 'Khóa học đã được duyệt', "success");
    })
  }

}
