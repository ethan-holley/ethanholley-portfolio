function About() {
  const facts = [
    "Bachelor's in Computer Science, University of Arizona",
    "Software Engineering experience at Infosys and Arizona Football",
    "Built an AI-powered job application assistant using OpenAI APIs",
    "Developed recruiting analytics tools that automated weekly workflows",
    "Supported 100+ students as a Data Structures & Algorithms Teaching Assistant",
    "Highly adaptable, collaborative, and organized",
  ];

  return (
    <section className="section">
      <h2>About Me</h2>

      <div className="about-layout">
        <div className="quick-facts-card">
          <ul className="about-list">
            {facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>

        <a
          href="/Ethan-Holley-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-preview-card"
        >
          <img
            src="/resume-preview.png"
            alt="Resume Preview"
            className="resume-preview"
          />
        </a>
      </div>
    </section>
  );
}

export default About;