import React, { useEffect, useState,useRef } from 'react';
import './ContactMe.css';
import profilePic from '../images/sumanth.jpeg';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';
import emailjs from 'emailjs-com';
const staticUserData = {
  name: "Anupam Chittora",
  title: "Final Year ECE Student",
  summary: "With 2+ years in full-stack development, skilled in React, Node, AWS, Kubernetes, and Docker.",
  companyUniversity: "Malaviya National Institute of Technology Jaipur (MNIT)",
  email: "2022uec1452@mnit.ac.in",
  phoneNumber: "+91 6350377489",
  linkedinLink: "https://www.linkedin.com/in/anupamchittora"
};

const ContactMe: React.FC = () => {
  const userData = staticUserData;
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_4juf53k',     // Replace with your actual service ID
      'template_ifz0kdi',    // Replace with your actual template ID
      formRef.current!,
      'Lb66oLXTir33I1zZl'      // Replace with your actual Public Key (user ID)
    )
    .then((result) => {
        alert("Message sent successfully!");
        formRef.current?.reset();
    }, (error) => {
        alert("Failed to send message: " + error.text);
    });
  };

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt="Sumanth Samala" className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{userData.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">
            {userData.summary}
          </p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${userData.phoneNumber}`} className="contact-link">
            {userData.phoneNumber}
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
      <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
        <h2>Contact Me</h2>
        <label>Your Name</label>
        <input type="text" name="name" placeholder="Enter name" required />
        <label>Your Email</label>
        <input type="email" name="email" placeholder="Enter email" required />
        <label>Your Message</label>
        <textarea name="message" placeholder="Type your message..." required></textarea>
        <button type="submit">
          <strong>Send Message</strong> <FaEnvelope />
        </button>
      </form>
    </div>
  );
};


export default ContactMe;
