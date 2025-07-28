import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";

// Components
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/Subpages/ProductsPage";
import ProductDescription from "./components/Subpages/ProductDescription";
import Checkout from "./components/Subpages/Checkout";

// New Pages
import CategoryPage from "./components/Pages/CategoryPage";
import OffersPage from "./components/Pages/OffersPage";
import GiftsPage from "./components/Pages/GiftsPage";
import ProjectsPage from "./components/Pages/ProjectsPage";
import MenuPage from "./components/Pages/MenuPage";
import HelpPage from "./components/Pages/HelpPage";
import ProfilePage from "./components/Pages/ProfilePage";
import OrdersPage from "./components/Pages/OrdersPage";
import WishlistPage from "./components/Pages/WishlistPage";
import SettingsPage from "./components/Pages/SettingsPage";
import MessagesPage from "./components/Pages/MessagesPage";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* Home page route */}
                <Route index element={<HomePage />} />

                {/* Navigation pages */}
                <Route path="category" element={<CategoryPage />} />
                <Route path="offers" element={<OffersPage />} />
                <Route path="gifts" element={<GiftsPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="menu" element={<MenuPage />} />
                <Route path="help" element={<HelpPage />} />

                {/* User Profile Pages */}
                <Route path="profile" element={<ProfilePage />} />
                <Route path="orders" element={<OrdersPage />} />
                <Route path="wishlist" element={<WishlistPage />} />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="messages" element={<MessagesPage />} />

                {/* Existing pages */}
                <Route path="products" element={<ProductsPage />} />
                <Route path="description" element={<ProductDescription />} />
                <Route path="checkout" element={<Checkout />} />

                {/* 404 route - redirect to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;