import WorkExperienceInfo from "./WorkExperienceInfo.jsx";

function ResumePreview(props) {

    return (
        <div id="resume-preview">
            <h2>Resume Preview</h2>
            <h2>Hi {props.fullName}!</h2>
            <h2>Email: {props.email}</h2>
            <h2>Phone Number: {props.phoneNumber}</h2>

            <br />
            <h1>Experience</h1>
            {props.experiences.map((experience, index) =>
                <>
                    <h2>Resume Preview</h2>
                    <h2>Position: {experience.positionTitle}</h2>
                    <h2>Emnployer: {experience.employer}</h2>
                    <h2>Location: {experience.location}</h2>
                    <h2>Start Date: {experience.startDate}</h2>
                    <h2>End Date: {experience.endDate}</h2>
                    <h2>Responsbilities and achievements: {experience.description}</h2>
                </>
            )}
        </div>)
}

export default ResumePreview;