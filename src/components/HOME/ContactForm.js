import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mzblkyew', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, telephone, message }),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setName('');
        setEmail('');
        setTelephone('');
        setMessage('');
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error sending the message:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border text-black rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full  text-black border rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="telephone" className="block">Telephone:</label>
            <input
              type="tel"
              name="telephone"
              id="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              required
              className="w-full  text-black border rounded px-3 py-2"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block">Message:</label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full border text-black rounded px-3 py-2"
          ></textarea>
        </div>
        <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
        {submissionStatus === 'success' && (
          <p className="text-green-500">Message sent successfully!</p>
        )}
        {submissionStatus === 'error' && (
          <p className="text-red-500">Message failed to send. Please try again later.</p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
