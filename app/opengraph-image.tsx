import { ImageResponse } from "next/og";

export const alt =
  "Talha Rashid — Full-Stack Developer, Lahore";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
          padding: "76px",
          background:
            "radial-gradient(ellipse at 85% 20%, rgba(126, 34, 206, 0.45), transparent 38%), linear-gradient(135deg, #09090b 0%, #181220 55%, #09090b 100%)",
          color: "#fafafa",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", maxWidth: "790px", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              color: "#c4b5fd",
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "#a855f7", fontSize: "34px" }}>TR</span>
            Portfolio
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "46px",
              fontSize: "68px",
              fontWeight: 700,
              letterSpacing: "-3px",
            }}
          >
            Talha Rashid
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "18px",
              color: "#d4d4d8",
              fontSize: "32px",
              lineHeight: 1.3,
            }}
          >
            Full-Stack Developer, Lahore
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              color: "#a1a1aa",
              fontSize: "23px",
            }}
          >
            Web applications · AI-powered digital products
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "205px",
            height: "205px",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid rgba(192, 132, 252, 0.55)",
            borderRadius: "42px",
            background: "rgba(24, 18, 32, 0.8)",
            boxShadow: "0 0 80px rgba(147, 51, 234, 0.3)",
            color: "#c084fc",
            fontSize: "86px",
            fontWeight: 700,
          }}
        >
          TR
        </div>
      </div>
    ),
    size,
  );
}
