// Treat this as the parent component to all the things on the screen.
import { useState } from "react"
import GeneralInfo from "./components/GeneralInfo";
import Resume from "./components/Resume";
import Education from "./components/Education";
import Skills from "./components/Skills";

import './styles/main.css'
import Experience from "./components/Experience";

function App(){
    // General Info States:
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    // Education State: (starts as an empty list. which holds "section" objects.)
    const [sections, setSections] = useState([]); 

    // Experience State:
    const [expSections, setExpSections] = useState([]);

    // Skills State:
    const [skills, setSkills] = useState([]);

    // General Info: Handle field changes.
    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    function handlePhoneChange(e) {
        setPhone(e.target.value);
    }
    
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    // Education: Handle field changes.
    function handleEducationChange(id, field, value){
        // It's a list of values. So you have to 'map' and find the right ID to update.
        setSections(sections.map(section => 
            // 1) Find ID.
            section.id === id 
            // 2) Update the coresponding field.
            ? {...section, educationItem: {...section.educationItem, [field]: value}} 
            // 3) Else, (no change) reuse the old state.
            : section))
    }

    // Experience: Handle field changes:
    function handleExpChange(id, field, value){
        setExpSections(expSections.map(section =>
            section.id === id
            ? {...section, expItem: {...section.expItem, [field]: value}} 
            : section
        ))
    }

    // Skills: Handle field changes:
    function handleSkillsChange(id, value){
        // Since you're not dealing with a nested object (as the previous 2 we did)
        // you can just check the current object you're dealing with.
        setSkills(skills.map(skill =>
            skill.id === id 
            ? { ...skill, skill: value } 
            : skill
        ));
    }

    return (
        <>
            <div className = "title-container">
                <h1 className="main-title">Resume Builder</h1>
                <p className="secondary-title">Built with React! <a href="" target="blank">Source Code (GitHub)</a></p>
            </div>
            
            <div className="content">
                <div className='left-side'>
                    {/* For each component = List all its 'props' AND set them = to their current state. */}
                    <GeneralInfo
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        phone={phone}
                        handleFirstNameChange={handleFirstNameChange} // If you forget this, you can't type in input.
                        handleLastNameChange={handleLastNameChange}
                        handlePhoneChange={handlePhoneChange}
                        handleEmailChange={handleEmailChange}
                    />

                    <Education
                        sections = {sections}
                        setSections={setSections}
                        handleEducationChange={handleEducationChange}
                    />

                    <Experience 
                        expSections={expSections}
                        setExpSections={setExpSections}
                        handleExpChange={handleExpChange}
                    />

                    <Skills 
                        skills={skills}
                        setSkills={setSkills}
                        handleSkillsChange={handleSkillsChange}
                    />

                </div>
                <div className="right-side">
                    <Resume
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        phone={phone}
                        educationSections={sections}
                        expSections={expSections}
                        skills={skills}
                    />
                </div>
            </div>
        </>
    )
}

export default App