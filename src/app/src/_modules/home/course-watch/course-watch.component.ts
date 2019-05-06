import { Component, OnInit, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { KhoaHocService } from 'src/app/src/_core/services/khoa-hoc.service';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-course-watch',
  templateUrl: './course-watch.component.html',
  styleUrls: ['./course-watch.component.css']
})
export class CourseWatchComponent implements OnInit {
  @ViewChild('vid') videos:ElementRef
  @ViewChild('link') links:ElementRef
  
  idKhoaHoc
  baiGiangList:any=[
    // {TenBaiGiang:'Bai 1',Link:'https://www.youtube.com/embed/4hiV5WH3vm8'},
    // {TenBaiGiang:'Bai 2',Link:'https://www.youtube.com/embed/ux3rRgUV2MM'},
    // {TenBaiGiang:'Bai 3',Link:'https://www.youtube.com/embed/akXGSw7H49Y'},
    // {TenBaiGiang:'Bai 4',Link:'https://www.youtube.com/embed/akXGSw7H49Y'},
  ]
  constructor(private khoaHocService:KhoaHocService,private atv:ActivatedRoute) { }

  ngOnInit() {
    //Lấy params id và mangKHid
    this.atv.params.subscribe((res:any)=>{
      this.idKhoaHoc=res.id;
      
    })
    this.khoaHocService.LayDanhSachBaiGiang(this.idKhoaHoc).subscribe((res:any)=>{
      this.baiGiangList=res;
      // console.log(this.baiGiangList);
    })
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
    if($(window).width()<992){
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.getElementById("mySidenav").style.display='block';

    }
    // 767px
    if($(window).width()<767){
      document.getElementById("mySidenav").style.width = "100%";
      document.getElementById("mySidenav").style.position = "relative";
      document.getElementById("mySidenav").style.top = "0";
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
    setTimeout(()=>{document.getElementById("openNav").onclick=this.openNav;},200)
    document.getElementById('openNav').innerHTML='<i class="fa fa-bars">'
    if($(window).width()<992){
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      document.getElementById("mySidenav").style.display='block';

    }
    // 767px
    if($(window).width()<767){
      document.getElementById("main").style.marginLeft = "0";
      document.getElementById("mySidenav").style.display = "none";
      document.getElementById("mySidenav").style.transition='1s';

    }
  
  }
  changeLecture(video:string){
    console.log(this.videos);
    this.videos.nativeElement.src='https://'+video;
    // console.log(this.videos.nativeElement.src);
    // console.log(this.links.nativeElement);
  }
}
