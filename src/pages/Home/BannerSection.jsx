// import profilePicture from "../../assets/profile-picture.png";
// import profilePictureGray from "../../assets/profile-picture-gray.png";

import HomeSectionContainerScreenH from "../../components/HomeSectionContainerScreenH";

const BannerSection = () => {
  return (
    <HomeSectionContainerScreenH>
      <div>
        <div className="text-right">
          <h1 className="text-4xl">
            I am{" "}
            <span className="text-8xl font-bold text-accent">Rifat Khan</span>
          </h1>
          <p className="text-2xl font-semibold">
            A <span className="text-6xl text-accent">MERN</span> Stack Developer
            who is passionate about crafting impressive things.
          </p>
        </div>
      </div>
    </HomeSectionContainerScreenH>
  );
};

export default BannerSection;
