import Hero from "../Sections/Hero";
import MenuSection from "../Sections/MenuSection";
import SpecialDeal from "../Sections/SpecialDeal";
import Services from "../Sections/Services";
import ReviewSection from "../Sections/ReviewSection";
import OurCheifs from "../Sections/OurCheifs";

const Home = () => {
  return (
    <>
      <Hero />
      {/* Section with Text and Elements */}
      <MenuSection />
      {/* here Menu Section goes insha+Allah */}
      <SpecialDeal />
      {/* Special Offers Goes Here */}
      <Services />
      {/* Services  */}
      <ReviewSection />
      {/* Reviews */}
      {/* our chiefs */}
      <OurCheifs />
    </>
  );
};

export default Home;
