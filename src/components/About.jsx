import { LazyLoadImage } from "react-lazy-load-image-component";

import aboutImg from "../images/gallery/gallery-5.jpg";
import tempImg from "../images/gallery/tempGallery-5.jpg";

const about = () => {
  return (
    <section className="about-section" id="about">
      <div className="grid grid-cols-2 about-inner">
        <div>
          <LazyLoadImage
            className="about-img"
            src={aboutImg}
            placeholdersrc={tempImg}
            height="100%"
            width="100%"
            effect="blur"
            alt="about"
          />
        </div>

        <div className="about-text-container center">
          <h2 className="heading-secondary">Our Story</h2>

          <div className="about-paragraphs">
            <p className="about-text">
              Our cafe opened in the 60's as a small diner serving breakfast and
              lunch. Over time we expanded our menu to include diner, entrees
              and healthy dish options.{" "}
            </p>

            <p className="about-text">
              We're continuing to open new locations. We also provide catering
              services for events including local festivals and activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
