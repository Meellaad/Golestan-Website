import React from "react";

const Rice = () => {
  return (
    <section className="intro-product">
      <div className="product-banner">
        <div className="product-image-container">
          <img src="../../../public/images/image2-new-1.jpg" alt="rice" />
        </div>
        <div className="product-title-container">
          <h1>برنج گلستان</h1>
          <p>معرفی محصول</p>
        </div>
      </div>
      <div className="devider">
        <article className="product-info-container">
          <h2>رکن اول غذای ایرانی</h2>
          <p>
            مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم
            و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از
            كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در
            وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان
            با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر
            از همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند.
          </p>
          <button>محصولات برنج</button>
          <button>آشپزخانه گلستان</button>
        </article>
      </div>
    </section>
  );
};

export default Rice;
