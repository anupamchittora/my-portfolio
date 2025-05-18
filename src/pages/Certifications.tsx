import React, { useEffect, useState } from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';
import { Certification } from '../types';
const iconData: { [key: string]: JSX.Element } = {
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  'university': <FaUniversity />
}
const staticCertifications: Certification[] = [
  {
    title: "C++ for C Programmers",
    issuer: "University of California, Santa Cruz",
    issuedDate: "",
    link: "https://example.com/iitbombay-cert",
    iconName: "coursera"
  },
  {
    title: "Verified Certificate of IITBombayX",
    issuer: "Indian Institute of Technology, Bombay",
    issuedDate: "",
    link: "https://example.com/iitbombay-cert",
    iconName: "university"
  },
  {
    title: "Programming with Everyone with Python",
    issuer: "University of Michigan",
    issuedDate: "",
    link: "https://example.com/python-cert",
    iconName: "coursera"
  },
  {
    title: "Multiutility Robot Journal",
    issuer: "International Journal of Mechanical Engineering and Technology",
    issuedDate: "Jul 2018",
    link: "https://example.com/robot-paper",
    iconName: "ieee"
  },
  {
    title: "Hosting Websites with Amazon Lightsail",
    issuer: "Udemy",
    issuedDate: "Jan 2020",
    link: "https://example.com/lightsail-cert",
    iconName: "udemy"
  },
  {
    title: "Typescript: The Complete Developer's Guide",
    issuer: "Udemy",
    issuedDate: "Dec 2020",
    link: "https://example.com/typescript-cert",
    iconName: "udemy"
  }
];

const Certifications: React.FC = () => {
  const certifications = staticCertifications;

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="certification-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="certification-content">
              <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
