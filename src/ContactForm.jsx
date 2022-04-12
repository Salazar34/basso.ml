import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mdobwgdq");

  if (state.succeeded) return <p>Thanks for supporting us!</p>;

  return (
    <form
      className="contact-form"
      action=""
      method="POST"
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">First name</label>
      <input id="name" type="text" name="name" />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="lastName">Last name</label>
      <input id="lastName" type="text" name="lastName" />
      <ValidationError
        prefix="LastName"
        field="lastName"
        errors={state.errors}
      />
      <label htmlFor="lastName">Email</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Suggest us a project</label>
      <textarea name="message" id="message"></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
