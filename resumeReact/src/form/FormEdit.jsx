const FormEdit = ({ label, type, placeholder, value, onChange }) => {
    return (
      <div className="label-container">
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };

  export default FormEdit;
