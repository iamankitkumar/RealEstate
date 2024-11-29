import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'motion/react';

const Contact = () => {
  const [result, setResult] = useState(""); // Moved useState here

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "f1e981d7-4696-4e98-b46d-ae154bf6640c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Message sent successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
        setResult("");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while submitting the form.");
      setResult("");
    }
  };

  return (
    <motion.div
    initial={{opacity:0, x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}

      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact
        <span className="underline underline-offset-4 decoration-1 font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to Make Move? Let's Build your Future Together
      </p>

      {/* Form Section */}
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap -mx-2">
          {/* Name Field */}
          <div className="w-full md:w-1/2 px-2">
            <label
              htmlFor="name"
              className="block text-left mb-1"
            >
              Your Name
            </label>
            <input
              id="name"
              className="w-full border border-gray-300 rounded py-3 px-4"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="w-full md:w-1/2 px-2 mt-4 md:mt-0">
            <label
              htmlFor="email"
              className="block text-left mb-1"
            >
              Your Email
            </label>
            <input
              id="email"
              className="w-full border border-gray-300 rounded py-3 px-4"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="my-6 text-left">
          <label
            htmlFor="message"
            className="block mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-12 mb-10 rounded hover:bg-blue-700 transition-colors"
        >
          {result || "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
