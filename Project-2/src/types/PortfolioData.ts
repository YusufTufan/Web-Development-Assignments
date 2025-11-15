//Kişisel bilgiler
export type KisiBilgileri = {
    ad: string;
    soyad: string;
    unvan: string;          
    fotografUrl: string;      
    email: string;
    telefon: string;
    adres: string; 
    linkedinUrl: string;
    githubUrl: string;
};

//Eğitim bilgileri
export type Egitim = {
    id: number;
    okul: string;
    derece: string;         
    donem: string;         
    aciklama: string;    
};

//Tecrübe bilgileri
export type Tecrube  = {
    id: number;
    sirket: string;
    pozisyon: string;
    donem: string;         
    sorumluluklar: string[];
};

//Proje bilgileri
export type Proje  = {
    id: number;
    baslik: string;
    aciklama: string;
    teknolojiler: string[];
    projeUrl: string;
};

//Portföy verisi
export type PortfolyoVerisi = {
    kisi: KisiBilgileri;
    egitimler: Egitim [];
    tecrubeler: Tecrube [];
    yetenekler: string[];
    projeler: Proje [];
};