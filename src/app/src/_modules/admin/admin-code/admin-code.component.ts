import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-code',
  templateUrl: './admin-code.component.html',
  styleUrls: ['./admin-code.component.css']
})
export class AdminCodeComponent implements OnInit {
  dataTable: any
  constructor(private khoaHocS: KhoaHocService, private chRef: ChangeDetectorRef) { }
  danhsachCode: any
  ngOnInit() {
    this.khoaHocS.LayDanhSachCode().subscribe((res: any) => {
      this.danhsachCode = res.data;
      // You'll have to wait that changeDetection occurs and projects data into 
      // the HTML template, you can ask Angular to that for you ;-)
      this.chRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }
  deleteCode(id) {

    Swal.fire({
      title: 'Bạn có chắc chắn?',
      text: "Không thể khôi phục khi đã xóa!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có, xóa ngay'
    }).then(res => {
      if (res.value) {
        let indexDel = this.danhsachCode.findIndex(x => x.id == id);

        this.danhsachCode.splice(indexDel, 1);
        this.khoaHocS.XoaCode(id).subscribe((res: any) => {

          Swal.fire(
            'Đã xóa!',
            res.data,
            'success'
          ).then(res => {
            
          })

        }, err => { Swal.fire('Thất bại', 'Lỗi', 'error') })
      }

    })
  }

}
