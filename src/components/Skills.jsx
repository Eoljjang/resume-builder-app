import React from "react";
import Input from "./Input";
import { v4 as uuidv4 } from 'uuid';
import '../styles/forms.css'

export default function Skills({
    skills, 
    setSkills, 
    handleSkillsChange
}){
    const addSkill = () => {
        console.log("Adding new skill")
        setSkills([
            ...skills,
            {
                id: uuidv4(),
                skill: ''
            }
        ])
    }
    const deleteSkill = (id) => {
        setSkills(skills.filter(skill => skill.id !== id))
    }

    return(
        <div className="skills-container">
            <div className="inputs-header">
                <h2>Skills</h2>
                <button className="add-section-btn"onClick={addSkill}>Add</button>
            </div>
            <div className="inputs-container">
                {skills.map((skillObject, index) => (
                    <div key={skillObject.id} className="skill-item">
                        <Input
                            type="text"
                            value={skillObject.skill}
                            handleChange={(e) => {handleSkillsChange(skillObject.id, e.target.value)}}
                        />
                        <button className="delete-section-btn" onClick={(e) => deleteSkill(skillObject.id)}>Delete</button>
                    </div>
                ))}
            </div>
            
        </div>        
    )
}