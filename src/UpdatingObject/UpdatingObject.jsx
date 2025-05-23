import { useState } from "react";

export default function UpdatingObject() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person, // Copy the old fields
      firstName: e.target.value, // But override this one
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person, // Copy the old fields
      lastName: e.target.value, // But override this one
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person, // Copy the old fields
      email: e.target.value, // But override this one
    });
  }

//   console.log(person);

  return (
    <>
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <br />
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
