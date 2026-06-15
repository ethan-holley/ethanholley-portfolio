type ExperienceCardProps = {
  title: string;
  company: string;
  date: string;
  image: string;
  bullets: string[];
};

function ExperienceCard({
  title,
  company,
  date,
  image,
  bullets,
}: ExperienceCardProps) {
  return (
    <article className="timeline-item">
      <div className="timeline-dot" />

      <div className="timeline-content">
        <div className="experience-header">
          <img
            src={image}
            alt={company}
            className="experience-logo"
          />

          <div>
            <h3>{title}</h3>
            <p className="company">{company}</p>
            <p className="timeline-date">{date}</p>
          </div>
        </div>

        <ul>
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;