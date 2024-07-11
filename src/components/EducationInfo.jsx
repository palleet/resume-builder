import "../styles/infoStyle.css";
import React, { useState } from "react";
import { useForm } from './helpers/useForm.js';
import { useSubmit } from './helpers/useSubmit.js';

function EducationInfo({handleInfoChange, school}) {
    const initialFormData = {
        id: school.id,
        schoolName: school.schoolName|| "",
        location: school.location || "",
        startDate: school.startDate || "",
        endDate: school.endDate || "",
        present: false,
        degree: school.degree|| ""
    };

    const [formData, handleChange, setFormData] = useForm(initialFormData);
    const handleSubmit = useSubmit(handleInfoChange, formData);

    return (
        <div className="schoolInfo">
            <form onSubmit={handleSubmit}>
                <div className="inputRow">
                    <label htmlFor="School Name">School Name</label>
                    <input
                        name="schoolName"
                        placeholder="School Name"
                        className="formSchoolName"
                        value={formData.schoolName}
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
                        className="end"
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
                    <label htmlFor="Degree">Degree</label>
                    <input
                        name="degree"
                        placeholder="Degree"
                        className="formDegree"
                        value={formData.degree}
                        onChange={handleChange}
                    />
                </div>
                <button className="saveBtn" type="submit">Save</button>
            </form>
        </div>

    );
}

export default EducationInfo;