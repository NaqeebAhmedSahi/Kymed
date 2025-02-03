'use client';
import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';  // Import EmailJS
import Modal from 'react-modal';

// Modal styles (customizing modal to fit above navbar and contact page style)
const modalStyles: ReactModal.Styles  = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1000, // Ensure modal is above everything
  },
  content: {
    backgroundColor: '#333',
    borderRadius: '8px',
    color: '#fff',
    padding: '30px',
    maxWidth: '500px',
    margin: 'auto',
    position: 'absolute',
    top: '100px', // Adjust modal to appear below the navbar (if the navbar height is 100px)
    left: '50%',
    transform: 'translateX(-50%)',
  }
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState<string>("");  // "success" or "error"
  const [modalMessage, setModalMessage] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);  // New loading state

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);  // Show loading state when submission starts

    // EmailJS configuration (using env variables)
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

    const formDataToSend: Record<string, unknown> = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    // Send email via EmailJS
    emailjs
      .send(serviceId, templateId, formDataToSend, userId)
      .then(
        (response) => {
          setModalType("success");
          setModalMessage("Your message has been sent successfully!");
          setModalIsOpen(true);
          setIsLoading(false);  // Hide loading state after success
          setFormData({ name: "", email: "", message: "" });  // Clear form fields
        },
        (error) => {
          setModalType("error");
          setModalMessage("Something went wrong. Please try again.");
          setModalIsOpen(true);
          setIsLoading(false);  // Hide loading state after error
        }
      );
  };

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-5 md:px-10 lg:px-20">
      {/* Main Wrapper */}
      <motion.div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Contact Us</h2>
          <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            We are here to assist you. Feel free to reach out with any inquiries.
          </p>
          <hr className="mt-6 border-t-2 border-gray-700 mx-auto w-20" />
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Left Section: Information */}
          <div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-4xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-6">
                Have any questions or need further assistance? We're here to help! Reach out to us and we'll respond as soon as possible.
              </p>
              <p className="text-gray-300"><strong>Address:</strong> 123 Medical Avenue, City, Country</p>
              <p className="text-gray-300"><strong>Phone:</strong> +1 (123) 456-7890</p>
              <p className="text-gray-300"><strong>Email:</strong> contact@medicaltools.com</p>
            </motion.div>
          </div>

          {/* Right Section: Contact Form */}
          <div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-4xl font-semibold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 bg-gray-800 text-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 bg-gray-800 text-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-4 bg-gray-800 text-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Your Message"
                      rows={4}
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300"
                      disabled={isLoading}  // Disable button while loading
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-gray-300 text-sm">© 2025 Medical Tools. All Rights Reserved.</p>
        </motion.div>
      </motion.div>

      {/* Modal for success or error */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={modalStyles}
      >
        <h2 className={`text-3xl ${modalType === "success" ? "text-green-500" : "text-red-500"}`}>
          {modalType === "success" ? "Success!" : "Error!"}
        </h2>
        <p className="mt-4">{modalMessage}</p>
        <button
          className="mt-6 py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
          onClick={() => setModalIsOpen(false)}
        >
          Close
        </button>
      </Modal>
    </section>
  );
};

export default ContactPage;
