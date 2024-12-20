import Container from "../ui/Container";
import galleryImage1 from "/images/gallery-image-1.jpg";
import galleryImage2 from "/images/gallery-image-2.jpg";
import galleryImage3 from "/images/gallery-image-3.jpg";
import galleryImage4 from "/images/gallery-image-4.jpg";
import galleryImage5 from "/images/gallery-image-5.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ImageGallery = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="py-8 md:pb-24 md:pt-12">
      <Container>
        <h2 className="mb-8 text-center text-3xl font-bold md:mb-8 md:text-4xl lg:mb-12 lg:text-5xl">
          Trusted by Gym Bros
        </h2>
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-4 lg:gap-4">
          <div
            data-aos="fade-up-right"
            className="col-span-2 row-span-2 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2"
          >
            <img
              src={galleryImage1}
              alt="Gallery Image 1"
              className="h-full w-full rounded-md object-cover shadow-md md:rounded-lg md:shadow-lg"
            />
          </div>
          <div data-aos="fade-down" className="col-span-1 row-span-1">
            <img
              src={galleryImage5}
              alt="Gallery Image 2"
              className="h-full w-full rounded-md object-cover shadow-md md:rounded-lg md:shadow-lg"
            />
          </div>
          <div data-aos="fade-left" className="col-span-1 row-span-1">
            <img
              src={galleryImage2}
              alt="Gallery Image 3"
              className="h-full w-full rounded-md object-cover shadow-md md:rounded-lg md:shadow-lg"
            />
          </div>
          <div data-aos="fade-up-left" className="col-span-1 row-span-1">
            <img
              src={galleryImage4}
              alt="Gallery Image 4"
              className="h-full w-full rounded-md object-cover shadow-md md:rounded-lg md:shadow-lg"
            />
          </div>
          <div
            data-aos="fade-up"
            className="col-span-1 row-span-1 md:col-start-3 md:row-start-2 lg:col-start-4 lg:row-start-2"
          >
            <img
              src={galleryImage3}
              alt="Gallery Image 5"
              className="h-full w-full rounded-md object-cover shadow-md md:rounded-lg md:shadow-lg"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ImageGallery;
