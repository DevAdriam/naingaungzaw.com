import { ImageResponse } from "next/og";

export const alt = "Naing Aung Zaw — Backend-Focused Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #fafaf9 0%, #f5f5f4 50%, #e7e5e4 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#0a0a0a",
              color: "#fafaf9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 600,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            NA
          </div>
          <span
            style={{
              fontSize: 24,
              color: "#0a0a0a",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 500,
            }}
          >
            Naing Aung Zaw
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 84,
              color: "#0a0a0a",
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              fontFamily: "system-ui, sans-serif",
              fontWeight: 500,
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <span>Backend-focused</span>
            <span style={{ fontStyle: "italic", color: "#737373" }}>
              full stack
            </span>
            <span>developer.</span>
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#525252",
              fontFamily: "system-ui, sans-serif",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Lead developer on SupaGym & Mingalar Trip at Supacart Myanmar
            Software Solutions.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "#737373",
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <span>Yangon · Myanmar</span>
          <span>naingaungzaw.dev</span>
        </div>
      </div>
    ),
    size
  );
}
