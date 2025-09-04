import Image from "next/image";

export default function Home() {
  return (
    <main style={{
      maxWidth: 800,
      margin: "0 auto",
      padding: 24,
      fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji"
    }}>
      <h1 style={{ fontSize: 40, fontWeight: 700, marginBottom: 12 }}>Hi, I&apos;m Igor</h1>
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
      <p style={{ fontSize: 18, color: "#999", marginBottom: 24 }}>
        My name is Igor Khrol. I&apos;m a software engineer with strong math background. More than 18 years of industry experience in different scale companies in various roles: engineer, team/tech lead, manager, consultant, trainer. My main areas of interest are data engineering, software development, machine learning, and quality assurance. The main languages (tech stacks) are Scala and Python. Meanwhile, I have also experience in Ruby, C#, Java, JavaScript and can easily write code there as well. I&apos;m actively participating in regional IT conferences as a speaker and you can explore my presentations in the <a href="/presentations">presentations section</a>.
      </p>
      
      
    </main>
  );
}
