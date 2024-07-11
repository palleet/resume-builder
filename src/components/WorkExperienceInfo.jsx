import "../styles/infoStyle.css";
import React, { useState } from "react";
import { useForm } from './helpers/useForm.js';
import { useSubmit } from './helpers/useSubmit.js';

function WorkExperienceInfo({ handleInfoChange, experience }) {
    const initialFormData = {
        id: experience.id,
        positionTitle: experience.positionTitle || "",
        employer: experience.employer || "",
        location: experience.location || "",
        startDate: experience.startDate || "",
        endDate: experience.endDate || "",
        present: experience.present || false,
        description: experience.description || ""
    };

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };

    // const handleChange = (e) => {
    //     const { name, value, type, checked } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: type === "checkbox" ? checked : value
    //     });
    // };
    //
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     handleInfoChange(e, formData);
    // };

    const [formData, handleChange, setFormData] = useForm(initialFormData);
    const handleSubmit = useSubmit(handleInfoChange, formData);

    return (
        <div className="workExperienceInfo">
            <form onSubmit={handleSubmit}>
                <div className="inputRow">
                    <label htmlFor="positionTitle">Position title</label>
                    <input
                        name="positionTitle"
                        placeholder="Position title"
                        className="formPositionTitle"
                        value={formData.positionTitle}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputRow">
                    <label htmlFor="employer">Employer</label>
                    <input
                        name="employer"
                        placeholder="Employer"
                        className="formEmployer"
                        value={formData.employer}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputRow">
                    <label htmlFor="location">Location</label>
                    <input
                        name="location"
                        placeholder="Location"
                        className="formLocation"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputRow">
                    <label htmlFor="startDate">Start date</label>
                    <input
                        type="month"
                        className="formStart"
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
                        className="formEnd"
                        name="endDate"
                        min="1900-01"
                        value={formData.endDate}
                        onChange={handleChange}
                    />
                    <div className="presentBox">
                        <input
                            type="checkbox"
                            name="present"
                            className="formPresent"
                            value={"Present"}
                            onChange={handleChange}
                        />
                        <label htmlFor="present">Present</label>
                    </div>
                </div>
                <div className="inputRow">
                    <label htmlFor="description">Responsibilities and Achievements</label>
                    <textarea
                        name="description"
                        className="text-area"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <button className="saveBtn" type="submit">Save</button>
            </form>
        </div>
    );
}

export default WorkExperienceInfo;
