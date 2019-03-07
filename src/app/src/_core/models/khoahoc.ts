export class KhoaHoc{
    public Id:number;
    public MangKh_id:number;
    public GiangVien_id:number;
    public HinhAnh:string;
    public TenKh:string;
    public TomTat:string;
    public GiaTien:number;
    public DanhGia:number;
    public SoLuotXem:number;
    constructor(id:number,mangkh:number,giangvien:number,hinhanh:string,tenkh:string,tomtat:string,giatien:number,danhgia:number,soluotxem:number){
        this.Id=id;
        this.MangKh_id=mangkh;
        this.GiangVien_id=giangvien;
        this.HinhAnh=hinhanh;
        this.TenKh=tenkh;
        this.TomTat=tomtat;
        this.GiaTien=giatien;
        this.DanhGia=danhgia;
        this.SoLuotXem=soluotxem;
    }

    
}