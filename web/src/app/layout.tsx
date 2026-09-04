import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Igor Khrol, Head of Data Engineering at Automattic. 20 years in engineering leadership: self-hosted data platforms (Trino, Spark, Airflow, Kafka, Apache Iceberg) and AI enablement (MCP servers, LLM agents, data governance).";

export const metadata: Metadata = {
  metadataBase: new URL("https://khroliz.com"),
  title: {
    default: "Igor Khrol — Head of Data Engineering",
    template: "%s | Igor Khrol",
  },
  description: siteDescription,
  openGraph: {
    type: "profile",
    url: "https://khroliz.com",
    title: "Igor Khrol — Head of Data Engineering",
    description: siteDescription,
    images: ["/avatar.jpg"],
  },
  twitter: {
    card: "summary",
    title: "Igor Khrol — Head of Data Engineering",
    description: siteDescription,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Igor Khrol",
  jobTitle: "Head of Data Engineering",
  worksFor: {
    "@type": "Organization",
    name: "Automattic",
    url: "https://automattic.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Belarusian State University",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vilnius",
    addressCountry: "LT",
  },
  email: "mailto:khroliz@gmail.com",
  url: "https://khroliz.com",
  image: "https://khroliz.com/avatar.jpg",
  award: [
    "Silver Medal, International Mathematical Olympiad (2003)",
    "Silver Medal, International Mathematical Olympiad (2004)",
  ],
  sameAs: [
    "https://www.linkedin.com/in/khroliz",
    "https://github.com/Khrol",
    "https://www.slideshare.net/khroliz",
  ],
  knowsAbout: [
    "Data Engineering",
    "Data Platform Architecture",
    "Trino",
    "Apache Spark",
    "Apache Airflow",
    "Apache Kafka",
    "Apache Iceberg",
    "AI Enablement",
    "LLM Agents",
    "Model Context Protocol (MCP)",
    "Data Governance",
    "Team Leadership",
    "Scala",
    "Python",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <header style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <Link href="/" style={{ fontWeight: 700 }}>Igor Khrol</Link>
          <nav style={{ display: "flex", gap: 16 }}>
            <Link href="/career">Career</Link>
            <Link href="/presentations">Presentations</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
