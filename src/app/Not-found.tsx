import Link from "next/link"

export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#030712",
            color: "#ffffff",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <h1
            style={{
              fontSize: "120px",
              fontWeight: "bold",
              margin: 0,
              background: "linear-gradient(to right, #10b981, #059669)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </h1>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 500,
              marginTop: "16px",
              marginBottom: "8px",
            }}
          >
            Page Not Found
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.6)",
              marginBottom: "32px",
            }}
          >
            The page you are looking for does not exist.
          </p>
          <Link
            href="/en"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              backgroundColor: "#10b981",
              color: "#ffffff",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 500,
              transition: "background-color 0.3s",
            }}
          >
            Go Home
          </Link>
        </div>
      </body>
    </html>
  )
}