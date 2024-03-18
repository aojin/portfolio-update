import ProfilePic from "./assets/line-portrait-on-aqua.png";
import DownloadIcon from "./assets/utility-icons/download.svg";
import ChicagoFlagIcon from "./assets/chicago-circle.jpeg";
import COFlagIcon from "./assets/co-circle.png";
import GithubLogo from "./assets/github-mark.png";
import LinkedInLogo from "./assets/linked-in.png";
import GoodreadsLogo from "./assets/goodreads.png";
import InstagramLogo from "./assets/instagram.png";
import "./App.css";

import ParallaxScroll from "./components/ParallaxScroll";

function App() {
  return (
    <main className="layout-grid">
      <header>
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
              <button>
                <img src={DownloadIcon} alt="download resume" />
                Resume
              </button>
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
            <a href="#">
              <img src={GithubLogo} alt="" />
            </a>
            <a href="#">
              <img src={LinkedInLogo} alt="" />
            </a>
            <a href="#">
              <img src={GoodreadsLogo} alt="" />
            </a>
            <a href="#">
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
          <br />
          <br />
          <h3>
            <img src={COFlagIcon} alt="" />
            <span className="label">Currently In: </span> <p>Boulder, CO</p>
          </h3>
          <br />
          <br />
          <h3>
            <span className="icon">🎓</span> <p>MsCS from DePaul University</p>
          </h3>
          <br />
          <br />
          <h3>
            <span className="icon">🛠️</span>
            <p>
              <mark style={{ background: `#FFED02` }}>Five Years</mark>
              of Experience Building For The Web
            </p>
          </h3>
          <br />
          <br />
          <h3>
            <span className="icon">❤️</span>
            <p>Running, Skiing, Climbing, Sketch, Film Photography</p>
          </h3>
          <br />
          <br />
          <br />
          <br />
          <h3>
            <span className="icon">💻</span>
            <p>
              <span className="label">Frontend: </span> React, Typescript,
              Tailwind, HTML, SCSS, ++
            </p>
          </h3>
          <br />
          <h3>
            <span className="icon">💻</span>
            <p>
              <span className="label">Backend: </span> Rails, Node, GraphQL,
              SQL, NoSQL, ++
            </p>
          </h3>
        </section>
      </section>
      <section className="projects">Projects</section>
      <section className="contact">Contact</section>
      <div className="scroll-background">
        <ParallaxScroll />
      </div>
    </main>
  );
}

export default App;
