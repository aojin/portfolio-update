import ProfilePic from "./assets/line-portrait-on-aqua.png";
import DownloadIcon from "./assets/utility-icons/download.svg";
import "./App.css";

import ParallaxScroll from "./components/ParallaxScroll";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

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
          <h1 id="title-alex">
            I'm <span>Alex</span>
          </h1>
          <h1 id="title-fullstack">
            a <span>Full Stack</span>
          </h1>
          <h1 id="title-developer">
            Web <span>Developer</span>
            <div id="title-period"></div>
          </h1>
        </section>
        <section className="hero-image">
          <ParallaxScroll />{" "}
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
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          dolores, nesciunt, minus ex dicta omnis corrupti reprehenderit neque
          dignissimos vel culpa corporis voluptas doloremque esse. Natus facere
          fuga magnam minima. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. In, provident magni minima earum rem quo optio nemo
          laboriosam excepturi eligendi repellat eos, veritatis praesentium
          ratione a quaerat numquam unde voluptatum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eum
          delectus architecto earum sint libero beatae saepe ipsum aut animi
          quod explicabo omnis distinctio, sunt necessitatibus incidunt esse
          autem fugiat? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Quasi magnam reiciendis facere fuga, dolore vitae, minus error
          iusto ut dicta assumenda, omnis recusandae debitis dolorem! Amet id
          sequi tempora accusamus.
        </p>
      </section>
      <section className="projects"></section>
      <section className="contact"></section>
    </main>
  );
}

export default App;
