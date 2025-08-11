import { useState } from "react";
import axios from "axios";
import loki from "../assets/loki.png";

const Contact = () => {

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
       ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      const res = await axios.post("https://loki-portfolio.onrender.com/api/v1/contact", form);

      if (res.status === 201) {
        setSuccess("Message Sent Successfully");
        setForm({ name: "", email: "", message: "" });
        setSubmitted(true);
        console.log("Form submitted", form);
      }
    } catch (err) {
      setError("Oops! Failed to send message, Please try again!");
    }
  };

  const handleResend = () => {
    setSubmitted(false);
  };

  return (

    <>
      <section className="py-16 px-4 max-w-3xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-10">
          Get In Touch
        </h2>

        <div className={`${submitted ? 'hidden' : 'block'}`}>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Please Enter Your Name"
            value={form.name}
            onChange={handleChange}
            className="bg-zinc-600 p-4 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required />

          <input
            type="email"
            name="email"
            placeholder="Please enter your email"
            value={form.email}
            onChange={handleChange}
            className="bg-zinc-600 p-4 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required />

            <textarea
              name="message"
              rows="6"
              placeholder="Please write your message"
              value={form.message}
              onChange={handleChange}
              className="bg-zinc-600 p-4 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required></textarea>

              <button type="submit" className="bg-linear-to-r from-zinc-300 via-yellow-700 to-lime-200 hover:bg-blue-600 hover:cursor-pointer text-white font-semibold px-6 py-3 rounded-xl transition">Send Message</button>


          </form>
        </div>
{/* w-full max-w-md */}

      </section>
              {
                success &&
                            <div className={`${submitted ? 'block': 'hidden'} text-center flex flex-col gap-3 items-center`}>
                              <p className="text-green-600 bg-gray-700 p-2 rounded-xl relative left-40">{success} ✅</p>
                              <img src={loki} alt={loki} className="h-35 w-30" />
                              <button onClick={handleResend} className="bg-linear-to-br from-teal-500 via-teal-700 to-teal-900 text-white m-2 font-bold px-6 py-3 rounded-xl shadow-xl hover:bg-blue-600 hover:border-2 transition-all hover:cursor-pointer hover:scale-[1.05]">
                                Want to send another message ?
                              </button>
                            </div>
              }
              {
                error && <p className="text-red-600">{error}</p>
              }
    </>

  )
};

export default Contact;