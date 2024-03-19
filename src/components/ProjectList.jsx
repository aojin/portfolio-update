import PropTypes from "prop-types";

import ProjectTile from "./ProjectTile";

const propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = {};

const colorSequence = ["#EB539F", "#6CE4CF", "#5AC4F6", "#FFED02"];

function ProjectList({ projects }) {
  return (
    <ul className="projects-list">
      {projects.map((project, index) => {
        const tileColorNum = index % colorSequence.length;
        return (
          <ProjectTile
            key={index}
            name={project.name}
            technologies={project.technologies}
            url={project.url}
            companyImage={project.companyImage}
            tileColor={colorSequence[tileColorNum]}
          />
        );
      })}
    </ul>
  );
}

ProjectList.propTypes = propTypes;
ProjectList.defaultProps = defaultProps;

export default ProjectList;
