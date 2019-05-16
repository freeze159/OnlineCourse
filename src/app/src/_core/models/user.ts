export class User {
     public HinhAnh: string
     public NgaySinh: string
     public SoDienThoai: string
     public api_token: string
     public email: string
     public id: number
     public level_id: string
     public name: string
     public provider: null
     public provider_id: null
     public verify_email: string
     constructor(hinhAnh:string,ngaySinh:string,phone:string,jwk:string,email:string,id:number,level:string,name:string,verify:string){
          this.HinhAnh=hinhAnh;
          this.NgaySinh=ngaySinh;
          this.SoDienThoai=phone;
          this.api_token=jwk;
          this.email=email;
          this.id=id;
          this.level_id=level;
          this.name=name;
          this.verify_email=verify;
           
        
    }
}