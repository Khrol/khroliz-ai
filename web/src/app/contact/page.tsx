export const metadata = {
  title: "Contact | Igor Khrol",
  description: "Contact Igor Khrol",
};

export default function ContactPage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 12 }}>Contact</h1>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
        <li style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#0a66c2" aria-hidden>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.038-1.852-3.038-1.853 0-2.136 1.447-2.136 2.941v5.666H9.352V9h3.414v1.561h.048c.476-.9 1.637-1.852 3.368-1.852 3.603 0 4.268 2.372 4.268 5.457v6.286zM5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128zM6.93 20.452H3.74V9h3.19v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <a href="http://www.linkedin.com/in/khroliz" target="_blank" rel="noreferrer">linkedin.com/in/khroliz</a>
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#c5221f" aria-hidden>
            <path d="M12 13.065 1.5 6h21L12 13.065z"/><path d="M12 15.935 1.5 9V18a1.5 1.5 0 0 0 1.5 1.5h18a1.5 1.5 0 0 0 1.5-1.5V9L12 15.935z"/>
          </svg>
          <a href="mailto:khroliz@gmail.com">khroliz@gmail.com</a>
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden>
            <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.092 3.292 9.402 7.86 10.93.575.105.785-.25.785-.556 0-.274-.01-1.002-.016-1.968-3.197.695-3.872-1.54-3.872-1.54-.523-1.33-1.277-1.684-1.277-1.684-1.043-.713.079-.699.079-.699 1.153.081 1.76 1.184 1.76 1.184 1.026 1.758 2.693 1.25 3.35.956.104-.744.401-1.251.729-1.539-2.553-.29-5.238-1.277-5.238-5.683 0-1.255.448-2.282 1.183-3.087-.119-.29-.512-1.459.112-3.04 0 0 .965-.309 3.162 1.18a10.97 10.97 0 0 1 2.88-.387c.978.005 1.963.132 2.881.387 2.196-1.489 3.159-1.18 3.159-1.18.625 1.581.233 2.75.114 3.04.736.805 1.182 1.832 1.182 3.087 0 4.416-2.69 5.39-5.253 5.673.41.352.777 1.046.777 2.109 0 1.522-.014 2.75-.014 3.121 0 .309.206.668.79.555C20.21 21.398 23.5 17.088 23.5 12 23.5 5.648 18.352.5 12 .5z"/>
          </svg>
          <a href="https://github.com/Khrol" target="_blank" rel="noreferrer">github.com/Khrol</a>
        </li>
      </ul>
    </main>
  );
}


