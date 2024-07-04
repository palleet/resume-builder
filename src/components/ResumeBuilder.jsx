import { v4 as uuidv4 } from 'uuid';

import PersonalInfo from "./PersonalInfo.jsx";
import WorkExperienceManager from "./WorkExperienceManager.jsx";
import ResumePreview from "./ResumePreview.jsx";

import "../styles/builderStyle.css";

import { useState } from "react";

function ResumeBuilder() {
    // personal info state declarations
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    // work experience info state declarations
    const [experiences, setExperiences] = useState([
        {
            id: uuidv4(),
            positionTitle: 'example position',
            employer: 'ex employer',
            location: 'Irvine',
            startDate: '1999-02',
            endDate: '2000-10',
            description: ['']
        }
    ]); // store experience objects

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

    function handleWorkExperienceChange(e, formData) {
        e.preventDefault();

        setExperiences(prevExperiences =>
            prevExperiences.map(exp =>
                exp.id === formData.id ? formData : exp
            )
        );
    }

    return (
        <>
            <h1>Resume Outliner</h1>
            <div id="container">
                <div id="Information">
                    <PersonalInfo
                        fullName={fullName}
                        email={email}
                        phoneNumber={phoneNumber}
                        handleInfoChange={handlePersonalInfoChange}
                    />

                    <WorkExperienceManager
                        experiences={experiences}
                        handleInfoChange={handleWorkExperienceChange}
                        setExperiences={setExperiences}
                    />
                </div>
                <ResumePreview
                    fullName={fullName}
                    email={email}
                    phoneNumber={phoneNumber}
                    experiences={experiences}
                />
            </div>
        </>

    )
}

export default ResumeBuilder;