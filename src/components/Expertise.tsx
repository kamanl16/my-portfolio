// src/components/Expertise.tsx
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faJava } from '@fortawesome/free-brands-svg-icons';
import { Box, Typography, Chip, useTheme } from '@mui/material';

const frontendSkills = [
    "React", "TypeScript", "JavaScript", "HTML/CSS", "Android SDK", "Figma", "Responsive Design"
];

const backendSkills = [
    "Java", "Spring Boot", "Python", "Django", "C++", "REST API", "SQL", "MySQL", "MongoDB", "Elasticsearch", "Kafka"
];

const devOpsAndQualitySkills = [
    "Docker", "AWS", "Git", "Jenkins", "Unit Testing", "Systematic Debugging", "Jira", "Agile/Scrum"
];

function Expertise() {
    const theme = useTheme();
    return (
        <Box id="expertise" sx={{ py: '5%', px: { xs: '5%', md: '10%' }, textAlign: 'left' }}>
            <Typography variant="h3" sx={{ mb: 4 }}>Expertise</Typography>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: '50px'
            }}>
                <Box>
                    <FontAwesomeIcon icon={faReact} size="3x" style={{ color: theme.palette.text.primary }} />
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>Frontend & UI Development</Typography>
                    <Typography paragraph sx={{ mt: 1 }}>
                        Building intuitive, responsive, and dynamic user interfaces using modern frameworks like React and TypeScript. Dedicated to clean code, component reusability, and seamless user experiences.
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                        {frontendSkills.map((label) => (
                            <Chip key={label} label={label} sx={{ fontFamily: "'Courier Prime', monospace" }} />
                        ))}
                    </Box>
                </Box>
                <Box>
                    <FontAwesomeIcon icon={faJava} size="3x" style={{ color: theme.palette.text.primary }} />
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>Backend & Systems Architecture</Typography>
                    <Typography paragraph sx={{ mt: 1 }}>
                        Architecting and integrating scalable backend systems, RESTful APIs, and complex databases. Experienced in high-concurrency environments utilizing Java, Spring Boot, and C++.
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                        {backendSkills.map((label) => (
                            <Chip key={label} label={label} sx={{ fontFamily: "'Courier Prime', monospace" }}/>
                        ))}
                    </Box>
                </Box>
                <Box>
                    <FontAwesomeIcon icon={faDocker} size="3x" style={{ color: theme.palette.text.primary }} />
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>DevOps & Quality Assurance</Typography>
                    <Typography paragraph sx={{ mt: 1 }}>
                        Committed to test-driven development, systematic hypothesis debugging, and containerized deployments. Proficient in Docker, AWS, and establishing reliable testing environments.
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                        {devOpsAndQualitySkills.map((label) => (
                            <Chip key={label} label={label} sx={{ fontFamily: "'Courier Prime', monospace" }} />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Expertise;