import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section className="section">
      <h2>Projects</h2>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            impact={project.impact}
            technologies={project.technologies}
            images={project.images}
            github={project.github}
            isPrivate={project.isPrivate}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;