import React, { createContext, useState, ReactNode } from 'react';
import { PortfolyoVerisi, KisiBilgileri, Egitim, Tecrube, Proje } from '../types/PortfolioData';

const FAKE_PORTFOLIO_DATA: PortfolyoVerisi = {
    kisi: {
        ad: "Mehmet",
        soyad: "VARAK",
        unvan: " React Geliştiricisi",
        fotografUrl: "/assets/profile.png",
        email: "mehmet.varak@rastgelemail.com",
        telefon: "+90 532 981 61 47",
        adres: "Antalya, Türkiye",
        linkedinUrl: "https://linkedin.com/in/mehmetvarak-dev",
        githubUrl: "https://github.com/mehmetvarak",
    } as KisiBilgileri,
    
    egitimler: [
        {
            id: 1,
            okul: "Pamukkale Üniversitesi",
            derece: "Bilgisayar Bilimleri Yüksek Lisansi",
            donem: "2017 - 2019",
            aciklama: "Yapay zeka ve Front-end optimizasyonu üzerine çalışmalar.Tez konusu: React'te büyük ölçekli state yönetimi."
        },
        {
            id: 2,
            okul: "Ege Üniversitesi",
            derece: "Yazılım Mühendisliği Lisansı",
            donem: "2014 - 2017",
            aciklama: "Bölüm birincisi mezun oldu. Üniversite boyunca 2 farklı staj tamamladı."
        },
    ] as Egitim[],

    tecrubeler: [
        {
            id: 1,
            sirket: "Lotus Yazılım A.Ş.",
            pozisyon: "Uzman Front-end Mimari",
            donem: "Ocak 2025 - Günümüz",
            sorumluluklar: [
                "Projenin Front-end mimarisini React 18 ve TypeScript ile tasarlamak ve uygulamak.",
                "Ekipler arasi teknik iletişim ve kod inceleme süreçlerini yönetmek.",
                "Performans iyileştirmeleri yaparak sayfa yüklenme süresini %40 azaltmak."
            ]
        },
        {
            id: 2,
            sirket: "Local Software House",
            pozisyon: "Full Stack Geliştirici",
            donem: "Temmuz 2019 - Aralık 2024",
            sorumluluklar: [
                "Yeni ürün özelliklerinin hem Front-end hem de Back-end kısımlarını geliştirmek (MERN Stack).",
                "CI/CD süreçlerini otomatikleştirmek ve bakımını yapmak."
            ]
        },
    ] as Tecrube[],

    yetenekler: [
        "React", "TypeScript", "JavaScript", "Flowbite", "Tailwind CSS", "Node.js", 
        "Redux/Zustand", "RESTful API", "MongoDB", "Git", "Docker", "AWS S3", "Scrum"
    ],

    projeler: [
        {
            id: 1,
            baslik: "Proje Yönetim Paneli (SaaS)",
            aciklama: "Gerçek zamanlı görev takibi ve ekip işbirliği için geliştirilmiş bir SaaS uygulaması.",
            teknolojiler: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Docker"],
            projeUrl: "#"
        },
        {
            id: 2,
            baslik: "E-ticaret Sitesi",
            aciklama: "Kullanıcı dostu arayüze sahip, yüksek trafikli bir e-ticaret platformunun Front-end geliştirilmesi.",
            teknolojiler: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
            projeUrl: "#"
        },
    ] as Proje[],
};

export type PortfolioContextType = {
    data: PortfolyoVerisi;
    setData: React.Dispatch<React.SetStateAction<PortfolyoVerisi>>;
};

export const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState(FAKE_PORTFOLIO_DATA); 

    return (
        <PortfolioContext.Provider value={{ data, setData }}>
            {children}
        </PortfolioContext.Provider>
    );
};