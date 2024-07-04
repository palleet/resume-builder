import WorkExperienceInfo from "./WorkExperienceInfo.jsx";

function WorkExperienceManager({experiences, handleInfoChange, setExperiences}) {
    function addExperience() {
        setExperiences([...experiences, {
            positionTitle: 'new position',
            employer: 'new employer',
            location: 'Berkeley',
            startDate: '1999-02',
            endDate: '2000-10',
            description: ['']
        }]);
    }

    return (
        <>
            {experiences.map((experience, index) =>
                <WorkExperienceInfo

                    handleInfoChange={handleInfoChange}
                    experience={experience}
                    key={index}

                />
            )}


            <button onClick={addExperience}>Add</button>
        </>
    );
}

export default WorkExperienceManager;