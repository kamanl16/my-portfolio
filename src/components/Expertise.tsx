import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { Box, Typography, Chip, useTheme } from '@mui/material';


const projectManagementSkills = [
    "PMP", "PSM I", "Agile", "Waterfall", "SDLC", "Risk Assessment", "Vendor Management", "Change Management", "Jira", "Figma"
];

const fullStackSkills = [
    "Java", "Python", "TypeScript", "JavaScript", "React", "HTML/CSS", "SAPUI5",
    "Django", "ASP.NET", "REST", "SOAP", "Android SDK", "SQL", "ABAP"
];

const cloudAndDataSkills = [
    "AWS", "Azure", "Docker", "Jenkins", "Git", "RabbitMQ", "Kafka",
    "SAP HANA S/4", "MySQL", "MongoDB", "Elasticsearch", "Power BI", "Tableau"
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
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>Full Stack Development & System Integration</Typography>
                    <Typography paragraph sx={{ mt: 1 }}>
                        Experience in full-stack development, building and integrating diverse systems using technologies like Java, Python, and React. Proven ability to deliver end-to-end solutions.
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                        {fullStackSkills.map((label) => (
                            <Chip key={label} label={label} sx={{ fontFamily: "'Courier Prime', monospace" }} />
                        ))}
                    </Box>
                </Box>
                <Box>
                    <FontAwesomeIcon icon={faDocker} size="3x" style={{ color: theme.palette.text.primary }} />
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>Cloud, DevOps & Data Platforms</Typography>
                    <Typography paragraph sx={{ mt: 1 }}>
                        Proficient in leveraging cloud platforms like AWS and Azure, implementing DevOps practices with Docker and CI/CD pipelines, and managing data analytics solutions.
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                        {cloudAndDataSkills.map((label) => (
                            <Chip key={label} label={label} sx={{ fontFamily: "'Courier Prime', monospace" }}/>
                        ))}
                    </Box>
                </Box>
                <Box>
                    <FontAwesomeIcon icon={faProjectDiagram} size="3x" style={{ color: theme.palette.text.primary }} />
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>Technical Project Management</Typography>
                    <Typography paragraph sx={{ mt: 1 }}>
                        PMP and PSM I certified with over 10 years of experience leading system migrations and the full SDLC for enterprise-scale applications using Agile and hybrid methodologies.
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                        {projectManagementSkills.map((label) => (
                            <Chip key={label} label={label} sx={{ fontFamily: "'Courier Prime', monospace" }} />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Expertise;