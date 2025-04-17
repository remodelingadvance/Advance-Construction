import React from 'react';

const ContactLocation = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden rounded-lg shadow-2xl !py-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.3714782247985!2d-80.18873012481583!3d25.7913159773334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b41d49faaaab%3A0x662a765bbf233240!2s1717%20N%20Bayshore%20Dr%20%23108%2C%20Miami%2C%20FL%2033132%2C%20USA!5e0!3m2!1sen!2sin!4v1742465690554!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default ContactLocation;