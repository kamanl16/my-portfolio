import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Python",
    "Java",
    "Django",
    "Flask",
    "C",
    "C++",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "Elasticsearch",
    "REST",
    "SOAP",
    "Android SDK",
    "Postman"
];

const labelsSecond = [
    "AWS",
    "Azure",
    "Docker",
    "Jenkins",
    "Git",
    "SVN",
    "GitHub Actions",
    "RabbitMQ",
    "Kafka",
    "Celery",
    "Linux",
    "SAP HANA S/4",
    "Snowflake",
    "Pandas",
    "Power BI",
    "Tableau"
];

const labelsThird = [
    "PMP",
    "SDLC",
    "Jira",
    "Figma",
    "Eclipse",
    "Visual Studio",
    "ABAP",
    "SAPUI5",
    "ASP.NET",
    "R",
    "Certbot HTTPS",
    "Change Management",
    "Risk Assessment",
    "Vendor Management"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Development & System Integration</h3>
                    <p>Over 10 years of experience in full-stack development, building and integrating diverse systems using technologies like Java, Python, React, and RESTful APIs. Proven ability to deliver end-to-end solutions, from front-end interfaces to back-end logic and database management, optimizing business processes.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud, DevOps & Data Platforms</h3>
                    <p>Proficient in leveraging cloud platforms like AWS and Azure, implementing DevOps practices with Docker and CI/CD pipelines (Jenkins, GitHub Actions), and managing data analytics solutions with tools such as SAP HANA, Kafka, Power BI, and Elasticsearch.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Project Management & Specialized Solutions</h3>
                    <p>PMP-certified expert with a decade of experience leading system migrations and software development projects through the full SDLC. Skilled in project management methodologies, vendor management, and utilizing tools like Jira, Figma, and specialized enterprise systems like SAPUI5 and ABAP.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;