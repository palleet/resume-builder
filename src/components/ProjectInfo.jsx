import "../styles/infoStyle.css";
import React, { useState } from "react";

function ProjectInfo({ handleInfoChange, project}) {
    const [formData, setFormData] = useState({
        id: project.id,
        projectName: project.projectName || "",
        skills: project.skills|| "",
        startDate: project.startDate || "",
        endDate: project.endDate || "",
        description: project.description || ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleInfoChange(e, formData);
    };

    return (
        <div className="projectInfo">
            <h2>Project</h2>
            <form onSubmit={handleSubmit}>
                <div className="inputRow">
                    <label htmlFor="projectName">Project Name</label>
                    <input
                        name="projectName"
                        placeholder="Project Name"
                        className="Project Name"
                        value={formData.projectName}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputRow">
                    <label htmlFor="skills">Skills</label>
                    <input
                        name="skills"
                        placeholder="Skills"
                        className="skills"
                        value={formData.skills}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputRow">
                    <label htmlFor="startDate">Start date</label>
                    <input
                        type="month"
                        className="start"
                        name="startDate"
                        min="1900-01"
                        value={formData.startDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputRow">
                    <label htmlFor="endDate">End date</label>
                    <input
                        type="month"
                        className="end"
                        name="endDate"
                        min="1900-01"
                        value={formData.endDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputCol">
                    <label htmlFor="description">Responsibilities and Achievements</label>
                    <textarea
                        name="description"
                        className="text-area"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default ProjectInfo;
