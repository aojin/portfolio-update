import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import SendIcon from "../assets/utility-icons/send.png";

const propTypes = {};

const defaultProps = {};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  //emqDNsIbEzmkJALw8

  useEffect(() => emailjs.init(import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY), []);

  const sendEmail = async (values) => {
    setIsSubmitting(true);
    console.log({ values });
    await emailjs
      .send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        values,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          console.log({ error });
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
  };

  const ContactSchema = Yup.object().shape({
    from_name: Yup.string()
      .min(2, "Too Short!")
      .max(25, "Too Long!")
      .required("Required"),
    client_type: Yup.string()
      .required()
      .oneOf(["new client", "recruiter", "startup founder"]),
    work_type: Yup.string()
      .required()
      .oneOf(["full-time position", "project", "contract role"]),
    company_name: Yup.string()
      .min(2, "Too Short!")
      .max(25, "Too Long!")
      .required("Required"),
    client_email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <div className="form-area">
      <Formik
        initialValues={{
          from_name: "",
          client_type: "new client",
          work_type: "project",
          company_name: "",
          client_email: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          await sendEmail(values);
          resetForm();
        }}
        validationSchema={ContactSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-field">
              <h2>
                Hi my name is
                <Field
                  id="from_name"
                  name="from_name"
                  placeholder="John Smith"
                  contenteditable="true"
                />
              </h2>
              {errors.from_name && touched.from_name ? (
                <div className="error-message">{errors.from_name}</div>
              ) : null}
            </div>

            <div className="form-field">
              <h2>
                and I&apos;m a
                <Field name="client_type" id="client_type" as="select">
                  <option value="new client">new client</option>
                  <option value="recruiter">recruiter</option>
                  <option value="startup founder">startup founder</option>
                </Field>
              </h2>
              {errors.client_type && touched.client_type ? (
                <div className="error-message">{errors.client_type}</div>
              ) : null}
            </div>
            <div className="form-field">
              <h2>
                hiring for a{" "}
                <Field name="work_type" id="work_type" as="select">
                  <option value="project">project</option>
                  <option value="full-time position">full-time position</option>
                  <option value="contract role">contract role</option>
                </Field>
                <span style={{ color: "#5ac4f6" }}>.</span>
              </h2>
              {errors.work_type && touched.work_type ? (
                <div className="error-message">{errors.work_type}</div>
              ) : null}
            </div>
            <div className="form-field">
              <h2>
                Our company is called
                <Field
                  id="company_name"
                  name="company_name"
                  placeholder="MicroAppleBook"
                />
                <span style={{ color: "#ffed02" }}>.</span>
              </h2>
              {errors.company_name && touched.company_name ? (
                <div className="error-message">{errors.company_name}</div>
              ) : null}
            </div>
            <div className="form-field">
              <h2>
                You can email me back at
                <Field
                  id="client_email"
                  type="email"
                  name="client_email"
                  placeholder="myemail@acme.com"
                />
                .
              </h2>
              {errors.client_email && touched.client_email ? (
                <div className="error-message">{errors.client_email}</div>
              ) : null}
            </div>
            <h2>Looking forward to working with you!</h2>
            <button type="submit" disabled={isSubmitting}>
              <img src={SendIcon} alt="" />
              Send
            </button>
            {stateMessage && <p>{stateMessage}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

ContactForm.propTypes = propTypes;
ContactForm.defaultProps = defaultProps;

export default ContactForm;
