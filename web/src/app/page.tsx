import Image from "next/image";

export const metadata = {
  description:
    "Igor Khrol — Head of Data Engineering at Automattic, leading the team behind the self-hosted data platform (Trino, Spark, Airflow, Kafka, Apache Iceberg) powering analytics and AI.",
};

function Hl({ children }: { children: React.ReactNode }) {
  return <strong style={{ color: "#ededed", fontWeight: 600 }}>{children}</strong>;
}

export default function Home() {
  return (
    <main style={{
      maxWidth: 800,
      margin: "0 auto",
      padding: 24,
      fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji"
    }}>
      <h1 style={{ fontSize: 40, fontWeight: 700, marginBottom: 8 }}>Igor Khrol</h1>
      <p style={{ fontSize: 20, color: "#ccc", marginBottom: 16 }}>
        Head of Data Engineering at Automattic
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
        <Image
          src="/avatar.jpg"
          alt="Igor Khrol"
          width={96}
          height={96}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          priority
        />
        <div style={{ fontSize: 16, color: "#aaa" }}>Vilnius, Lithuania</div>
      </div>
      <p style={{ fontSize: 18, color: "#999", marginBottom: 16, lineHeight: 1.5 }}>
        I lead the <Hl>data engineering</Hl> team at Automattic (WordPress.com,
        Tumblr, WooCommerce), building the self-hosted <Hl>data platform</Hl> that
        powers the company&apos;s analytics and AI — Trino, Spark, Airflow, Kafka,
        and Apache Iceberg, run without SaaS or cloud lock-in. My focus today
        is <Hl>AI enablement</Hl>: giving LLM agents safe, governed access to
        company data through MCP servers, with evaluation and access controls
        around them.
      </p>
      <p style={{ fontSize: 18, color: "#999", marginBottom: 16, lineHeight: 1.5 }}>
        My path — a decade leading <Hl>quality engineering</Hl> and test
        automation, then data platforms and <Hl>ML infrastructure</Hl> at Toptal
        and Automattic, now AI enablement — is why the platforms I build are
        trustworthy: quality is engineered in, not tested in.
      </p>
      <p style={{ fontSize: 18, color: "#999", marginBottom: 24, lineHeight: 1.5 }}>
        Two-time silver medalist at the{" "}
        <a href="https://www.imo-official.org/results/contestant/7433/" style={{ color: "#ededed", textDecoration: "underline" }}>International Mathematical Olympiad</a>{" "}
        (2003, 2004). 20 years in the industry. I write production code daily, mainly
        in <Hl>Python</Hl> and <Hl>Scala</Hl>. See my{" "}
        <a href="/career" style={{ color: "#ededed", textDecoration: "underline" }}>career history</a>{" "}
        and{" "}
        <a href="/presentations" style={{ color: "#ededed", textDecoration: "underline" }}>conference talks</a>.
      </p>
    </main>
  );
}
