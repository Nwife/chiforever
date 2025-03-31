'use client'
import { ImageOverlay, Montserrat, Testimonial } from "@/components";
import React from "react";

const PorfolioGallery = () => {
  return (
    <main>
      <section className="max-w-[1200px] mx-auto mt-[72px] pb-[132px] px-2.5 sm:px-5 2xl:px-0">
        {/* <PortfolioHeader
          text="Chika & Ifechukwu"
          subtext="Celebrating love in every detail, from the elegant decor to the
          heartfelt moments. A day where joy and togetherness shine brightly."
        /> */}
        <div>
          <Montserrat
            text="Portfolio"
            styles="text-brown-100 text-center mt-3 mb-4"
          />
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-1 sm:gap-5 text-[42px] sm:text-5xl md:text-[54px] mmd:text-[62px] text-center text-green-600 font-medium mb-3.5 font-erotique">
            <div className="sm:text-right">Chika</div>
            <div>&</div>
            <div className="sm:text-left">Ifechukwu</div>
          </div>
          <p className="max-w-[713px] text-green-900 mx-auto text-center leading-[32px] font-marcellus">
            Celebrating love in every detail, from the elegant decor to the
            heartfelt moments. A day where joy and togetherness shine brightly.
          </p>
        </div>
        <div className="columns-2 space-y-3 sm:space-y-5 gap-3 sm:gap-5 mt-16 sm:mt-24">
          <ImageOverlay
            imgUrl="/images/masonry/masonry-image-one.png"
            width={590}
            height={500}
          />
          <ImageOverlay
            imgUrl="/images/masonry/masonry-image-two.png"
            width={590}
            height={500}
          />
          <ImageOverlay
            imgUrl="/images/masonry/masonry-image-three.png"
            width={590}
            height={500}
          />
          <ImageOverlay
            imgUrl="/images/masonry/masonry-image-four.png"
            width={590}
            height={500}
          />
          <ImageOverlay
            imgUrl="/images/masonry/masonry-image-five.png"
            width={590}
            height={500}
          />
          <ImageOverlay
            imgUrl="/images/masonry/masonry-image-six.png"
            width={590}
            height={500}
          />
        </div>
      </section>
      <Testimonial />
    </main>
  );
};

export default PorfolioGallery;
