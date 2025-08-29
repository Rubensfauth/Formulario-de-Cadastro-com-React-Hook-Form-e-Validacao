import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import styles from "./App.module.css";

function App() {
  return (
    <ThemeProvider>
      <div className={styles.app}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/contato" element={<ContactPage />} />
              <Route path="/produtos/:id" element={<ProductDetailPage />} />
              <Route path="/cadastro" element={<RegistrationForm />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
