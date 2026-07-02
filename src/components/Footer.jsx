//import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* SECCIÓN SUPERIOR */}
      <div className="footer-top">
        <div className="footer-item">
          <h3>ENVÍOS RÁPIDOS</h3>
          <p>Envíos de 2 a 5 días hábiles</p>
        </div>

        <div className="footer-item">
          <h3>ATENCIÓN</h3>
          <p>100% personalizada</p>
        </div>

        <div className="footer-item">
          <h3>10% OFF</h3>
          <p>Pagando con efectivo otransferencia</p>
        </div>
      </div>

      {/* REDES */}
      <div className="footer-social">
        <i className="fab fa-instagram"></i>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-tiktok"></i>
      </div>

      {/* LINKS */}
      <div className="footer-links">
        <a href="#">Contacto</a>
        <a href="#">FAQ</a>
      </div>

      {/* NEWSLETTER */}
      <div className="footer-newsletter">
        <input type="email" placeholder="Enterate primero..." />
        <button>Enviar</button>
      </div>

      {/* INFO */}
      <div className="footer-info">
        <p>+54 9 11 3250-0747</p>
        <p>+54 9 11 5151-2006</p>
        <p>ddescosiendote@gmail.com</p>
        <p>Bahia Negra, Tero Violado</p>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>
          Copyright VyK - 2026. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;