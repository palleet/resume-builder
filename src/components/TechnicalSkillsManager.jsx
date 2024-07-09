import {v4 as uuidv4} from "uuid";
import TechnicalSkillsInfo from "./TechnicalSkillsInfo.jsx";

export default function TechnicalSkillsManager({ skills, handleInfoChange, setSkills}) {
    function addSkill() {
        setSkills([...skills, {
            id: uuidv4(),
            category: 'Programs',
            items: 'Github, VS Code, Photoshop'
            }
        ]);
    }

    return (
        <>
            <h2>Technical Skills</h2>
            {skills.map((skill) =>
                <TechnicalSkillsInfo
                    handleInfoChange={handleInfoChange}
                    skill={skill}
                    id={skill.id}
                />
            )}
            <button onClick={addSkill}>Add Skill</button>
        </>
    );
}