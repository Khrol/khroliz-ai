import { roles, openSource, education, awards, type Role } from "./experience";

export const metadata = {
  title: "Career",
  description:
    "Career of Igor Khrol, Head of Data Engineering at Automattic — 7+ years building a self-hosted data platform (Trino, Spark, Airflow, Kafka, Apache Iceberg), AI enablement, and prior engineering-leadership roles at Toptal, Wargaming, and EPAM.",
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function fmt(iso: string): string {
  const [year, month] = iso.split("-");
  return `${MONTHS[parseInt(month, 10) - 1]} ${year}`;
}

function DateRange({ start, end }: { start: string; end: string | null }) {
  return (
    <>
      <time dateTime={start}>{fmt(start)}</time>
      {" – "}
      {end ? <time dateTime={end}>{fmt(end)}</time> : "Present"}
    </>
  );
}

function RoleEntry({ role, showDates }: { role: Role; showDates: boolean }) {
  return (
    <article style={{ marginBottom: 24 }}>
      <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>{role.title}</h3>
      {showDates ? (
        <p style={{ color: "#999", fontSize: 14, marginBottom: 8 }}>
          <DateRange start={role.startDate} end={role.endDate} />
        </p>
      ) : null}
      {role.summary ? (
        <p style={{ lineHeight: 1.3, color: "#999", marginBottom: 8 }}>{role.summary}</p>
      ) : null}
      <ul className="custom-bullets">
        {role.bullets.map((bullet, i) => (
          <li key={i}>
            {bullet.text}
            {bullet.href ? (
              <>
                {" "}
                <a
                  href={bullet.href}
                  style={{ color: "#ededed", textDecoration: "underline" }}
                >
                  {bullet.hrefLabel ?? "read more"}
                </a>
              </>
            ) : null}
          </li>
        ))}
      </ul>
      {role.technologies ? (
        <div style={{ marginTop: 8 }}>
          <strong style={{ color: "#aaa" }}>Technologies:</strong>
          <span style={{ color: "#999", marginLeft: 8 }}>
            {role.technologies.join(", ")}
          </span>
        </div>
      ) : null}
    </article>
  );
}

export default function CareerPage() {
  // Group consecutive roles at the same company (e.g. promotion at Automattic).
  const groups: { company: string; roles: Role[] }[] = [];
  for (const role of roles) {
    const last = groups[groups.length - 1];
    if (last && last.company === role.company) {
      last.roles.push(role);
    } else {
      groups.push({ company: role.company, roles: [role] });
    }
  }

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>Career</h1>

      <section aria-labelledby="experience" style={{ marginBottom: 32 }}>
        <h2 id="experience" style={{ fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
          Professional Experience
        </h2>

        {groups.map((group) => (
          <div key={group.company} style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
              {group.company}{" · "}
              <span style={{ color: "#999", fontSize: 14, fontWeight: 400 }}>
                <DateRange
                  start={group.roles[group.roles.length - 1].startDate}
                  end={group.roles[0].endDate}
                />
              </span>
            </p>
            <div style={{ paddingLeft: 12 }}>
              {group.roles.map((role) => (
                <RoleEntry
                  key={role.title}
                  role={role}
                  showDates={group.roles.length > 1}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section aria-labelledby="opensource" style={{ marginBottom: 32 }}>
        <h2 id="opensource" style={{ fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
          Open Source & Writing
        </h2>
        <ul className="custom-bullets">
          {openSource.map((item) => (
            <li key={item.name}>
              <a href={item.href} style={{ color: "#ededed", textDecoration: "underline" }}>
                {item.name}
              </a>
              {" — "}
              {item.role}. {item.description}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="education" style={{ marginBottom: 32 }}>
        <h2 id="education" style={{ fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
          Education
        </h2>
        <article style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600 }}>{education.degree}</h3>
            <span style={{ color: "#999", fontSize: 14 }}>
              {education.startYear}-{education.endYear}
            </span>
          </div>
          <p style={{ color: "#999", fontWeight: 500 }}>{education.school}</p>
        </article>
      </section>

      <section aria-labelledby="awards" style={{ marginBottom: 32 }}>
        <h2 id="awards" style={{ fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
          Awards
        </h2>
        <ul className="custom-bullets">
          {awards.map((award) => (
            <li key={award.name}>
              <a href={award.href} style={{ color: "#ededed", textDecoration: "underline" }}>
                {award.name}
              </a>
              {" \u2014 "}
              {award.description}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
