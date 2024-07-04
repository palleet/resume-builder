import "../styles/infoStyle.css";
import React, { useState } from "react";

function WorkExperienceInfo({ handleInfoChange, experience }) {
    const [formData, setFormData] = useState({
        id: experience.id,
        positionTitle: experience.positionTitle || "",
        employer: experience.employer || "",
        location: experience.location || "",
        startDate: experience.startDate || "",
        endDate: experience.endDate || "",
        description: experience.description || ""
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
        <div className="workExperienceInfo">
            <h2>Experience</h2>
            <form onSubmit={handleSubmit}>
                <div className="inputRow">
                    <label htmlFor="positionTitle">Position title</label>
                    <input
                        name="positionTitle"
                        placeholder="Position title"
                        className="positionTitle"
                        value={formData.positionTitle}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputRow">
                    <label htmlFor="employer">Employer</label>
                    <input
                        name="employer"
                        placeholder="Employer"
                        className="employer"
                        value={formData.employer}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputRow">
                    <label htmlFor="location">Location</label>
                    <input
                        name="location"
                        placeholder="Location"
                        className="location"
                        value={formData.location}
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

export default WorkExperienceInfo;
