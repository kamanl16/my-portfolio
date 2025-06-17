import React from 'react';
import { Box, Typography, Card, CardContent, useTheme, Grow } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
// Reverted back to the previous icon
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useInView } from 'react-intersection-observer';

const certificationData = [
    {
        name: "Project Management Professional (PMP)",
        issuer: "Project Management Institute",
        date: "Expires Feb 2028",
        description: "A globally recognized certification for project management proficiency and leadership."
    },
    {
        name: "Professional Scrum Master I (PSM I)",
        issuer: "Scrum.org",
        date: "Issued May 2025",
        description: "Demonstrates a fundamental level of Scrum mastery and understanding of the framework."
    },
    {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services (AWS)",
        date: "Expires May 2028",
        description: "Validates foundational, high-level understanding of AWS Cloud, services, and terminology."
    }
];

function Certifications() {
    const theme = useTheme();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const cardTextColor = theme.palette.mode === 'dark' ? 'rgb(39, 40, 34)' : theme.palette.text.primary;
    const cardSecondaryTextColor = theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.6)' : theme.palette.text.secondary;

    return (
        <Box ref={ref} id="certifications" sx={{ py: '5%', px: { xs: '5%', md: '10%' }, textAlign: 'left' }}>
            <Typography variant="h3">Certifications</Typography>
            <Grid2 container spacing={4}>
                {certificationData.map((cert, index) => (
                    <Grid2 xs={12} md={6} key={index}>
                        <Grow in={inView} style={{ transformOrigin: '0 0 0' }} timeout={500 * (index + 1)}>
                            <Card elevation={3} sx={{
                                backgroundColor: theme.palette.mode === 'dark' ? '#fff' : theme.palette.background.paper,
                                height: '100%',
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: 6,
                                }
                            }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <Box sx={{
                                            mr: 2,
                                            p: 1,
                                            backgroundColor: 'rgba(0, 129, 203, 0.1)',
                                            borderRadius: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <WorkspacePremiumIcon sx={{ color: 'rgb(0, 111, 202)' }} />
                                        </Box>
                                        <Box><Typography variant="h6" sx={{ fontWeight: 'bold', color: cardTextColor }}>
                                            {cert.name}
                                        </Typography>
                                        

                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 0.5, mb: 1.5, color: cardSecondaryTextColor}}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                    <ApartmentIcon fontSize="small" />
                                                    <Typography variant="body2">{cert.issuer}</Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                    <CalendarTodayIcon fontSize="small" />
                                                    <Typography variant="body2">{cert.date}</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Typography variant="body2" sx={{ color: cardSecondaryTextColor, pl: '56px' }}>
                                        {cert.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grow>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
}

export default Certifications;