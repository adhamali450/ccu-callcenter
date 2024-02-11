import Form from "./Form";
import ContactInfo from "./ContactInfo";
import toast from "react-hot-toast";
import AsideLayout from "@controls/AsideLayout";
import emailjs from "@emailjs/browser";

import { db, submit } from "@/js/firebase";
import { dateTimeNow } from "@/utils";

const Contact = () => {
  const formSubmittedHandler = (values) => {
    submit(db, `/messages/${values.name}`, {
      ...values,
      time: dateTimeNow(),
      read: false,
    }).then(() => {
      emailjs.send(
        import.meta.env.VITE_emailServiceId,
        import.meta.env.VITE_emailTemplateId,
        {
          to_name: "CCU Callcenter",
          from_name: values.name,
          message: values.message,
          reply_to: values.email,
        },
        import.meta.env.VITE_emailPublicKey
      );

      toast.success(
        "Your message has been sent successfully! We'll get back to you soon."
      );
    });
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
