import React, { useState } from "react";
import { useForm } from './helpers/useForm.js';
import { useSubmit } from './helpers/useSubmit.js';

export default function TechnicalSkillsInfo({handleInfoChange, skill}) {
    const initialFormData = {
        id: skill.id,
        category: skill.category|| "",
        items: skill.items || ""
    };

    const [formData, handleChange, setFormData] = useForm(initialFormData);
    const handleSubmit = useSubmit(handleInfoChange, formData);

    return (
        <div className="technicalSkillsInfo">
            <form onSubmit={handleSubmit}>
                <div className="inputRow">
                    <label htmlFor="category">Category</label>
                    <input
                        name="category"
                        placeholder="Category Name"
                        className="formCategory"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputRow">
                    <label htmlFor="items">Skills</label>
                    <input
                        name="items"
                        placeholder="Skills"
                        className="formItems"
                        value={formData.items}
                        onChange={handleChange}
                    />
                </div>
                <button className="saveBtn" type="submit">Save</button>
            </form>
        </div>

    )
}