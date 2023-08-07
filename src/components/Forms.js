import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

function Forms() {
  const [formdata, setFormdata] = useState({
    username: "",
    age: "",
    email: "",
    comment: "",
    isfriendly: false,
    employment: ""
  });
  function handleChange(event) {
    const {name, checked, value} = event.target
    setFormdata(function (oldval) {
      return {
        ...oldval,
        [name]:
          type === "checkbox" ? checked : value
      };
    });
  }
  function handleSubmit(e) {
    return alert(formdata);
  }
  console.log(formdata.employment)
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={formdata.username}
            name="username"
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label for="age">Age</label>
        <input
          type="text"
          value={formdata.age}
          name="age"
          onChange={handleChange}
        />
        <br></br>
        <label for="email">Email</label>
        <input
          type="email"
          value={formdata.email || ""}
          name="email"
          onChange={handleChange}
        />
        <br></br>
        <textarea
          value={formdata.comment}
          onChange={handleChange}
          name="comment"
        />
        <input
          type="checkbox"
          id="friendly"
          value={formdata.isfriendly}
          name="isfriendly"
          onChange={handleChange}
          checked={formdata.isfriendly}
        />
        <label htmlFor="friendly">Are you friendly?</label>
        <br></br>
        <fieldset>
            <legend>Employment Status</legend>
            <input id="employed" type="radio" name="employment" value="employed" onChange={handleChange} />
    <label htmlFor="employed">Employed</label>
            <input type="radio" id="student" name="employment" value="student" onChange={handleChange} />
            <label htmlFor="student">Student</label>
            <input type="radio" id="street" name="employment" value="street" onChange={handleChange} />
            <label htmlFor="street">Street</label>
        </fieldset>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <h2>{formdata.username}</h2>
      <h2>{formdata.age}</h2>
      <h2>{formdata.email}</h2>
      <h2>{formdata.comment}</h2>
      <h2>{formdata.isfriendly}</h2>
    </div>
  );
}
export default Forms;
