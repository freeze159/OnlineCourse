import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from 'src/app/src/_core/services/user.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private userS:UserService,private chRef: ChangeDetectorRef,private route:Router) { }
  danhSachThanhToan:any;
  dataTable: any;
  ngOnInit() {
    this.userS.XemGhiDanhKhoaHoc().subscribe((res: any) => {
      this.danhSachThanhToan = res.data;
      
      this.chRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();
    })
  }

}
