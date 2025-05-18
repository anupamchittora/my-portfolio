import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';

const staticTimelineData: TimelineItem[] = [
   {
    title: "Joining Soon",
    name: "",
    techStack: "",
    summaryPoints: [
      ""
    ],
    dateRange: "May 2025 - Present",
    timelineType: "work",
  },
  // {
  //   title: "Software Developer - II 🎉",
  //   name: "Roostify San Francisco",
  //   techStack: "CI/CD, Automated Testing, API Gateway, Financial Data Integration",
  //   summaryPoints: [
  //     "📈 Implemented automated testing, reducing release cycle time by 30%.",
  //     "Led the development of a loan origination platform, improving response time by 25%.",
  //     "Collaborated closely with cross-functional teams on CI/CD pipeline enhancements."
  //   ],
  //   dateRange: "Jun 2023 - Present",
  //   timelineType: "work",
  // },
  // {
  //   title: "Mid-Level Software Developer 🎉",
  //   name: "Kajima London",
  //   techStack: "Ruby on Rails, React, Node.js, AWS, PostgreSQL",
  //   summaryPoints: [
  //     "🚀 Led NHSPS Open Space Website development for a seamless user experience.",
  //     "Enhanced QA processes, reducing bug rate by 20%.",
  //     "Optimized system performance for 10,000+ users and 50 million bookings."
  //   ],
  //   dateRange: "Nov 2021 - Dec 2022",
  //   timelineType: "work",
  // },
  // {
  //   title: "Software Developer 🎉",
  //   name: "LetsVenture India",
  //   techStack: "Ruby on Rails, SQL, AngularJS, ReactJS, MERN stack",
  //   summaryPoints: [
  //     "🚀 Developed key features for LetsVenture platform, supporting investment growth.",
  //     "Built a CRM tool from scratch to manage investor relationships.",
  //     "Created a secondary fundraising platform, facilitating $1M+ investments."
  //   ],
  //   dateRange: "Jul 2018 - Jul 2020",
  //   timelineType: "work",
  // },
  {
    name: "Malaviya National Institute of Technology Jaipur (MNIT)",
    title: "B.Tech. 🎓",
    summaryPoints: [
      "⚙️ Pursuing B.Tech in ECE with coursework in Data Structures, Microprocessors, and Operating Systems.",
    "💡 Led technical projects in AI/ML and full-stack development, including MRI classification and chat app.",
    "🎯 Ranked in the top 3.95% in JEE Advanced; actively leading tech initiatives and workshops on campus."
    ],
    dateRange: "July 2022 - May 2026",
    techStack: "", // 👈 fix here
    timelineType: "education",
  },
  
  {
    name: "D.A.V. Public School Kota",
    title: "Higher Secondary 🥇",
    summaryPoints: [
      "🏆 Achieved 93% in CBSE 12th Boards with distinction in Physics, Chemistry, and Mathematics.",
    "📈 Built strong foundation in analytical reasoning and problem-solving, laying groundwork for engineering education."
    ],
    dateRange: "Apr 2020 - Apr 2021",
    techStack: "", // 👈 fix here
    timelineType: "education",
  }
  
  
];


const WorkExperience: React.FC = () => {
  const timeLineData = staticTimelineData;

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? index === 0
                  ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                  : { background: 'rgb(240, 240, 240)', color: '#fff' }
                : { background: 'rgb(255, 224, 230)', color: '#fff' }
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: index === 0 ? '7px solid rgb(33, 150, 243)' : '7px solid rgb(240, 240, 240)' }
                : { borderRight: '7px solid rgb(255, 224, 230)' }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 160, 200)', color: '#fff' }
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === "work" ? (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
                <p>{item.summaryPoints}</p>
              </div>
            ) : (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                <p>{item.summaryPoints}</p>
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};


export default WorkExperience;
