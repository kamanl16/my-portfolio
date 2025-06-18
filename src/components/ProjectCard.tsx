// src/components/ProjectCard.tsx

import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, CardActions, Chip, Button, IconButton, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface ProjectCardProps {
    project: {
        name: string;
        images: string[];
        category: string;
        description: string;
        tech: string[];
        sourceLink?: string;
    };
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = project.images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
    };

    const cardTextColor = theme.palette.mode === 'dark' ? 'rgb(39, 40, 34)' : theme.palette.text.primary;
    const cardSecondaryTextColor = theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.6)' : theme.palette.text.secondary;

    return (
        <Card elevation={3} sx={{
            backgroundColor: theme.palette.mode === 'dark' ? '#fff' : theme.palette.background.paper,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 6,
            }
        }}>
            <Box sx={{ position: 'relative' }}>
                <Box
                    component="img"
                    sx={{
                        height: 200,
                        display: 'block',
                        overflow: 'hidden',
                        width: '100%',
                        objectFit: 'cover',
                    }}
                    src={project.images[activeStep]}
                    alt={`${project.name} screenshot ${activeStep + 1}`}
                />
                <Chip label={project.category} sx={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                }} />
                {maxSteps > 1 && (
                    <>
                        <IconButton
                            onClick={handleBack}
                            sx={{ position: 'absolute', top: '50%', left: 8, transform: 'translateY(-50%)', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.3)', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}
                        >
                            <ArrowBackIosNewIcon />
                        </IconButton>
                        <IconButton
                            onClick={handleNext}
                            sx={{ position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.3)', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}
                        >
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </>
                )}
            </Box>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: cardTextColor }}>
                    {project.name}
                </Typography>
                <Typography variant="body2" sx={{ my: 1, color: cardSecondaryTextColor }}>
                    {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                    {project.tech.map((tech, i) => (
                        <Chip key={i} label={tech} sx={{ fontFamily: "'Courier Prime', monospace", backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : 'rgba(0, 0, 0, 0.08)',
                                color: theme.palette.text.primary, }} />
                    ))}
                </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', p: 2 }}>
                {project.sourceLink && ( // Only show the button if sourceLink is not null
                    <Button
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHubIcon />}
                    sx={{ color: cardSecondaryTextColor }}
                >
                    Source Code
                </Button>
                )}
            </CardActions>
        </Card>
    );
}