import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import AssetLocationPage from './pages/basicForms/AssetLocationPage';
import AssetCategoryPage from './pages/basicForms/AssetCategoryPage';
import AssetSubcategoryPage from './pages/basicForms/AssetSubcategoryPage';
import AssetTypePage from './pages/basicForms/AssetTypePage';
import AssetBrandPage from './pages/basicForms/AssetBrandPage';
import AssetEntryPage from './pages/dataEntry/AssetEntryPage';
import AssetListPage from './pages/dataEntry/AssetListPage';
import AssetMovementPage from './pages/assetMovement/AssetMovementPage';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="locations" element={<AssetLocationPage />} />
            <Route path="categories" element={<AssetCategoryPage />} />
            <Route path="subcategories" element={<AssetSubcategoryPage />} />
            <Route path="types" element={<AssetTypePage />} />
            <Route path="brands" element={<AssetBrandPage />} />
            <Route path="assets/new" element={<AssetEntryPage />} />
            <Route path="assets/:assetCode/edit" element={<AssetEntryPage />} />
            <Route path="assets" element={<AssetListPage />} />
            <Route path="movements" element={<AssetMovementPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

