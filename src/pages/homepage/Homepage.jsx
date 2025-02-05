import MainSection from "./homepage-components/MainSection";
import AboutSection from "./homepage-components/AboutSection";
import InfoSection from "./homepage-components/InfoSection";
import FinalSection from "./homepage-components/FinalSection";

function Homepage() {
  return (
    <div className="home-container">
      <MainSection />
      <AboutSection />
      <InfoSection />
      <FinalSection />
    </div>
  );
}

export default Homepage;
