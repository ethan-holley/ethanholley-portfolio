function Contact() {
  return (
    <section className="section">
      <h2>Contact</h2>

      <div className="contact-card">
        <h3>Ethan Holley</h3>

        <p className="contact-role">
          Software Engineer
        </p>

        <p className="contact-description">
          I'm currently seeking Software Engineering opportunities and
          would love to connect.
        </p>

        <div className="contact-info">
          <p>📧 ethanjholley6@gmail.com</p>
          <p>📱 (949)633-2918</p>
        </div>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/ethan-holley-eh07"
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/ethan-holley"
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            GitHub
          </a>

          <a
            href="/Ethan-Holley-Resume.pdf"
            download
            className="contact-button"
          >
            Resume
          </a>
        </div>
        <br></br>
        <p>* Built with React, TypeScript, and Vite *</p>
      </div>
    </section>
  );
}

export default Contact;