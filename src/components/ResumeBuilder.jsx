import { v4 as uuidv4 } from 'uuid';

import PersonalInfo from "./PersonalInfo.jsx";
import WorkExperienceManager from "./WorkExperienceManager.jsx";
import ResumePreview from "./ResumePreview.jsx";

import "../styles/builderStyle.css";
import "../styles/paperStyle.css"

import { useState } from "react";
import {EducationManager} from "./EducationManager.jsx";
import ProjectManager from "./ProjectManager.jsx";
import TechnicalSkillsManager from "./TechnicalSkillsManager.jsx";

function ResumeBuilder() {
    // personal info state declarations
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [personalInfo, setPersonalInfo] = useState({
        fullName: 'Jane Doe',
        email: 'janedoe@jmail.com',
        phoneNumber: '5555555555',
        links: []
    });

    // education info state declarations
    const [schools, setSchools] = useState([
        {
            id: uuidv4(),
            schoolName: 'University of California, Irvine',
            location: 'Irvine',
            startDate: '2015-10',
            endDate: '2019-06',
            degree: 'Bachelor of Arts in Computer Science'
        }
    ]);

    // work experience info state declarations
    const [experiences, setExperiences] = useState([
        {
            id: uuidv4(),
            positionTitle: 'Undergraduate Research Assistant',
            employer: 'University of California, Irvine',
            location: 'Irvine',
            startDate: '2015-11',
            endDate: '2016-03',
            present: false,
            description: 'Conducted research on machine learning algorithms for natural language processing.\n' +
                'Implemented various models using TensorFlow, achieving a 15% improvement in accuracy.\n' +
                'Co-authored a paper presented at the AAAI Conference on Artificial Intelligence.'
        }
    ]);

    // project info state declarations
    const [projects, setProjects] = useState([
        {
            id: uuidv4(),
            projectName: 'E-commerce Website',
            skills: 'React, Node.js, MongoDB',
            startDate: '2016-03',
            endDate: '2017-01',
            present: false,
            description: 'Built a full-stack e-commerce website using React, Node.js, and MongoDB.\n' +
                'Implemented user authentication, product management, and payment processing.'
        }
    ]);

    // technical skills state declarations
    const [skills, setSkills] = useState([
        {
            id: uuidv4(),
            category: 'Languages',
            items: 'C++, Java, Python, Javascript, React'
        }
    ]);

    // function handlePersonalInfoChange(e) {
    //     e.preventDefault();
    //
    //     let nameInput = document.getElementById('name');
    //     let emailInput = document.getElementById('email');
    //     let phoneInput = document.getElementById('phoneNumber');
    //
    //     let nameValue = nameInput.value;
    //     let emailValue = emailInput.value;
    //     let phoneValue = phoneInput.value;
    //
    //     setFullName(nameValue);
    //     setEmail(emailValue);
    //     setPhoneNumber(phoneValue);
    // }
    function handlePersonalInfoChange(e, formData) {
        e.preventDefault();

        setPersonalInfo(prevInfo =>({
            ...prevInfo,
            ...formData
        }));
    }

    function handleWorkExperienceChange(e, formData) {
        e.preventDefault();

        setExperiences(prevExperiences =>
            prevExperiences.map(exp =>
                exp.id === formData.id ? formData : exp
            )
        );
    }
    function handleProjectChange(e, formData) {
        e.preventDefault();

        setProjects(prevProjects=>
            prevProjects.map(project =>
                project.id === formData.id ? formData : project
            )
        );
    }

    function handleSchoolChange(e, formData) {
        e.preventDefault();

        setSchools(prevSchools=>
            prevSchools.map(school =>
                school.id === formData.id ? formData : school
            )
        );
    }

    function handleSkillChange(e, formData) {
        e.preventDefault();

        setSkills(prevSkills=>
            prevSkills.map(skill =>
                skill.id === formData.id ? formData : skill
            )
        )
    }

    return (
        <>
            <h1>Resume Pal</h1>
            <div id="container">
                <div id="Information">
                    <PersonalInfo
                        personalInfo={personalInfo}
                        handleInfoChange={handlePersonalInfoChange}
                    />

                    <EducationManager
                        schools={schools}
                        handleInfoChange={handleSchoolChange}
                        setSchools={setSchools}
                    />

                    <WorkExperienceManager
                        experiences={experiences}
                        handleInfoChange={handleWorkExperienceChange}
                        setExperiences={setExperiences}
                    />

                    <ProjectManager
                        projects={projects}
                        handleInfoChange={handleProjectChange}
                        setProjects={setProjects}
                    />
                    <TechnicalSkillsManager
                        skills={skills}
                        handleInfoChange={handleSkillChange}
                        setSkills={setSkills}
                    />
                </div>
                <ResumePreview
                    fullName={fullName}
                    email={email}
                    phoneNumber={phoneNumber}
                    personalInfo={personalInfo}
                    experiences={experiences}
                    schools={schools}
                    projects={projects}
                    skills={skills}
                />
            </div>
            <footer>
                <a href="https://www.flaticon.com/free-icons/human-resources" title="human resources icons">Favicon from Flaticon</a>
            </footer>
        </>

    )
}

export default ResumeBuilder;