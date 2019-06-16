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
  constructor(private route: Router, private atvRoute: ActivatedRoute, private khoaHocService: KhoaHocService, private cartService: CartService, private userS: UserService) { }
  @Input() cart: any = {}
 
  khoaHocId: any;
  mangKHId: any;
  thongTinKH: KhoaHoc;
  tenKh: string;
  hinhAnh: string;
  giangVien: string;
  thanhTien: string;
  danhGia: Array<any> = [];
  danhSachComment: Array<any>;
  danhSachRate: Array<any> = [];
  baiGiangList: any
  flag = false;
  flagNull = false;
  ngOnInit() {
    this.atvRoute.params.subscribe(data => {
      this.khoaHocId = (data.id);
      this.mangKHId = (data.mangKHid);
      const course = JSON.parse(localStorage.getItem('ownCourse'));
      if (course) {
        let ownC = course.find(x => x.id == this.khoaHocId);
        if (ownC) {
          this.flag = true;
        }
      }

      this.khoaHocService.LayDanhSachBaiGiangPublic(this.khoaHocId).subscribe((res: any) => {
        this.baiGiangList = res.data;
      })
    })

    this.khoaHocService.LayChiTietKhoaHoc(this.mangKHId, this.khoaHocId).subscribe((res: any) => {
      //Cắt chuỗi nội dung
      let wholeString: string = res.data.TomTat;
      let index: number = wholeString.indexOf('<h2 style="text-align: center;"><strong>KẾT QUẢ ĐẠT ĐƯỢC</strong></h2>');
      let stringKq = wholeString.slice(index, wholeString.length);
      let stringMain = wholeString.slice(0, index);
      document.getElementById('mainNoiDung').innerHTML = stringMain;
      document.getElementById('ketquadatduoc').innerHTML = stringKq;
      //    Lưu data chi tiét
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
    }, err => {
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
  }

  checkCo(id) {
    let userLogin = JSON.parse(localStorage.getItem('userLogin'));
    if (userLogin) {
      let userId = userLogin.data.id;
      if (userId == id) {
        return true;
      }
      else return false;
    }
    else return false;

  }
  loadComment() {
    this.khoaHocService.LayDanhSachComment(this.khoaHocId).subscribe((res: any) => {
      if (res.data.length == 0) {
        this.flagNull = true;
      }
      this.danhSachComment = res.data;

    })


  }
  loadRate() {
    this.khoaHocService.LayDanhSachDanhGia(this.khoaHocId).subscribe((res: any) => {
      for (let danhgia of res.data) {
        let diem = JSON.parse(danhgia.Diem);
        let newDanhGia: Array<number> = Array(diem).fill(5);
        danhgia.Diem = newDanhGia;
        this.danhSachRate.push(danhgia);

      }

    })
  }
  xoaRate(id) {
    Swal.fire({
      title: 'Bạn chắc chứ',
      text: "Không thể khôi phục sau khi xóa",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {

      if (result.value) {
        this.khoaHocService.XoaComment(this.khoaHocId, id).subscribe(res => {
          this.loadComment()
        })
        Swal.fire(
          'Đã xóa!',
          'Bình luận của bạn đã được xóa',
          'success'
        )
      }
    })

  }
  comment(thongtin) {
    this.flagNull = false;
    let thongTinComment = {
      NoiDung: thongtin.NoiDung
    }
    this.khoaHocService.ThemComment(this.khoaHocId, thongTinComment).subscribe(res => {
      Swal.fire('Thành công', 'Thêm bình luận thành công', 'success').then(res => {
        this.loadComment();
        $('#cmtBox').val('');
        
      })

    }, err => {
      Swal.fire({
        title: 'Bạn chưa đăng nhập',
        text: "Đăng nhập ngay!!!",
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đăng nhập'
      }).then((result) => {
        if (result.value) {
          this.route.navigateByUrl('/login');
        }
      })
    })

  }
  rate(thongtin) {
    if (thongtin.sao != '') {
      let rate = thongtin.sao;
      let thongTinDanhGia = {
        Diem: rate,
        TieuDe: thongtin.TieuDe,
        NoiDung: thongtin.NoiDung
      }
      this.khoaHocService.ThemDanhGia(this.khoaHocId, thongTinDanhGia).subscribe((res: any) => {
        if (typeof res == 'object') {
          Swal.fire('Thành công','Cảm ơn bạn đã đánh giá','success');
          $('#rateBox').val('');
        }
        else {
          Swal.fire('Thông báo',res,'warning');
        }
      }, err => {
        Swal.fire({
          title: 'Bạn chưa đăng nhập',
          text: "Đăng nhập ngay!!!",
          type: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Đăng nhập'
        }).then((result) => {
          if (result.value) {
            this.route.navigateByUrl('/login');
          }
        })
      })
    }
    else {
      Swal.fire('Thông báo','Bạn chưa chọn điểm','warning');
    }
  }
  
  loadBaiGiang() {
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