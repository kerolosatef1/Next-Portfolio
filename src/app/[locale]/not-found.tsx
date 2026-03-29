import Link from "next/link"
import { Header } from "@/shared/components/Layout/Header/Header"

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "80px",
        }}
        className="bg-background"
      >
        <h1
          style={{
            fontSize: "120px",
            fontWeight: "bold",
            margin: 0,
          }}
          className="text-emerald-500"
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
          className="text-foreground"
        >
          Page Not Found
        </h2>
        <p
          style={{
            fontSize: "16px",
            marginBottom: "32px",
          }}
          className="text-muted-foreground"
        >
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
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
          }}
        >
          Go Home
        </Link>
      </main>
    </>
  )
}