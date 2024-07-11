import { useState, useRef } from "react";
import Input from "./Input";
import '../styles/forms.css'


// Child component. Get its value from props.
function GeneralInfo({
  firstName, 
  handleFirstNameChange,
  lastName,
  handleLastNameChange,
  email,
  handleEmailChange,
  phone,
  handlePhoneChange

}){
  return(
    <section className="form-container">
      <form className="form" id="general-info-form">
        <h2 className="form-header">General Information</h2>
        <div className="inputs-container">
          <Input
            value={firstName}
            placeholder={"First Name"}
            handleChange={handleFirstNameChange}
          />
          <Input
            value={lastName}
            placeholder={"Last Name"}
            handleChange={handleLastNameChange}
          />
          <Input
            value={email}
            placeholder={"Email"}
            handleChange={handleEmailChange}
          />
          <Input
            value={phone}
            placeholder={"Phone"}
            handleChange={handlePhoneChange}
          />
        </div>
      </form>
    </section>
  )
}

export default GeneralInfo