import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from 'src/app/src/_core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-level',
  templateUrl: './admin-level.component.html',
  styleUrls: ['./admin-level.component.css']
})
export class AdminLevelComponent implements OnInit {

  constructor(private userS:UserService,private chRef:ChangeDetectorRef) { }

  ngOnInit() {
    this.loadLevel();
  }
  danhSachLevel:any
  idLevelUpdate:number;
  tenLevelHienTai:string;
  loadLevel(){
    this.userS.LayDanhSachLevel().subscribe((res:any)=>{
      this.danhSachLevel = res.data;
    })
  }
  updateTrigger(id,ten){
    this.idLevelUpdate=id;
    this.tenLevelHienTai=ten;
  }
  xoaLevel(id){
    Swal.fire({
      type:'warning',
      title:'Không thể khôi phục sau khi xóa',
      showCancelButton:true,
      confirmButtonText:'Đồng ý xóa'
    }).then(res =>{
      if(res.value){
        this.userS.XoaLevel(id).subscribe((res:any)=>{
            if(typeof res == 'object'){
              Swal.fire('Xóa thành công',res.data,'success').then(()=>{
                this.loadLevel();
              })
            }
            else{
              Swal.fire('Thất bại',res,'error');
            }
        })
      }
    })
  }
  update(thongTin:any){
    this.userS.CapNhatLevel(this.idLevelUpdate,thongTin).subscribe((res:any)=>{
      if(typeof res =='object'){
        Swal.fire('Thành công',res.data,'success');

      }
      else{
        Swal.fire('Thất bại',res,'error');
      }
    })
  }
  addNew(thongTin:any){
    this.userS.ThemLevel(thongTin).subscribe((res:any)=>{
      if(typeof res =='object'){
        Swal.fire('Thành công',res.data,'success')
      }
      else {
        Swal.fire('Thất bại',res,'error');
      }
      
    })
  }

}
