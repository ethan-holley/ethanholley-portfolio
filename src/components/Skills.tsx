import SkillCategory from "./SkillCategory";
import { skills } from "../data/skills";

function Skills() {
  return (
    <section className="section">
      <h2>Tech Stack</h2>

      <div className="skills-container">
        {skills.map((category) => (
          <SkillCategory
            key={category.category}
            category={category.category}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;