import React from "react";

import "./Footer.css";

import icon1 from "../../../public/images/footer-icon1.png";
import icon2 from "../../../public/images/footer-icon2.png";
import icon3 from "../../../public/images/footer-icon3.png";
import icon4 from "../../../public/images/footer-icon4.png";

const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="footer-icon-container">
        <ul className="footer-icons-list">
          <li className="footer-icon">
            <a href="">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="footer-icon">
            <a href="">
              <i className="fa fa-telegram"></i>
            </a>
          </li>
          <li className="footer-icon">
            <a href="">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li className="footer-icon">
            <a href="">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="footer-icon">
            <a href="">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li className="footer-icon">
            <a href="">
              <i className="fa fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
      <section>
        <div className="footer-links-container">
          <div className="footer-link-container">
            <div className="footer-image-container">
              <img src={icon1} alt="Glass" />
            </div>
            <h3 className="footer-links-header">چای گلستان</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <a href="">چای ممتاز هندوستان​</a>
              </li>
              <li className="footer-link">
                <a href="">چای ممتاز ارل گری​</a>
              </li>
              <li className="footer-link">
                <a href="">چای سيلان عطری​</a>
              </li>
              <li className="footer-link">
                <a href="">چای ممتاز سيلان​</a>
              </li>
              <li className="footer-link">
                <a href="">چای صبحانه گلستان​</a>
              </li>
            </ul>
          </div>
          <div className="footer-link-container">
            <div className="footer-image-container">
              <img src={icon4} alt="Cup" />
            </div>
            <h3 className="footer-links-header">تی بگ گلستان</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <a href="">تی بگ بلک لاين</a>
              </li>
              <li className="footer-link">
                <a href="">تی بگ ارل گری</a>
              </li>
              <li className="footer-link">
                <a href="">دمنوش نعناع</a>
              </li>
              <li className="footer-link">
                <a href="">دمنوش بابونه</a>
              </li>
              <li className="footer-link">
                <a href="">منوش چای سبز</a>
              </li>
            </ul>
          </div>
          <div className="footer-link-container">
            <div className="footer-image-container">
              <img src={icon3} alt="Bowl" />
            </div>
            <h3 className="footer-links-header">ادويه گلستان</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <a href="">زعفران ممتاز خراسان</a>
              </li>
              <li className="footer-link">
                <a href="">ادویه کاری</a>
              </li>
              <li className="footer-link">
                <a href="">ادویه ماست و خیار</a>
              </li>
              <li className="footer-link">
                <a href="">فلفل سياه خالص</a>
              </li>
              <li className="footer-link">
                <a href="">زردچوبه ممتاز</a>
              </li>
            </ul>
          </div>
          <div className="footer-link-container">
            <div className="footer-image-container">
              <img src={icon2} alt="Pot" />
            </div>
            <h3 className="footer-links-header">حبوبات گلستان</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <a href="">لوبيا قرمز ممتاز</a>
              </li>
              <li className="footer-link">
                <a href="">لوبيا چيتی گلستان</a>
              </li>
              <li className="footer-link">
                <a href="">عدس كانادايی</a>
              </li>
              <li className="footer-link">
                <a href="">نخود زودپز كرمانشاه</a>
              </li>
              <li className="footer-link">
                <a href="">لوبيا سفيد گلستان</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-footer-container">
          <p>All Right Reserved Golestan Company 2022-2025</p>
          <p>Design By: Golestan Studio</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
