# Language Center

Монгол хэл дээрх, орчин үеийн хэлний сургалтын төвийн landing page.

## Ашигласан технологи

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Lucide React
- CSS parallax / floating animation
- Horizontal course carousel
- Auto-rotating testimonial slider
- Scroll reveal animation
- Responsive mobile navigation
- FAQ accordion

## Ажиллуулах

```bash
npm install
npm run dev
```

Дараа нь `http://localhost:3000` нээнэ.

## Build

```bash
npm run build
npm start
```

## Өөрчлөхөд

Бүх үндсэн контент `components/site.tsx` дотор:

- сургалтын нэр, тайлбар
- үнэ/хугацаа
- сэтгэгдэл
- FAQ
- холбоо барих form

Лого, өнгө, typography-г `app/globals.css` болон `components/site.tsx` дээр өөрчилж болно.

> Дизайн нь өгсөн EduEx/LMS reference-ийн цэвэрхэн, өнгөлөг, хөвсөн карт, dashboard-style композицыг санаа авсан боловч хэлний сургалтын төвд зориулж шинээр зохиогдсон.
