import '../styles/forms.css'
// Generic "input" component I can reuse over and over.
function Input({ label, value, handleChange, placeholder, height = "15px" }) {
    return (
      <div className="input-element">
        <label>{label}</label>
        <input placeholder={placeholder}value={value} onChange={handleChange} 
        style={{
          height: height 

        }} />
      </div>
    );
  }
  
  export default Input;