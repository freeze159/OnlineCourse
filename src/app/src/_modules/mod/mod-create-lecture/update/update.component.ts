import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private atv:ActivatedRoute,private khoaHocS:KhoaHocService) { }
  tenBaiGiang:string;
  moTa:string;
  idBaiGiang:number;
  idKhoaHoc:number;
  link:string;
  ngOnInit() {
    this.atv.queryParams.subscribe(res =>{
      this.tenBaiGiang=res.TenBaiGiang;
      this.moTa=res.MoTa;
      this.link=res.EmbededURL;
      this.idBaiGiang=res.idL;
    })
    this.atv.params.subscribe(res => {
      this.idKhoaHoc = res.id;
    })
    
  }
  update(thongTin:any){
    thongTin.TenBaiGiang=thongTin.TenBaiGiang.trim();
    thongTin.MoTa=thongTin.MoTa.trim();
    thongTin.EmbededURL=thongTin.EmbededURL.trim();
    if(thongTin.TenBaiGiang == ''){
      thongTin.TenBaiGiang = this.tenBaiGiang;
    }
    if(thongTin.MoTa == ''){
      thongTin.MoTa = this.moTa;
    }
    if(thongTin.EmbededURL == ''){
      thongTin.EmbededURL = this.link;
    }
    console.log(thongTin);
    this.khoaHocS.UpdateBaiGiang(this.idKhoaHoc,this.idBaiGiang,thongTin).subscribe((res:any)=> {
      if(typeof res =='object'){
        Swal.fire('Thành công',res.data,'success');
        window.location.href= '../'
      }
      else(Swal.fire('Thất bại',res,'error'))
    })
  }

}
