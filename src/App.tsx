import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import CvPage from "./pages/CvPage";
import ContactPage from "./pages/ContactPage";
import styles from "./App.module.css";

export default function App(): React.ReactElement {
  return (
    <div
      className={styles.app}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
        color: "#1e293b",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <NavBar />

      <main
        className={styles.main}
        style={{
          flex: 1,
          maxWidth: 1100,
          width: "100%",
          margin: "0 auto",
          padding: "0 20px 40px 20px",
          boxSizing: "border-box",
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/cv" element={<CvPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer
        className={styles.footer}
        style={{
          borderTop: "1px solid var(--border, #e5e7eb)",
          background: "white",
          padding: "24px 20px",
          marginTop: "auto",
        }}
      >
        <div
          className={styles.footerInner}
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            fontSize: 14,
            color: "var(--muted, #6b7280)",
          }}
        >
          <div className={styles.footerLeft} style={{ fontWeight: 600 }}>
            © {new Date().getFullYear()} Helen Bokea, MPH
          </div>
          <div className={styles.footerRight} style={{ fontWeight: 500, color: "var(--teal-700, #0f766e)" }}>
            Global Health • Executive Coaching • Governance
          </div>
        </div>
      </footer>
    </div>
  );
}