import React, { useEffect, useState } from 'react';
import './ContactMe.css';
import profilePic from '../images/sumanth.jpeg';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';
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
    </div>
  );
};


export default ContactMe;
