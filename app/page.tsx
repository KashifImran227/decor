import React from "react";

import Link from "next/link";
import Hero from "./Componants/Hero";
import Background from "./Componants/Background";
import Products from "./Componants/Products";
import Content from "./Componants/Content";

import Cards2 from "./Componants/Cards2";
const Page: React.FC = () => {
  return (
    <>
      <div>
       
        <Hero />

        {/* Link to Home Page */}

        {/* This Link will redirect to Home page */}
        <Link href="./Bedroom"></Link>
        <Link href="./Beds"></Link>
        <Link href="./Dressers"></Link>
        <Link href="./Cupboards"></Link>
        <Background />
        <Products />
        <Cards2 />
        <Content/>
       
      </div>
    </>
  );
};

export default Page;
