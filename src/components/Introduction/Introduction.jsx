import React from "react";

import "./Introduction.css";

const Introduction = () => {
  return (
    <section id="introduction">
      <div className="intro-wrapper">
        <div className="intro-container">
          <h2>معرفی گلستان</h2>
          <p>
            آنچه که امروز با نام مجموعه<span> گلستان</span> می‌شناسیم در سال
            1329 بنیان نهاده شد. زمانی که شرکت گلستان فعالیت خود را با بسته‌بندی
            و توزیع چای پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد کشور، نهال
            «گلستان» به تدریج تقویت شد و شاخ و برگ گرفت. فعالیت‌های «گلستان» با
            تهیه، تولید و بسته‌بندی بهترین محصولات غذایی گسترش پیدا کرد
            <span> گلستان</span> پس از سال‌ها تلاش همچنان می‌کوشد تا به کمک
            تجربه‌های اندوخته شده در این سال‌ها کالاهایی قابل اعتماد و با کیفیت
            تولید نماید.
          </p>
          <p>
            هدفمندی و برنامه‌ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف
            تعیین شده، به کار گیری همکاران مجرب و دلسوز، استفاده از روش های نوین
            بازاریابی و مشتری محوری از جمله عوامل مهم در استراتژی{" "}
            <span>شرکت گلستان </span> است.
          </p>
          <h2>محصولات گلستان</h2>
          <p>
            <span>نام تجاری گلستان</span> قدمتی به اندازه عمر شرکت گلستان دارد.
            گلستان ممتازترین محصولات خود را با این نام تجاری عرضه می‌کند.
            مصرف‌کنندگان محصولات گلستان همواره از این نام تجاری خاطره محصولاتی
            ممتاز و منحصر بفرد دارند و با اطمینان از نهایت کیفیت این نام تجاری
            حمایت می‌کنند.
          </p>
        </div>
        <div className="intro-statistics-container">
          <div className="intro-statistics-container__item">
            <div className="intro-statistics-container__image-container">
              <img src="../../../public/images/statistics-icon-4.png" alt="" />
            </div>
            <p>سرمایه انسانی</p>
          </div>
          <div className="intro-statistics-container__item">
            <div>
              <img src="../../../public/images/statistics-icon-3.png" alt="" />
            </div>
            <p>مراكز فروش</p>
          </div>
          <div className="intro-statistics-container__item">
            <div>
              <img src="../../../public/images/statistics-icon-2.png" alt="" />
            </div>
            <p>محصولات گلستان</p>
          </div>
          <div className="intro-statistics-container__item">
            <div>
              <img src="../../../public/images/statistics-icon-1.png" alt="" />
            </div>
            <p>مشتریان گلستان</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
