import React from "react";
import "../styles/FooterStyle.css";

const CustomFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>TECHCAREER</h4>
        <ul>
          <li>Hakkımızda</li>
          <li>Etkinlikler</li>
          <li>Şirketler İçin</li>
          <li>Eğitmen Ol</li>
          <li>İş Birliği</li>
          <li>İletişim</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>BAŞVUR</h4>
        <ul>
          <li>Bootcamp</li>
          <li>Hackathon</li>
          <li>Hiring Challenge</li>
          <li>İş İlanları</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>SENİN İÇİN</h4>
        <ul>
          <li>Komünite</li>
          <li>TDC</li>
          <li>Blog</li>
          <li>Podcast</li>
          <li>Kariyer Rehberi</li>
          <li>Teknik Sözlük</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>VERİ POLİTİKAMIZ</h4>
        <ul>
          <li>Aydınlatma Metni</li>
          <li>Hizmet Sözleşmesi</li>
          <li>Açık Rıza Metni</li>
          <li>Çerez Politikası</li>
        </ul>
      </div>
      <div className="footer-logo">
        <h3>techcareer.net</h3>
        <p>Türkiye'nin teknoloji kariyeri platformu</p>
      </div>
      <div className="footer-social">
        <ul>
          <li>
            <i className="fab fa-x-twitter"></i>
          </li>
          <li>
            <i className="fab fa-instagram"></i>
          </li>
          <li>
            <i className="fab fa-linkedin-in"></i>
          </li>
          <li>
            <i className="fab fa-youtube"></i>
          </li>
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default CustomFooter;
