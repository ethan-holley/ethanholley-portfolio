import ExperienceCard from "./ExperienceCard";
import { experiences } from "../data/experience";

function Experience() {
  return (
    <section className="section">
      <h2>Work Experience</h2>

      <div className="timeline">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.company}
            title={experience.title}
            company={experience.company}
            date={experience.date}
            image={experience.image}
            bullets={experience.bullets}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;