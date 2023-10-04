import React, { useState } from 'react';
import axios from 'axios'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        'https://script.google.com/macros/s/AKfycbyrzCASHYeQy4tI1DrYmqvBLq7k7tGVqiIXuS9HyHYhg4hgaWAlO9P14E9sLB-YxQtv/exec', // Replace with your script's URL
        formData
      );
  
      if (response.status === 200) {
        // Form submission successful
        console.log('Form submitted successfully');
        // You can reset the form or show a success message here
      } else {
        // Handle errors, e.g., show an error message
        console.error('Form submission failed');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('An error occurred', error);
    }
  };

  // ...

  return (
    <form className="max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-lg py-2 px-3 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded-lg py-2 px-3 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="border rounded-lg py-2 px-3 w-full h-32"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
