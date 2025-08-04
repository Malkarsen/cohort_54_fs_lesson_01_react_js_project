import "./styles.css";

function Input({ name, type, placeholder, label }) {
  return (
    <div className="form_input_container">
      <label className="form_label" for={`input_${name}`}>
        {label}
      </label>
      <input
        className="form_input"
        id={`form_input_${name}`}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
