import "./AboutMe.css";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about-container">

        <h2>About Me</h2>

        <p className="about-intro">
          Hi, I’m <strong>[Therapist Name]</strong>, a certified Speech and
          Language Therapist with over <strong>X years</strong> of experience
          helping children and adults communicate with clarity and confidence.
        </p>

        <p>
          I specialize in providing personalized, evidence-based online speech
          therapy tailored to each individual’s needs. My approach is warm,
          supportive, and focused on real-world communication skills that
          create lasting progress.
        </p>
        <div className="credentials">
          <span>RCZCLR Certified</span>
          <span>Ireland Certified</span>
          <span>SHAP Certified</span>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
