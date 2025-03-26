import { PortfolioHeader } from "@/components";
import Image from "next/image";
import React from "react";

const PorfolioGallery = () => {
  return (
    <main>
      <section className="max-w-[1200px] mx-auto mt-[72px] pb-[132px]">
        <PortfolioHeader
          text="Chika & Ifechukwu"
          subtext="Celebrating love in every detail, from the elegant decor to the
          heartfelt moments. A day where joy and togetherness shine brightly."
        />
        <div className="columns-2 space-y-5 gap-5 mt-24">
          <Image
            src="/images/masonry/masonry-image-one.png"
            width={590}
            height={500}
            alt="gallery"
          />
          <Image
            src="/images/masonry/masonry-image-two.png"
            width={590}
            height={500}
            alt="gallery"
          />
          <Image
            src="/images/masonry/masonry-image-three.png"
            width={590}
            height={500}
            alt="gallery"
          />
          <Image
            src="/images/masonry/masonry-image-four.png"
            width={590}
            height={500}
            alt="gallery"
          />
          <Image
            src="/images/masonry/masonry-image-five.png"
            width={590}
            height={500}
            alt="gallery"
          />
          <Image
            src="/images/masonry/masonry-image-six.png"
            width={590}
            height={500}
            alt="gallery"
          />
        </div>
      </section>
    </main>
  );
};

export default PorfolioGallery;
