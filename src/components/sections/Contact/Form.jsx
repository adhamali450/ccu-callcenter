import { contactSchema } from "./validationSchema";
import { useFormik } from "formik";
import Button from "@controls/Button";
import Input from "@controls/Input";
import PropTypes from "prop-types";

const Form = ({ className, onFormSubmitted }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },

    validationSchema: contactSchema,
    onSubmit: (values) => {
      onFormSubmitted(values);

      formik.resetForm();
    },
  });

  return (
    <form
      className={`${className} flex flex-col`}
      onSubmit={formik.handleSubmit}
    >
      <Input
        label="Name"
        name={"name"}
        placeholder="John Doe"
        required
        tooltip="Please enter your name"
        formikData={formik}
      />

      <Input
        label="Email adress"
        name={"email"}
        placeholder="example@outlook.com"
        required
        tooltip="Please enter your email adress"
        formikData={formik}
      />

      <Input
        label="Phone number"
        name={"phone"}
        placeholder="(647)-123-4567"
        required
        tooltip="Please enter your phone number"
        formikData={formik}
      />

      <Input
        type="textarea"
        label="Message"
        name="message"
        placeholder="Your message, comment or question"
        required
        tooltip="Your message, comment or question"
        formikData={formik}
      />

      <Button type="submit" className="self-end">
        Send Message
      </Button>
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  onFormSubmitted: PropTypes.func,
};

export default Form;
