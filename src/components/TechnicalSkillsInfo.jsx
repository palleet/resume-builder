import React, { useState } from "react";

export default function TechnicalSkillsInfo({handleInfoChange, skill}) {
    const [formData, setFormData] = useState({
        id: skill.id,
        category: skill.category|| "",
        items: skill.items || ""
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
        <div className="technicalSkillsInfo">
            <form onSubmit={handleSubmit}>
                <div className="inputRow">
                    <label htmlFor="category">Category</label>
                    <input
                        name="category"
                        placeholder="Category Name"
                        className="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputRow">
                    <label htmlFor="items">Skills</label>
                    <input
                        name="items"
                        placeholder="Skills"
                        className="items"
                        value={formData.items}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>

    )
}