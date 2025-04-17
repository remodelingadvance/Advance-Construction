// src/FAQ.js
import React, { useState } from 'react';
import FAQimg from '../../assets/images/FAQhomebg.jpg'
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';

const faqData = [
  {
    question: "What services does Advancer Construction & Remodeling offer?",
    answer:
      "Advancer Construction & Remodeling offers a wide range of services including Roof-to-Roof Construction, Property Management, Interior Design & Remodeling, and House Remodeling & Renovations.",
  },
  {
    question: "How can I request a quote?",
    answer:
      "You can request a quote by visiting our website and filling out the contact form, or by calling us directly at +1 (123) 456-7890.",
  },
  {
    question: "Do you provide free consultations?",
    answer:
      "Yes, we offer free consultations to discuss your project requirements and provide an estimate.",
  },
  {
    question: "Are your services available for both residential and commercial properties?",
    answer:
      "Yes, we cater to both residential and commercial properties, offering tailored solutions for each.",
  },
  {
    question: "How long does a typical construction project take?",
    answer:
      "The duration of a project depends on its scope and complexity. We provide a timeline during the consultation phase.",
  },
  {
    question: "What materials do you use for construction?",
    answer:
      "We use high-quality, durable materials that meet industry standards and ensure long-lasting results.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track the currently open question

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the open index
  };

  return (
    <section className="mt-[100px] !py-10 bg-textColor">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 !mb-4"><span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-2.5"></span> FAQ <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-2.5"></span></h2>
          <p className="text-base sm:text-lg text-gray-600 !mb-8 sm:!mb-12">
            Frequently Asked Questions
          </p>
        </div>
        <div className="flex flex-col items-center gap-10 justify-between md:flex-row !mx-5">

          <div className="flex-1 ">
            <img src={FAQimg} className='w-full rounded-md h-[350px] sm:h-[500px] object-cover' alt="" />
          </div>

          <div className="flex-1 !space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border border-[#5c7c3b] rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out">
      <div
        className="border-2 border-[#5c7c3b] rounded-xl !p-4 cursor-pointer flex justify-between items-center transition-all duration-300 ease-in-out"
        onClick={onToggle}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          ▼
        </span>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'
          } bg-white border-t`}
      >
        <p className="!p-4 text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
