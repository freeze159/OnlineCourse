import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { forkJoin } from 'rxjs';
import { CartService } from 'src/app/src/_core/services/cart.service';
import Swal from 'sweetalert2'
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged: boolean = false;
  thongTinUser:any = {
    'Id': '',
    'Ten': '',

  };
  constructor(private khoaHocService: KhoaHocService, private cartService: CartService,private location:Router) { }
  @ViewChild('frmDangKy') frmDangKy: NgForm;

  danhSachTheLoai: Array<any> = [];
  danhSachMang: Array<any> = [];
  array: Array<any> = [];
  flag = false;
  count: number = 0;
  @Input() cart: any = {}
  @Input() delted:any={}
  ngOnInit() {
    setTimeout(() => {
      this.khoaHocService.LayTheLoaiKhoaHoc().subscribe((res: any) => {
        this.danhSachTheLoai = res.data;
      });
    }, 1500);
    // Lấy thông tin Cart 
    this.getCart();
    //Kiểm tra đăng nhập
    this.checkLogin();
    this.cartService.delItems.subscribe((res:any) =>{
      this.count=res.Count;
      this.flag=res.Flag;
    })

  }
  checkLogin() {
    if (localStorage.getItem('userLogin')) {
      this.logged = true;
      let tmp = JSON.parse(localStorage.getItem('userLogin'));
      this.thongTinUser = {
        'Id': tmp.data.id,
        'Ten': tmp.data.name,
      };

    }
  }
  logOut() {
    localStorage.removeItem('userLogin');
    localStorage.removeItem('tokenbearer');
    sessionStorage.removeItem('cart');
    localStorage.clear();
    window.location.href='/';
  }
  getCart() {
    let oldCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    if (JSON.parse(sessionStorage.getItem('cart'))) {
      this.flag = true;
    }
    this.count = oldCart.length;
    // console.log(oldCart);
    this.cartService.cart.subscribe((res: any) => {
      this.count = this.count + 1;
      if (typeof res == 'object') {
        let newCart = {
          Id: res.Id,
          MangKHID: res.MangKHID,
          TenKH: res.TenKH,
          Gia: res.Gia,
          TenGiangVien:res.TenGiangVien,
          HinhAnh:res.HinhAnh
        }
        this.flag = true;
        oldCart.push(newCart);
        sessionStorage.setItem('cart', JSON.stringify(oldCart));
        Swal.fire({
          type: 'success',
          title: 'Thêm vào giỏ hàng thành công',
          showConfirmButton: false,
          timer: 1000
        })
      }

    })
  }
  search(key:any){
    let keyword = '';
    keyword=key.keyWord;
    let keyWordClean = keyword.replace(/ /g, "-")
    this.location.navigateByUrl(`/ket-qua/${keyWordClean}`);
    
  }
}
