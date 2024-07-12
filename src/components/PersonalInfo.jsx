import { useForm } from './helpers/useForm.js';
import { useSubmit } from './helpers/useSubmit.js';

function PersonalInfo({ personalInfo, handleInfoChange }) {
    const initialFormData = {
        fullName: personalInfo.fullName || "",
        email: personalInfo.email || "",
        phoneNumber: personalInfo.phoneNumber || "",
        links: personalInfo.links || ""
    }

    const [formData, handleChange, setFormData] = useForm(initialFormData);
    const handleSubmit = useSubmit(handleInfoChange, formData);

    const addLink = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            links: [...prevFormData.links, ""]
        }));
    };

    const handleLinkChange = (index, value) => {
        const newLinks = [...formData.links];
        newLinks[index] = value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            links: newLinks
        }));
    };

    const removeLink = (index) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            links: prevFormData.links.filter((_, i) => i !== index)
        }));
    };

    // implement form helpers
    return (
        <div id="personalInfo">
            <h2>Personal Info</h2>
            <form onSubmit={handleSubmit}>
                <div className="inputRow">
                    <label htmlFor="name">Full name</label>
                    <input
                        placeholder="Full name"
                        id="name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputRow">
                    <label htmlFor="email">Email</label>
                    <input
                        placeholder="Email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputRow">
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input
                        placeholder="Phone Number"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputRow">
                    <label>Links</label>
                    <div className="linkCol">
                        {formData.links.map((link, index) => (
                            <div className="linkRow" key={index}>
                                <input
                                    type="text"
                                    placeholder={`Link ${index + 1}`}
                                    value={link}
                                    onChange={(e) => handleLinkChange(index, e.target.value)}
                                />
                                <button type="button" onClick={() => removeLink(index)}>Remove</button>
                            </div>
                        ))}
                        <button className="addLink" type="button" onClick={addLink}>Add Link</button>
                    </div>

                </div>

                <button className="saveBtn" type="submit">Save</button>
            </form>

        </div>
    )
}

export default PersonalInfo;