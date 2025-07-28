import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import BottomNavbar from "./BottomNavbar";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const isProductDescription = location.pathname === "/description";
  const isCheckout = location.pathname === "/checkout";

  return (
    <>
      <header>
        <Header />
        <BottomNavbar />
      </header>

      <main>
        <Outlet />
      </main>

      {!isProductDescription && !isCheckout && (
        <section aria-label="Newsletter">
          <Newsletter />
        </section>
      )}

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
