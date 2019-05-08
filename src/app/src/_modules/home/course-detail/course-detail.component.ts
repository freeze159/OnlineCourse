import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import * as $ from 'jquery';
import { KhoaHoc } from 'src/app/src/_core/models/khoahoc';
import { CartService } from 'src/app/src/_core/services/cart.service';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  constructor(private atvRoute: ActivatedRoute, private khoaHocService: KhoaHocService,private cartService:CartService) { }
  @Input() cart: any = {}
  khoaHocId: any;
  mangKHId: any;
  thongTinKH: KhoaHoc;
  tenKh: string;
  hinhAnh: string;
  giangVien: string;
  thanhTien: string;
  danhGia: Array<any> = [];
  
  ngOnInit() {
    this.atvRoute.params.subscribe(data => {
      this.khoaHocId = (data.id);
      this.mangKHId = (data.mangKHid);
    })
    this.khoaHocService.LayChiTietKhoaHoc(this.mangKHId, this.khoaHocId).subscribe((res: any) => {
      this.thongTinKH = res.data;
      this.tenKh = this.thongTinKH.TenKH;
      this.hinhAnh = this.thongTinKH.HinhAnh;
      this.giangVien = this.thongTinKH.GiangVien;
      this.thanhTien = this.thongTinKH.ThanhTien;
      const danhgia = JSON.parse(this.thongTinKH.DanhGia);
      this.danhGia = Array(danhgia).fill(5);

  
      // Show hình ảnh khóa
      document.getElementById("overlay").style.background = `url(${this.hinhAnh})`;
      document.getElementById("overlay").style.backgroundPosition = 'center';
      document.getElementById('course-comment-img').style.background = `url(${this.hinhAnh})`;
      document.getElementById("course-comment-img").style.backgroundPosition = 'center';
    })

  }
  addCart() {
    let addedCourse = {
      Id: this.khoaHocId,
      MangKHID:this.mangKHId,
      TenKH:this.tenKh,
      Gia:this.thanhTien,
      TenGiangVien:this.giangVien,
      HinhAnh:this.hinhAnh,

    };
    this.cartService.cart.emit(addedCourse);
    // console.log(addedCourse);
  }

}
