import Form from "./Form";
import ContactInfo from "./ContactInfo";
import toast from "react-hot-toast";

const Contact = () => {
  const formSubmittedHandler = (values) => {
    console.log(values);
    toast.success("Your message has been sent successfully!");
  };

  return (
    <section className="container pt-[4rem]" id="contact">
      <h2 className="fl-h2">Sold out? Let&apos;s get in touch</h2>

      <div className="flex flex-col lg:flex-row mt-8 gap-10">
        <ContactInfo />

        <Form
          className="gap-4 mb-2 mr-2 grow"
          onFormSubmitted={formSubmittedHandler}
        />
      </div>
    </section>
  );
};

export default Contact;
