import PropTypes from "prop-types";
import SectionHead from "../../components/SectionHead";
import skillSets from "../../components/Skill/SkillSets";

const MySkillSetSection = () => {
  return (
    <div className="my-40">
      <SectionHead>My Skill Sets</SectionHead>

      <div className="my-5 grid grid-cols-5 gap-5">
        {skillSets.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
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
