export class KhoaHoc{
    public DanhGia:string;
    public GiaTien:string;
    public GiamGia:string
    public GiangVien:string;
    public HinhAnh:string;
    public MangKH:string;
    public SoLuotXem:number;
    public TenKH:string;
    public ThanhTien:string;
    public TomTat:string;
    public id:number;
    
    constructor(DanhGia:string,GiaTien:string,GiamGia:string,GiangVien:string,HinhAnh:string,MangKH:string,
        SoLuotXem:number,TenKH:string,ThanhTien:string,TomTat:string,id:number){
          
            this.DanhGia=DanhGia;
            this.GiaTien=GiaTien;
            this.GiamGia=GiamGia;
            this.GiangVien=GiangVien;
            this.HinhAnh=HinhAnh;
            this.MangKH = MangKH;
            this.SoLuotXem=SoLuotXem;
            this.TenKH=TenKH;
            this.ThanhTien==ThanhTien;
            this.TomTat=TomTat;
            this.id=id;
        
    }

    
}