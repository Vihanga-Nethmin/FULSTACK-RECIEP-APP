# 🍲 Fullstack Recipe App

A fullstack recipe application with a React Native (Expo) mobile app and a Node.js/Express backend. Users can browse, search, and filter recipes from [TheMealDB](https://www.themealdb.com/), sign in with Clerk authentication, and save their favorite recipes to a PostgreSQL database.

## ✨ Features

- 🔍 Search recipes by name and filter by category or ingredient
- 🎲 Discover random recipe suggestions
- 📖 View full recipe details — ingredients, measurements, and step-by-step instructions
- ❤️ Save and remove favorite recipes (persisted to the backend)
- 🔐 User authentication (sign up, sign in, email verification) via Clerk
- ⏰ Backend keep-alive cron job for free-tier hosting

## 🛠️ Tech Stack

**Mobile (frontend)**
- [Expo](https://expo.dev) / React Native
- Expo Router (file-based routing)
- Clerk (`@clerk/clerk-expo`) for authentication
- TheMealDB public API for recipe data

**Backend**
- Node.js + Express 5
- Drizzle ORM
- Neon (serverless PostgreSQL)
- `node-cron` for scheduled keep-alive pings

## 📁 Project Structure

```
FULSTACK-RECIEP-APP/
├── backend/                 # Express API server
│   └── src/
│       ├── config/          # env, db connection, cron job
│       ├── db/              # Drizzle schema & migrations
│       └── server.js        # API entry point
└── mobile/                  # Expo React Native app
    ├── src/app/              # Screens (file-based routing)
    │   ├── (auth)/            # Sign in / sign up / verify email
    │   ├── (tabs)/            # Home, Search, Favorites
    │   └── recipe/[id].jsx    # Recipe detail screen
    ├── components/           # Reusable UI components
    ├── services/              # TheMealDB API service
    └── constants/             # API URLs, colors, etc.
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- A [Neon](https://neon.tech) (or any Postgres) database
- A [Clerk](https://clerk.com) account for authentication
- Expo Go app (for testing on a physical device) or an Android/iOS simulator

### 1. Clone the repository

```bash
git clone https://github.com/Vihanga-Nethmin/FULSTACK-RECIEP-APP.git
cd FULSTACK-RECIEP-APP
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
PORT=5001
DATABASE_URL=your_neon_postgres_connection_string
NODE_ENV=development
API_URL=your_deployed_backend_health_check_url
```

Push the database schema and start the server:

```bash
npx drizzle-kit push
npm run dev
```

The API will run at `http://localhost:5001`.

### 3. Mobile app setup

```bash
cd ../mobile
npm install
```

Update `constants/api.js` with your machine's local IP (so the mobile app can reach the backend over your network):

```js
export const API_URL = "http://<your-local-ip>:5001/api";
```

Add your Clerk publishable key to a `.env` file in `mobile/`:

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Start the app:

```bash
npx expo start
```

Scan the QR code with Expo Go, or launch an Android/iOS simulator from the Expo CLI menu.

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/favorites/:userId` | Get all favorites for a user |
| POST | `/api/favorites` | Add a recipe to favorites |
| DELETE | `/api/favorites/:userId/:recipeId` | Remove a recipe from favorites |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to fork the repo and open a pull request.

## 📄 License

This project is open source. Add a license of your choice (e.g. MIT) if you plan to share it publicly.
