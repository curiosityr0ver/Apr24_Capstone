/* eslint-disable react/prop-types */

import styles from "./Form.module.css";

const Form = ({
  name,
  setName,
  email,
  setEmail,
  username,
  setUsername,
  phone,
  setPhone,
  error,
  submitHandler,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler();
  };

  console.log(error)
  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error?.name && <p className={styles.error}>{error.name}</p>}
        </div>
        <div className={styles.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error?.email && <p className={styles.error}>{error.email}</p>}
        </div>
        <div className={styles.inputGroup}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {error?.username && <p className={styles.error}>{error.username}</p>}
        </div>
        <div className={styles.inputGroup}>
          <label>Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {error?.phone && <p className={styles.error}>{error.phone}</p>}
        </div>
        <button type="submit" className={styles.submitButton}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Form;
