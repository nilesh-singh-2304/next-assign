# 🧠 Micro-Quiz Platform

A dark-themed, visually stunning, and responsive quiz application built with **Next.js**, showcasing dynamic routing, server-side & static data fetching, API routes, and optimized image usage—all powered by **mock JSON data**.

---

## 📌 Features Implemented

| Feature | Status |
|--------|--------|
| Static Generation (SSG) via `getStaticProps` | ✅ Implemented on Home Page |
| Server-Side Rendering (SSR) via `getServerSideProps` | ✅ Category & Quiz Pages |
| Dynamic Routing | ✅ `/quizzes/[category]` and `/quiz/[id]` |
| API Routes | ✅ `/api/categories`, `/api/quizzes/[category]`, `/api/quiz/[id]` |
| next/image Optimization | ✅ Used for category thumbnails |
| Framer Motion Animations | ✅ On all pages for smooth transitions |
| Tailwind CSS Styling | ✅ Responsive, dark-themed UI |
| Client-Side State Management | ✅ With `useState` on quiz logic |
| SEO Meta Tags | ✅ Dynamically set with `next/head` |

![homee](https://github.com/user-attachments/assets/c9d5a2ac-620f-4b32-bfe3-e72ec18f1789)
![idd](https://github.com/user-attachments/assets/c89d72cc-50be-4449-882b-85d99b5b8a2f)
![iddd](https://github.com/user-attachments/assets/00f6b4f8-40c2-487f-9cae-def80cb0fe12)
![categ](https://github.com/user-attachments/assets/e73eae82-9a77-4eec-9d8d-527e663cbfcb)


---

## 🧭 Walkthrough Guide

### 🏠 Home Page (`/`)
- Built using **Static Site Generation** via `getStaticProps`
- Fetches categories from `/api/categories`
- Clickable cards with **animated image backgrounds** using `next/image`
- Includes SEO tags for better visibility
- Fully responsive layout with beautiful entry animation

### 📚 Category Listing (`/quizzes/[category]`)
- Built using **Server-Side Rendering**
- Dynamically fetches all quizzes under a selected category
- Uses `/api/quizzes/[category]`
- Animated entrance of each quiz card
- Navbar and footer consistent with the home page

### ❓ Individual Quiz (`/quiz/[id]`)
- Built with **SSR** for instant content
- Fetches quiz data from `/api/quiz/[id]`
- Shows questions **one at a time**
- Interactive answer selection with **immediate feedback**
- Uses `useState` to manage current question, selected answer, and score
- Final score shown with option to retake

---

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Image Optimization**: `next/image`
- **Data Layer**: Mock JSON via Next.js API routes
- **Deployment**: (e.g., Vercel)

---

## 🧩 Folder Structure Overview

/pages
├── index.js # Home Page (SSG)
├── quizzes/[category].js # Category Page (SSR)
├── quiz/[id].js # Individual Quiz Page (SSR)
└── api/
├── categories.js
├── quizzes/[category].js
└── quiz/[id].js

