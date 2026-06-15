import {
  Code2,
  Monitor,
  Database,
  Wrench,
} from "lucide-react";

type SkillCategoryProps = {
  category: string;
  skills: string[];
};

function SkillCategory({
  category,
  skills,
}: SkillCategoryProps) {
  const iconMap = {
    Languages: <Code2 size={24} />,
    Frontend: <Monitor size={24} />,
    "Backend & Data": <Database size={24} />,
    "Tools & Platforms": <Wrench size={24} />,
  };

  return (
    <div className="skill-category">
      <div className="skill-header">
        {iconMap[category as keyof typeof iconMap]}
        <h3>{category}</h3>
      </div>

      <div className="skill-badges">
        {skills.map((skill) => (
          <span key={skill} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;