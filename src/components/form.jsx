import { useState } from "react";
import BackButton from "./common/backButton";

export function Form1() {
  return (
    <>
      <BackButton />
      <h1>form1</h1>
    </>
  );
}

export function Form2() {
  return (
    <>
      <BackButton />
      <h1>form2</h1>
    </>
  );
}

export function Form() {
  const [data, setData] = useState({ firstname: "Ki", lastname: "ri" });

  // function onFirstNameChangleHandler(event) {
  //     setData({ ...data, 'firstname': event.target.value })
  // }

  // function onLastNameChangleHandler(event) {
  //     setData({ ...data, 'lastname': event.target.value })
  // }

  function onChangeHandler(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  function submit() {
    console.log("data", data);
  }

  return (
    <>
      <BackButton />
      <div>
        <label for="firstname">First Name</label>
        <input
          name="firstname"
          id="firstname"
          placeholder="enter your first name"
          value={data.firstname}
          onChange={onChangeHandler}
        />
        <br />

        <label for="lastname">Last Name</label>
        <input
          name="lastname"
          id="lastname"
          placeholder="enter your first name"
          value={data.lastname}
          onChange={onChangeHandler}
        />
        <br />

        <button type="submit" onClick={submit}>
          Submit
        </button>
      </div>
    </>
  );
}
