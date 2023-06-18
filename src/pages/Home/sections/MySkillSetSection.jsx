import PropTypes from "prop-types";
import SectionHead from "../../../components/SectionHead";
import SkillSetsDB from "../../../dbs/Skill/SkillSetsDB";

const MySkillSetSection = () => {
  return (
    <div className="my-40">
      <SectionHead>My Skill Sets</SectionHead>

      <div className="my-5 grid grid-cols-2 gap-5 md:grid-cols-5">
        {SkillSetsDB.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillCard = ({ skill }) => {
  const { name, icon } = skill;

  return (
    <div className="card bg-base-100 p-5 shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <div>{icon}</div>

        <h1 className="text-2xl">{name}</h1>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  skill: PropTypes.object.isRequired,
};

export default MySkillSetSection;
