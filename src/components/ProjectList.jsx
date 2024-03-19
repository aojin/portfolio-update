import PropTypes from "prop-types";

import ProjectTile from "./ProjectTile";

const propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = {};

function ProjectList({ projects }) {
  return (
    <ul className="projects-list">
      {projects.map((project, index) => {
        return (
          <ProjectTile
            key={index}
            name={project.name}
            technologies={project.technologies}
            url={project.url}
            companyImage={project.companyImage}
          />
        );
      })}
    </ul>
  );
}

ProjectList.propTypes = propTypes;
ProjectList.defaultProps = defaultProps;

export default ProjectList;
