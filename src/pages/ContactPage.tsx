import React from "react";

export default function ContactPage(): React.ReactElement {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "10px 0 60px 0" }}>
      {/* --- HEADER BLOCK --- */}
      <div style={{ borderBottom: "2px solid var(--border, #e5e7eb)", paddingBottom: 28, marginBottom: 40 }}>
        <span
          style={{
            fontSize: 12,
            fontWeight: 800,
            color: "var(--teal-700, #0f766e)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Connect & Connect
        </span>
        <h1
          style={{
            fontSize: 42,
            fontWeight: 800,
            color: "var(--teal-800, #0f4c45)",
            margin: "8px 0 0 0",
            letterSpacing: "-0.02em",
          }}
        >
          Contact & Foundations
        </h1>
        <p style={{ marginTop: 12, maxWidth: 680, color: "var(--muted, #4b5563)", lineHeight: 1.65, fontSize: 17 }}>
          For professional advisory inquiries, executive coaching, strategic partnerships, or community initiatives.
        </p>
      </div>

      {/* --- CARDS GRID --- */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 24,
        }}
      >
        {/* LINKEDIN CARD */}
        <div
          style={{
            border: "1px solid var(--border, #e5e7eb)",
            borderRadius: 24,
            padding: 32,
            background: "white",
            boxShadow: "0 10px 24px rgba(0,0,0,0.03)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // FIXED: changed justify to justifyContent
          }}
        >
          <div>
            <span
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: "var(--teal-700)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                background: "rgba(15, 118, 110, 0.08)",
                padding: "4px 12px",
                borderRadius: "999px",
              }}
            >
              Professional Network
            </span>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "var(--teal-800, #0f4c45)", margin: "16px 0 10px 0" }}>
              LinkedIn
            </h2>
            <p style={{ color: "var(--muted, #4b5563)", fontSize: 14, lineHeight: 1.6, margin: "0 0 24px 0" }}>
              Connect directly for advisory services, executive coaching engagements, speaking requests, or board roles.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/helenbokea/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "14px 24px",
              borderRadius: "999px",
              background: "var(--teal-700, #0f766e)",
              color: "white",
              fontWeight: 800,
              fontSize: 15,
              boxShadow: "0 6px 16px rgba(15, 118, 110, 0.2)",
            }}
          >
            Connect on LinkedIn ↗
          </a>
        </div>

        {/* FOUNDATION CARD */}
        <div
          style={{
            border: "1px solid var(--border, #e5e7eb)",
            borderRadius: 24,
            padding: 32,
            background: "linear-gradient(135deg, rgba(15, 118, 110, 0.06), rgba(15, 118, 110, 0.02))",
            boxShadow: "0 10px 24px rgba(0,0,0,0.03)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // FIXED: changed justify to justifyContent
          }}
        >
          <div>
            <span
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: "var(--teal-700)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                background: "rgba(15, 118, 110, 0.08)",
                padding: "4px 12px",
                borderRadius: "999px",
              }}
            >
              Philanthropic Work
            </span>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "var(--teal-800, #0f4c45)", margin: "16px 0 10px 0" }}>
              Maayi Mary Mbuya Foundation
            </h2>
            <p style={{ color: "var(--muted, #4b5563)", fontSize: 14, lineHeight: 1.6, margin: "0 0 24px 0" }}>
              Explore community projects, local health initiatives, and grassroots empowerment outreach.
            </p>
          </div>

          <a
            href="https://www.maayimmf.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "14px 24px",
              borderRadius: "999px",
              background: "white",
              color: "var(--teal-800, #0f4c45)",
              border: "1px solid var(--border, #e5e7eb)",
              fontWeight: 800,
              fontSize: 15,
              boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
            }}
          >
            Visit www.maayimmf.com ↗
          </a>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 680px) {
            div[style*="grid-template-columns: repeat(2"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
}