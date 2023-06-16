import useDynamicTitle from "../../hooks/useDynamicTitle";
import AboutMeSection from "./AboutMeSection";
import BannerSection from "./BannerSection";
import MySkillSetSection from "./MySkillSetSection";

const Home = () => {
  useDynamicTitle("Portfolio - Home");

  return (
    <div>
      <BannerSection />

      <div className="container mx-auto px-5 md:px-0">
        <div className="mx-auto max-w-5xl">
          <AboutMeSection />

          <MySkillSetSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
