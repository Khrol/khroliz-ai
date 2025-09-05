export const metadata = {
  title: "Career | Igor Khrol",
  description: "Career highlights and roles of Igor Khrol",
};

export default function CareerPage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>Career</h1>
      
      {/* Experience */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
          Professional Experience
        </h2>
        
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600 }}>
              Team Lead / Data Engineer
            </h3>
            <span style={{ color: "#999", fontSize: 14 }}>Automattic | Jan 2019 - now</span>
          </div>
          <p style={{ lineHeight: 1.3, color: "#999", marginBottom: 8 }}>
            Team Lead and Data Engineer in the Data department dealing with infrastructure, frameworks, and QA approaches.
          </p>
          <ul className="custom-bullets">
            <li>Implemented a self-service transformation framework allowing anyone to make data transformations based on SQL language.</li>
            <li>Introduced the best development practices into the daily routine of the Data department: CI/CD, quality gates, and static code analysis</li>
            <li>Manage and improve Cloudera-based Hadoop clusters</li>
            <li>Cluster migration to Docker-based on-premises solution</li>
            <li>Team management: planning, reporting, hiring, reviews, etc.</li>
          </ul>
          <div style={{ marginTop: 8 }}>
            <strong style={{ color: "#aaa" }}>Technologies:</strong>
            <span style={{ color: "#aaa", marginLeft: 8 }}>
              Airflow, Scala, Spark, Python, Hadoop, Hive, Impala, Avro, Parquet, MySQL, JupyterHub, Trino, Postgres
            </span>
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600 }}>
              Team/Tech Lead in Analytics
            </h3>
            <span style={{ color: "#999", fontSize: 14 }}>Toptal | Apr 2015 - Mar 2018</span>
          </div>
          <ul className="custom-bullets">
            <li>Responsible for data-related topics (ETL, ML) in the Analytics department</li>
            <li>Embedded quality as an integral part of the development process</li>
            <li>Tuned CI/CD pipeline to provide shorter feedback loop</li>
            <li>Hands-on leadership by example, helping team members understand frameworks and troubleshoot issues</li>
            <li>Switched to Google Cloud to optimize infrastructure and maintenance costs</li>
            <li>Migrated ML microservices to GAE</li>
          </ul>
          <div style={{ marginTop: 8 }}>
            <strong style={{ color: "#aaa" }}>Technologies:</strong>
            <span style={{ color: "#999", marginLeft: 8 }}>
              Scala, Spark, Python, Pandas, Luigi, scikit-learn, Google Cloud (BigQuery, DataStore, GAE, GCE, Storage), Ruby, Ruby on Rails, Postgres
            </span>
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600 }}>
              Test Automation Lead
            </h3>
            <span style={{ color: "#999", fontSize: 14 }}>Wargaming | Dec 2013 - May 2015</span>
          </div>
          <ul className="custom-bullets">
            <li>Built automated testing in the Web department - technology, process, people, and infrastructure</li>
            <li>Built a community around test automation expertise to share knowledge between projects, departments, and regional offices</li>
            <li>Implemented radical shift-left in test strategy</li>
            <li>Switched majority of test automation effort from UI to API and unit tests</li>
            <li>Developed open source libraries for testing purposes: Grail, Webium</li>
          </ul>
          <div style={{ marginTop: 8 }}>
            <strong style={{ color: "#aaa" }}>Technologies:</strong>
            <span style={{ color: "#999", marginLeft: 8 }}>
              Python, Java, WebDriver, RabbitMQ, Django, Zabbix
            </span>
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600 }}>
              Automated Testing Consultant
            </h3>
            <span style={{ color: "#999", fontSize: 14 }}>Tele2 | Feb 2012 - Nov 2013</span>
          </div>
          <ul className="custom-bullets">
            <li>Helping with automated testing development: framework creation and enhancements, process improvements, and training</li>
            <li>Performance testing</li>
          </ul>
          <div style={{ marginTop: 8 }}>
            <strong style={{ color: "#aaa" }}>Technologies:</strong>
            <span style={{ color: "#999", marginLeft: 8 }}>
              Oracle Siebel, Java, Selenium, JMeter, HP QTP
            </span>
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600 }}>
              Trainer and Consultant
            </h3>
            <span style={{ color: "#999", fontSize: 14 }}>EPAM Systems | Mar 2012 - Jul 2013</span>
          </div>
          <ul className="custom-bullets">
            <li>Providing training on Selenium/WebDriver</li>
            <li>Consulting on automated testing related issues</li>
          </ul>
        </div>

        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600 }}>
              Software Testing Team Lead
            </h3>
            <span style={{ color: "#999", fontSize: 14 }}>EPAM Systems | Jul 2009 - Feb 2012</span>
          </div>
          <ul className="custom-bullets">
            <li>Managed a team of 20 people to support UI automation of the Oracle ATG eCommerce product</li>
            <li>Implemented an open-source-based solution to test Flex applications</li>
          </ul>
          <div style={{ marginTop: 8 }}>
            <strong style={{ color: "#aaa" }}>Technologies:</strong>
            <span style={{ color: "#999", marginLeft: 8 }}>
              Java, HP QTP, Selenium, Flex
            </span>
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600 }}>
              QA Specialist
            </h3>
            <span style={{ color: "#999", fontSize: 14 }}>A1QA | Apr 2006 - Jul 2009</span>
          </div>
          <ul className="custom-bullets">
            <li>Black box testing</li>
            <li>Test script development (automated and performance testing)</li>
            <li>Led multiple automated and performance testing projects</li>
          </ul>
        </div>
      </section>


      {/* Education */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
          Education
        </h2>
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600 }}>
              Master in Computer Science
            </h3>
            <span style={{ color: "#999", fontSize: 14 }}>2004-2010</span>
          </div>
          <p style={{ color: "#999", fontWeight: 500 }}>Belarusian State University, Faculty of Applied Mathematics and Informatics</p>
        </div>
      </section>


    </main>
  );
}


