import React from 'react';
import { Box, Typography, Card, CardContent, useTheme, Grow } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useInView } from 'react-intersection-observer';

const educationData = [
    {
        degree: "Master of Science in Computing and Data Analytics",
        university: "Saint Mary's University",
        date: "Sep 2023 – Jan 2025",
        location: "Halifax, NS",
        gpa: "GPA: 4.15 / 4.30",
        infoFontFamily: "'Consolas', monospace",
        details: [
            "Completed courses in Software Development, Statistics, UI/UX Design, Data Management, and Visualization, strengthening technical and analytical skills."
        ]
    },
    {
        degree: "Bachelor of Science in Internet & Multimedia Technologies",
        university: "The Hong Kong Polytechnic University",
        date: "Sep 2011 – Oct 2013",
        location: "Hong Kong",
        gpa: "GPA: 3.35 / 4.0",
        infoFontFamily: "'Consolas', monospace",
        details: [
            "Graduated with Second Class Honours, Division 1 (2:1).",
            "Built 2D/3D games with OGRE SDK and an interactive fish tank app with Microsoft Kinect."
        ]
    }
];

function Education() {
    const theme = useTheme();
    
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const cardTextColor = theme.palette.mode === 'dark' ? 'rgb(39, 40, 34)' : theme.palette.text.primary;
    const cardSecondaryTextColor = theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.6)' : theme.palette.text.secondary;

    return (
        <Box ref={ref} id="education" sx={{ py: '5%', px: { xs: '5%', md: '10%' }, textAlign: 'left' }}>
            <Typography variant="h3">Education</Typography>
            <Grid2 container spacing={4}>
                {educationData.map((edu, index) => (
                    <Grid2 xs={12} md={6} key={index}>
                        <Grow in={inView} style={{ transformOrigin: '0 0 0' }} timeout={500 * (index + 1)}>
                            <Card elevation={3} sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#fff' : theme.palette.background.paper, height: '100%',
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: 6,
                                } }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Box sx={{
                                            mr: 2,
                                            p: 1.5,
                                            backgroundColor: 'rgba(0, 129, 203, 0.1)',
                                            borderRadius: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <SchoolIcon sx={{ color: 'rgb(0, 111, 202)' }} />
                                        </Box>
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: cardTextColor }}>{edu.degree}</Typography>
                                            <Typography variant="body1" sx={{ color: cardSecondaryTextColor }}>{edu.university}</Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2, color: cardSecondaryTextColor }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <CalendarTodayIcon fontSize="small" />
                                            <Typography variant="body2" sx={{ fontFamily: edu.infoFontFamily }}>{edu.date}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <LocationOnIcon fontSize="small" />
                                            <Typography variant="body2" sx={{ fontFamily: edu.infoFontFamily }}>{edu.location}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <EmojiEventsIcon fontSize="small" />
                                            <Typography variant="body2" sx={{ fontFamily: edu.infoFontFamily }}>{edu.gpa}</Typography>
                                        </Box>
                                    </Box>
                                    
                                    {edu.details.map((detail, i) => (
                                        <Typography key={i} variant="body2" sx={{ color: cardSecondaryTextColor, display: 'list-item', ml: 2, mb:1 }}>
                                            {detail}
                                        </Typography>
                                    ))}
                                </CardContent>
                            </Card>
                        </Grow>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
}

export default Education;