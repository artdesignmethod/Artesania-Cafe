import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1 className="heading-primary center">Welcome</h1>

        <p className="hero-subhead">to our cafe</p>
      </div>

      <HashLink smooth to="#hours" className="btn-hero center">
        Business Hours
      </HashLink>
    </section>
  );
};

export default Hero;
