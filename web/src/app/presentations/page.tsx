export const metadata = {
  title: "My Public Presentations | Igor Khrol",
  description: "Talks and presentations grouped by year",
};

import Image from "next/image";

type Talk = {
  title: string;
  event: string;
  date: string; // YYYY-MM-DD
  link?: string;
  youtubeUrl?: string;
  city: string;
  citySlug?: "kyiv" | "lviv" | "odesa" | "minsk";
  imageUrl?: string; // optional full URL for a coat image
  language?: "ENG" | "RUS";
};

const presentationsByYear: Record<string, Talk[]> = {
  "2023": [
    {
      title: "How to Test BigData/ETL Solutions?",
      event: "TestCon",
      date: "2023-01-01",
      link: "https://events.pinetool.ai/3078/#sessions/100683",
      youtubeUrl: "https://www.youtube.com/watch?v=umw8X5umHyw",
      city: "Vilnius, Lithuania",
      language: "ENG",
    },
    {
      title: "Big Data With Open Source Solutions",
      event: "Big Data Conference Europe",
      date: "2023-01-01",
      link: "https://events.pinetool.ai/3079/#sessions/101328",
      youtubeUrl: "https://www.youtube.com/watch?v=Ex6CfJlWBgk",
      city: "Vilnius, Lithuania",
      language: "ENG",
    },
    {
      title: "How to Test BigData/ETL Solutions?",
      event: "EpicHey",
      date: "2023-01-01",
      link: "https://epichey.dev/igorkhrol",
      city: "Lisbon, Portugal",
      language: "ENG",
    }
  ],
  "2021": [
    {
      title: "Testing artificial intelligence: which side to approach?",
      event: "A4Q World Congress",
      date: "2021-01-01",
      link: "https://a4qworldcongress.com/events/%d1%82%d0%b5%d1%81%d1%82%d0%b8%d1%80%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5-%d0%b8%d1%81%d0%ba%d1%83%d1%81%d1%81%d1%82%d0%b2%d0%b5%d0%bd%d0%bd%d0%be%d0%b3%d0%be-%d0%b8%d0%bd%d1%82%d0%b5%d0%bb%d0%bb%d0%b5/",
      city: "Online",
    }
  ],
  "2020": [
    {
      title: "BOF: SDET – yet another rattle title or separate engineering line?",
      event: "DelEx",
      date: "2020-01-01",
      link: "https://delex-conf.com/bof/bof-sdet-yet-another-rattle-title-or-separate-engineering-line/",
      youtubeUrl: "https://www.youtube.com/watch?v=x-d6wK83iBo",
      city: "Minsk, Belarus",
    },
    {
      title: "Big Data Testing",
      event: "РИТ++",
      date: "2020-01-01",
      link: "https://ritfest.ru/2020/abstracts/6896",
      youtubeUrl: "https://www.youtube.com/watch?v=AF8dufCHhRs",
      city: "Online",
    }
  ],
  "2019": [
    {
      title: "Big Data Testing",
      event: "DSC",
      date: "2019-01-01",
      link: "https://community-z.com/events/dsc19#_=_",
      youtubeUrl: "https://www.youtube.com/watch?v=WRJ02C0W9wE",
      city: "Vitebsk, Belarus",
    },
    {
      title: "Big Data Testing",
      event: "QAASP",
      date: "2019-01-01",
      link: "http://qaasp.tech/igor-khrol",
      city: "Minsk, Belarus",
    },
    {
      title: "Monads for Testers",
      event: "SeleniumCamp",
      date: "2019-01-01",
      link: "https://seleniumcamp.com/",
      youtubeUrl: "https://www.youtube.com/watch?v=djJIi7RGqjk",
      city: "Kyiv, Ukraine",
      citySlug: "kyiv",
    },
    {
      title: "Monads for Testers",
      event: "DelEx",
      date: "2019-01-01",
      link: "http://delex-conf.com/",
      city: "Minsk, Belarus",
    }
  ],
  "2018": [
    {
      title: "Testing artificial intelligence: which side to approach?",
      event: "ITEM",
      date: "2018-01-01",
      link: "https://item.com.ua/en#!/tproduct/67151017-1534030289949",
      youtubeUrl: "https://www.youtube.com/watch?v=WTXin9dQ6w4",
      city: "Dnipro, Ukraine",
    },
    {
      title: "How to test Artificial Intelligence and Machine Learning solutions?",
      event: "QMO Converence",
      date: "2018-01-01",
      link: "http://qmoconference.com/Archive/2018_04/index.html",
      youtubeUrl: "https://www.youtube.com/watch?v=JUlpxTXdOY0",
      city: "Lviv, Ukraine",
    },
    {
      title: "How to test Machine Learning solutions?",
      event: "SECON",
      date: "2018-01-01",
      link: "https://2018.secon.ru/reports/kak-testirovat-sistemy-mashinnogo-obucheniya",
      youtubeUrl: "https://www.youtube.com/watch?v=oDIATBzasG4",
      city: "Penza, Russia",
      imageUrl: "/coats/penza.png",
    },
    {
      title: "How to test Artificial Intelligence and Machine Learning solutions?",
      event: "SeleniumCamp",
      date: "2018-01-01",
      link: "https://seleniumcamp.com/talk/how-to-test-artificial-intelligence-and-machine-learning-solutions/",
      youtubeUrl: "https://www.youtube.com/watch?v=ztG3RD3ozxE",
      city: "Kyiv, Ukraine",
      citySlug: "kyiv",
    },
    {
      title: "How to test Artificial Intelligence and Machine Learning solutions?",
      event: "DelEx",
      date: "2018-01-01",
      link: "http://delex-conf.com/",
      youtubeUrl: "https://www.youtube.com/watch?v=SNBrP8JQthk",
      city: "Minsk, Belarus",
    }
  ],
  "2017": [
    {
      title: "Data Warehouse in Google Cloud",
      event: "GDG Lviv",
      date: "2017-01-01",
      link: "https://dfua17.firebaseapp.com/schedule/day1?sessionId=148",
      youtubeUrl: "https://www.youtube.com/watch?v=6I870Dq2YoA",
      city: "Lviv, Ukraine",
      language: "ENG",
    },
    {
      title: "Who should write automated tests?",
      event: "QA Fest",
      date: "2017-01-01",
      link: "http://qafest.com/qafest2017/",
      youtubeUrl: "https://www.youtube.com/watch?v=HbEceyiHrmM",
      city: "Kyiv, Ukraine",
      citySlug: "kyiv",
    },
    {
      title: "Testing in Data World",
      event: "BAQ Conference",
      date: "2017-01-01",
      link: "https://comaqa.by/2017/05/25/testing-in-the-data-world/",
      city: "Lviv, Ukraine",
    },
    {
      title: "Testing in Data World",
      event: "Heisenbug",
      date: "2017-01-01",
      link: "http://2017.heisenbug-piter.ru/en/talks/4cxymnehiaaysuims0weau/",
      youtubeUrl: "https://www.youtube.com/watch?v=bny86gxbUcg",
      city: "Saint Petersburg, Russia",
    },
    {
      title: "Testing in Data World",
      event: "COMAQA Spring 2017",
      date: "2017-01-01",
      link: "https://comaqa.by/2017/05/25/testing-in-the-data-world/",
      youtubeUrl: "https://www.youtube.com/watch?v=nFpZQOrZQfw",
      city: "Minsk, Belarus",
    }
  ],
  "2016": [
    {
      title: "Test Automation: Do the Same but Better",
      event: "Heisenbug",
      date: "2016-01-01",
      link: "http://2016.heisenbug-moscow.ru/en/talks/avtotesty-takie-zhe-no-luchshe/",
      youtubeUrl: "https://www.youtube.com/watch?v=JYY_52DTJqs",
      city: "Moscow, Russia",
    },
    {
      title: "Test Automation: Do the Same but Better",
      event: "COMAQA Autumn 2016",
      date: "2016-01-01",
      link: "https://comaqa.by/2016/11/20/comaqa-autumn-2016-igor-khrol/",
      youtubeUrl: "https://www.youtube.com/watch?v=NioKI_ymVJA",
      city: "Minsk, Belarus",
    },
    {
      title: "Test Automation: Do the Same but Better",
      event: "TestCon",
      date: "2016-01-01",
      link: "https://www.testcon.lt/2016/",
      city: "Vilnius, Lithuania",
      language: "ENG",
    },
    {
      title: "Test Automation: Do the Same but Better",
      event: "IT Spring",
      date: "2016-01-01",
      city: "Minsk, Belarus",
    },
    {
      title: "Good tests change your application",
      event: "SeleniumCamp",
      date: "2016-01-01",
      link: "https://seleniumcamp.com/talk/good-tests-change-your-application/",
      youtubeUrl: "https://www.youtube.com/watch?v=joi_vmNLYtk",
      city: "Kyiv, Ukraine",
      citySlug: "kyiv",
    },
    {
      title: "How to do tests quick and improve development efficiency",
      event: "Agile.by Gathering",
      date: "2016-01-01",
      link: "http://agile.by/2016/01/11/agile-by-gathering-23-yanvarya",
      city: "Minsk, Belarus",
    }
  ],
  "2015": [
    {
      title: "Who is a tester in Agile?",
      event: "QA Fest",
      date: "2015-01-01",
      link: "http://qafest.com/qafest2015/",
      youtubeUrl: "https://www.youtube.com/watch?v=s4uSeWUDz_w",
      city: "Kyiv, Ukraine",
      citySlug: "kyiv",
    },
    {
      title: "Test Automation: throw away redundant and test the point",
      event: "QA Fest",
      date: "2015-01-01",
      link: "http://qafest.com/qafest2015/",
      youtubeUrl: "https://www.youtube.com/watch?v=ZC_GH4AANqc",
      city: "Kyiv, Ukraine",
      citySlug: "kyiv",
    },
    {
      title: "Test Automation: throw away excess and check the point",
      event: "COMAQA.BY Conf #2",
      date: "2015-01-01",
      link: "https://comaqa.by/2015/09/16/conf2-extra/",
      youtubeUrl: "https://www.youtube.com/watch?v=w1hjnphkACA",
      city: "Minsk, Belarus",
    },
    {
      title: "Test Automation: Available for Everyone or The Destiny of The Elite?",
      event: "SQA Days-17",
      date: "2015-01-01",
      link: "https://sqadays.com/en/talk/33559",
      city: "Minsk, Belarus",
    },
    {
      title: "Grail: steps for your Python-tests",
      event: "Python Meetup",
      date: "2015-01-01",
      link: "https://habr.com/company/wargaming/blog/259619/",
      youtubeUrl: "https://www.youtube.com/watch?v=KVlUfJIOc5E",
      city: "Minsk, Belarus",
    },
    {
      title: "Grail: steps for your Python-tests",
      event: "CodeFest",
      date: "2015-01-01",
      link: "https://2015.codefest.ru/lecture/989",
      youtubeUrl: "https://www.youtube.com/watch?v=T5nz0Gwr1b8",
      city: "Novosibirsk, Russia",
    },
    {
      title: "Webium: Page Objects in Python",
      event: "SeleniumCamp",
      date: "2015-01-01",
      link: "https://seleniumcamp.com/talk/webium-page-objects-in-python/",
      youtubeUrl: "https://www.youtube.com/watch?v=XrL1BLgkKyA",
      city: "Kyiv, Ukraine",
      citySlug: "kyiv",
    }
  ],
  "2014": [
    {
      title: "Modern QA: let's do it quickly",
      event: "SEF.BY to Students",
      date: "2014-01-01",
      city: "Minsk, Belarus",
    },
    {
      title: "Increase Selenium tests stability via JavaScript",
      event: "SeleniumConf",
      date: "2014-01-01",
      link: "https://confengine.com/selenium-conf-2014/proposal/335/increase-selenium-tests-stability-via-javascript",
      youtubeUrl: "https://www.youtube.com/watch?v=GvRA9VAA9rw",
      city: "Bangalore, India",
      language: "ENG",
    },
    {
      title: "WG Talks for Students",
      event: "SEF.BY to Students",
      date: "2014-01-01",
      city: "Minsk, Belarus",
    },
    {
      title: "Test Automation: throw away excess and check the point",
      event: "SQA Days-15",
      date: "2014-01-01",
      link: "https://sqadays.com/en/talk/19552",
      city: "Moscow, Russia",
    },
    {
      title: "Increase Selenium tests stability via JavaScript",
      event: "SeleniumCamp",
      date: "2014-01-01",
      link: "https://seleniumcamp.com/archive/selenium-camp-2014/materials/js-with-selenium/",
      city: "Kyiv, Ukraine",
      citySlug: "kyiv",
    }
  ],
  "2013": [
    {
      title: "Increase Selenium tests stability via JavaScript",
      event: "Selen ConfeT&QA, Autumn 2013",
      date: "2013-01-01",
      link: "http://confetqa.ru/program-selen/#khrol",
      youtubeUrl: "https://www.youtube.com/watch?v=moclYbCXMPM",
      city: "Online",
    },
    {
      title: "Why test automation projects are failing?",
      event: "TAPOST",
      date: "2013-01-01",
      link: "http://www.tapost.org/tapost-2013/",
      city: "Riga, Latvia",
      language: "ENG",
    },
    {
      title: "Can we rotate the pyramid? Automate tests with less number of middlemen.",
      event: "Auto ConfeT&QA, Spring 2013",
      date: "2013-01-01",
      link: "http://confetqa.ru/auto-confetqa-vesna-2013/#khrol",
      youtubeUrl: "https://www.youtube.com/watch?v=ZentmPn0_pg",
      city: "Online",
    },
    {
      title: "WebDriver: Usual Mistakes of Beginners",
      event: "SeleniumCamp",
      date: "2013-01-01",
      link: "https://seleniumcamp.com/archive/selenium-camp-2013/materials/mistakes-of-beginners/",
      youtubeUrl: "https://www.youtube.com/watch?v=LtTmki_75vg",
      city: "Kyiv, Ukraine",
      citySlug: "kyiv",
    }
  ],
  "2012": [
    {
      title: "Why test automation projects are failing?",
      event: "SQA Days-12",
      date: "2012-01-01",
      link: "https://sqadays.com/ru/talk/7627",
      youtubeUrl: "https://www.youtube.com/watch?v=SgGH9V4LB5s",
      city: "Minsk, Belarus",
    },
    {
      title: "Sikuli – tool to automate GUI applications",
      event: "Auto ConfeT&QA, Spring 2012",
      date: "2012-01-01",
      link: "http://confetqa.ru/auto-confetqa-vesna-2012/#hrol",
      youtubeUrl: "https://www.youtube.com/watch?v=LD6ZRKdlRHA",
      city: "Online",
    },
    {
      title: "WebDriver: One Migration History",
      event: "SeleniumCamp",
      date: "2012-01-01",
      link: "https://seleniumcamp.com/archive/selenium-camp-2012/materials/migration/",
      youtubeUrl: "https://www.youtube.com/watch?v=8ttVa0NxPvA",
      city: "Kyiv, Ukraine",
      citySlug: "kyiv",
    }
  ],
  "2011": [
    {
      title: "How to automate Flex application with Selenium RC",
      event: "SeleniumCamp",
      date: "2011-02-26",
      link: "https://seleniumcamp.com/archive/selenium-camp-2011/materials/",
      youtubeUrl: "https://www.youtube.com/watch?v=Owtsn117cO4",
      city: "Kiev, Ukraine",
      citySlug: "kyiv",
      imageUrl: "/coats/kyiv.png",
      language: "RUS",
    },
  ],
  "2010": [
    {
      title: "Who should write automated tests?",
      event: "SEF",
      date: "2010-01-01",
      link: "https://www.slideshare.net/slideshow/embed_code/key/idMr6jRfkgk2vK",
      city: "Minsk, Belarus",
      citySlug: "minsk",
      imageUrl: "/coats/minsk.png",
      language: "RUS",
    },
  ],
};

export default function PresentationsPage() {
  const years = Object.keys(presentationsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 12 }}>My Public Presentations</h1>
      <p style={{ fontSize: 16, color: "#999", marginBottom: 24 }}>
        Selected talks and presentations grouped by year.
      </p>

      {years.map((year) => (
        <section key={year} style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>{year}</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {presentationsByYear[year].map((talk, idx) => (
              <li key={`${year}-${idx}`} style={{ padding: "12px 0", borderTop: "1px solid #eee", display: "flex", gap: 12, alignItems: "center" }}>
                {(talk.imageUrl || talk.citySlug) ? (
                  <Image
                    src={talk.imageUrl ?? `/coats/${talk.citySlug}.svg`}
                    alt={`${talk.city} coat of arms`}
                    width={28}
                    height={28}
                    style={{ display: "block", flexShrink: 0 }}
                  />
                ) : null}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 18, fontWeight: 600 }}>
                  {talk.link ? (
                    <a href={talk.link} target="_blank" rel="noreferrer" style={{ textDecoration: "underline", color: "#06c" }}>
                      {talk.title}
                    </a>
                  ) : (
                    talk.title
                  )}
                  </div>
                  <div style={{ fontSize: 14, color: "#999" }}>
                    {talk.event} • {talk.city}
                    {talk.language ? (
                      <>
                        {" "}• {talk.language}
                      </>
                    ) : null}
                    {" "}• {new Date(talk.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" })}
                    {talk.youtubeUrl ? (
                      <>
                        {" "}•{" "}
                        <a href={talk.youtubeUrl} target="_blank" rel="noreferrer" style={{ textDecoration: "underline", color: "#06c" }}>YouTube</a>
                      </>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}


