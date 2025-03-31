'use client'
import Image from "next/image";

const ImageOverlay = ({
  imgUrl,
  styles,
  width = 190,
  height = 190,
}: {
  imgUrl: string;
  styles?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <div className="group overflow-hidden transition-transform duration-700 ease-out hover:scale-95 hover:shadow-[0px_20px_30px_-10px_rgba(60,79,68,0.7)]">
      <Image
        src={imgUrl}
        width={width}
        height={height}
        alt="footer-image"
        className={`w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.15] cursor-pointer ${styles}`}
      ></Image>
    </div>
  );
};

export default ImageOverlay;
