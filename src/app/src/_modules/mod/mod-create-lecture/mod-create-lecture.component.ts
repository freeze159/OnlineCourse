import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import * as $ from 'jquery'

@Component({
  selector: 'app-mod-create-lecture',
  templateUrl: './mod-create-lecture.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./mod-create-lecture.component.css']
})
export class ModCreateLectureComponent implements OnInit {
  BaiGiangForm: FormGroup
  name: string;
  KhoaHocUpdateForm = new FormGroup({
    MangKH_id: new FormControl(''),
    TenKH: new FormControl(''),
    GiaTien: new FormControl(''),
    GiamGia: new FormControl(''),
    lydo: new FormControl(''),
    ketqua: new FormControl(''),

  })
  constructor(private atv: ActivatedRoute, private khoahocS: KhoaHocService, private fb: FormBuilder, private route: Router) { }
  courseId: number;
  short: string;
  p = 1;
  hinhAnh: string;
  danhSachThem: any;
  courseGroupId: number;
  courseList: any;
  soBaiGiang: Array<any>;
  AllBaiGiang = [];
  submitted = false;
  confirmNum: boolean = false;
  failInput: boolean = true;
  danhSachMangKhoaHoc: any;
  danhSachTheLoai: any;
  price: number;
  giam: number;
  tenMangKH; string
  fileData: File;
  fileExcel: File;
  stringKq
  stringMain
  flagThuCong: boolean = false;
  flagExcel: boolean = false;
  public options = {
    placeholderText: 'Start typing something...'
  }
  ngOnInit() {
    this.atv.params.subscribe(res => {
      this.courseId = res.id;
      this.courseGroupId = res.mangKhoaHoc;
      this.khoahocS.LayChiTietKhoaHoc(this.courseGroupId, this.courseId).subscribe(res => {
        console.log(res.data)
        this.hinhAnh = res.data.HinhAnh;
        this.name = res.data.TenKH;
        this.short = res.data.TomTat;
        this.price = res.data.GiaTien;
        this.giam = res.data.GiamGia;
        this.tenMangKH = res.data.MangKH;
        // $('#lyDoMain').val('con cac địt mẹ m')
        // console.log(document.getElementById('lyDoMain').value)
        // let wholeString: string = res.data.TomTat;
        // let index: number = wholeString.indexOf('<h2 style="text-align: center;"><strong>KẾT QUẢ ĐẠT ĐƯỢC</strong></h2>');
        // this.stringKq = wholeString.slice(index, wholeString.length);
        // this.stringMain = wholeString.slice(0, index);
        // document.getElementById('lyDoMain'). = this.stringMain
        // document.getElementById('ketquadatduoc').innerHTML = String;
      })
    })
    this.khoahocS.LayDanhSachBaiGiang(this.courseId).subscribe((res: any) => {
      this.courseList = res;

    })
    this.khoahocS.LayTheLoaiKhoaHoc().subscribe((res: any) => {
      this.danhSachTheLoai = res.data;
    })

  }
  layBaiGiang() {
    this.khoahocS.LayDanhSachBaiGiang(this.courseId).subscribe((res: any) => {
      this.courseList = res;
    })
  }
  frmAdd(soLuongBaiGiang) {

    this.soBaiGiang = Array(soLuongBaiGiang.soLuong).fill({ 'baigiang': 'tenBaiGiang' });
    this.AllBaiGiang = this.soBaiGiang;
    this.confirmNum = true;
    this.createform();
  }
  ChonLoai(loai: string) {
    if (loai == 'thucong') {
      this.flagThuCong = true;
      this.flagExcel = false;
    }
    if (loai == 'excel') {
      this.flagThuCong = false;
      this.flagExcel = true;
    }
  }
  onSelect(theLoaiId) {
    this.khoahocS.LayMangKhoaHoc(theLoaiId).subscribe((res: any) => {
      this.danhSachMangKhoaHoc = res.data;
    })
  }
  createform() {
    let arr = [];
    for (let i = 0; i < this.AllBaiGiang.length; i++) {
      arr.push(this.BuildFormDynamic(this.AllBaiGiang[i]))
    }
    this.BaiGiangForm = this.fb.group({
      data: this.fb.array(arr)
    })
  }
  BuildFormDynamic(BaiGiangData): FormGroup {
    return this.fb.group({
      TenBaiGiang: [''],
      MoTa: [''],
      EmbededURL: [''],
      HocThu: ['0']
    })
  }
  SaveData() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.BaiGiangForm.invalid) {
      Swal.fire('Thất bại', 'Chưa nhập đủ thông tin', 'error');
      return;
    }
    else {
      for (let item of this.BaiGiangForm.value.data) {
        item.TenBaiGiang = item.TenBaiGiang.trim();
        item.MoTa = item.MoTa.trim();
        item.EmbededURL = item.EmbededURL.trim();
        if (item.TenBaiGiang == '') {
          Swal.fire('Lỗi', 'Không được bỏ trống tên bài giảng', 'error');
          return;

        }
        // if (item.MoTa == '') {
        //   Swal.fire('Lỗi', 'Không được bỏ trống mô tả', 'error');
        //   return;

        // }
        if (item.EmbededURL == '') {

          Swal.fire('Lỗi', 'Không được bỏ trống đường dẫn ', 'error');
          return;

        }

      }
      if (this.failInput) {
        this.danhSachThem = this.BaiGiangForm.value;
        this.khoahocS.ThemBaiGiang(this.courseId, this.danhSachThem).subscribe((res: any) => {
          if (typeof res == 'object') {
            Swal.fire('Thành công', 'Thêm Bài Giảng thành công', 'success')
            this.BaiGiangForm.reset();
          }
          else {
            Swal.fire('Lỗi', res, 'error')
          }
        })
      }


    }
  }
  delete(idBaiGiang: number, idKhoaHoc: number) {
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
        let indexDel = this.courseList.findIndex(x => x.id == idBaiGiang);
        this.courseList.splice(indexDel, 1);
        this.khoahocS.XoaBaiGiang(idKhoaHoc, idBaiGiang).subscribe((reS: any) => {
          if (typeof reS == 'object') {

            Swal.fire(
              'Đã xóa!',
              'Bài giảng đã được xóa',
              'success'
            )
          }


        }, err => { Swal.fire('Thất bại', 'Lỗi', 'error') })

      }

    })


  }
  onFileChange(event) {
    const preload: any = $('#preloader');
    let preloaDiv = document.getElementById("preloader");
    preloaDiv.style.display = 'block';
    this.fileData = <File>event.target.files[0];
    let formData = new FormData();

    formData.set('HinhAnh', this.fileData, this.fileData.name);
    this.khoahocS.UpdateKhoaHocImage(this.courseGroupId, this.courseId, formData).subscribe((res: any) => {
      this.hinhAnh = res.data;
      preload.fadeOut('slow');
    }
    )


  }
  upExcelBaiGiang(event) {
    const preload: any = $('#preloaderExcel');
    let preloaDiv = document.getElementById("preloaderExcel");
    preloaDiv.style.display = 'block';
    this.fileExcel = <File>event.target.files[0];
    let formData = new FormData();

    formData.set('file', this.fileExcel, this.fileExcel.name);
    this.khoahocS.ThemBaiGiangExcel(this.courseId, formData).subscribe((res: any) => {
      if (typeof res == 'object') {
        Swal.fire('Thành công', res.data, 'success').then(res => {
          preload.fadeOut('slow');
        })

      }
      else {
        Swal.fire('Thất bại', res, 'error').then(res => {
          preload.fadeOut('slow');
        })


      }
    }, err => {
      if (err.error.errors) {
        let loi = err.error.errors.file[0]
        if (loi) {
          Swal.fire('Thất bại', loi, 'error').then(res => {
            preload.fadeOut('slow');
          })
        }
      }


      else {
        Swal.fire('Thất bại', 'File excel chưa đúng cấu trúc', 'error').then(res => {
          preload.fadeOut('slow');
        })
      }

    })
  }
  update(thongTin: any) {
    let lydo = document.getElementById('h2lyDo').outerHTML.replace(/id="h2lyDo" /g, "");
    let ketqua = document.getElementById('h2ketQua').outerHTML.replace(/id="h2ketQua" /g, "");
    let tomTat = lydo + '\r\n' + this.KhoaHocUpdateForm.value.lydo + ketqua + '\r\n' + this.KhoaHocUpdateForm.value.ketqua;
    this.khoahocS.LayChiTietKhoaHoc(this.courseGroupId, this.courseId).subscribe((res: any) => {
      let ketqua = res.data;
      if (this.KhoaHocUpdateForm.value.TenKH == '') {
        this.KhoaHocUpdateForm.value.TenKH = ketqua.TenKH;
      }
      if (this.KhoaHocUpdateForm.value.MangKH_id == '') {
        this.KhoaHocUpdateForm.value.MangKH_id = ketqua.TenKH;
      }
      if (tomTat == '') {
        tomTat = ketqua.TomTat;
      }
      if (this.KhoaHocUpdateForm.value.GiaTien == '') {
        this.KhoaHocUpdateForm.value.GiaTien = ketqua.GiaTien;
      }
      if (this.KhoaHocUpdateForm.value.GiamGia == '') {
        this.KhoaHocUpdateForm.value.GiamGia = 0
      }
      let thongTinUpdate = {
        TenKH: this.KhoaHocUpdateForm.value.TenKH,
        MangKH_id: this.KhoaHocUpdateForm.value.MangKH_id,
        GiaTien: this.KhoaHocUpdateForm.value.GiaTien,
        GiamGia: this.KhoaHocUpdateForm.value.GiamGia,
        TomTat: tomTat
      }
      this.khoahocS.UpdateKhoaHoc(this.courseId, this.courseGroupId, thongTinUpdate).subscribe((res: any) => {
        Swal.fire('Thành công', 'Cập nhật khóa học thành công', 'success').then(res => {
          this.route.navigateByUrl(`/instructor/lecture/${this.courseId}/${thongTin.MangKH_id}`);

        });
      }, err => {
        Swal.fire('Thất bại', err, 'error');
      })
    })
  }
  deleteCourse() {
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
        this.khoahocS.XoaKhoaHoc(this.courseId, this.courseGroupId).subscribe((res: any) => {
          Swal.fire(
            'Đã xóa!',
            'Khóa học đã được xóa',
            'success'
          ).then(res => {
            window.location.href = '/instructor'
          })

        }, err => { Swal.fire('Thất bại', 'Lỗi', 'error') })
      }

    })
  }
}
