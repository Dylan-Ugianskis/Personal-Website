import { useState } from "react";
import Alert from "../components/Alert";
import { useScrollReveal } from "../hooks/useScrollReveal";

const WEB3FORMS_ACCESS_KEY = "b858e62d-4977-4c34-80b2-3955129ea0e5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const form = new FormData(e.target);
      form.append("access_key", WEB3FORMS_ACCESS_KEY);
      form.append("subject", `New contact from ${formData.name}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (result.success) {
        setFormData({ name: "", email: "", message: "" });
        showAlertMessage("success", "Your message has been sent!");
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      showAlertMessage("danger", "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative flex flex-col items-center c-space section-spacing">
      <h2 className="text-heading mb-10">Get In Touch</h2>
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div
        ref={sectionRef}
        className={`flex flex-col items-center justify-center w-full max-w-lg p-8 mx-auto border border-white/10 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-sm scroll-reveal ${isVisible ? 'visible' : ''}`}
      >
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <p className="font-normal text-neutral-400">
            I’m currently looking for new opportunities to drive growth for exciting tech companies. <br /> Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Violet"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="Violet@gmail.com"
              autoComplete="name"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="message"
              rows={4}
              className="field-input field-input-focus"
              placeholder="Share your thoughts"
              autoComplete="name"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-center rounded-md cursor-pointer bg-radial from-lavender hover-animation"
          >
            {!isLoading ? "send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
