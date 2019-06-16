import { Component, OnInit, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-watch',
  templateUrl: './course-watch.component.html',
  styleUrls: ['./course-watch.component.css']
})
export class CourseWatchComponent implements OnInit {
  @ViewChild('vid') videos:ElementRef
  @ViewChild('link') links:ElementRef
  
  idKhoaHoc:any
  baiGiangList:any
  danhSachCauHoi:any;
  idBaiGiangCurrent:number
  videoMoDau:string;
  baiGiangDauTien:any;
  mangKhid:number;
  constructor(private khoaHocService:KhoaHocService,private atv:ActivatedRoute) { }

  ngOnInit() {
    //Lấy params id và mangKHid
    this.atv.params.subscribe((res:any)=>{
      this.idKhoaHoc=res.id;
      this.mangKhid =res.mangKHid;
      
    })
    this.khoaHocService.LayDanhSachBaiGiang(this.idKhoaHoc).subscribe((res:any)=>{
      this.baiGiangList=res;
      this.baiGiangDauTien=this.baiGiangList[0];
      this.videos.nativeElement.src='https://'+this.baiGiangDauTien.EmbededURL;
      this.getCauHoi(this.baiGiangDauTien.id);
    })
    // this.khoaHocService.LayDanhSachCauHoi()
    //icon
    document.getElementById('openNav').innerHTML='<i class="fa fa-bars">'
  }
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  openNav() {
    
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
    // document.getElementById("openNav").id='closeNav';
    setTimeout(()=>{document.getElementById("openNav").onclick=this.closeNav;},200)
    document.getElementById('openNav').innerHTML='<i class="fa fa-times"></i>'
    document.getElementById("mySidenav").style.display='block';

    // 1200px
    // 992px
    // 767px
    if($(window).width()<768){
      document.getElementById("mySidenav").style.width = "100%";
      document.getElementById("mySidenav").style.position = "relative";
      document.getElementById("mySidenav").style.bottom = "0";
      document.getElementById("mySidenav").style.display='block';
      document.getElementById("main").style.marginLeft = "0px";
      //
      
    }
    // 480px
    

  }
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("mySidenav").style.position = "absolute";

    setTimeout(()=>{document.getElementById("openNav").onclick=this.openNav;},200)
    document.getElementById('openNav').innerHTML='<i class="fa fa-bars">'
    
    // 767px
    if($(window).width()<768){
      document.getElementById("main").style.marginLeft = "0";
      document.getElementById("mySidenav").style.position = "absolute";

      document.getElementById("mySidenav").style.display = "none";
      document.getElementById("mySidenav").style.transition='0s';

    }
  
  }
  changeLecture(video:string){
    // console.log(this.videos);
    console.log(video)
    this.videos.nativeElement.src='https://'+video;
    // console.log(this.videos.nativeElement.src);
    // console.log(this.links.nativeElement);
  }
  getCauHoi(id){
    this.idBaiGiangCurrent = id;
    this.khoaHocService.LayDanhSachCauHoi(id).subscribe((res:any)=>{
      this.danhSachCauHoi = res.data;
      console.log(this.danhSachCauHoi)
    })
  }
  themCauHoi(thongTin){
    console.log(thongTin);
    console.log(this.idBaiGiangCurrent)
    this.khoaHocService.ThemCauHoi(this.idBaiGiangCurrent,thongTin).subscribe((res:any)=>{
      if(typeof res =='object'){
        Swal.fire('Thành công',res.data,'success').then(res => {
          this.getCauHoi(this.idBaiGiangCurrent);
          $('#askContent').val('');
          $('#askBox').val('');
        });
      }
      else
      {
        Swal.fire('Thất bại',res,'error');
      }
    })
  }
  checkQues(tenUser:string){
    const userLog = JSON.parse(localStorage.getItem('userLogin'))
    if(userLog){
      
      if(userLog.data.name == tenUser){
        return true
      }
      else return false;
    }
  }
  xoaQues(id){
    Swal.fire({
      title: 'Bạn chắc chứ',
      text: "Không thể khôi phục sau khi xóa",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {

      if (result.value) {
        this.khoaHocService.XoaCauHoi(this.idBaiGiangCurrent,id).subscribe(res => {
          this.getCauHoi(this.idBaiGiangCurrent)
        })
        Swal.fire(
          'Đã xóa!',
          'Câu hỏi của bạn đã được xóa',
          'success'
        )
      }
    })
  }
}
