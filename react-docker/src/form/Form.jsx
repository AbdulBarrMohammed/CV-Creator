const Form = ({ label, type, placeholder, value, onChange }) => {
    return (
      <div className="label-container">
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          required
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };

  export default Form;
