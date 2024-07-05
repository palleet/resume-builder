import "../styles/infoStyle.css";
import React, { useState } from "react";

function EducationInfo({handleInfoChange, school}) {
    const [formData, setFormData] = useState({
        id: school.id,
        school: school.schoolName|| "",
        location: school.location || "",
        startDate: school.startDate || "",
        endDate: school.endDate || "",
        degree: school.degree|| ""
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
        <div className="schoolInfo">
            <h2>School</h2>
            <form onSubmit={handleSubmit}>
                <div className="inputRow">
                    <label htmlFor="School Name">School Name</label>
                    <input
                        name="schoolName"
                        placeholder="School Name"
                        className="schoolName"
                        value={formData.schoolName}
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
                <div className="inputRow">
                    <label htmlFor="Degree">Degree</label>
                    <input
                        name="degree"
                        placeholder="Degree"
                        className="degree"
                        value={formData.degree}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>

    );
}

export default EducationInfo;