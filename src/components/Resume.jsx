// This file is the output preview of what the user types in.
import React from "react";
import '../styles/resume.css'


// Has access to the general info.
function Resume({firstName, lastName, phone, email, educationSections, expSections, skills}){
  // Display education content.
  // Display experience content.

  // Render
  return(   
    <div className="resume-container">
      {/** 1) General Info */}
      <div className="resume-header">
        <h2 className="resume-title">{firstName} {lastName}</h2>
        <span>{email}</span>
        <span>{phone}</span>
      </div>

      {/** 2) Education */}
      <div className="resume-education">
        <h2 className="section-header">Education</h2>

        {/* Dynamically add each education section. */}
        {educationSections.map((educationObject) => {
          const item = educationObject.educationItem;
          // * have to return that specific item.
          return (
            <div className="education-item" key={educationObject.id}>
              <p className="sub-header">{item.school} ({item.startDate} - {item.endDate})</p>
              <ul id="field-level-study">
                <li >{item.field} || {item.levelOfStudy}</li>
              </ul>
            
            </div>
          );
        })}
      </div>

      <hr className="divider" />

      {/** 3) Experience */}
      <div className="resume-exp">
        <h2 className="section-header">Experience</h2>

        {/* Dynamically add in each experience item */}
        {expSections.map((expObject, index) => {
          const item = expObject.expItem;
          const duties = item.duties.split(",");
          return (
            <div className="exp-item" key={expObject.id}>
              <p className="sub-header">{item.company} ({item.startDate} - {item.endDate}) || {item.role}</p>              
              <ul className="duties-list">
                {duties.map((duty, dutyID) => (
                  <li key={dutyID}>{duty}</li>
                ))}
              </ul>
            </div>
          )  
        })}
      </div>

      <hr className="divider" />

      {/** 4) Skills */}
      <div className="resume-skills">
        <h2 className="section-header">Skills</h2>
        <ul className="skills-list">
          {skills.map((skillObject, index) => (
            <li>{skillObject.skill}</li>
          ))}
        </ul>
      </div>



      

      <div className="resume-footer"></div>
    </div>

  )



}

export default Resume;