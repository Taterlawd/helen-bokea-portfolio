import React from "react";
import { NavLink } from "react-router-dom";

type ServicePillar = {
  id: string;
  badge: string;
  title: string;
  who: string;
  description: string;
  deliverables: string[];
  ctaText: string;
};

const SERVICES: ServicePillar[] = [
  {
    id: "coaching",
    badge: "ICF Accredited",
    title: "Executive & Leadership Coaching",
    who: "For C-Suite executives, Ministry leadership, and senior organizational directors navigating complex decisions.",
    description:
      "Structured 1:1 coaching grounded in International Coaching Federation (ICF) standards. Designed to build clarity, strategic vision, operational execution, and emotional resilience in high-stakes environments.",
    deliverables: [
      "1:1 Confidential Coaching Retainers (Bi-weekly / Monthly)",
      "Leadership Presence & Executive Communications",
      "Organizational Alignment & Change Management",
      "Transition Coaching for New C-Suite & Board Appointments",
    ],
    ctaText: "Inquire About Coaching",
  },
  {
    id: "consulting",
    badge: "Global Health Systems",
    title: "Global Health Strategy & Advisory",
    who: "For international NGOs, foundation boards, Ministries of Health, and bilateral development agencies.",
    description:
      "End-to-end technical advisory for multi-country health programs. Specializing in disease elimination roadmaps, diagnostic access, transition planning, and multi-donor engagement.",
    deliverables: [
      "5-Year Strategic Roadmap Co-Creation & Planning",
      "Post-Elimination Transition Model Implementation",
      "Multi-Country Health Systems Strengthening (HSS)",
      "Donor Proposal Development & Resource Mobilization",
    ],
    ctaText: "Book Strategy Engagement",
  },
  {
    id: "governance",
    badge: "Board Level",
    title: "Governance & Board Advisory",
    who: "For non-profit boards, steering committees, and global health alliances requiring strategic oversight.",
    description:
      "High-level governance support leveraging experience across international boards (including Unlimit Health and the Swiss Alliance Against NTDs) to ensure institutional accountability and alignment with global targets.",
    deliverables: [
      "Board Strategic Reviews & Governance Assessments",
      "International Steering Committee Leadership & Facilitation",
      "Risk Mitigation & Multi-Partner Grant Compliance Oversight",
      "Institutional Policy Advocacy & High-Level Representation",
    ],
    ctaText: "Explore Governance Roles",
  },
  {
    id: "workshops",
    badge: "Bi-Lingual (Eng/Fr)",
    title: "Technical Workshop Facilitation & Mentorship",
    who: "For implementing teams, researchers, and emerging global health leaders.",
    description:
      "High-impact convenings, data-for-action reviews, and technical workshops delivered in English and French. Tailored mentorship programs to cultivate the next generation of public health leaders.",
    deliverables: [
      "Quarterly 'Data-for-Action' M&E Workshops",
      "Bi-lingual Technical Training for Ministry Staff",
      "Emerging Leaders Group Mentorship Programs",
      "Keynote Speaking & Global Panel Moderation",
    ],
    ctaText: "Schedule Workshop",
  },
];

export default function ServicesPage(): React.ReactElement {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 0 60px 0" }}>
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
          Advisory & Capability Framework
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
          Services & Executive Advisory
        </h1>
        <p style={{ marginTop: 12, maxWidth: 780, color: "var(--muted, #4b5563)", lineHeight: 1.65, fontSize: 17 }}>
          Tailored engagements designed for leaders and institutions seeking sustainable health systems, 
          robust governance, and transformative executive leadership.
        </p>
      </div>

      {/* --- SERVICES GRID --- */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 28,
          marginBottom: 56,
        }}
      >
        {SERVICES.map((s) => (
          <div
            key={s.id}
            style={{
              border: "1px solid var(--border, #e5e7eb)",
              borderRadius: 24,
              padding: 32,
              background: "white",
              boxShadow: "0 10px 24px rgba(0,0,0,0.03)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  background: "rgba(15, 118, 110, 0.1)",
                  color: "var(--teal-700, #0f766e)",
                  fontSize: 12,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: 14,
                }}
              >
                {s.badge}
              </span>

              <h2 style={{ fontSize: 24, fontWeight: 800, color: "var(--teal-800, #0f4c45)", margin: "0 0 8px 0" }}>
                {s.title}
              </h2>

              <p style={{ fontWeight: 600, color: "var(--teal-700)", fontSize: 14, marginBottom: 14, lineHeight: 1.5 }}>
                {s.who}
              </p>

              <p style={{ color: "var(--muted, #4b5563)", lineHeight: 1.65, fontSize: 14, marginBottom: 20 }}>
                {s.description}
              </p>

              <div style={{ borderTop: "1px dashed var(--border, #e5e7eb)", paddingTop: 18, marginBottom: 24 }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: "var(--teal-800)", textTransform: "uppercase" }}>
                  Key Engagement Scope
                </span>
                <ul style={{ margin: "10px 0 0 0", paddingLeft: 18, color: "#374151", fontSize: 14, lineHeight: 1.65 }}>
                  {s.deliverables.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: 6 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <NavLink
              to="/contact"
              style={{
                textDecoration: "none",
                display: "inline-block",
                textAlign: "center",
                padding: "12px 20px",
                borderRadius: "999px",
                background: "var(--teal-700, #0f766e)",
                color: "white",
                fontWeight: 700,
                fontSize: 14,
                marginTop: "auto",
              }}
            >
              {s.ctaText} →
            </NavLink>
          </div>
        ))}
      </div>

      {/* --- ENGAGEMENT PROCESS BLOCK --- */}
      <div
        style={{
          background: "rgba(15, 118, 110, 0.04)",
          border: "1px solid rgba(15, 118, 110, 0.15)",
          borderRadius: 24,
          padding: 36,
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 32px auto" }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: "var(--teal-800, #0f4c45)", margin: 0 }}>
            How We Engage
          </h2>
          <p style={{ color: "var(--muted)", fontSize: 15, marginTop: 8 }}>
            A structured advisory workflow ensuring alignment, transparency, and strategic impact.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {[
            { step: "01", title: "Discovery & Needs Assessment", body: "Initial consultation to understand organizational priorities, target outcomes, and operating context." },
            { step: "02", title: "Strategic Roadmap", body: "Co-designing a customized engagement model, deliverables timeline, and measurement framework." },
            { step: "03", title: "Execution & Oversight", body: "Direct facilitation, 1:1 coaching sessions, or strategy execution with continuous evaluation." },
          ].map((phase) => (
            <div key={phase.step} style={{ background: "white", borderRadius: 18, padding: 22, border: "1px solid var(--border)" }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: "var(--teal-700)", marginBottom: 8 }}>
                {phase.step}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "var(--teal-800)", margin: "0 0 8px 0" }}>
                {phase.title}
              </h3>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
                {phase.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Breakpoints */}
      <style>
        {`
          @media (max-width: 900px) {
            div[style*="grid-template-columns: repeat(2"] {
              grid-template-columns: 1fr !important;
            }
            div[style*="grid-template-columns: repeat(3"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
}