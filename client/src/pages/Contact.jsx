import { useState } from "react";
import axios from "axios";

const Contact = () => {

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
       ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      const res = await axios.post("http://localhost:8080/api/v1/contact", form);

      if (res.status === 201) {
        setSuccess("Message Sent Successfully");
        setForm({ name: "", email: "", message: "" });
        console.log("Form submitted", form);
      }
    } catch (err) {
      setError("Oops! Failed to send message, Please try again!");
    }
  };

  return (

    <>
      <section className="py-16 px-4 max-w-3xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <input
            type="text"
            name="name"
            placeholder="please Enter Your Name"
            value={form.name}
            onChange={handleChange}
            className="bg-zinc-800 p-4 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required />

          <input
            type="email"
            name="email"
            placeholder="Please enter your email"
            value={form.email}
            onChange={handleChange}
            className="bg-zinc-800 p-4 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required />

            <textarea
              name="message"
              rows="6"
              placeholder="Please write your intention to contact"
              value={form.message}
              onChange={handleChange}
              className="bg-zinc-800 p-4 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required></textarea>

              <button type="submit" className="bg-linear-to-r from-teal-700 via-yellow-700 to-teal-900 hover:bg-blue-600 hover:cursor-pointer text-white font-semibold px-6 py-3 rounded-xl transition">Send Message</button>


        </form>

              {
                success && <p className="text-green-600">{success}</p>
              }
              {
                error && <p className="text-red-600">{error}</p>
              }

      </section>
    </>

  )
};

export default Contact;