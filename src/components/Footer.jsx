import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Наш сайт. Все права защищены.</p>
        <ul className="footer-links">
          <li>
            <a href="/about">О нас</a>
          </li>
          <li>
            <a href="/contact">Контакты: +7122345678</a>
          </li>
          <li>
            <a href="/privacy">Политика конфиденциальности</a>
          </li>
        </ul>
        <div className="social-icons">
          {" "}
          <a href="https://facebook.com">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
