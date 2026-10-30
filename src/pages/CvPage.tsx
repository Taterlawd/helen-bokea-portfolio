import React, { useState } from "react";

type ExperienceItem = {
  role: string;
  org: string;
  location?: string;
  dates: string;
  summary: string;
  achievements: string[];
};

type BoardRole = {
  title: string;
  org: string;
  dates: string;
  detail: string;
};

const BOARD_ROLES: BoardRole[] = [
  {
    title: "Advisor, Board of Trustees",
    org: "Unlimit Health",
    dates: "May 2025 – Present",
    detail: "Providing strategic guidance to advance equitable health solutions globally.",
  },
  {
    title: "Executive Board Member",
    org: "Swiss Alliance Against Neglected Tropical Diseases",
    dates: "2023 – 2024",
    detail: "Contributed to shaping international NTD strategies and policy frameworks.",
  },
  {
    title: "Chair, Steering Committee",
    org: "Human African Trypanosomiasis Program",
    dates: "2023 – 2024",
    detail: "Oversaw a multi-country initiative spanning 10 endemic nations.",
  },
  {
    title: "Setting up Consultant",
    org: "Health Research Capacity NGO (Kenya)",
    dates: "IDRC Supported",
    detail: "Established governance structures including Advisory Board, Scientific Advisory Committee, and Secretariat.",
  },
];

const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Project Consultant",
    org: "CBM — Democratic Republic of Congo (DRC)",
    dates: "June 2025 – Present",
    summary:
      "Providing strategic, operational, and technical leadership for the fast-tracked initiation of a trachomatous trichiasis (TT) elimination pilot program in alignment with WHO guidelines.",
    achievements: [
      "Launched the Tanganyika province surgery pilot project ahead of the August 2025 target deadline.",
      "Co-facilitated national planning for DRC's Trachoma Elimination Strategy (2025–2030) in Kinshasa.",
      "Established supportive supervision and mentoring frameworks for surgical teams to build long-term capacity.",
    ],
  },
  {
    role: "Director, Neglected Tropical Diseases (NTD) Programme",
    org: "FIND (Foundation for Innovative New Diagnostics)",
    dates: "Sept 2023 – Dec 2024",
    summary:
      "Provided strategic and operational direction for a global portfolio of diagnostic projects across Sub-Saharan Africa, South East Asia, and Latin America.",
    achievements: [
      "Initiated and co-created FIND's 5-Year NTD Strategic Plan (2024–2030) aligned with WHO roadmap targets.",
      "Revitalized an international technical team that had lacked leadership for two years, reinstating structure and accountability.",
      "Pioneered transition planning for sleeping sickness elimination in Uganda, now serving as a global model.",
      "Convened and facilitated global diagnostic innovation workshops at NNN Kuala Lumpur and Nairobi.",
    ],
  },
  {
    role: "International Programs Director",
    org: "Rice University — Institute of Global Health Technologies (NEST360)",
    dates: "June 2021 – May 2023",
    summary:
      "Directed the multi-country NEST360 alliance across Malawi, Kenya, Tanzania, and Nigeria to reduce hospital neonatal mortality.",
    achievements: [
      "Coordinated 17 international alliance partners, ensuring operational delivery and shared accountability.",
      "Introduced quarterly 'data-for-action' review sessions, embedding evidence-based decision-making in target hospitals.",
      "Contributed to designing Phase 2 country-level proposals that successfully secured multi-year funding in 2024.",
    ],
  },
  {
    role: "Technical Advisor",
    org: "Sightsavers International",
    dates: "Jan 2017 – June 2021",
    summary:
      "Delivered technical and programmatic leadership across a $300M global trachoma elimination portfolio in Anglophone and Francophone Africa.",
    achievements: [
      "Advised Ministries of Health across 11+ countries (including Benin, Cameroon, Chad, Ethiopia, Malawi, Nigeria, Uganda, Zambia).",
      "Directly contributed to Benin's successful validation of trachoma elimination as a public health problem in 2023.",
      "Spearheaded Malawi's post-elimination transition model, informing ICTC's global guidelines adopted worldwide.",
    ],
  },
  {
    role: "Regional Trachoma Programme Coordinator, Africa",
    org: "CBM International",
    dates: "June 2014 – Dec 2016",
    summary:
      "Oversaw planning, budgeting, and delivery of CBM-supported disease elimination portfolios across Chad, Kenya, Uganda, Malawi, DRC, and South Sudan.",
    achievements: [
      "Established a partner-led project team in Uganda operating without a physical CBM office, delivering ahead of schedule and under budget.",
      "Conducted bi-lingual (English/French) technical capacity trainings for Ministry of Health officials and INGO staff.",
    ],
  },
];

const SKILL_CATEGORIES = [
  {
    category: "Strategic Leadership & Governance",
    skills: [
      "Board & Institutional Governance",
      "Global Health Policy & Advocacy",
      "Strategic Planning (5-Year Frameworks)",
      "Multi-Country Portfolio Oversight",
      "Resource Mobilization & Grant Proposals",
    ],
  },
  {
    category: "Technical & Systems Expertise",
    skills: [
      "Neglected Tropical Diseases (NTDs)",
      "Health Systems Strengthening (HSS)",
      "Trachoma & Eye Health Elimination",
      "Neonatal Health & Technology Adoption",
      "WHO Policy & ICTC Preferred Practices",
    ],
  },
  {
    category: "Operations & Execution",
    skills: [
      "Global Alliance Coordination (17+ Partners)",
      "Data-for-Action & M&E Systems",
      "Post-Elimination Transition Planning",
      "Bi-Lingual Workshop Facilitation (English/French)",
      "ICF Executive Coaching & Mentorship",
    ],
  },
];

export default function CvPage(): React.ReactElement {
  const [activeTab, setActiveTab] = useState<"experience" | "board" | "skills" | "education">("experience");

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 0 60px 0" }}>
      {/* --- HEADER BLOCK --- */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: 20,
          borderBottom: "2px solid var(--border, #e5e7eb)",
          paddingBottom: 28,
          marginBottom: 36,
        }}
      >
        <div>
          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: "var(--teal-700, #0f766e)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Curriculum Vitae & Governance Record
          </span>
          <h1
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: "var(--teal-800, #0f4c45)",
              margin: "6px 0 0 0",
              letterSpacing: "-0.02em",
            }}
          >
            Helen Bokea, MPH
          </h1>
          <p style={{ margin: "6px 0 0 0", color: "var(--muted, #6b7280)", fontSize: 16, maxWidth: 680 }}>
            Global Health Executive | Health Systems Strengthening | Strategic Advisory & Board Leadership
          </p>
        </div>

        <a
          href="/cv.pdf"
          download
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 22px",
            borderRadius: "999px",
            background: "var(--teal-700, #0f766e)",
            color: "white",
            fontWeight: 700,
            textDecoration: "none",
            fontSize: 14,
            boxShadow: "0 6px 16px rgba(15, 118, 110, 0.2)",
          }}
        >
          <span>⭳</span> Download Official CV (PDF)
        </a>
      </div>

      {/* --- NAVIGATION TABS --- */}
      <div
        style={{
          display: "flex",
          gap: 10,
          borderBottom: "1px solid var(--border, #e5e7eb)",
          marginBottom: 32,
          overflowX: "auto",
        }}
      >
        {[
          { id: "experience", label: "Professional Experience" },
          { id: "board", label: "Governance & Board Roles" },
          { id: "skills", label: "Key Skillsets & Expertise" },
          { id: "education", label: "Education & Credentials" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            style={{
              padding: "12px 20px",
              border: "none",
              borderBottom: activeTab === tab.id ? "3px solid var(--teal-700, #0f766e)" : "3px solid transparent",
              background: "transparent",
              color: activeTab === tab.id ? "var(--teal-800, #0f4c45)" : "var(--muted, #6b7280)",
              fontWeight: activeTab === tab.id ? 800 : 600,
              fontSize: 15,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* --- TAB CONTENT 1: PROFESSIONAL EXPERIENCE --- */}
      {activeTab === "experience" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {EXPERIENCE.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "white",
                border: "1px solid var(--border, #e5e7eb)",
                borderRadius: 20,
                padding: 28,
                boxShadow: "0 8px 20px rgba(0,0,0,0.02)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 12,
                  marginBottom: 8,
                }}
              >
                <div>
                  <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "var(--teal-800, #0f4c45)" }}>
                    {item.role}
                  </h3>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--teal-700, #0f766e)", marginTop: 2 }}>
                    {item.org}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    background: "rgba(15, 118, 110, 0.08)",
                    color: "var(--teal-800, #0f4c45)",
                    padding: "6px 14px",
                    borderRadius: "999px",
                  }}
                >
                  {item.dates}
                </span>
              </div>

              <p style={{ color: "var(--muted, #4b5563)", lineHeight: 1.65, fontSize: 15, marginTop: 12 }}>
                {item.summary}
              </p>

              <div style={{ marginTop: 16 }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: "var(--teal-700)", textTransform: "uppercase" }}>
                  Key Achievements & Deliverables
                </span>
                <ul style={{ margin: "8px 0 0 0", paddingLeft: 20, color: "#374151", fontSize: 14, lineHeight: 1.65 }}>
                  {item.achievements.map((ach, aIdx) => (
                    <li key={aIdx} style={{ marginBottom: 6 }}>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* --- TAB CONTENT 2: GOVERNANCE & BOARD ROLES --- */}
      {activeTab === "board" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {BOARD_ROLES.map((board, idx) => (
            <div
              key={idx}
              style={{
                background: "white",
                border: "1px solid var(--border, #e5e7eb)",
                borderRadius: 20,
                padding: 24,
                boxShadow: "0 8px 20px rgba(0,0,0,0.02)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "var(--teal-700)",
                    background: "rgba(15, 118, 110, 0.08)",
                    padding: "4px 10px",
                    borderRadius: "999px",
                  }}
                >
                  {board.dates}
                </span>
                <h3 style={{ margin: "14px 0 4px 0", fontSize: 18, fontWeight: 800, color: "var(--teal-800)" }}>
                  {board.title}
                </h3>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--muted)", marginBottom: 12 }}>
                  {board.org}
                </div>
                <p style={{ color: "#4b5563", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                  {board.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* --- TAB CONTENT 3: SKILLSETS & EXPERTISE --- */}
      {activeTab === "skills" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              style={{
                background: "white",
                border: "1px solid var(--border, #e5e7eb)",
                borderRadius: 20,
                padding: 24,
              }}
            >
              <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--teal-800)", margin: "0 0 16px 0" }}>
                {cat.category}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 14,
                      color: "#374151",
                      fontWeight: 500,
                    }}
                  >
                    <span style={{ color: "var(--teal-700)", fontWeight: 800 }}>✓</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* --- TAB CONTENT 4: EDUCATION & CREDENTIALS --- */}
      {activeTab === "education" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {/* Degrees */}
          <div
            style={{
              background: "white",
              border: "1px solid var(--border, #e5e7eb)",
              borderRadius: 20,
              padding: 26,
            }}
          >
            <h3 style={{ fontSize: 18, fontWeight: 800, color: "var(--teal-800)", margin: "0 0 16px 0" }}>
              Academic Qualifications
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div>
                <div style={{ fontWeight: 800, color: "#111827", fontSize: 15 }}>
                  Master of Public Health (Health Systems Management)
                </div>
                <div style={{ color: "var(--teal-700)", fontSize: 13, fontWeight: 700 }}>
                  University of Liverpool, UK (2010 – 2013)
                </div>
              </div>

              <div>
                <div style={{ fontWeight: 800, color: "#111827", fontSize: 15 }}>
                  MSc Management & Organizational Development
                </div>
                <div style={{ color: "var(--teal-700)", fontSize: 13, fontWeight: 700 }}>
                  United States International University-Africa (2004 – 2005)
                </div>
              </div>

              <div>
                <div style={{ fontWeight: 800, color: "#111827", fontSize: 15 }}>
                  Bachelor of Education
                </div>
                <div style={{ color: "var(--teal-700)", fontSize: 13, fontWeight: 700 }}>
                  Kenyatta University (1987 – 1990)
                </div>
              </div>
            </div>
          </div>

          {/* Executive Certifications */}
          <div
            style={{
              background: "white",
              border: "1px solid var(--border, #e5e7eb)",
              borderRadius: 20,
              padding: 26,
            }}
          >
            <h3 style={{ fontSize: 18, fontWeight: 800, color: "var(--teal-800)", margin: "0 0 16px 0" }}>
              Executive & Professional Courses
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { title: "Advanced Course in Diagnostics (ACDx)", body: "London School of Hygiene & Tropical Medicine & Mérieux Foundation (2024)" },
                { title: "Executive Diploma in Professional Coaching", body: "ICF Accredited / The Coaching Hub, Nairobi (2023)" },
                { title: "Women Directors in Leadership Program", body: "Strathmore Business School & Cranfield School of Management, UK (2022)" },
                { title: "Mentors Summit: Shaping Long Term Well-being", body: "Strathmore University (2025)" },
              ].map((cert, cIdx) => (
                <div key={cIdx}>
                  <div style={{ fontWeight: 800, color: "#111827", fontSize: 14 }}>{cert.title}</div>
                  <div style={{ color: "var(--muted)", fontSize: 13 }}>{cert.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CSS Responsiveness */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
}