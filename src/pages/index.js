import React from "react";
import Hero from "@/components/Hero";

const Home = () => (
  <div>
    <div className="bg-home-page-hero flex-auto p-6 text-center bg-cover bg-center">
      <h1 className="relative w-full flex-none mb-2 text-8xl text-Black font-extrabold">
        LUSH
      </h1>
      <Hero />
    </div>
  </div>
);

export default Home;
