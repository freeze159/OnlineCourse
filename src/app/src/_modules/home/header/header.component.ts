import { Component, OnInit, Input } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { forkJoin } from 'rxjs';
import { CartService } from 'src/app/src/_core/services/cart.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged: boolean = false;
  thongTinUser: Object = {
    'Id': '',
    'Ten': '',

  };
  constructor(private khoaHocService: KhoaHocService, private cartService: CartService) { }
  danhSachTheLoai: Array<any> = [];
  danhSachMang: Array<any> = [];
  array: Array<any> = [];
  flag = false;
  count: number = 0;
  @Input() cart: any = {}
  ngOnInit() {
    this.khoaHocService.LayTheLoaiKhoaHoc().subscribe((res: any) => {
      this.danhSachTheLoai = res.data;
    });
  // Lấy thông tin Cart 
    this.getCart();

    //Kiểm tra đăng nhập
    this.checkLogin();
    
    
  }
  checkLogin(){
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
    localStorage.clear();
    window.location.reload();
  }
  getCart(){
    let oldCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    if(JSON.parse(sessionStorage.getItem('cart'))){
      this.flag=true;
    }
    this.count = oldCart.length;
    console.log(oldCart);
    this.cartService.cart.subscribe((res: any) => {
      this.count=this.count+1;
      if (typeof res == 'object') {
        let newCart = {
          'KhoaHocid': res.Id,
          'MangKHid': res.MangKHID,
          'Count': oldCart.length
        }
        this.flag=true;
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
}
