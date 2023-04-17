import React from "react";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  const handleGoToProducts = () => {
    router.push("/products");
  };

  return (
    <div>
      <section className="max-w-[1000px] mt-[-320px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl font-bold md:py-6">
          NEW PRODUCTS
        </h1>

        <h2 className="md:text-5xl sm:text-4xl font-bold">
          LUSH X SUPER MARIO BROS THE MOVIE
        </h2>

        <button
          onClick={handleGoToProducts}
          class="w-[200px] my-6 mx-auto py-3 font-semibold rounded-lg bg-black text-white hover:bg-white hover:text-black"
        >
          View our Products
        </button>
      </section>
    </div>
  );
};

export default Hero;
