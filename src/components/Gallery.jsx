import { LazyLoadImage } from "react-lazy-load-image-component";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import image1 from "../images/gallery/gallery-1.jpg";
import image2 from "../images/gallery/gallery-2.jpg";
import image3 from "../images/gallery/gallery-3.jpg";
import image4 from "../images/gallery/gallery-4.jpg";
import image5 from "../images/gallery/gallery-5.jpg";
import image6 from "../images/gallery/gallery-6.jpg";
import image7 from "../images/gallery/gallery-7.jpg";
import image8 from "../images/gallery/gallery-8.jpg";
import image9 from "../images/gallery/gallery-9.jpg";

import tempImage1 from "../images/gallery/tempGallery-1.jpg";
import tempImage2 from "../images/gallery/tempGallery-2.jpg";
import tempImage3 from "../images/gallery/tempGallery-3.jpg";
import tempImage4 from "../images/gallery/tempGallery-4.jpg";
import tempImage5 from "../images/gallery/tempGallery-5.jpg";
import tempImage6 from "../images/gallery/tempGallery-6.jpg";
import tempImage7 from "../images/gallery/tempGallery-7.jpg";
import tempImage8 from "../images/gallery/tempGallery-8.jpg";

const Gallery = () => {
  let galleryImages = [
    {
      galleryImg: image1,
      tempImg: tempImage1,
    },
    {
      galleryImg: image2,
      tempImg: tempImage2,
    },
    {
      galleryImg: image3,
      tempImg: tempImage3,
    },
    {
      galleryImg: image4,
      tempImg: tempImage4,
    },
    {
      galleryImg: image5,
      tempImg: tempImage5,
    },
    {
      galleryImg: image6,
      tempImg: tempImage6,
    },
    {
      galleryImg: image7,
      tempImg: tempImage7,
    },
    {
      galleryImg: image8,
      tempImg: tempImage8,
    },
    {
      galleryImg: image9,
      tempImg: tempImage6,
    },
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="center gallery-text">
        <h3 className="heading-secondary">Image Gallery</h3>
      </div>

      <PhotoProvider>
        <div className="gallery-container grid grid-cols-3">
          {galleryImages.map(({ galleryImg, tempImg }, i) => {
            return (
              <div className="gallery-item" key={i}>
                <PhotoView src={galleryImg}>
                  <LazyLoadImage
                    placeholdersrc={tempImg}
                    src={galleryImg}
                    width="100%"
                    effect="blur"
                    alt="image"
                  />
                </PhotoView>
              </div>
            );
          })}
        </div>
      </PhotoProvider>
    </section>
  );
};

export default Gallery;
