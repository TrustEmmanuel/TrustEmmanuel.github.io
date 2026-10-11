import { ImageResponse } from "next/og";
import { profile } from "@/lib/profile";

export const dynamic = "force-static";
export const alt = `${profile.name}, ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Share preview uses the same midnight and ultraviolet palette as the portfolio.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          background: "#1c1c35",
          color: "#ffffff",
          padding: "80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -240,
            right: -80,
            width: 650,
            height: 650,
            borderRadius: "50%",
            border: "1px solid #8272ff",
          }}
        />
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
          {profile.name}
        </div>
        <div style={{ marginTop: 24, fontSize: 36, color: "#b8adff" }}>
          {profile.headline}
        </div>
        <div style={{ marginTop: 28, fontSize: 23, color: "#ff907d" }}>
          GOOD IDEAS DESERVE GREAT SOFTWARE.
        </div>
      </div>
    ),
    { ...size },
  );
}
