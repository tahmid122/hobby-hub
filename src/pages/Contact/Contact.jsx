import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can send the data to backend or EmailJS here
    alert("Message sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Contact us{" "}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="input input-bordered w-full outline-none focus:outline-none"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="input input-bordered w-full outline-none focus:outline-none"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="input input-bordered w-full outline-none focus:outline-none"
          value={formData.subject}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="textarea textarea-bordered w-full h-32 outline-none focus:outline-none"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="btn btn-secondary w-full">
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center space-y-2 text-gray-600">
        <p>📧 Email: support@yourmeetup.com</p>
        <p>📱 Phone: +880 123-456-7890</p>
        <p>🌍 Address: Dhaka, Bangladesh</p>
      </div>
    </div>
  );
};

export default Contact;
