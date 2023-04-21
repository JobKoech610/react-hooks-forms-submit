import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedFirstName, setSubmittedFirstName] = useState("");
  const [submittedLastName, setSubmittedLastName] = useState("");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName,
    };
    setSubmittedFirstName(formData.firstName);
    setSubmittedLastName(formData.lastName);
    setFirstName("");
    setLastName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
      {submittedFirstName && submittedLastName && (
        <div>
          <p>Submitted first name: {submittedFirstName}</p>
          <p>Submitted last name: {submittedLastName}</p>
        </div>
      )}
    </form>
  );
}

export default Form;
