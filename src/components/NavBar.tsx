import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

type NavItem = {
  label: string;
  to: string;
};

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "CV", to: "/cv" },
  { label: "Services", to: "/services" },
  { label: "Contact & Foundation", to: "/contact" },
];

function linkStyle(args: { isActive: boolean }) {
  return {
    textDecoration: "none",
    color: args.isActive ? "var(--teal-800, #0f4c45)" : "var(--muted, #6b7280)",
    fontWeight: args.isActive ? 800 : 600,
    fontSize: 14,
    padding: "8px 12px",
    borderRadius: "999px",
    background: args.isActive ? "rgba(15, 118, 110, 0.08)" : "transparent",
    transition: "all 0.2s ease",
  };
}

export default function NavBar(): React.ReactElement {
  return (
    <header
      className={styles.header}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border, #e5e7eb)",
        marginBottom: 32,
      }}
    >
      <div
        className={styles.inner}
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* BRAND LOGO / TITLE */}
        <NavLink
          to="/"
          className={styles.brand}
          aria-label="Helen Bokea Home"
          style={{
            textDecoration: "none",
            fontSize: 19,
            fontWeight: 800,
            color: "var(--teal-800, #0f4c45)",
            letterSpacing: "-0.02em",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span>Helen Bokea, MPH</span>
        </NavLink>

        {/* PRIMARY NAVIGATION */}
        <nav
          className={styles.nav}
          aria-label="Primary navigation"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} style={linkStyle} className={styles.link}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* EXTERNAL FOUNDATION CTA */}
        <a
          href="https://www.maayimmf.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
          style={{
            textDecoration: "none",
            padding: "10px 18px",
            borderRadius: "999px",
            background: "var(--teal-700, #0f766e)",
            color: "white",
            fontWeight: 700,
            fontSize: 13,
            boxShadow: "0 4px 12px rgba(15, 118, 110, 0.15)",
            whiteSpace: "nowrap",
          }}
        >
          Foundation Site ↗
        </a>
      </div>

      {/* MOBILE RESPONSIVE TWEAKS */}
      <style>
        {`
          @media (max-width: 768px) {
            header > div {
              flex-wrap: wrap;
              gap: 12px;
              justify-content: center !important;
            }
          }
        `}
      </style>
    </header>
  );
}