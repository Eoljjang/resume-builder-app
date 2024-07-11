import { useState, useRef } from "react";
import Input from "./Input";
import { v4 as uuidv4 } from 'uuid';
import '../styles/forms.css'

const educationFields = ["School", "Start Date", "End Date", "Field of Study", "Level of Study"];

export default function Education({
    sections,
    setSections,
    handleEducationChange
}){
    const addSection = () => {
        console.log('adding new section');
        // Call 'setSections' (state updater) to update the 'sections' state.
        // - Call it with a list as its argument.
        setSections([
            ...sections, // Spread operator. Copies all old values of 'sections' and adds it to the new list.
            {   // Then we append in a new object.
                id: uuidv4(), 
                educationItem: {
                    school: '',
                    startDate: '',
                    endDate: '',
                    field: '',
                    levelOfStudy: ''
                }
            }
        ])
    }

    const deleteSection = (id) => {
        // Recreate the sections WITHOUT the passed in ID.
        setSections(sections.filter(section => section.id !== id));
    }

    return (
      <div>
        <div className="section-header">
          <h2>Education</h2>
          <button className="add-section-btn" onClick={addSection}>Add</button>
        </div>
        <div className="section-container">
          {/* 1) For each object in "sections" -> Render each. */}
          {sections.map((section, index) => (
            <div key={section.id}>
              <div className="inputs-header">
                  <h3>Section {index + 1}</h3>
                  {/* Anytime you pass in an onClick / on Change -> Pass the EVENT in. Not the function call itself. */}
                  <button className="delete-section-btn" onClick={(e) => deleteSection(section.id)}>Delete</button>
              </div>
          
              {/* 2) Then for each section, render each input field for it. */}
              <div className="inputs-container">
                {Object.keys(section.educationItem).map((field, idx) => (
                  <div key={idx}>
                    <Input
                      value={section.educationItem[field]}
                      handleChange={(e) => handleEducationChange(section.id, field, e.target.value)}
                      placeholder={educationFields[idx]}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}