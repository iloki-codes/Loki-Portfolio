import { useState } from "react";


const Contact = () => {

  const [form, setForm] =- useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", form);
  };

  return (

    <>
      <section className="py-16 px-4 max-w-3xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-xol space-y-6">
          <input
            type="text"
            name="name"
            placeholder="please Enter Your Name"
            value={form.name}
            onChange={handleChange}
            className="gb-zinc-800 p-4 rounded-xl text-white focus:outline-none focus:ring-2 focuse:ring-blue-500"
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

              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition">Send Message</button>
        </form>

      </section>
    </>

  )
};

export default Contact;