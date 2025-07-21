# 🌙 Dream Journal — Full-Stack Web App

A minimalist app for recording and reflecting on your dreams.  
Built using React, Express, PostgreSQL, and Prisma — with Tailwind CSS for a beautifully styled UI.

---

## ✨ Features

- 🌌 Record dreams with title, description, mood, and date
- 🎭 Mood tagging with emoji-based selectors
- 🧾 View and edit entries in a clean table format
- 🔍 Click a dream to expand and view full description
- 💅 Fully responsive and minimalist interface
- 🌓 Dark mode toggle-ready (auto system support)
- ⚡ Fast local development with Vite

---

## 🧠 Technologies Used

### Frontend

- **React** (with Hooks + TypeScript)
- **Vite** for fast bundling and hot reload
- **Tailwind CSS** for modern, utility-first styling
- **Dark mode** enabled via Tailwind `dark` class

### Backend

- **Node.js + Express** API server
- **Prisma ORM** for modeling and querying the database
- **PostgreSQL** as the relational data store
- **CORS + JSON middleware** for frontend-backend communication
- **RESTful API endpoints** to handle CRUD actions

### Database

- **PostgreSQL**, locally developed
- Prisma schema defines:
  - `Dream`: title, description, date, mood
  - (Optional) Ready for `User` model extension

---

## 📁 Project Structure

```
dream-journal/
├── client/             # React + Vite + Tailwind frontend
│   ├── src/
│   │   ├── components/ # DreamForm, DreamTable
│   │   ├── pages/      # Home.tsx
│   │   ├── types/      # TypeScript interfaces
│   │   ├── services/   # Api.ts      # Axios-based API client
│   │   └── index.css   # Tailwind styles
├── server/             # Express + Prisma backend
│   ├── prisma/
│   │   └── schema.prisma  # Data models
│   ├── src/
│   │   ├── routes/     # dreamRoutes.ts
│   │   └── index.ts    # Express app entry point
├── README.md
```

---

## 🚀 How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/marinamurads/dream-journal.git
cd dream-journal
```

### 2. Start the backend

```bash
cd server
npm install
npx prisma generate
npx prisma db push
npm run dev
```

### 3. Start the frontend

```bash
cd ../client
npm install
npm run dev
```

---

## 🛰 Deployment Ready

- 🔧 **Frontend**: Deploy to [Vercel](https://vercel.com)
- 🛠 **Backend**: Deploy to [Render](https://render.com)
- 🗄 **Database**: Hosted with [Railway](https://railway.app)

---

## 📝 Future Ideas

- User login/authentication (JWT or OAuth)
- Dream tags & filtering
- Mood visualization (charts or calendar)
- Dream analysis using AI

---

## 💜 Author

Made by Marina Murad ✨
