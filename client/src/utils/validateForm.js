const validateForm = (name, email, username, phone) => {
    console.log(name, email, username, phone);
    if (!name || !email || !username || !phone) {
        console.log("All fields are required");
        return false;
    }
    const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneRegEx = /^\d{10}$/;
    if (!emailRegEx.test(email) || !phoneRegEx.test(phone)) {
        console.log("Invalid email or phone number");
        return false;
    }
};

export default validateForm;