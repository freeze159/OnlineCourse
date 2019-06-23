import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import * as $ from 'jquery'
@Component({
  selector: 'app-mod-create',
  templateUrl: './mod-create.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./mod-create.component.css']
})
export class ModCreateComponent implements OnInit {
  @ViewChild('frmName') frmName: NgForm
  @ViewChild('step1') step1: ElementRef
  form = new FormGroup({
    name: new FormControl(''),
    lydo: new FormControl(''),
    ketqua: new FormControl(''),
    price: new FormControl(''),
  })
  public options: Object = {
    charCounterCount: true,
    toolbarButtons: {
      'moreText': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting'],
        'buttonsVisible': 6
      }
    },
    toolbarButtonsXS: {
      'moreText': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting'],
        'buttonsVisible': 6
      }
    },
    toolbarButtonsSM: {
      'moreText': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting'],
        'buttonsVisible': 6
      }
    },
    toolbarButtonsMD: {
      'moreText': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting'],
        'buttonsVisible': 6
      }
    },

  };
  name: string = ''
  summary: String = '';
  price: number = 0;
  idMangKhoaHoc = 1;
  idKhoaHocVuaThem: number;
  fileData: File = null;
  hinhAnh: any;
  constructor(private khoahocService: KhoaHocService) { }
  danhSachTheLoai: any;
  danhSachMangKhoaHoc: any;
  thongTinBody: any;
  ngOnInit() {
    this.khoahocService.LayTheLoaiKhoaHoc().subscribe(res => {
      this.danhSachTheLoai = res.data;
    })
  }
  getName() {

    let lydo = document.getElementById('h2lyDo').outerHTML
    let ketqua = document.getElementById('h2ketQua').outerHTML
    let ketquaClean = ketqua.replace(/id="h2ketQua" /g, "");
    let lyDoClean = lydo.replace(/id="h2lyDo" /g, "");
    // console.log(lyDoClean)
    // console.log(ketquaClean)
    this.name = this.form.value.name
    this.summary = lyDoClean + '\r\n' + this.form.value.lydo + ketquaClean +'\r\n'+ this.form.value.ketqua;
    this.price = this.form.value.price;
  }
  onSelect(theLoaiId) {
    this.khoahocService.LayMangKhoaHoc(theLoaiId).subscribe((res: any) => {
      this.danhSachMangKhoaHoc = res.data;
    })
  }
  getTheLoai(thongTin) {
    this.idMangKhoaHoc = thongTin.nhomKH;
    this.thongTinBody = {
      'TenKH': this.name,
      'TomTat': this.summary,
      'GiaTien': this.price
    }

  }
  onFileChange(event) {
    const preload: any = $('#preloader');
      let preloaDiv = document.getElementById("preloader");
    this.khoahocService.ThemKhoaHoc(this.idMangKhoaHoc, this.thongTinBody).subscribe((res: any) => {
      
      preloaDiv.style.display='block';
      
      this.idKhoaHocVuaThem = res.data.id;
      this.fileData = <File>event.target.files[0];
      let formData = new FormData();

      formData.set('HinhAnh', this.fileData, this.fileData.name);
      this.khoahocService.UpdateKhoaHocImage(this.idMangKhoaHoc, this.idKhoaHocVuaThem, formData).subscribe((res: any) => {
        this.hinhAnh = res.data;
        preload.fadeOut(1200);
      })

    }, err => {
      preload.fadeOut('slow');
      Swal.fire('Error', 'Bạn cần điền tên và tóm tắt khóa học', 'error');
    })

  }
  finish() {
    Swal.fire('Hoàn tất', 'Bạn đã tạo khóa học thành công hãy tạo bài giảng cho khóa học', 'success').then(res => {
      window.location.href = `/instructor/lecture/${this.idKhoaHocVuaThem}/${this.idMangKhoaHoc}`;
    })
  }
}
