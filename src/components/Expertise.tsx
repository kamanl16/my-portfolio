// src/components/Expertise.tsx
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { Box, Typography, Chip, useTheme } from '@mui/material';

// Reorganized to prioritize Full-Stack, Data, and Leadership/DevOps
const fullStackSkills = [
    "Java", "Spring Boot", "React", "TypeScript", "Python", "C++", "REST APIs", "Android SDK"
];

const dataSkills = [
    "SQL", "PostgreSQL", "MySQL", "MongoDB", "Elasticsearch", "Kafka", "Data Modeling"
];

const leadershipSkills = [
    "Docker", "AWS", "Azure", "GitHub Actions", "Agile/Scrum", "Jira", "PMP®", "PSM I"
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
                {/* Pillar 1: Software Engineering */}
                <Box>
                    <FontAwesomeIcon icon={faReact} size="3x" style={{ color: theme.palette.text.primary }} />
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>Full-Stack Development</Typography>
                    <Typography paragraph sx={{ mt: 1 }}>
                        Building robust, high-availability applications from responsive React/TypeScript frontends to scalable Java and C++ backends. Experienced in decoupling complex business logic into efficient, clean code.
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                        {fullStackSkills.map((label) => (
                            <Chip key={label} label={label} sx={{ fontFamily: "'Courier Prime', monospace" }} />
                        ))}
                    </Box>
                </Box>

                {/* Pillar 2: Data & Analytics */}
                <Box>
                    <FontAwesomeIcon icon={faDatabase} size="3x" style={{ color: theme.palette.text.primary }} />
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>Data Analytics & Infrastructure</Typography>
                    <Typography paragraph sx={{ mt: 1 }}>
                        Designing resilient database schemas, real-time data ingestion pipelines, and unified reporting systems. Proficient in transforming complex, large-scale data into structured, actionable insights.
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                        {dataSkills.map((label) => (
                            <Chip key={label} label={label} sx={{ fontFamily: "'Courier Prime', monospace" }}/>
                        ))}
                    </Box>
                </Box>

                {/* Pillar 3: DevOps & Project Management */}
                <Box>
                    <FontAwesomeIcon icon={faDocker} size="3x" style={{ color: theme.palette.text.primary }} />
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>DevOps & Technical Leadership</Typography>
                    <Typography paragraph sx={{ mt: 1 }}>
                        Bridging the gap between engineering and business. Certified Project Manager (PMP, PSM I) with deep expertise in Agile workflows, containerized CI/CD deployments, and leading cross-border technical rollouts.
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                        {leadershipSkills.map((label) => (
                            <Chip key={label} label={label} sx={{ fontFamily: "'Courier Prime', monospace" }} />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Expertise;