import { useState } from 'react';

const UseLoginForm = (callback) => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        callback();

        if (values.email === 'test@test.se' && values.password === 'asd') {

            console.log('yess')
            sessionStorage.setItem('email', values.email)
        } else {
            console.log('nej :(')
        }
    };
    
    const handleChange = (event) => {
        event.persist();
        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value
        }));
    }

    return {
        handleChange,
        handleSubmit,
        values
    }
}
export default UseLoginForm;