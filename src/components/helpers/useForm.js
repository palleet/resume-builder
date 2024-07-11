import { useState } from 'react';

export function useForm(initialState) {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return [formData, handleChange, setFormData];
}

