import { NavLink } from "react-router-dom";

export default function HomePage(): React.ReactElement {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: 56, paddingBottom: 40 }}>
      {/* --- HERO SECTION --- */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              padding: "6px 14px",
              borderRadius: "999px",
              background: "rgba(15, 118, 110, 0.1)",
              color: "var(--teal-700)",
              fontSize: 13,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: 16,
            }}
          >
            Global Health Leader & Executive Coach
          </div>

          <h1
            style={{
              fontSize: 46,
              fontWeight: 800,
              margin: 0,
              color: "var(--teal-800, #0f4c45)",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            Helen Bokea, MPH
          </h1>

          <p
            style={{
              marginTop: 16,
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--muted, #4b5563)",
              fontWeight: 400,
            }}
          >
            Systems thinker with nearly two decades driving multi-country health strategies, 
            board governance, and high-impact executive coaching across Africa, Asia, and Latin America.
          </p>

          {/* Action CTAs */}
          <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap", alignItems: "center" }}>
            <NavLink
              to="/services"
              style={{
                textDecoration: "none",
                padding: "14px 26px",
                borderRadius: "999px",
                background: "var(--teal-700, #0f766e)",
                color: "white",
                fontWeight: 700,
                fontSize: 15,
                boxShadow: "0 10px 20px rgba(15, 118, 110, 0.2)",
              }}
            >
              Explore Services
            </NavLink>

            <NavLink
              to="/cv"
              style={{
                textDecoration: "none",
                padding: "14px 26px",
                borderRadius: "999px",
                border: "1px solid var(--border, #e5e7eb)",
                background: "white",
                color: "var(--teal-800, #0f4c45)",
                fontWeight: 700,
                fontSize: 15,
              }}
            >
              View CV & Impact
            </NavLink>
          </div>
        </div>

        {/* Hero Image Showcase */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: -10,
              background: "linear-gradient(135deg, rgba(15, 118, 110, 0.15), rgba(20, 184, 166, 0.05))",
              borderRadius: 32,
              transform: "rotate(-2deg)",
              zIndex: 0,
            }}
          />
          <img
            src="/founder.jpg"
            alt="Helen Bokea"
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              maxHeight: 520,
              objectFit: "cover",
              objectPosition: "top center",
              borderRadius: 24,
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
            }}
          />
        </div>
      </div>

      {/* --- STATS BAR --- */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
          background: "rgba(255, 255, 255, 0.7)",
          border: "1px solid var(--border, #e5e7eb)",
          borderRadius: 20,
          padding: "24px 20px",
          backdropFilter: "blur(8px)",
        }}
      >
        {[
          { label: "Experience", value: "20+ Yrs" },
          { label: "Countries Served", value: "15+" },
          { label: "Portfolio Managed", value: "$300M+" },
          { label: "Global Partners", value: "17+" },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: "var(--teal-700, #0f766e)" }}>
              {stat.value}
            </div>
            <div style={{ fontSize: 13, color: "var(--muted, #6b7280)", fontWeight: 600, marginTop: 4 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* --- CORE PILLARS --- */}
      <div>
        <h2 style={{ fontSize: 28, color: "var(--teal-800, #0f4c45)", marginBottom: 8, fontWeight: 800 }}>
          Areas of Leadership & Expertise
        </h2>
        <p style={{ color: "var(--muted)", maxWidth: 640, margin: 0, marginBottom: 24 }}>
          Bridging high-level strategy, national health policy, and personnel development.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 20,
          }}
        >
          {[
            {
              title: "Global Health Strategy",
              subtitle: "Systems Strengthening & Diagnostics",
              body: "Designing national health strategies, NTD elimination programs, and disease diagnostic frameworks across 15+ countries.",
            },
            {
              title: "Executive Coaching & Mentorship",
              subtitle: "ICF Accredited Leadership Guidance",
              body: "Mentoring ministry leadership, senior officials, and cross-functional teams to build resilient operational capacity.",
            },
            {
              title: "Governance & Board Leadership",
              subtitle: "Strategic Advisory & Oversight",
              body: "Active trustee and board member advising global health alliances, steering international transition models, and managing risk.",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                border: "1px solid var(--border, #e5e7eb)",
                borderRadius: 20,
                padding: 24,
                background: "white",
                boxShadow: "0 10px 24px rgba(0,0,0,0.03)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // FIXED: changed justify to justifyContent
              }}
            >
              <div>
                <span style={{ fontSize: 11, fontWeight: 800, color: "var(--teal-700)", textTransform: "uppercase" }}>
                  {card.subtitle}
                </span>
                <h3 style={{ fontWeight: 800, color: "var(--teal-800)", fontSize: 19, margin: "8px 0 10px 0" }}>
                  {card.title}
                </h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.65, fontSize: 14, margin: 0 }}>
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- FOUNDATION SPOTLIGHT FEATURE --- */}
      <div
        style={{
          borderRadius: 24,
          padding: 36,
          background: "linear-gradient(135deg, var(--teal-800, #0f4c45), #062c28)",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 32,
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: 600 }}>
          <span
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "4px 12px",
              borderRadius: "999px",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Grassroots Impact
          </span>
          <h2 style={{ fontSize: 28, margin: "14px 0 10px 0", fontWeight: 800 }}>
            Maayi Mary Mbuya Foundation
          </h2>
          <p style={{ opacity: 0.9, lineHeight: 1.65, fontSize: 15, margin: 0 }}>
            Translating strategic global health leadership into community-level transformation. 
            Discover our humanitarian projects, community health initiatives, and local empowerment programs.
          </p>
        </div>

        <a
          href="https://www.maayimmf.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            padding: "14px 24px",
            borderRadius: "999px",
            background: "#ffffff",
            color: "var(--teal-800, #0f4c45)",
            fontWeight: 800,
            fontSize: 15,
            whiteSpace: "nowrap",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          }}
        >
          Visit Foundation Site ↗
        </a>
      </div>

      {/* Responsive Breakpoints */}
      <style>
        {`
          @media (max-width: 900px) {
            section > div:nth-of-type(1) {
              grid-template-columns: 1fr !important;
            }
            section > div:nth-of-type(2) {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            section > div:nth-of-type(3) > div {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 500px) {
            section > div:nth-of-type(2) {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </section>
  );
}