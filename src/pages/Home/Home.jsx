import useDynamicTitle from "../../hooks/useDynamicTitle";
import AboutMeSection from "./sections/AboutMeSection";
import BannerSection from "./sections/BannerSection";
import MySkillSetSection from "./sections/MySkillSetSection";
import MyProjectsSection from "./sections/MyProjectsSection";
import MyFeaturedProjectSection from "./sections/MyFeaturedProjectSection";
import MySocialLinks from "./sections/MySocialLinks";

const Home = () => {
  useDynamicTitle("Portfolio - Home");

  return (
    <div>
      <BannerSection />

      <div className="container mx-auto px-5 md:px-0">
        <div className="mx-auto max-w-5xl">
          <AboutMeSection />

          <MySkillSetSection />

          <MyProjectsSection />

          <MyFeaturedProjectSection />

          <MySocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Home;
