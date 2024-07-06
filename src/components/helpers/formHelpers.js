export function handleFormChange(e, formData, setFormData) {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
}
export function handleFormSubmit(e, formData, handleInfoChange) {
    e.preventDefault();
    handleInfoChange(e, formData);
}
