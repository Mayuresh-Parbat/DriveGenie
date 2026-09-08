# 🚗 DriveGenie — Luxury Car Discovery Platform

DriveGenie is a responsive React web application for discovering, comparing, and exploring premium cars. It provides a polished marketplace-style experience with car search, wishlist management, AI-style recommendations, price comparison, and an EMI calculator.

## ✨ Key Features

- Dark and light theme toggle
- Auto-changing luxury-car hero carousel
- Live clock in the navigation bar
- Search featured cars instantly by name
- Add or remove cars from a personal wishlist
- Compare up to two cars side by side
- View detailed specifications in a modal
- Copy car details directly to the clipboard
- Recently viewed cars section
- Trending luxury cars section
- Preference-based car recommendations using budget and fuel type
- EMI calculator with:
  - Car price
  - Down payment
  - Interest rate
  - Loan duration
  - Monthly EMI, total interest, and total repayment
- Smooth “back to top” button
- Fully responsive premium UI

## 🛠️ Tech Stack

- React.js
- Vite
- JavaScript (ES6+)
- CSS3
- React Icons
- Browser Local Storage
- Clipboard API

## 📂 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── FeaturedCars.jsx
│   ├── CarComparison.jsx
│   ├── CarCollections.jsx
│   ├── TrendingCars.jsx
│   ├── Recommendation.jsx
│   ├── Calculator.jsx
│   ├── CarModal.jsx
│   ├── BackToTop.jsx
│   └── Footer.jsx
├── data/
│   └── cars.js
├── App.jsx
├── App.css
└── main.jsx
```

## 🚀 Run Locally

```bash
git clone <your-repository-link>
cd drivegenie
npm install
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## 🔮 Future Improvements

- Backend API using Node.js and Express
- MongoDB database for car listings and user data
- User login and personal profiles
- Persistent cloud-based wishlist
- Advanced filters for brand, budget, fuel type, and seating capacity
- Real AI recommendation engine
- Dealer dashboard for adding and managing listings
- Deployment with a live production URL

## 👤 Author

**Mayuresh Parbat**
