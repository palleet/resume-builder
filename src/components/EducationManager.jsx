import EducationInfo from "./EducationInfo.jsx"
import WorkExperienceInfo from "./WorkExperienceInfo.jsx";
import {v4 as uuidv4} from "uuid";

export function EducationManager({schools, handleInfoChange, setSchools}) {
    function addSchool() {
        setSchools([...schools, {
            id: uuidv4(),
            schoolName: 'new College University',
            location: 'Berkeley',
            startDate: '1999-02',
            endDate: '2000-10',
            degree: 'Cognitive Science'
        }]);
    }

    return (
        <>
            <h2>Education</h2>
            {schools.map((school, index) =>
                <EducationInfo

                    handleInfoChange={handleInfoChange}
                    school={school}
                    key={index}

                />
            )}


            <button onClick={addSchool}>Add School</button>
        </>
    )
}