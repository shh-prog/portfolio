import { useState } from "react";
import projects from "./Data/projects";
import ProjectDetail from "./Project/ProjectDetail";
import SearchBar from "./Project/SearchBar";

function Projects() {
  const [filter, setFilter] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(filter.toLowerCase()),
  );
  if (selectedProject !== null) {
    return (
      <ProjectDetail
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <section className="projects-section">
      <h1>PROJECTS</h1>
      <p className="section-description">
        지금까지 진행한 프로젝트를 소개합니다.
      </p>
      <SearchBar filter={filter} changeFilter={changeFilter} />
      <div className="project-list">
        {filteredProjects.map((project) => (
          <div
            className="project-card"
            key={project.id}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-image">{project.image}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
