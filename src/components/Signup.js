import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

function Signup() {
  const [formData, setForm] = useState({
    email: "",
    password: "",
    Cpassword: "",
    newsletter: false
  });
  const [passwordcheck, setPasswordcheck] = useState("")


  function handlechange(event) {
    const {name, type, checked, value} = event.target;
    setForm((oldval)=>{
        return {...oldval, [name]: type === "checkbox" ? checked: value}
    })
    console.log(formData.newsletter);
  
  }
 function handlesubmit(event){
    let formcheck = "";
    event.preventDefault()
    if(formData.password === formData.Cpassword && formData.newsletter === true){
        console.log("correct and thanks for joining our newsletter")
        setPasswordcheck(()=>{
            return "correct and thanks for joining our newsletter";
        })
    }else if(formData.password === formData.Cpassword && formData.newsletter === false){
        console.log("Passwords matched but no newletter")
        setPasswordcheck(()=>{
            return "Passwords matched but no newletter";
        })
    }else{
        console.log("passwords do not match")
        setPasswordcheck(()=>{
            return "passwords do not match";
        })
    }
 }
  
  return (
    <section>
      <div className="container">
        <h1 className="heading">Signup</h1>
        <h2 className="heading">{passwordcheck}</h2>
        <form onSubmit={handlesubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            onChange={handlechange}
            name="email"
            value={formData.email}
          />
          <br></br>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handlechange} name="password" value={formData.password}
          />{" "}
          <br></br>
          <label htmlFor="re-password">Confirm Password</label>
          <input
            type="password"
            id="re-password"
            placeholder="Confirm Password"
            onChange={handlechange} name="Cpassword" value={formData.Cpassword}
          />{" "}
          <br></br>
          <label className="checkbox-label">
          <input
            type="checkbox"
            className="checkbox-input"
            onChange={handlechange} name="newsletter" checked={formData.newsletter}
          /> I want to join your newsletter
          </label>
          <br></br>
          <button>Sign up</button>
        </form>
      </div>
    </section>
  );
}
export default Signup;