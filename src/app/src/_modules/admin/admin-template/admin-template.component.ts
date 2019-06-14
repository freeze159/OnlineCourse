import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/src/_core/services/user.service';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css']
})
export class AdminTemplateComponent implements OnInit {
  
  constructor(private userS: UserService) { }

  ngOnInit() {
  }
    
  reportHoaDon(event) {
    event.preventDefault();
    this.userS.ReportHoaHon().subscribe((data) => {
      var loai = 'bill'
      this.downloadFile(data,loai);
    })
  }
  reportCodeKhoaHoc(event){
    event.preventDefault();
    this.userS.ReportCodeKhoaHoc().subscribe((data) => {
      var loai = 'code'
      this.downloadFile(data,loai);
    })
  }
  downloadFile(data,loai){
    var url = window.URL.createObjectURL(new Blob([data]));
   var a = document.createElement('a');
   document.body.appendChild(a);
   a.setAttribute('style', 'display: none');
   a.href = url;
   if(loai=='code'){
    a.download = 'ReportCode.xlsx';
   }
   if(loai=='bill'){
    a.download = 'ReportHoaDon.xlsx';
   }
   a.click();
   window.URL.revokeObjectURL(url);
   a.remove(); // remove the element
  }
}
