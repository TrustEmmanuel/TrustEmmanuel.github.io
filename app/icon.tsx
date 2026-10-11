import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// The EU monogram carries the portfolio's ultraviolet identity.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: "#6754f5",
          color: "#ffffff",
          fontSize: 14,
          fontWeight: 700,
        }}
      >
        EU
      </div>
    ),
    { ...size },
  );
}
