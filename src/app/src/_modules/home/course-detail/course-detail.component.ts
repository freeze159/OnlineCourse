import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import * as $ from 'jquery';
import { KhoaHoc } from 'src/app/src/_core/models/khoahoc';
import { CartService } from 'src/app/src/_core/services/cart.service';
import { UserService } from 'src/app/src/_core/services/user.service';
import Swal from 'sweetalert2';
import 'magnific-popup';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  constructor(private route:Router, private atvRoute: ActivatedRoute, private khoaHocService: KhoaHocService, private cartService: CartService, private userS: UserService) { }
  @Input() cart: any = {}
  khoaHocId: any;
  mangKHId: any;
  thongTinKH: KhoaHoc;
  tenKh: string;
  hinhAnh: string;
  giangVien: string;
  thanhTien: string;
  danhGia: Array<any> = [];
  danhSachComment: any;
  baiGiangList:any
  flag =false;
  ngOnInit() {
    this.atvRoute.params.subscribe(data => {
      this.khoaHocId = (data.id);
      this.mangKHId = (data.mangKHid);
      const course = JSON.parse(localStorage.getItem('ownCourse'));
      let ownC = course.find(x =>x.id ==this.khoaHocId);
      if(ownC){
        this.flag =true;
      }
      this.khoaHocService.LayDanhSachBaiGiang(this.khoaHocId).subscribe((res:any)=>{
        console.log(res)
        this.baiGiangList= res;
      })
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
    },err => {
      this.route.navigateByUrl('/notfound');
    })

  }
  addCart() {
    let addedCourse = {
      Id: this.khoaHocId,
      MangKHID: this.mangKHId,
      TenKH: this.tenKh,
      Gia: this.thanhTien,
      TenGiangVien: this.giangVien,
      HinhAnh: this.hinhAnh,

    };
    this.cartService.cart.emit(addedCourse);
    // console.log(addedCourse);
  }
  loadComment() {
    this.khoaHocService.LayDanhSachComment(this.khoaHocId).subscribe((res: any) => {
      this.danhSachComment = res.data;
    })

  }
  comment(thongtin) {
    if (thongtin.sao != '') {
      let tieuDe = ''
      let rate = thongtin.sao;
      switch (rate) {
        case '1': {
          tieuDe = 'Không hài lòng';
          break;
        }
        case '2': {
          tieuDe = 'Tạm được';
          break;
        }
        case '3': {;
          tieuDe = 'Bình thường';
          break;
        }
        case '4': {
          tieuDe = 'Hài lòng';
          break;
        }
        case '5': {
          tieuDe = 'Rất hài lòng';
          break;
        }
      }
      let thongTinDanhGia = {
        Diem: rate,
        TieuDe: tieuDe,
        NoiDung: thongtin.NoiDung
      }
      this.khoaHocService.ThemDanhGia(this.khoaHocId,thongTinDanhGia).subscribe((res:any)=>{
        if(typeof res =='object'){
          alert('Cảm ơn bạn đã đánh giá');
        }
        else{
          alert('Bạn cần sở hữu khóa học để đánh giá')
        }
      })
    }



    let thongTinComment = {
      NoiDung: thongtin.NoiDung
    }
    this.khoaHocService.ThemComment(this.khoaHocId,thongTinComment).subscribe(res=>{
      Swal.fire('Thành công','Thêm bình luận thành công','success')
      this.khoaHocService.LayDanhSachComment(this.khoaHocId).subscribe((res: any) => {
        this.danhSachComment = res.data;
      })
    })

  }
  loadBaiGiang(){
    // this.khoaHocService.LayDanhSachBaiGiang(this.khoaHocId).subscribe((res:any)=>{
    //   console.log(res)
    //   this.baiGiangList= res.data;
    // })
    $('.play-video').magnificPopup({
      type: 'iframe'
  });
  $.extend(true, $.magnificPopup.defaults, {
      iframe: {
          patterns: {
              youtube: {
                  index: 'youtube.com',
                  id: 'embed/',
                  src: 'https://www.youtube.com/embed/%id%?autoplay=1'
              }
          }
      }
  });
  }
}
