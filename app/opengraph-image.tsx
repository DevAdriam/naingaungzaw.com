import { ImageResponse } from "next/og";

export const alt = "Naing Aung Zaw — Backend-Focused Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NODES: [number, number][] = [
  [80, 90], [220, 60], [380, 130], [520, 80], [680, 150], [820, 110], [960, 170], [1100, 120],
  [140, 240], [300, 260], [460, 300], [620, 220], [780, 280], [940, 320], [1080, 240],
  [100, 400], [260, 440], [420, 420], [580, 480], [740, 440], [900, 460], [1080, 400],
  [180, 540], [340, 520], [500, 570], [660, 540], [820, 580], [980, 520], [1120, 550],
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7],
  [0, 8], [1, 9], [2, 10], [3, 11], [4, 12], [5, 13], [6, 14], [7, 14],
  [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14],
  [8, 15], [9, 16], [10, 17], [11, 18], [12, 19], [13, 20], [14, 21],
  [15, 16], [16, 17], [17, 18], [18, 19], [19, 20], [20, 21],
  [15, 22], [16, 23], [17, 24], [18, 25], [19, 26], [20, 27], [21, 28],
  [22, 23], [23, 24], [24, 25], [25, 26], [26, 27], [27, 28],
];

const constellationSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><defs><linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="0.12" stop-color="#fff" stop-opacity="1"/><stop offset="0.78" stop-color="#fff" stop-opacity="1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><mask id="fadeMask"><rect width="1200" height="630" fill="url(#fade)"/></mask></defs><g mask="url(#fadeMask)">${EDGES.map(
  ([a, b]) => {
    const [x1, y1] = NODES[a];
    const [x2, y2] = NODES[b];
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#0a0a0a" stroke-opacity="0.09" stroke-width="1"/>`;
  }
).join("")}${NODES.map(
  ([x, y]) => `<circle cx="${x}" cy="${y}" r="2.4" fill="#0a0a0a" fill-opacity="0.42"/>`
).join("")}</g></svg>`;

const constellationDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(constellationSvg)}`;

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
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #fafaf9 0%, #f5f5f4 55%, #ececea 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <img
          src={constellationDataUrl}
          width={1200}
          height={630}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            position: "relative",
          }}
        >
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
            }}
          >
            NA
          </div>
          <span style={{ fontSize: 24, color: "#0a0a0a", fontWeight: 500 }}>
            Naing Aung Zaw
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            position: "relative",
            maxWidth: 980,
          }}
        >
          <div
            style={{
              fontSize: 88,
              color: "#0a0a0a",
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              fontWeight: 500,
              display: "flex",
              flexWrap: "wrap",
              gap: 18,
            }}
          >
            <span>Full-stack developer,</span>
            <span
              style={{
                fontStyle: "italic",
                color: "#737373",
                fontFamily: "Georgia, serif",
              }}
            >
              system-design
            </span>
            <span>at heart.</span>
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#525252",
              maxWidth: 760,
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            Backend-focused full stack at Supacart — leading SupaGym and
            Mingalar Trip end-to-end.
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "#0a0a0a",
                color: "#fafaf9",
                borderRadius: 999,
                padding: "14px 24px",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              <span>Get in touch</span>
              <span>→</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "#ffffff",
                color: "#0a0a0a",
                border: "1px solid #e5e5e5",
                borderRadius: 999,
                padding: "14px 24px",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              <span>Download CV</span>
              <span>↓</span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "#737373",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            position: "relative",
          }}
        >
          <span>Yangon · Myanmar</span>
          <span>naingaungzaw.com</span>
        </div>
      </div>
    ),
    size
  );
}
