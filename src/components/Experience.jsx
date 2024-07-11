import { useState, useRef } from "react";
import Input from "./Input";
import { v4 as uuidv4 } from 'uuid';
import '../styles/forms.css'

const expFields = ["Company", "Start Date", "End Date", "Role", "Duties (Separate by comma)"]

export default function Experience({
    expSections,
    setExpSections,
    handleExpChange
}){
    const addExp = () => {
        console.log("adding new experience section");
        setExpSections([
            ...expSections,
            {
                id: uuidv4(),
                expItem: {
                    company: '',
                    startDate: '',
                    endDate: '',
                    role: '',
                    duties: ''
                }
            }
        ])
    }

    const deleteExp = (id) => {
        setExpSections(expSections.filter(section => section.id !== id))
    }
    return (
        <div>
          <div className="section-header">
            <h2>Experience</h2>
            <button className="add-section-btn" onClick={addExp}>Add</button>
          </div>
          
          <div className="section-container">
            {/* 1) For each object in "sections" -> Render each. */}
            {expSections.map((section, index) => (
              <div key={section.id}>
                <div className="inputs-header">
                    <h3>Section {index + 1}</h3>
                    {/* Anytime you pass in an onClick / on Change -> Pass the EVENT in. Not the function call itself. */}
                    <button className="delete-section-btn" onClick={(e) => deleteExp(section.id)}>Delete</button>
                </div>
            
                {/* 2) Then for each section, render each input field for it. */}
                <div className="inputs-container">
                  {Object.keys(section.expItem).map((field, idx) => (
                    <div key={idx}>
                      <Input className="input-element"
                        value={section.expItem[field]}
                        handleChange={(e) => handleExpChange(section.id, field, e.target.value)}
                        placeholder={expFields[idx]}
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