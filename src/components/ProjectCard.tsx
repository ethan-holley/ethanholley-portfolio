type ProjectCardProps = {
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  technologies: string[];
  images: string[];
  github: string;
  isPrivate: boolean;
};

function ProjectCard({
  title,
  subtitle,
  description,
  impact,
  technologies,
  images,
  github,
  isPrivate,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div>
      <div
        className={
          images.length === 1
            ? "project-images-single"
            : "project-images"
        }
      >
        {images.map((image) => (
          <img
            key={image}
            src={image}
            alt={`${title} screenshot`}
            className="project-image"
          />
        ))}
      </div>

        <p className="project-subtitle">{subtitle}</p>
        <h3>{title}</h3>

        <p className="project-description">{description}</p>

        <p className="project-impact">
          <span>Impact:</span> {impact}
        </p>

        <div className="tech-tags">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      {isPrivate ? (
        <p className="project-link private-project">Private/Internal Project</p>
      ) : (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          View GitHub →
        </a>
      )}
    </article>
  );
}

export default ProjectCard;