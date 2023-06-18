// import profilePicture from "../../assets/profile-picture.png";
// import profilePictureGray from "../../assets/profile-picture-gray.png";

import HomeSectionContainerScreenH from "../../../components/HomeSectionContainerScreenH";

const BannerSection = () => {
  return (
    <HomeSectionContainerScreenH>
      <div>
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl">
            I am{" "}
            <span className="text-4xl font-bold text-accent md:text-8xl">
              Rifat Khan
            </span>
          </h1>
          <p className="text-lg font-semibold md:text-2xl">
            A <span className="text-3xl text-accent md:text-6xl">MERN</span>{" "}
            Stack Developer who is passionate about crafting impressive things.
          </p>
        </div>
      </div>
    </HomeSectionContainerScreenH>
  );
};

export default BannerSection;
