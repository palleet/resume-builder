import PersonalInfo from "./PersonalInfo.jsx";
import WorkExperienceManager from "./WorkExperienceManager.jsx";
import ResumePreview from "./ResumePreview.jsx";
import { useState } from "react";

function ResumeBuilder() {
    // personal info state declarations
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    // work experience info state declarations
    const [experiences, setExperiences] = useState([]); // store experience objects

    function handlePersonalInfoChange(e) {
        e.preventDefault();

        let nameInput = document.getElementById('name');
        let emailInput = document.getElementById('email');
        let phoneInput = document.getElementById('phoneNumber');

        let nameValue = nameInput.value;
        let emailValue = emailInput.value;
        let phoneValue = phoneInput.value;

        setFullName(nameValue);
        setEmail(emailValue);
        setPhoneNumber(phoneValue);
    }

    function handleWorkExperienceChange(e) {

    }

    return (
        <>
            <h1>Resume Outliner</h1>
            <div id="Information">
                <PersonalInfo
                    fullName={fullName}
                    email={email}
                    phoneNumber={phoneNumber}
                    handleInfoChange={handlePersonalInfoChange}
                />

                <WorkExperienceManager />
            </div>
            <ResumePreview
                fullName={fullName}
                email={email}
                phoneNumber={phoneNumber}
            />
        </>

    )
}

export default ResumeBuilder;