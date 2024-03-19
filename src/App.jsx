import ProfilePic from "./assets/line-portrait-on-aqua.png";
import DownloadIcon from "./assets/utility-icons/download.svg";
import ChicagoFlagIcon from "./assets/chicago-circle.jpeg";
import COFlagIcon from "./assets/co-circle.png";
import GithubLogo from "./assets/github-mark.png";
import LinkedInLogo from "./assets/linked-in.png";
import GoodreadsLogo from "./assets/goodreads.png";
import InstagramLogo from "./assets/instagram.png";
import BlueGoatLogo from "./assets/logos/bluegoatexpeditions.png";
import ATBSLogo from "./assets/logos/atbs.png";
import InspiraLogo from "./assets/logos/mtc.png";
import NateraLogo from "./assets/logos/natera.webp";
import FirmValueLogo from "./assets/logos/firmvalue.webp";
import PersonalProjectLogo from "./assets/logos/personal.png";
import ResumePDF from "./assets/AlexJin2024Resume.pdf";
import "./App.css";

import ParallaxScroll from "./components/ParallaxScroll";
import ProjectList from "./components/ProjectList";
import ContactForm from "./components/ContactForm";

const projects = [
  {
    name: "American Truck Business Services",
    url: "https://www.atbs.com/",
    technologies: ["ionic", "rails", "sass"],
    companyImage: ATBSLogo,
  },
  {
    name: "Millennium Trust Company (Inspira Financial)",
    url: "https://inspirafinancial.com/",
    technologies: ["react", "mulesoft", "rails", "sass"],
    companyImage: InspiraLogo,
  },
  {
    name: "Natera",
    url: "https://www.natera.com",
    technologies: ["react", "salesforce", "sass"],
    companyImage: NateraLogo,
  },
  {
    name: "Firm Value",
    url: "https://www.crunchbase.com/organization/firm-value",
    technologies: ["react", "rails", "sass"],
    companyImage: FirmValueLogo,
  },
  {
    name: "Blue Goat Mountaineering",
    technologies: ["react", "typescript", "tailwind"],
    companyImage: BlueGoatLogo,
  },
  {
    name: "Framelines",
    technologies: ["rails", "tailwind"],
    companyImage: PersonalProjectLogo,
  },
  {
    name: "Visit Boulder",
    technologies: ["react", "typescript", "sass"],
    companyImage: PersonalProjectLogo,
  },

  {
    name: "Designable Web",
    technologies: ["next", "node", "graphql", "tailwind"],
    companyImage: PersonalProjectLogo,
  },
];

function App() {
  return (
    <div className="scroll-container">
      <main className="layout-grid">
        <header style={{ position: "sticky" }}>
          <nav>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href={ResumePDF} download="Alex Jin 2024 Resume">
                  <button>
                    <img src={DownloadIcon} alt="download resume" />
                    <p style={{ color: "#474747" }}>Resume</p>
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="hero">
          <section className="hero-text">
            <section className="hero-title">
              <h1 id="title-alex">
                I'm <span>Alex,</span>
              </h1>
              <h1 id="title-fullstack">
                a <span>Full Stack</span>
              </h1>
              <h1 id="title-developer">
                Web <span>Developer</span>
                <div id="title-period"></div>
              </h1>
            </section>
            <nav className="hero-links">
              <a href="https://github.com/aojin" target="_blank">
                <img src={GithubLogo} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/alex-jin-aa1b2744/"
                target="_blank"
              >
                <img src={LinkedInLogo} alt="" />
              </a>
              <a
                href="https://www.goodreads.com/user/show/67207099-alex-jin"
                target="_blank"
              >
                <img src={GoodreadsLogo} alt="" />
              </a>
              <a href="https://www.instagram.com/aojin" target="_blank">
                <img src={InstagramLogo} alt="" />
              </a>
            </nav>
          </section>
          <section className="hero-image">
            <div className="profile-image-container">
              <div className="profile-image-with-squares">
                <img id="profile-image" src={ProfilePic} alt="" />
                <div id="red-box"></div>
                <div id="blue-box"></div>
              </div>
            </div>
          </section>
        </section>

        <section className="about">
          <section className="facts">
            <h3>
              <img src={ChicagoFlagIcon} alt="chicago flag icon" />
              <span className="label">Born: </span> <p>Chicago, IL</p>
            </h3>
            <h3>
              <img src={COFlagIcon} alt="" />
              <span className="label">Currently In: </span> <p>Boulder, CO</p>
            </h3>
            <h3>
              <span className="icon">🎓</span>{" "}
              <p>Master's In CS from DePaul University</p>
            </h3>
            <h3>
              <span className="icon">🛠️</span>
              <p>
                <mark style={{ background: `#FFED02` }}>Five Years</mark>
                of Experience Building For The Web
              </p>
            </h3>
            <h3>
              <span className="icon">❤️</span>
              <p>Running, Skiing, Climbing, Sketch, Film Photography</p>
            </h3>
            <div className="skills">
              <h3>
                <span className="icon">💻</span>
                <p>
                  <span className="label">Frontend: </span> React, Next,
                  Typescript, Tailwind, HTML, SCSS, ++
                </p>
              </h3>
              <h3>
                <span className="icon">🗄️</span>
                <p>
                  <span className="label">Backend: </span> Rails, Node, GraphQL,
                  SQL, NoSQL, ++
                </p>
              </h3>
            </div>
            <div id="about" className="scroll-anchor"></div>
          </section>

          <h2>About</h2>

          <section className="about-blurb">
            <p>
              While living in Chicago in my early 20s, I felt creatively
              constrained.
            </p>
            <p>
              I was dissatisfied with a career placing banner ads and running
              social analytics just to write the same PPT report, month after
              month.
            </p>
            <p>
              With some luck, I found my way to software development. It didn't
              just to solve the day-to-day stresses of a dull job (DRY), it
              empowered a curious and investigative mind that just wanted to
              build useful things.
            </p>
            <p>
              Every day I work to solve problems, design aesthetically pleasing
              solutions, and create experiences that people actually care to
              use.{" "}
            </p>
            <p>
              As a seasoned software consultant and lead developer, I've helped
              clients and teams architect for the long term, as well as execute
              in crunch time.
            </p>
            <p>
              While I have a background in all of the latest technologies, I
              believe in using the right tools for the right job. The best web
              experiences always begin with thoughtful design, solid performance
              and a scalable foundation.
            </p>
            <p>
              Now I live in the mountains, pursue my passions, and work with
              incredible people around the world to bring ideas off the
              blueprint and straight to users&apos; fingertips.
            </p>
          </section>
        </section>
        <section className="projects">
          <div id="projects" className="scroll-anchor"></div>

          <h2>Projects</h2>

          <ProjectList projects={projects} />
        </section>
        <section id="contact" className="contact">
          <div id="contact" className="scroll-anchor"></div>
          <h2>
            Contact <span>📬</span>
          </h2>
          <ContactForm />
        </section>
        <div className="scroll-background">
          <ParallaxScroll />
        </div>
      </main>
    </div>
  );
}

export default App;
