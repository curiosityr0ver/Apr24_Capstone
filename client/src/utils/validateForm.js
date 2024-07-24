const validateForm = (name, email, username, phone) => {

    let valid = true;
    let invalid = {
        name: false,
        email: false,
        username: false,
        phone: false,
    };
    if (!name || !email || !username || !phone) {
        valid = false;
        invalid = {
            name: !name,
            email: !email,
            username: !username,
            phone: !phone,
        };
    }
    const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneRegEx = /^\d{10}$/;
    if (!emailRegEx.test(email) || !phoneRegEx.test(phone)) {
        invalid = {
            ...invalid,
            email: !emailRegEx.test(email),
            phone: !phoneRegEx.test(phone),
        };
        valid = false;
    }
    console.log(valid);
    console.log(invalid);
    return {
        valid,
        invalid,
    };
};

export default validateForm;