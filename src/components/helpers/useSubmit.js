export  function useSubmit(handleInfoChange, formData) {
    const handleSubmit = (e) => {
        e.preventDefault();
        handleInfoChange(e, formData);
    };

    return handleSubmit;
}