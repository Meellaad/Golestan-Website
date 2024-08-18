import React from "react";

import "./Social.css";

const Social = () => {
  return (
    <section id="social">
      <div className="social-container">
        <div className="social-banner">
          <div className="social-title-container">
            <p>مسئوليت‌های اجتماعی شركت گلستان</p>
            <p id="gsrtitle">
              <span>Golestan</span> Social Responsibility
            </p>
            <p>Mahdi Hospital</p>
            <div className="social-image-container">
              <img src="../../../public/images/csr-pic1.jpg" alt="Hospital" />
            </div>
          </div>
        </div>
        <div className="devider">
          <article className="social-info">
            <h2>مسئوليت‌های اجتماعی گلستان</h2>
            <p>
              كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین،
              قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری
              فراتر از درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و
              امکاناتشان برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند.
              <span>گلستان</span> در فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از
              فعالیت‌های عام‌المنفعه را در دستوركار خود قرار داده است.
            </p>
            <button>اطلاعات بیشتر</button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Social;
