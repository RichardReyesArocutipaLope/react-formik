import { useState } from 'react';

export const useForm = <T>(initState: T) => {

    const [formData, serFormData] = useState(initState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        serFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const resetForm = () => {
        serFormData(initState)
    }

    const isValidEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        // prop
        formData,
        ...formData,


        //methods
        onChange,
        resetForm,
        isValidEmail
    }
}
