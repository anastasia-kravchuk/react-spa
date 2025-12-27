# 📰 Spaceflight News App

A responsive news application that displays space-related articles with search and detailed article pages.  
Built as a frontend task with a focus on clean UI, accessibility, and modern React architecture.

---

##  Live Demo:
Try the live app: [React SPA](https://react-spa-frontend.netlify.app/)

---

## 🚀 Features

- 🔍 **Search by keywords**
  - Filters articles by keywords in **title** and **description**
  - Priority: **title matches > description matches**
  - Highlighting matched keywords in yellow
- 📰 **Articles list**
  - Responsive grid layout
  - Each card is fully clickable
- 📄 **Article page**
  - Displays article image, title, and full content
- ⏳ **Loader**
  - Displayed only while articles are being fetched
  - Shown instead of article cards (search input remains visible)
- ⚠️ **404 Page**
  - Custom “Page not found” view with navigation back to homepage

---

## 📌 Important Note About Article Content

The **Spaceflight News API** does **not provide full article text** due to copyright restrictions.  
To demonstrate the **Article Page layout and content structure**, I intentionally added **Lorem Ipsum** as `articleContent`.

---

## 🌐 API Used

**Spaceflight News API**

- Base URL: [Spaceflight News API](https://api.spaceflightnewsapi.net/v4/articles)

---

## 🛠 Technologies Used
- **Frontend**: React, TypeScript
- **Styling**: SCSS
- **State Management**: React Context
- **API**: Fetch
- **Material UI Icons**

---

## Getting started

1. Clone the repository:
```bash
git clone https://github.com/anastasia-kravchuk/react-spa.git
cd react-spa
```
2. Install dependencies:
```bash
npm install
# or
yarn install
```
Run the project locally:
```bash
npm run dev
# or
yarn ren dev
```
