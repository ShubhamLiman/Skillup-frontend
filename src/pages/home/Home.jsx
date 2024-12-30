import React from "react";
import Marquee from "../../components/Marquee/Marquee";
import Hero from "../../components/Hero/Hero";
import CompanyMarquee from "../../components/CompanyMarquee/CompanyMarquee";
function Home({ formVisible, setFormVisible }) {
  return (
    <>
      <Marquee />
      <Hero formVisible={formVisible} setFormVisible={setFormVisible} />
      <CompanyMarquee />
    </>
  );
}

export default Home;
