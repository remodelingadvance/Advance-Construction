import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { HiMail, HiPhone, HiUser, HiServer, HiCheckCircle } from "react-icons/hi";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!form.current.name.value || !form.current.email.value) {
      setError('Please fill required fields');
      return;
    }

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_CONTACT_SERVICE_KEY,
        import.meta.env.VITE_CONTACT_TEMPLATE_KEY,
        form.current,
        import.meta.env.VITE_CONTACT_PUBLIC_KEY
      );

      console.log('Success:', result);
      setIsModalOpen(true);
      form.current.reset();
    } catch (error) {
      console.error('Error details:', error);
      setError(error.text || 'Failed to send. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="!py-16 md:!py-24 bg-white">
      <div className="container mx-auto px-5 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        {/* Contact Info Section */}
        <div className="!p-8 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105 order-2 lg:order-1">
          <h2 className="text-4xl font-bold text-gray-800 !mb-8">Contact Us</h2>
          <span className="block w-[200px] h-[4px] bg-[#5c7c3b] !my-8"></span>
          <p className="text-base sm:text-md text-gray-600 !mb-4">
            If you are ready to share your vision or just begin a project that will bring the world together, don't hesitate to reach out. A representative for our region will be assigned to walk you through every process step.

            If it's a new construction, renovation, or design consultation, we're here to make it a reality.
          </p>

          <h3 className='!mb-12 text-lg sm:text-xl text-gray-700 font-bold'>Contact us today, and let’s get started!</h3>
          <div className="!space-y-8">
            <div className="flex items-center gap-6">
              <div className="!p-4 bg-[#5c7c3b] rounded-full shadow-lg">
                <FaPhoneAlt className="text-white w-6 h-6" />
              </div>
              <div className="">
                <p className="text-gray-600 text-lg">+17862109819</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="!p-4 bg-[#5c7c3b] rounded-full shadow-lg">
                <FaEnvelope className="text-white w-6 h-6" />
              </div>
              <div className="">
                <p className="text-gray-600 text-lg">Arta@ar.miami</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="!p-4 bg-[#5c7c3b] rounded-full shadow-lg">
                <FaMapMarkerAlt className="text-white w-6 h-6" />
              </div>
              <div className="">
                <p className="text-gray-600 text-lg">1717 N  bayshore dr , #108 miami  FL 33132</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-6 !mt-8">
              <Link
                to="https://www.facebook.com/share/1HYmusZRqb/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="!p-3 bg-gray-800 text-white rounded-full hover:bg-[#5c7c3b] transition-all transform hover:scale-110"
              >
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link
                to="https://www.instagram.com/advance_remodeling?igsh=b3VhaWl0bDVtMmlv&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="!p-3 bg-gray-800 text-white rounded-full hover:bg-[#5c7c3b] transition-all transform hover:scale-110"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full order-1 lg:order-2">
          <div className="bg-white !p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 !mb-2">Got Questions? Let’s Talk</h2>

            <form ref={form} onSubmit={sendEmail} className="!space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 !mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 !pl-3 flex items-center pointer-events-none">
                      <HiUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="block w-full !pl-10 !pr-3 !py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5c7c3b] focus:border-[#5c7c3b]"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="pnumber" className="block text-sm font-medium text-gray-700 !mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute !inset-y-0 left-0 !pl-3 flex items-center pointer-events-none">
                      <HiPhone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="pnumber"
                      name="pnumber"
                      type="tel"
                      required
                      className="block w-full !pl-10 !pr-3 !py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5c7c3b] focus:border-[#5c7c3b]"
                      placeholder="+1 555-555-5555"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 !mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 !pl-3 flex items-center pointer-events-none">
                    <HiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full !pl-10 !pr-3 !py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5c7c3b] focus:border-[#5c7c3b]"
                    placeholder="youremail@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 !mb-1">
                  Subject
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 !pl-3 flex items-center pointer-events-none">
                    <HiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="block w-full !pl-10 !pr-3 !py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5c7c3b] focus:border-[#5c7c3b]"
                    placeholder="write your Subject..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 !mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={4}
                  required
                  className="block w-full !px-3 !py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5c7c3b] focus:border-[#5c7c3b]"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center !py-3 !px-4 border border-transparent rounded-lg shadow-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5c7c3b] transition-colors cursor-pointer ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-[#5c7c3b] hover:bg-green-900'
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin !-ml-1 !mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Submit Form'}
                </button>
              </div>

              {error && (
                <div className="rounded-md bg-red-50 !p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="!ml-3">
                      <h3 className="text-sm font-medium text-red-800">{error}</h3>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center !p-4 sm:p-0 bg-black bg-opacity-50">
          <div className="relative w-full max-w-sm !mx-auto">
            {/* Modal content */}
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all">
              <div className="!p-6 text-center">
                {/* Success icon */}
                <div className="!mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 !mb-4">
                  <HiCheckCircle className="h-6 w-6 text-green-600" />
                </div>

                {/* Title and message */}
                <h3 className="text-lg font-medium text-gray-900 !mb-2">Message Sent!</h3>
                <p className="text-sm text-gray-500 !mb-6">
                  Thank you for contacting us. We'll get back to you within 4-6 hours.
                </p>

                {/* Close button */}
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm !px-4 !py-2 bg-blue-600 text-base font-medium text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5c7c3b] sm:text-sm"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;