import WorkExperienceInfo from "./WorkExperienceInfo.jsx";
import formatDate from "./helpers/formHelpers.js";

function ResumePreview(props) {
    return (
        <div id="resume-preview">
            <div id="paper">
                <div id="paperContainer">
                    <div id="personalInfoHeader">
                        <h1>{props.personalInfo.fullName}</h1>
                        <div id="contactInfo">{props.personalInfo.phoneNumber} | {props.personalInfo.email}
                            {props.personalInfo.links.map((link, index) => (
                                <>
                                    {link != '' ? <>&nbsp;| {link}</> : null}
                                </>
                            ))}
                        </div>
                    </div>
                    <br/>
                    <h2>Education</h2>
                    <hr/>
                    {props.schools.map((school) => {
                        return (
                            <>

                                <div className="secHeader">
                                    <div className="schoolName">{school.schoolName}</div>
                                    <div className="location">{school.location}</div>
                                </div>
                                <div className="origin">
                                    <div className="degree">{school.degree}</div>
                                    <div className="dates">{formatDate(school.startDate)} -
                                        {school.present ? " Present" : <>{formatDate(school.endDate)}</>}
                                    </div>
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

                                <div className="secHeader">
                                    <div className="positionTitle">{experience.positionTitle}</div>
                                    <div className="dates">{formatDate(experience.startDate)} -
                                        {experience.present ? " Present" : <>{formatDate(experience.endDate)}</>}
                                    </div>
                                </div>
                                <div className="origin">
                                    <div className="employer">{experience.employer}</div>
                                    <div className="locaition">{experience.location}</div>
                                </div>
                                <div className="description">
                                    <ul>
                                        {descriptionArray.map((line, index) => (
                                            <>
                                                { line != '' ? <li key={index}>{line}</li> : null}
                                            </>
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

                                <div className="secHeader">
                                    <div className="projectNameAndSkills">
                                        <span className="projectName">{project.projectName} </span>
                                        { project.skills != '' ? <>| {project.skills}</> : null }

                                    </div>
                                    <div className="dates">{formatDate(project.startDate)} -
                                        {project.present ? " Present" : <>{formatDate(project.endDate)}</>}

                                    </div>
                                </div>
                                <div className="description">
                                    <ul>
                                        {descriptionArray.map((line, index) => (
                                            <>
                                                { line != '' ? <li key={index}>{line}</li> : null}
                                            </>
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
            <button id="savePdfBtn" onClick={() => window.print()}>Save PDF</button>


        </div>)
}

export default ResumePreview;