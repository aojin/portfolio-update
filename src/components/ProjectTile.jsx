import ReactLogo from "../assets/logos/logo-react-icon.png";
import TailwindLogo from "../assets/logos/tailwind.png";
import TypescriptLogo from "../assets/logos/typescript-logo.png";
import RailsLogo from "../assets/logos/rails-logo.png";
import NodeLogo from "../assets/logos/nodejs.png";
import GraphQLLogo from "../assets/logos/graphql.png";
import NextLogo from "../assets/logos/nextjs-logo.png";
import SalesforceLogo from "../assets/logos/salesforce.png";
import SassLogo from "../assets/logos/sass.png";
import IonicLogo from "../assets/logos/ionic.png";
import MulesoftLogo from "../assets/logos/mulesoft_logo.png";

import ClickIcon from "../assets/utility-icons/click.png";
import LockIcon from "../assets/utility-icons/lock.png";

import PropTypes from "prop-types";

const imageMap = {
  react: ReactLogo,
  rails: RailsLogo,
  sass: SassLogo,
  salesforce: SalesforceLogo,
  typescript: TypescriptLogo,
  tailwind: TailwindLogo,
  ionic: IonicLogo,
  next: NextLogo,
  node: NodeLogo,
  graphql: GraphQLLogo,
  mulesoft: MulesoftLogo,
};

const propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  url: PropTypes.string,
  companyImage: PropTypes.node,
  tileColor: PropTypes.string,
};

const defaultProps = {};

function ProjectTile({ technologies, name, url, companyImage, tileColor }) {
  return (
    <article
      className="project-tile"
      style={{ backgroundColor: `${tileColor}20` }}
    >
      <div className="project-tile-banner">
        <section className="project-tile-imgs">
          <ul>
            {technologies &&
              technologies.length &&
              technologies.map((technology, index) => {
                return (
                  <li key={index}>
                    <figure>
                      <img
                        src={imageMap[technology]}
                        alt={`${technology} icon`}
                      />
                    </figure>
                  </li>
                );
              })}
          </ul>
        </section>
        <section className="project-tile-info">
          <div className="project-tile-info-mobile-left-align">
            <label>
              <h2>{name}</h2>
            </label>
            {url ? (
              <a href={url}>
                <img src={ClickIcon} alt="" />
                Visit
              </a>
            ) : (
              <div className="more-info">
                <img src={LockIcon} alt="" />
                <span>Contact For Details</span>
              </div>
            )}
          </div>
          <div className="project-tile-info-mobile-right-align">
            <img src={companyImage} alt="" />
          </div>
        </section>
      </div>
    </article>
  );
}

ProjectTile.propTypes = propTypes;
ProjectTile.defaultProps = defaultProps;

export default ProjectTile;
