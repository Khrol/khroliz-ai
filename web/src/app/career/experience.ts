// NOTE: keep public/llms.txt in sync with the content in this file.

export type Role = {
  title: string;
  company: string;
  startDate: string; // ISO "YYYY-MM"
  endDate: string | null; // null = Present
  summary?: string;
  bullets: { text: string; href?: string; hrefLabel?: string }[];
  technologies?: string[];
};

export type OpenSourceItem = {
  name: string;
  role: string;
  href: string;
  description: string;
};

export const roles: Role[] = [
  {
    title: "Head of Data Engineering",
    company: "Automattic",
    startDate: "2022-03",
    endDate: null,
    summary:
      "Leading Automattic's data engineering team — the engineers behind the central self-hosted data platform powering analytics and AI across WordPress.com, Tumblr, and WooCommerce.",
    bullets: [
      {
        text: "Lead a team of 5–7 data-platform engineers owning the company's central self-hosted data platform (Spark, Trino, Airflow, Kafka, Apache Iceberg, Superset, Looker, JupyterHub) — roadmap, planning, reviews, and production operations.",
      },
      {
        text: "Set the team's AI-enablement strategy and led its delivery across the team: a program of MCP servers (Trino, Superset, Looker, data catalog) giving LLM agents governed access to company data; defined the next phase — AI evaluation, observability, and domain-scoped data assistants.",
      },
      {
        text: "Designed data-access governance for AI agents: least-privilege, tag-based, read-only warehouse access enforced with policy-as-code (Open Policy Agent).",
      },
      {
        text: "Put LLM evaluation into CI: an LLM-as-judge harness verifying documentation produces correct AI-agent behavior (\"TDD for docs\").",
      },
      {
        text: "Coordinated the team's migration of the warehouse to Apache Iceberg \u2014 the platform's move to an open lakehouse table format \u2014 while personally contributing 50+ merged improvements on Iceberg reliability, snapshot retention, and storage optimization.",
      },
      {
        text: "Drove a data-contract integrity program on Apache Iceberg: automated contract-violation checks, fixes to billion-row production tables, and major storage and compute cost optimizations.",
      },
      {
        text: "Represent the data platform across the company: AI data-tooling and access-policy decisions, security collaboration (member of the security incident response team), and the editorial group of Automattic's public data blog.",
      },
      {
        text: "Still hands-on: one of the platform's top contributors with 2,000+ merged changes; led every major Airflow production upgrade, through Airflow 3.",
      },
    ],
    technologies: [
      "Trino",
      "Spark",
      "Airflow",
      "Kafka",
      "Apache Iceberg",
      "Scala",
      "Python",
      "Superset",
      "Looker",
      "JupyterHub",
      "Open Policy Agent",
      "MCP",
    ],
  },
  {
    title: "Senior Data Engineer",
    company: "Automattic",
    startDate: "2019-02",
    endDate: "2022-03",
    bullets: [
      {
        text: "Core engineer of the data platform from its early days: introduced Airflow to the company in 2019 and later drove the Airflow 2.0 migration.",
      },
      {
        text: "Designed a self-service SQL transformation framework that removed a 5-engineer bottleneck: 50+ people across the company now contribute 700+ production data transformations.",
        href: "https://data.blog/2021/02/22/sql-a-common-language-for-the-whole-data-team/",
        hrefLabel: "(read the story)",
      },
      {
        text: "Implemented data retention and deletion at the core product-analytics event store (GDPR-driven).",
      },
      {
        text: "Migrated the platform from Cloudera Hadoop to a Docker-based on-premises stack; established CI/CD, quality gates, and static code analysis in the data org.",
      },
    ],
  },
  {
    title: "Team/Tech Lead in Analytics",
    company: "Toptal",
    startDate: "2015-04",
    endDate: "2018-03",
    bullets: [
      {
        text: "Led data engineering and ML topics in the Analytics department — ETL platform, data warehouse, and production ML services.",
      },
      {
        text: "Shipped ML microservices to production on Google App Engine (Python, scikit-learn).",
      },
      {
        text: "Migrated analytics infrastructure to Google Cloud (BigQuery, GAE, GCE), cutting infrastructure and maintenance costs.",
      },
      {
        text: "Embedded quality into the development process and shortened CI/CD feedback loops.",
      },
    ],
    technologies: [
      "Scala",
      "Spark",
      "Python",
      "Pandas",
      "Luigi",
      "scikit-learn",
      "Google Cloud (BigQuery, DataStore, GAE, GCE, Storage)",
      "Ruby",
      "Ruby on Rails",
      "Postgres",
    ],
  },
  {
    title: "Test Automation Lead",
    company: "Wargaming",
    startDate: "2013-12",
    endDate: "2015-05",
    bullets: [
      {
        text: "Built the Web department's test-automation capability from scratch — technology, process, hiring, and infrastructure — at a gaming company with 100M+ registered players.",
      },
      {
        text: "Ran a company-wide test-automation community connecting projects, departments, and regional offices.",
      },
      {
        text: "Drove a shift-left test strategy, moving the bulk of automation from UI to API and unit tests.",
      },
      {
        text: "Authored open-source testing libraries webium and grail, published on PyPI under the Wargaming GitHub org.",
        href: "https://github.com/wgnet/webium",
        hrefLabel: "(webium)",
      },
    ],
    technologies: ["Python", "Java", "WebDriver", "RabbitMQ", "Django", "Zabbix"],
  },
  {
    title: "Automated Testing Consultant",
    company: "Tele2",
    startDate: "2012-02",
    endDate: "2013-11",
    bullets: [
      {
        text: "Consulted on test-automation development: framework creation and enhancements, process improvements, and training.",
      },
      { text: "Performance testing of business-critical telecom systems." },
    ],
    technologies: ["Java", "Selenium", "JMeter"],
  },
  {
    title: "Trainer and Consultant",
    company: "EPAM Systems",
    startDate: "2012-03",
    endDate: "2013-07",
    bullets: [
      {
        text: "Delivered Selenium/WebDriver training and consulted delivery teams on test automation.",
      },
    ],
  },
  {
    title: "Software Testing Team Lead",
    company: "EPAM Systems",
    startDate: "2009-07",
    endDate: "2012-02",
    bullets: [
      {
        text: "Managed a team of 20 engineers supporting UI automation for the Oracle ATG eCommerce product.",
      },
      {
        text: "Implemented an open-source-based solution for testing Flex applications.",
      },
    ],
    technologies: ["Java", "Selenium"],
  },
  {
    title: "QA Specialist",
    company: "A1QA",
    startDate: "2006-04",
    endDate: "2009-07",
    bullets: [
      { text: "Led multiple automated and performance-testing projects." },
      {
        text: "Developed automated and performance test scripts; black-box testing.",
      },
    ],
  },
];

export const openSource: OpenSourceItem[] = [
  {
    name: "Apache Airflow",
    role: "Contributor",
    href: "https://github.com/apache/airflow/pulls?q=is%3Apr+author%3AKhrol+is%3Amerged",
    description:
      "13 merged upstream PRs (2019\u20132023): HDFS task-log handler, Grid/Graph UI improvements, SQLAlchemy connection resilience, Spark and Slack provider enhancements.",
  },
  {
    name: "webium",
    role: "Author",
    href: "https://github.com/wgnet/webium",
    description: "Page Object library for Python/Selenium, published on PyPI.",
  },
  {
    name: "grail",
    role: "Author",
    href: "https://github.com/wgnet/grail",
    description: "Lightweight step-based test library for Python.",
  },
  {
    name: "Apache Superset",
    role: "Contributor",
    href: "https://github.com/apache/superset/pulls?q=is%3Apr+author%3AKhrol+is%3Amerged",
    description:
      "9 merged upstream PRs (2023\u20132026): SQL Lab robustness and Trino integration fixes, Spark SQLAlchemy dialect registration, LDAP authentication fix.",
  },
  {
    name: "SQL — a Common Language for the Whole Data Team",
    role: "Article",
    href: "https://data.blog/2021/02/22/sql-a-common-language-for-the-whole-data-team/",
    description:
      "How Automattic opened data transformations to 50+ contributors.",
  },
  {
    name: "Synchronizing Data with Apache Superset",
    role: "Article",
    href: "https://data.blog/2023/11/06/synchronizing-data-with-apache-superset-our-internal-solution/",
    description:
      "Automattic's internal Superset sync solution; upstream fix contributed to Apache Superset.",
  },
];

export const education = {
  degree: "Master in Computer Science",
  school:
    "Belarusian State University, Faculty of Applied Mathematics and Informatics",
  startYear: 2004,
  endYear: 2010,
};

export const awards = [
  {
    name: "International Mathematical Olympiad \u2014 two-time Silver Medalist (2003, 2004)",
    href: "https://www.imo-official.org/results/contestant/7433/",
    description:
      "Represented Belarus at IMO 2003 (Tokyo) and IMO 2004 (Athens), winning silver medals both years.",
  },
];
