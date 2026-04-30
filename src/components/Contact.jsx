import { useState } from "react";
import Reveal from "./Reveal";

const inputs = [
  { type: "text", name: "name", placeholder: "Name / Company" },
  { type: "tel", name: "phone", placeholder: "Phone Number" },
  { type: "email", name: "email", placeholder: "Email" },
]


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ message: "", type: "" });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate form
  const validateForm = () => {
    const { name, phone, email, message } = formData;

    if (!name || !phone || !email || !message) {
      setStatus({ message: "Please fill in all fields.", type: "error" });
      setTimeout(() => setStatus({ message: "", type: "" }), 3000);
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ message: "Enter a valid email.", type: "error" });
      setTimeout(() => setStatus({ message: "", type: "" }), 3000);
      return false;
    }

    return true;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const payload = { ...formData, _captcha: false };

      const response = await fetch("https://formspree.io/f/mdkqgykb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus({ message: "Message sent successfully!", type: "success" });
        setFormData({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => setStatus({ message: "", type: "" }), 3000);
      } else {
        const serverMessage = data?.error || data?.message || response.statusText || "Something went wrong.";
        setStatus({ message: "Server Error", type: "error" });
        console.error("Form submission error:", serverMessage, data);
        setTimeout(() => setStatus({ message: "", type: "" }), 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({ message: "Network error.", type: "error" });
      setTimeout(() => setStatus({ message: "", type: "" }), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Title */}
        <Reveal>
          <h3 className="text-3xl bg-linear-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent md:text-4xl font-bold text-center">
            Contact Me
          </h3>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Info */}
          <Reveal>
            <div className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-md border border-white/40 dark:border-0 
                 dark:border-slate-700/50 p-6 rounded-xl shadow-xl shadow-sky-200/30 dark:shadow-black/30 space-y-4 md:mt-20">
              <h4 className="text-xl font-semibold bg-linear-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
                Why get in touch with me?
              </h4>
              <p className="text-slate-900 dark:text-white">
                I offer various services and aim to deliver high-quality work as an
                upcoming FullStack developer. I'm passionate about building
                responsive and interactive web applications.
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-md border border-white/40 dark:border-0 dark:border-slate-700/50 p-6 rounded-xl shadow-xl shadow-sky-200/30 dark:shadow-black/30 space-y-4"
            >
              <h4 className="text-xl font-semibold bg-linear-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">Inbox Me</h4>

              {/* Status Message */}
              {status.message && (
                <Reveal>
                  <div
                    className={`p-3 rounded-3xl text-center font-medium ${status.type === "success"
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                      }`}
                  >
                    {status.message}
                  </div>
                </Reveal>
              )}
              <Reveal>
                {[...inputs].map((skill, index) => (
                  <input
                    key={index}
                    type={skill.type}
                    name={skill.name}
                    placeholder={skill.placeholder}
                    value={formData[skill.name]}
                    onChange={handleChange}
                    className="w-full p-3 rounded-2xl mt-2 mb-2 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-lg border border-slate-300 dark:border-slate-600 outline-none"
                  />
                ))}
              </Reveal>
              <Reveal>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-2xl  text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-lg border border-slate-300 dark:border-slate-600 outline-none"
                ></textarea>
              </Reveal>

              <Reveal>
                <button
                  type="submit"
                  className="cursor-pointer w-full bg-sky-500 hover:bg-sky-600 text-white dark:bg-sky-400 dark:hover:bg-sky-300 dark:text-slate-900 font-bold py-3 rounded-2xl transition"
                >
                  Send Message
                </button>
              </Reveal>

              {/* Contact Links */}
              <Reveal>
                <div className="flex justify-center gap-6 pt-4 text-xl">
                  <a href="mailto:godwinaugustine118@gmail.com">📧</a>
                  <a href="tel:+2348130575100">☎️</a>
                  <a href="https://wa.me/2348130575100" target="_blank">💬</a>
                  <a href="https://facebook.com" target="_blank">📘</a>
                </div>
              </Reveal>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;