import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const PreviewCard = ({ name, href, imageSrc, imageAlt }) => {
  const router = useRouter();

  const handleProductClick = () => {
    router.push(href);
  };

  return (
    <li className="h-[250px] w-auto border m-1 list-none shadow-lg">
      <button
        onClick={handleProductClick}
        className="p-4 h-full w-full flex flex-col items-center"
        aria-label={name}
      >
        <h2>{name}</h2>
        {imageSrc && (
          <Image
            width={120}
            height={120}
            src={imageSrc}
            alt={imageAlt}
            className="my-auto h-auto w-auto"
            loading="lazy"
          />
        )}
      </button>
    </li>
  );
};

export default PreviewCard;
