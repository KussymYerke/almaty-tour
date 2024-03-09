import galleryOne from "@/data/galleryOne";
import SingleGallery from "./SingleGallery";





const { bg, galleryData } = galleryOne;

const GalleryOne = () => {

  return (
    <div>
      <section className="gallery-one">
      <div
        className="gallery-one-bg"
        style={{ backgroundImage: ` url(${bg.src})` }}
      ></div>
      <div className="gallery-one__container-box clearfix">
        <ul className="list-unstyled gallery-one__content clearfix">
          {galleryData.map((image, index) => (
            <SingleGallery key={index} image={image} />
          ))}
        </ul>
      </div>
    </section>
    </div>
  );
};

export default GalleryOne;
