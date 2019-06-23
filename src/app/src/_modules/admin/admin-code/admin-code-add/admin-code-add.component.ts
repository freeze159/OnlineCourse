import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from 'src/app/src/_core/services/user.service';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
@Component({
  selector: 'app-admin-code-add',
  templateUrl: './admin-code-add.component.html',
  styleUrls: ['./admin-code-add.component.css']
})
export class AdminCodeAddComponent implements OnInit {

  constructor(private userService: UserService, private chRef: ChangeDetectorRef) { }
  fileData: File = null;
  flag: boolean = false;
  ngOnInit() {

  }
  onFileChange(event) {
    this.fileData = <File>event.target.files[0];

  }
  Upload() {
    const preload: any = $('#preloader');
    let preloaDiv = document.getElementById("preloader");
    preloaDiv.style.display = 'block';
    let formData = new FormData();
    formData.set('file', this.fileData, this.fileData.name);
    this.userService.UploadCode(formData).subscribe((res: any) => {
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
}
