type ProjectCardProps = {
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  technologies: string[];
  images: string[];
  github: string;
  liveDemo?: string;
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
  liveDemo,
  isPrivate,
}: ProjectCardProps) {
  const imageClassName =
    title === "Spotify Insights App"
      ? "project-images project-images-spotify"
      : images.length === 1
        ? "project-images-single"
        : "project-images";

  return (
    <article className="project-card">
      <div>
        <div className={imageClassName}>
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
        <div className="project-links">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View GitHub →
            </a>
          )}

          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Live Demo →
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;