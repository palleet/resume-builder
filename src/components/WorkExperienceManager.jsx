import WorkExperienceInfo from "./WorkExperienceInfo.jsx";
import {v4 as uuidv4} from "uuid";

function WorkExperienceManager({experiences, handleInfoChange, setExperiences}) {
    function addExperience() {
        setExperiences([...experiences, {
            id: uuidv4(),
            positionTitle: '',
            employer: '',
            location: '',
            startDate: '',
            endDate: '',
            present: false,
            description: ''

        }]);
    }

    return (
        <>
            <h2>Experience</h2>
            {experiences.map((experience) =>
                <WorkExperienceInfo

                    handleInfoChange={handleInfoChange}
                    experience={experience}
                    key={experience.id}

                />
            )}


            <button className="addBtn" onClick={addExperience}>Add Experience</button>
        </>
    );
}

export default WorkExperienceManager;