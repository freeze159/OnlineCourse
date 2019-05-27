import { Component, OnInit } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private khoahocService:KhoaHocService) { }
  danhSachTheLoai: Array<any> = [];
  ngOnInit() {
    setTimeout(() => {
      this.khoahocService.LayTheLoaiKhoaHoc().subscribe((res: any) => {
        this.danhSachTheLoai = res.data;
      });
    }, 2000);
    
  }

}
