import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { FaGithub } from 'react-icons/fa';
const bannerData = {
  headline: "Anupam Chittora – Aspiring Software Developer",
  profileSummary: `Driven and ambitious B.Tech student from MNIT Jaipur with a sharp technical acumen and a passion for 
  software development. With a strong foundation in C++, Python, and modern web technologies like React.js and Node.js,
   I’ve led multiple hands-on projects in real-time communication, machine learning, and computer vision. My experience
    ranges from building full-stack chat applications and MRI classification models to face recognition systems powered 
    by OpenCV and KNN.

I bring a blend of analytical thinking and creative problem-solving, demonstrated by top-tier national rankings in JEE 
Advanced (Top 3.95%) and consistent academic excellence at MNIT. Beyond academics, I actively lead initiatives that 
strengthen technical communication and collaboration across my campus. Eager to apply my skills in an industrial 
environment, I’m looking for summer internship opportunities where I can contribute meaningfully while learning at 
scale.`,

  resumeLink: "https://drive.google.com/file/d/1EeZpeYFxsmSG4bygKij1cbLxcTbtbl2C/view?usp=drive_link",
  linkedinLink: "https://linkedin.com/in/anupamchittora",
  githubLink: "https://github.com/anupamchittora" 
};

const ProfileBanner: React.FC = () => {
  const handlePlayClick = () => window.open(bannerData.resumeLink, '_blank');
  const handleLinkedinClick = () => window.open(bannerData.linkedinLink, '_blank');
  const handleGithubClick = () => window.open(bannerData.githubLink, '_blank');

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">{bannerData.headline}</h1>
        <p className="banner-description">{bannerData.profileSummary}</p>
        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
          <button className="banner-button github-button" onClick={handleGithubClick}>
            <FaGithub style={{ marginRight: '5px' }} /> GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;