import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import hoursImg from "../images/hours.jpg";
import tempImg from "../images/tempHours.jpg";

const BusinessHours = () => {
  return (
    <section className="hours-section" id="hours">
      <div className="grid grid-cols-2">
        <div className="center hours-text-container">
          <span className="hours-label">Book a table</span>

          <h2 className="heading-secondary">Hours of operation</h2>

          <p className="hours-text">Monday - Saturday 10am-7pm</p>

          <Link to="tel:000-000-0000" className="hours-btn">
            Call now
          </Link>
        </div>

        <div>
          <LazyLoadImage
            src={hoursImg}
            placeholdersrc={tempImg}
            height="100%"
            width="100%"
            effect="blur"
            alt="scenery"
            className="hours-img"
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;
