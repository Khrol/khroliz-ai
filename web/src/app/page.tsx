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
        My name is Igor Khrol. I&apos;m a <span style={{ 
          backgroundColor: "#cce5ff", 
          color: "#004085", 
          padding: "1px 3px", 
          borderRadius: "2px",
          fontWeight: "500"
        }}>software engineer</span> with a strong <span style={{ 
          backgroundColor: "#d4edda", 
          color: "#155724", 
          padding: "1px 3px", 
          borderRadius: "2px",
          fontWeight: "500"
        }}>math background</span>. More than 18 years of industry experience in different scale companies in various roles: <span style={{ 
          backgroundColor: "#cce5ff", 
          color: "#004085", 
          padding: "1px 3px", 
          borderRadius: "2px",
          fontWeight: "500"
        }}>engineer</span>, <span style={{ 
          backgroundColor: "#cce5ff", 
          color: "#004085", 
          padding: "1px 3px", 
          borderRadius: "2px",
          fontWeight: "500"
        }}>team/tech lead</span>, <span style={{ 
          backgroundColor: "#cce5ff", 
          color: "#004085", 
          padding: "1px 3px", 
          borderRadius: "2px",
          fontWeight: "500"
        }}>manager</span>, <span style={{ 
          backgroundColor: "#cce5ff", 
          color: "#004085", 
          padding: "1px 3px", 
          borderRadius: "2px",
          fontWeight: "500"
        }}>consultant</span>, <span style={{ 
          backgroundColor: "#cce5ff", 
          color: "#004085", 
          padding: "1px 3px", 
          borderRadius: "2px",
          fontWeight: "500"
        }}>trainer</span>. My main areas of interest are <span style={{ 
          backgroundColor: "#ffeaa7", 
          color: "#6c5ce7", 
          padding: "1px 3px", 
          borderRadius: "2px",
          fontWeight: "500"
        }}>data engineering</span>, <span style={{ 
          backgroundColor: "#ffeaa7", 
          color: "#6c5ce7", 
          padding: "1px 3px", 
          borderRadius: "2px",
          fontWeight: "500"
        }}>software development</span>, <span style={{ 
          backgroundColor: "#ffeaa7", 
          color: "#6c5ce7", 
          padding: "1px 3px", 
          borderRadius: "2px",
          fontWeight: "500"
        }}>machine learning</span>, and <span style={{ 
          backgroundColor: "#ffeaa7", 
          color: "#6c5ce7", 
          padding: "1px 3px", 
          borderRadius: "2px",
          fontWeight: "500"
        }}>quality assurance</span>. The main languages (tech stacks) are <span style={{ 
          backgroundColor: "#e1bee7", 
          color: "#4a148c", 
          padding: "1px 3px", 
          borderRadius: "2px",
          fontWeight: "500"
        }}>Scala</span> and <span style={{ 
          backgroundColor: "#e1bee7", 
          color: "#4a148c", 
          padding: "1px 3px", 
          borderRadius: "2px",
          fontWeight: "500"
        }}>Python</span>. I also have experience in <span style={{ 
          backgroundColor: "#e1bee7", 
          color: "#4a148c", 
          padding: "1px 3px", 
          borderRadius: "2px",
          fontWeight: "500"
        }}>Ruby</span>, <span style={{ 
          backgroundColor: "#e1bee7", 
          color: "#4a148c", 
          padding: "1px 3px", 
          borderRadius: "2px",
          fontWeight: "500"
        }}>C#</span>, <span style={{ 
          backgroundColor: "#e1bee7", 
          color: "#4a148c", 
          padding: "1px 3px", 
          borderRadius: "2px",
          fontWeight: "500"
        }}>Java</span>, <span style={{ 
          backgroundColor: "#e1bee7", 
          color: "#4a148c", 
          padding: "1px 3px", 
          borderRadius: "2px",
          fontWeight: "500"
        }}>JavaScript</span> and can easily write code in these languages as well. I&apos;m actively participating in regional IT conferences as a speaker, and you can explore my presentations in the <a href="/presentations" style={{ color: "#ededed", textDecoration: "underline" }}>presentations section</a>.
      </p>
      
      
    </main>
  );
}
