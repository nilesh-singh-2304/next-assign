# 🧠 Micro-Quiz Platform

A sleek, responsive, and dark-themed quiz application built with **Next.js 14**, showcasing full-stack capabilities including **SSG**, **SSR**, **Dynamic Routing**, **API Routes**, and **Image Optimization**. This project serves as a comprehensive demonstration of modern web development best practices using the Next.js framework.

---

<pre>
  
## 📦 Getting Started Locally

1. <b>Clone the repo</b>
   git clone https://github.com/your-username/micro-quiz-platform.git
   cd micro-quiz-platform
2. <b>Install dependencies</b>
    npm install
  
3. <b>Setup environment variables</b>
    Create a .env.local file and add:
    NEXT_PUBLIC_BASE_URL=http://localhost:3000
  
4. <b>Start the development server</b>
    npm run dev
  
5. <b>View in your browser</b>
    http://localhost:3000
  
</pre>

---

## 📌 Features Overview

| Feature                             | Description                                                                 | Status ✅ |
|-------------------------------------|-----------------------------------------------------------------------------|-----------|
| **Static Generation (SSG)**         | Used `getStaticProps` on homepage                                           | ✅        |
| **Server-Side Rendering (SSR)**     | Used `getServerSideProps` on dynamic quiz & category pages                  | ✅        |
| **Dynamic Routing**                 | Implemented `/quizzes/[category]` & `/quiz/[id]`                            | ✅        |
| **API Routes**                      | Built using Next.js `/api` folder                                          | ✅        |
| **Image Optimization**              | Used `next/image` for optimized image loading                              | ✅        |
| **Responsive Design**              | Fully mobile-friendly using Tailwind CSS                                   | ✅        |
| **Animations**                      | Integrated with Framer Motion for a delightful UI experience               | ✅        |
| **Dark Theme**                      | Full dark theme with gradient backgrounds                                  | ✅        |
| **Client-side State Management**    | Quiz logic using `useState`                                                | ✅        |
| **SEO Meta Tags**                   | Dynamic metadata with `next/head`                                          | ✅        |

---

![homee](https://github.com/user-attachments/assets/f3dd4010-099d-46d6-8355-b5712d59cb91)
![idd](https://github.com/user-attachments/assets/8c983a1c-24af-4d1d-bd98-cfff87da6afc)
![iddd](https://github.com/user-attachments/assets/d6d2b391-1330-4529-9f4b-ca53bcf98b47)
![categ](https://github.com/user-attachments/assets/e7f2a1b3-c9bf-4133-844a-a1445b96e257)


## 🧭 Application Walkthrough

### 🏠 Home Page (`/`)
- **SSG** using `getStaticProps`
- Fetches categories from `/api/categories`
- Background images optimized with `next/image`
- Includes CTA and animated intro with Framer Motion

### 📚 Quiz Category Listing (`/quizzes/[category]`)
- **SSR** with `getServerSideProps`
- Displays quizzes in the selected category
- Dynamic SEO metadata
- Consistent dark theme and UI animations

### ❓ Individual Quiz (`/quiz/[id]`)
- **SSR** with quiz data preloaded
- Displays one question at a time
- Tracks selected answers, displays feedback
- Shows score at the end
- Uses `useState` for quiz progress

---

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Image Optimization**: next/image
- **Deployment**: Vercel / Localhost
- **Mock Backend**: API Routes using JSON

---

## 🧩 Challenges Faced

- **Rendering Folder Structure in README**: Initially, the folder structure was not rendering properly on GitHub due to incorrect Markdown formatting (missing code blocks). This was quickly resolved by using triple backticks (` ``` `) and proper indentation for clean display.

> No major blockers or wasted efforts encountered during the project.


## 📂 Folder Structure
<pre> ```micro-quiz-platform/
├── public/
│ └── images/ # Category icons and other static assets
│
├── pages/
│ ├── index.js # Home page (SSG) with quiz categories
│ ├── quiz/
│ │ └── [id].js # Dynamic route for individual quiz (SSR)
│ ├── quizzes/
│ │ └── [category].js # Dynamic route for quiz categories (SSR)
│ └── api/
│ ├── categories.js # API to get all quiz categories
│ ├── quizzes/
│ │ └── [category].js # API to get quizzes for a category
│ └── quiz/
│ └── [id].js # API to get quiz questions by ID
│
├── styles/
│ └── globals.css # (Optional) Global styles if needed
│
├── components/
│ └── Navbar.js # (Optional) Shared UI components like Navbar
│
├── .env.local # Environment variables (e.g., BASE_URL)
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── next.config.js ``` </pre>
