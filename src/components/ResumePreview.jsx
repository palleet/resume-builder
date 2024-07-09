import WorkExperienceInfo from "./WorkExperienceInfo.jsx";
import formatDate from "./helpers/formHelpers.js";

function ResumePreview(props) {
    return (
        <div id="resume-preview">
            <div id="paper">
                <div id="paperContainer">
                    <h1>{props.fullName}</h1>
                    <div id="contactInfo">{props.phoneNumber} | {props.email}</div>
                    <br/>
                    <h2>Education</h2>
                    <hr/>
                    {props.schools.map((school) => {

                        return (
                            <>

                                <div id="secHeader">
                                    <div id="schoolName">{school.schoolName}</div>
                                    <div id="location">{school.location}</div>
                                </div>
                                <div id="origin">
                                    <div id="degree">{school.degree}</div>
                                    <div id="dates">{formatDate(school.startDate)} - {formatDate(school.endDate)}</div>
                                </div>

                            </>
                        )
                    })}
                    <h2>Experience</h2>
                    <hr/>
                    {props.experiences.map((experience, index) => {
                        let descriptionArray = experience.description.split('\n');
                        return (
                            <>

                                <div id="secHeader">
                                    <div id="positionTitle">{experience.positionTitle}</div>
                                    <div id="dates">{formatDate(experience.startDate)} - {formatDate(experience.endDate)}</div>
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
                    <h2>Projects</h2>
                    <hr />
                    {props.projects.map((project, index) => {
                        let descriptionArray = project.description.split('\n');
                        return (
                            <>

                                <div id="secHeader">
                                    <div id="projectNameAndSkills">
                                        <span className="projectName">{project.projectName} </span>
                                        | {project.skills}
                                    </div>
                                    <div id="dates">{formatDate(project.startDate)} - {formatDate(project.endDate)}</div>
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
                    <h2>Technical Skills</h2>
                    <hr />
                    {props.skills.map((skill) => {
                        return (
                            <>
                                <div className="skillLine">
                                    <span className="skillCategory">{skill.category}: {}</span>
                                    <span className="skillItems">{skill.items}</span>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <button id="saveBtn" onClick={() => window.print()}>Save PDF</button>


        </div>)
}

export default ResumePreview;