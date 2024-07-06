import WorkExperienceInfo from "./WorkExperienceInfo.jsx";

function ResumePreview(props) {
    // function printDiv(divName) {
    //     var printContents = document.getElementById(divName).innerHTML;
    //     w=window.open();
    //     w.document.write(printContents);
    //     w.print();
    //     w.close();
    // }

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
                                    <div id="dates">{school.startDate} - {school.endDate}</div>
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
            <button id="saveBtn" onClick={() => window.print()}>Save PDF</button>


        </div>)
}

export default ResumePreview;