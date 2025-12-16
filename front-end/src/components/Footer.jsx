import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} [Rabab Sehr] · Speech & Language Therapist
      </p>
      <p>
        <a href="mailto:email@example.com">rababsehr@gmail.com</a>
      </p>
    </footer>
  );
};

export default Footer;
