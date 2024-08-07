const validateForm = (name, email, username, phone) => {
  let valid = true;
  const errors = {};

  if (!name) {
    valid = false;
    errors.name = "Name is required";
  }
  if (!email) {
    valid = false;
    errors.email = "Email is required";
  }
  if (!username) {
    valid = false;
    errors.username = "Username is required";
  }
  if (!phone) {
    valid = false;
    errors.phone = "Phone number is required";
  }

  const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email && !emailRegEx.test(email)) {
    valid = false;
    errors.email = "Email address is invalid";
  }

  const phoneRegEx = /^\d{10}$/;
  if (phone && !phoneRegEx.test(phone)) {
    valid = false;
    errors.phone = "Phone number must be 10 digits";
  }

  console.log(valid);
  console.log(errors);

  return {
    valid,
    invalid: errors,
  };
};

export default validateForm;
