import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { Box, Typography, Chip } from '@mui/material';

const labelsFirst = [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "SASS", "Python", "Java",
    "Django", "Flask", "C", "C++", "SQL", "PostgreSQL", "MongoDB", "Elasticsearch",
    "REST", "SOAP", "Android SDK", "Postman"
];

const labelsSecond = [
    "AWS", "Azure", "Docker", "Jenkins", "Git", "SVN", "GitHub Actions",
    "RabbitMQ", "Kafka", "Celery", "Linux", "SAP HANA S/4", "Snowflake",
    "Pandas", "Power BI", "Tableau"
];

const labelsThird = [
    "PMP", "SDLC", "Jira", "Figma", "Eclipse", "Visual Studio", "ABAP", "SAPUI5",
    "ASP.NET", "R", "Certbot HTTPS", "Change Management", "Risk Assessment",
    "Vendor Management"
];

function Expertise() {
    return (
        <Box id="expertise" sx={{ py: '5%', px: { xs: '5%', md: '10%' }, textAlign: 'left' }}>
            <Typography variant="h2" sx={{ mb: 4 }}>Expertise</Typography>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: '50px'
            }}>
                <Box>
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>Full Stack Development & System Integration</Typography>
                    <Typography paragraph sx={{ mt: 1 }}>
                        Over 10 years of experience in full-stack development, building and integrating diverse systems using technologies like Java, Python, React, and RESTful APIs. Proven ability to deliver end-to-end solutions, from front-end interfaces to back-end logic and database management, optimizing business processes.
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                        <Typography sx={{ pr: 1, fontWeight: 'bold' }}>Tech stack:</Typography>
                        {labelsFirst.map((label) => (
                            <Chip key={label} label={label} />
                        ))}
                    </Box>
                </Box>
                <Box>
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>Cloud, DevOps & Data Platforms</Typography>
                    <Typography paragraph sx={{ mt: 1 }}>
                        Proficient in leveraging cloud platforms like AWS and Azure, implementing DevOps practices with Docker and CI/CD pipelines (Jenkins, GitHub Actions), and managing data analytics solutions with tools such as SAP HANA, Kafka, Power BI, and Elasticsearch.
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                        <Typography sx={{ pr: 1, fontWeight: 'bold' }}>Tech stack:</Typography>
                        {labelsSecond.map((label) => (
                            <Chip key={label} label={label} />
                        ))}
                    </Box>
                </Box>
                <Box>
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>Project Management & Specialized Solutions</Typography>
                    <Typography paragraph sx={{ mt: 1 }}>
                        PMP-certified expert with a decade of experience leading system migrations and software development projects through the full SDLC. Skilled in project management methodologies, vendor management, and utilizing tools like Jira, Figma, and specialized enterprise systems like SAPUI5 and ABAP.
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                        <Typography sx={{ pr: 1, fontWeight: 'bold' }}>Tech stack:</Typography>
                        {labelsThird.map((label) => (
                            <Chip key={label} label={label} />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Expertise;