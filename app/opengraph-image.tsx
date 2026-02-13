import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Are You Human? — Prove you're not a bot. 10 questions. No mercy.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(168deg, #FDF8F3 0%, #FFF5EB 30%, #FDF8F3 60%, #F9F1E6 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background:
              "linear-gradient(90deg, #D94F30 0%, #E85D3A 40%, #E8A44A 100%)",
            display: "flex",
          }}
        />

        {/* Pre-heading */}
        <div
          style={{
            fontSize: 18,
            letterSpacing: "0.15em",
            color: "#8A8580",
            marginBottom: 20,
            display: "flex",
          }}
        >
          imdefinitelyhuman.com
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontStyle: "italic",
            fontWeight: 400,
            color: "#2C2825",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            textAlign: "center",
            marginBottom: 12,
            display: "flex",
          }}
        >
          Are You Human?
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: "#8A8580",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.4,
            display: "flex",
          }}
        >
          Find out if you&apos;re a real human or just GPT in a trenchcoat.
        </div>

        {/* Accent dot divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginTop: 36,
          }}
        >
          <div
            style={{
              width: 40,
              height: 2,
              background: "#E6DFD7",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#D94F30",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 40,
              height: 2,
              background: "#E6DFD7",
              display: "flex",
            }}
          />
        </div>

        {/* CTA hint */}
        <div
          style={{
            fontSize: 18,
            color: "#D94F30",
            marginTop: 24,
            fontWeight: 500,
            letterSpacing: "0.05em",
            display: "flex",
          }}
        >
          10 questions. CAPTCHA. Prove it.
        </div>
      </div>
    ),
    { ...size }
  );
}
