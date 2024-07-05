import WorkExperienceInfo from "./WorkExperienceInfo.jsx";

function ResumePreview(props) {
    // let descriptionArray = experience.description.split('\n');
    return (
        <div id="resume-preview">
            <div id="paper">
                <div id="paperContainer">
                    <h1>{props.fullName}</h1>
                    <div id="contactInfo">{props.phoneNumber} | {props.email}</div>
                    <br/>
                    <h2>Experience</h2>
                    <hr/>
                    {props.experiences.map((experience, index) => {
                        let descriptionArray = experience.description.split('\n');
                        return (
                            <>
                                {/*<h2>Position: {experience.positionTitle}</h2>*/}
                                {/*<h2>Emnployer: {experience.employer}</h2>*/}
                                {/*<h2>Location: {experience.location}</h2>*/}
                                {/*<h2>Start Date: {experience.startDate}</h2>*/}
                                {/*<h2>End Date: {experience.endDate}</h2>*/}
                                {/*<h2>Responsbilities and achievements: {experience.description}</h2>*/}

                                <div id="expHeader">
                                    <div id="positionTitle">{experience.positionTitle}</div>
                                    <div id="dates">{experience.startDate} - {experience.endDate}</div>
                                </div>
                                <div id="origin">
                                    <div id="employer">{experience.employer}</div>
                                    <div id="locaition">{experience.location}</div>
                                </div>
                                <div id="description">
                                    <ul>
                                        {descriptionArray.map((line, index) => (
                                            <li key={index}>{line}</li>
                                        ))}
                                    </ul>

                                </div>

                            </>
                        )
                    })}
                </div>
            </div>


        </div>)
}

export default ResumePreview;