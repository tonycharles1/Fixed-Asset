# Asset Management Web Application

A modern web application for managing fixed assets, built with React, TypeScript, Material-UI, and Vite.

## Features

- ✅ User Authentication (Login/Register)
- ✅ Role-based Access Control (Admin/User)
- ✅ Dashboard with Analytics and Charts
- ✅ Basic Forms (Location, Category, Subcategory, Type, Brand)
- ✅ Asset Entry Form
- ✅ Asset List with CRUD Operations
- ✅ Asset Movement Tracking
- ✅ Barcode Generation and Printing
- ✅ Google Sheets Integration (via Backend API)

## Setup

1. Install dependencies:
```bash
cd web-app
npm install
```

2. Create `.env` file (optional):
```env
VITE_API_URL=http://localhost:3000/api
```

3. Start development server:
```bash
npm run dev
```

The app will open at `http://localhost:3001`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
web-app/
├── src/
│   ├── components/     # Reusable components
│   ├── context/        # React context providers
│   ├── pages/          # Page components
│   │   ├── auth/       # Login, Register
│   │   ├── dashboard/  # Dashboard
│   │   ├── basicForms/ # Location, Category, etc.
│   │   ├── dataEntry/  # Asset Entry, Asset List
│   │   └── assetMovement/ # Asset Movement
│   ├── services/       # API services
│   ├── types/          # TypeScript types
│   └── utils/          # Constants and helpers
├── public/
└── index.html
```

## Backend Connection

Make sure your backend server is running on `http://localhost:3000` before using the app.

## Technologies Used

- React 18
- TypeScript
- Material-UI (MUI)
- React Router
- Axios
- Chart.js
- Vite
- QRCode React

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

