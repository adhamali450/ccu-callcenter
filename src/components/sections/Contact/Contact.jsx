import Form from "./Form";
import ContactInfo from "./ContactInfo";
import toast from "react-hot-toast";
import AsideLayout from "@controls/AsideLayout";

const Contact = () => {
  const formSubmittedHandler = (values) => {
    console.log(values);
    toast.success("Your message has been sent successfully!");
  };

  return (
    <section className="container pt-[4rem]" id="contact">
      <h2 className="fl-h2">Let&apos;s Get in Touch!</h2>

      <AsideLayout className="flex flex-col lg:flex-row gap-10 mt-8">
        <ContactInfo />

        <Form
          className="gap-4 mb-2 mr-2 grow"
          onFormSubmitted={formSubmittedHandler}
        />
      </AsideLayout>
    </section>
  );
};

export default Contact;
