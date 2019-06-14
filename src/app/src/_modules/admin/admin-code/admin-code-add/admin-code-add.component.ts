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
    let formData = new FormData()
    formData.set('file', this.fileData, this.fileData.name);
    this.userService.UploadCode(formData).subscribe((res: any) => {
      
      const preload: any = $('#preloader');
      let preloaDiv = document.getElementById("preloader");
      preloaDiv.style.display='block';
      preload.fadeOut('slow');
      setTimeout(() => {
        Swal.fire('Upload thành công','Đã upload','success');
      }, 600);
      
    }, err => {
      Swal.fire('Upload thất bại', 'Fail', 'error')
    })
  }
}
