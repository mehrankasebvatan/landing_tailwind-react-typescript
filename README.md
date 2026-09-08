# 🎓 Landing Page با React، TypeScript و Tailwind CSS

یک Landing Page مدرن، ریسپانسیو و کامپوننت‌محور که با استفاده از **React، TypeScript، Tailwind CSS و Vite** ساخته شده است.

هدف این پروژه، ایجاد یک ساختار تمیز و قابل توسعه برای یک وب‌سایت آموزشی / معرفی دوره‌ها است. رابط کاربری به صورت کامپوننتی طراحی شده و بخش‌های مختلف صفحه از یکدیگر جدا هستند تا توسعه و نگهداری پروژه ساده‌تر باشد.

---

## ✨ ویژگی‌ها

* ⚛️ ساخته شده با **React**
* 🟦 استفاده از **TypeScript**
* 🎨 طراحی رابط کاربری با **Tailwind CSS**
* ⚡ استفاده از **Vite** برای توسعه و Build سریع
* 📱 کاملاً **Responsive** برای موبایل، تبلت و دسکتاپ
* 🧩 ساختار **Component-Based**
* 🎬 استفاده از **Framer Motion** برای انیمیشن‌ها
* 🎯 استفاده از **Lucide React** برای آیکون‌ها
* 🧹 استفاده از **ESLint** برای حفظ کیفیت کد
* 🔄 استفاده از `clsx` و `tailwind-merge` برای مدیریت بهتر کلاس‌های Tailwind

---

## 🖥️ بخش‌های پروژه

صفحه اصلی از چند بخش مستقل تشکیل شده است:

### Navbar

نوار ناوبری اصلی سایت که شامل لینک‌های دسترسی به بخش‌های مختلف صفحه است.

### Hero

بخش اصلی و ابتدایی Landing Page که پیام اصلی سایت و Call To Action را نمایش می‌دهد.

### Features

نمایش قابلیت‌ها و ویژگی‌های اصلی پلتفرم به صورت کارت‌های جداگانه.

### Courses

بخش معرفی دوره‌های آموزشی موجود در سایت.

### Stats

نمایش آمار و اطلاعات کلیدی پروژه یا پلتفرم.

### Testimonials

نمایش نظرات و بازخورد کاربران.

### Pricing

نمایش پلن‌ها و قیمت‌گذاری سرویس‌ها.

### Contact

بخش ارتباط با مجموعه و ارسال پیام.

### Footer

بخش پایانی سایت شامل لینک‌ها و اطلاعات تکمیلی.

---

## 🛠️ تکنولوژی‌های استفاده شده

| تکنولوژی       | کاربرد                              |
| -------------- | ----------------------------------- |
| React          | ساخت رابط کاربری                    |
| TypeScript     | Type Safety و توسعه قابل اطمینان‌تر |
| Vite           | ابزار توسعه و Build                 |
| Tailwind CSS   | طراحی و استایل‌دهی                  |
| Framer Motion  | ساخت انیمیشن‌ها                     |
| Lucide React   | آیکون‌ها                            |
| ESLint         | بررسی و استانداردسازی کد            |
| clsx           | مدیریت Conditional Classها          |
| tailwind-merge | ترکیب و مدیریت کلاس‌های Tailwind    |

وابستگی‌های پروژه در `package.json` تعریف شده‌اند.

---

## 📁 ساختار پروژه

ساختار اصلی پروژه به شکل زیر است:

```text
landing_tailwind-react-typescript/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── ui/
│   │   │
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Courses.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── eslint.config.js
```

ساختار `src` و کامپوننت‌های اصلی پروژه در Repository نیز به همین شکل سازمان‌دهی شده‌اند.

---

## 🚀 نصب و اجرای پروژه

ابتدا Repository را Clone کنید:

```bash
git clone https://github.com/mehrankasebvatan/landing_tailwind-react-typescript.git
```

وارد پوشه پروژه شوید:

```bash
cd landing_tailwind-react-typescript
```

سپس Dependencies را نصب کنید:

```bash
npm install
```

برای اجرای پروژه در محیط Development:

```bash
npm run dev
```

بعد از اجرای دستور، Vite یک آدرس Local برای مشاهده پروژه در اختیار شما قرار می‌دهد.

---

## 📦 دستورات موجود

### اجرای Development Server

```bash
npm run dev
```

### ساخت نسخه Production

```bash
npm run build
```

### بررسی کدها با ESLint

```bash
npm run lint
```

### اجرای Production Preview

```bash
npm run preview
```

این Scriptها مستقیماً در `package.json` پروژه تعریف شده‌اند.

---

## 🎨 Tailwind CSS

استایل‌دهی پروژه عمدتاً با استفاده از Utility Classهای Tailwind CSS انجام شده است.

برای مثال:

```tsx
<div className="flex items-center justify-between px-6 py-4">
  ...
</div>
```

این روش باعث می‌شود استایل هر کامپوننت تا حد زیادی در همان محل تعریف شود و نیازی به ایجاد فایل CSS جداگانه برای هر Component نباشد.

همچنین با استفاده از `tailwind-merge` و `clsx` می‌توان کلاس‌ها را به شکل منعطف‌تری مدیریت کرد.

---

## 🎬 انیمیشن‌ها

برای ایجاد انیمیشن‌ها و تعاملات بصری از **Framer Motion** استفاده شده است.

برای مثال:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
>
  Content
</motion.div>
```

این موضوع باعث می‌شود بخش‌های مختلف Landing Page هنگام ورود به صفحه یا تعامل کاربر، تجربه بصری جذاب‌تری داشته باشند.

---

## 🧩 معماری کامپوننت‌ها

یکی از اهداف اصلی پروژه، جدا کردن بخش‌های مختلف UI به Componentهای مستقل است.

برای مثال:

```text
components/
├── Navbar.tsx
├── Hero.tsx
├── Features.tsx
├── Courses.tsx
├── Stats.tsx
├── Testimonials.tsx
├── Pricing.tsx
├── Contact.tsx
└── Footer.tsx
```

در نتیجه هر بخش را می‌توان بدون درگیر کردن سایر قسمت‌های پروژه تغییر یا توسعه داد.

همچنین Componentهای عمومی‌تر در پوشه `ui` قرار گرفته‌اند تا در بخش‌های مختلف پروژه قابل استفاده مجدد باشند.

---

## 📱 Responsive Design

این پروژه برای نمایش صحیح در اندازه‌های مختلف صفحه طراحی شده است.

هدف این است که Layout در:

* 📱 موبایل
* 📲 تبلت
* 💻 لپ‌تاپ
* 🖥️ دسکتاپ

به شکل مناسب نمایش داده شود.

Tailwind CSS امکان پیاده‌سازی این رفتار را با استفاده از Responsive Utility Classها فراهم می‌کند.

---

## 🔧 توسعه پروژه

برای اضافه کردن یک بخش جدید، پیشنهاد می‌شود ابتدا یک Component مستقل برای آن ایجاد کنید.

برای مثال:

```text
src/
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── Features.tsx
    └── NewSection.tsx
```

سپس Component جدید را در `App.tsx` اضافه کنید.

این روش باعث می‌شود ساختار پروژه مرتب و قابل توسعه باقی بماند.

---

## 📌 هدف پروژه

این پروژه می‌تواند به عنوان یک پایه مناسب برای ساخت موارد زیر استفاده شود:

* وب‌سایت آموزش آنلاین
* Landing Page دوره‌های آموزشی
* وب‌سایت معرفی محصول
* وب‌سایت SaaS
* وب‌سایت شخصی یا Portfolio
* صفحات تبلیغاتی و Marketing

---

## 👨‍💻 توسعه‌دهنده

ساخته شده توسط **Mehrankasebvatan**

GitHub:

[مشاهده Repository در GitHub](https://github.com/mehrankasebvatan/landing_tailwind-react-typescript?utm_source=chatgpt.com)

---

## 📄 License

این پروژه برای استفاده و توسعه بیشتر در GitHub قرار گرفته است.

قبل از استفاده تجاری یا انتشار مجدد، شرایط Repository و فایل License را بررسی کنید.

---
## 🎓 آموزش و منابع

این پروژه در مسیر یادگیری و با استفاده از آموزش‌های **Sepehr Sylvanus** توسعه داده شده است.

* 🎥 [مشاهده آموزش در YouTube](https://www.youtube.com/watch?v=sq_Pcc0yI0Q)
* 👨‍🏫 [پروفایل GitHub مدرس](https://github.com/sepehrsylvanus)

با تشکر از **Sepehr Sylvanus** بابت آموزش و محتوای ارزشمند.
