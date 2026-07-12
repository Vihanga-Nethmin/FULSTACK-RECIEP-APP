<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&color=F75C2F&center=true&vCenter=true&width=600&lines=%F0%9F%8D%B3+Recipe+App;React+Native+%2B+Expo;Full+Stack+Mobile+Development;Discover.+Cook.+Save." alt="Typing SVG" />

### Full Stack Mobile Recipe Discovery App

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech/)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)

![GitHub last commit](https://img.shields.io/github/last-commit/Vihanga-Nethmin/FULSTACK-RECIEP-APP?style=flat-square&color=F75C2F)
![GitHub repo size](https://img.shields.io/github/repo-size/Vihanga-Nethmin/FULSTACK-RECIEP-APP?style=flat-square&color=F75C2F)
![Platform](https://img.shields.io/badge/platform-Android%20%7C%20iOS-lightgrey?style=flat-square)

[![Open in Expo Dev Client](https://img.shields.io/badge/📲_Open_in_Expo_Dev_Client-000020?style=for-the-badge&logo=expo&logoColor=white)](exp+mobile://expo-development-client/?url=http%3A%2F%2F192.168.8.101%3A8081)

> **Note:** The button above only works if opened **from your phone's browser** while the Expo Development Build app is installed and the local dev server (`npx expo start --dev-client`) is running on the same WiFi network. It will not work from a desktop browser or GitHub's web preview.

</div>

---

A full-stack recipe discovery mobile app built with **React Native (Expo)** on the frontend and **Node.js/Express** on the backend. Users can browse recipes, search by name or ingredient, view detailed cooking instructions with video tutorials, and save their favorite recipes to a personal collection.

---

## 📱 Features

- **Authentication** — Email/password sign up & sign in powered by [Clerk](https://clerk.com), with email verification flow
- **Home Screen** — Browse a featured recipe, filter by category, and explore a grid of recipes
- **Search** — Debounced search by recipe name, with automatic fallback to ingredient-based search
- **Recipe Details** — Full ingredient list, step-by-step instructions, cook time, servings, cuisine, and an embedded YouTube tutorial video
- **Favorites** — Save/remove recipes to a personal favorites list, persisted per user in a Postgres database
- **Persistent Sessions** — Stay logged in across app restarts via secure token caching

---

## 🛠️ Tech Stack

### Frontend (Mobile)
- **React Native** with **Expo** (SDK 54)
- **Expo Router** — file-based navigation
- **Clerk** — authentication & session management
- **TheMealDB API** — recipe data source
- **Expo Image** — optimized image loading & caching
- **React Native WebView** — embedded video playback
- **Expo Linear Gradient** — UI styling

### Backend
- **Node.js** + **Express**
- **Drizzle ORM**
- **PostgreSQL** (hosted on [Neon](https://neon.tech))
- **PM2** + **Nginx** — production process management & reverse proxy on a VPS

---

## 📂 Project Structure

```
FULSTACK-RECIEP-APP/
├── backend/
│   └── src/
│       ├── config/        # env, database, cron config
│       ├── db/            # Drizzle schema & migrations
│       └── server.js      # Express app & API routes
│
└── mobile/
    ├── src/app/
    │   ├── (auth)/         # sign-in, sign-up, verify-email
    │   ├── (tabs)/         # Recipes, Search, Favorites
    │   ├── recipe/[id].jsx # Recipe detail screen
    │   └── _layout.jsx     # Root layout (Clerk provider, safe area)
    ├── components/          # Reusable UI components
    ├── services/mealAPI.js  # TheMealDB API service layer
    ├── constants/           # Colors & API URL config
    └── assets/styles/       # StyleSheet definitions
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+)
- npm
- Expo Go app (for testing on a physical device)
- A [Clerk](https://clerk.com) account & publishable key
- A [Neon](https://neon.tech) (or any Postgres) database

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/FULSTACK-RECIEP-APP.git
cd FULSTACK-RECIEP-APP
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:
```
DATABASE_URL=your_postgres_connection_string
PORT=5001
```

Run database migrations:
```bash
npm run db:push
```

Start the backend server:
```bash
npm run dev
```

### 3. Mobile App Setup
```bash
cd mobile
npm install
```

Create a `.env` file in `mobile/`:
```
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Update `constants/api.js` with your backend's local IP address (required for testing on a physical device):
```js
export const API_URL = "http://<your-local-ip>:5001/api";
```

Start the Expo dev server:
```bash
npx expo start
```

Scan the QR code with the **Expo Go** app on your Android/iOS device.

---

## 📲 Development Client Deep Link

If you're testing this project with an **EAS Development Build** (instead of Expo Go), start the dev server and open the link below on your device, or scan the printed QR code:

```
npx expo start --dev-client
```

Example deep link (replace the IP with your machine's local network IP, shown when you run the command above):

```
exp+mobile://expo-development-client/?url=http%3A%2F%2F192.168.8.101%3A8081
```

> 💡 Your phone and computer must be on the **same WiFi network** for this to work.

---

## 🔑 Environment Variables

| Location | Variable | Description |
|---|---|---|
| `backend/.env` | `DATABASE_URL` | Postgres connection string |
| `backend/.env` | `PORT` | Backend server port (default `5001`) |
| `mobile/.env` | `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Health check |
| `POST` | `/api/favorites` | Add a recipe to favorites |
| `GET` | `/api/favorites/:userId` | Get all favorites for a user |
| `DELETE` | `/api/favorites/:userId/:recipeId` | Remove a favorite |

---

## 🎥 Recipe Data Source

Recipe data is sourced from the free [TheMealDB API](https://www.themealdb.com/api.php).

---

## 📌 Notes

- This project was built for a full-stack mobile development coursework assignment, demonstrating authentication, state management, REST API integration, and cloud database persistence.
- The backend can be deployed to any VPS using PM2 for process management and Nginx as a reverse proxy.

---

## 📄 License

This project is for educational purposes.

---

<div align="center">

Made with 🍳 and ☕ by **Vihanga Nethmin**

![Wave](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12&height=120&section=footer)

⭐ If you like this project, give it a star!

</div>
