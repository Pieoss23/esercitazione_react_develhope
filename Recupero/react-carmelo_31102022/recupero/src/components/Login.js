import { useState } from "react";

export default function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(`${firstName} ${lastName}`);

    setFirstName("");
    setLastName("");
  };

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={firstName}
        placeholder="First Name"
        onChange={(event) => setFirstName(event.target.value)}
      />
      <br />
      <input
        type="text"
        name="lastName"
        value={lastName}
        placeholder="Last Name"
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <br />
      <button type="submit">Submit</button>
      <br />
      <h2>{message}</h2>
    </form>
  );
}
