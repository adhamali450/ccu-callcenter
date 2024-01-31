import styles from "./Input.module.sass";
import PropTypes from "prop-types";

const Input = ({
  type = "input",
  label,
  name,
  placeholder,
  tooltip = "",
  required = false,
  formikData,
}) => {
  const { values, errors, touched, handleBlur, handleChange } = formikData;

  const inputProps = {
    className: errors[name] && touched[name] ? styles["invalid-input"] : "",
    id: `input-${name}`,
    type: type === "textarea" ? "textarea" : "text",
    name: name,
    title: tooltip,

    placeholder,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
  };

  return (
    <div className={styles["input-container"]}>
      <label htmlFor={name}>
        <small className={`${required && styles["required"]}`}>{label}</small>
      </label>

      {type === "textarea" ? (
        <textarea
          className={styles["textbox"]}
          rows={5}
          style={{ resize: "none" }}
          {...inputProps}
        />
      ) : (
        <input className={styles["textbox"]} {...inputProps} />
      )}

      {errors[name] && touched[name] && <small>{errors[name]}</small>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  tooltip: PropTypes.string,
  required: PropTypes.bool,
  formikData: PropTypes.object.isRequired,
};

export default Input;
