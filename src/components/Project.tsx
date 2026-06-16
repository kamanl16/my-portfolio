// src/components/Project.tsx
import React from 'react';
import { Box, Typography, Grow } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';

import Screen01 from '../assets/images/hotel-app/HotelAppImage01.png';
import Screen02 from '../assets/images/hotel-app/HotelAppImage02.png';
import workPlaceholder from '../assets/images/work-project-placeholder.png';

const projectData = [
    {
        name: "Literacy Assessment Web Application",
        images: [workPlaceholder],
        category: "Lead Full-Stack Developer & DevOps",
        description: "Architected a responsive Single Page Application (SPA) with complex state management for real-time student assessments. Engineered machine learning-driven audio features by integrating frontend recording components with backend Python/Django pattern-matching APIs for automated pronunciation grading. Developed and managed a containerized deployment pipeline using Docker, securing the Linux server environment with Nginx and Certbot (HTTPS).",
        tech: ["React", "TypeScript", "Python (Django)", "MySQL", "Docker"],
    },
    {
        name: "Kaka Life: Full-Stack Community Platform",
        images: [workPlaceholder], 
        category: "Full-Stack Developer & Data Engineer",
        description: "Established a secure, cloud-hosted backend utilizing Supabase for PostgreSQL database management, implementing custom data-sync schema tracking and row-level authorization. Engineered automated data-ingestion pipelines using GitHub Actions automation (daily-sync.yml) and serverless execution scripts, programming custom retry mechanisms to manage localized formatting and ensure fail-safe synchronization.",
        tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "GitHub Actions", "Tailwind CSS"],
        sourceLink: "https://github.com/kamanl16/kaka-life-app",
        demoLink: "https://kaka-life-app.vercel.app/"
    },
    {
        name: "Unified Regional Reporting System",
        images: [workPlaceholder],
        category: "Technical Consultant & Database Analyst",
        description: "Analyzed complex legacy data structures to define the database schema and authored formal Functional Specification Documents (FSD) for a new Azure-based unified reporting system serving 9 sub-centres. Engineered a functional intermediate data-collection pipeline using Google Apps Script to immediately reduce manual entry errors while the core cloud system was under development.",
        tech: ["Microsoft Azure", "SQL", "Google Apps Script", "Data Modeling"],
    },
    {
        name: "Windows 95 Chinese Typing Game Replica",
        images: [workPlaceholder],
        category: "Frontend Developer (AI-Assisted)",
        description: "Leveraged AI-assisted engineering (Anti-Gravity) to rapidly reconstruct complex game physics, interactive game loops, and real-time typing validation algorithms. Meticulously designed the graphical user interface from scratch to match the exact visual assets, typography, and window interactions of the classic Windows 95 operating system.",
        tech: ["AI", "Game Development", "UI/UX", "State Management"],
        sourceLink: "https://github.com/kamanl16/win95-zh-typing"
    },
    {
        name: "Native Android Hotel Reservation System",
        images: [Screen01, Screen02],
        category: "Backend & Mobile Developer",
        description: "Architected a RESTful backend API with Java Spring Boot and Spring Data JPA to execute CRUD operations on a MySQL database. Developed a native Android client using the Retrofit library for seamless API communication, enabling dynamic room availability searches and multi-guest booking.",
        tech: ["Java", "Spring Boot", "Android SDK", "MySQL", "REST APIs"],
        sourceLink: "https://github.com/kamanl16/MCDA5550_A00476407_MyHotelApp/"
    }
];

function Project() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Box ref={ref} id="projects" sx={{ py: '5%', px: { xs: '5%', md: '10%' }, textAlign: 'left' }}>
            <Typography variant="h3" sx={{ mb: 4 }}>Development Projects</Typography>
            <Grid2 container spacing={4} sx={{ alignItems: 'stretch' }}>
                {projectData.map((proj, index) => (
                    <Grid2 xs={12} sm={6} lg={4} key={index}>
                        <Grow in={inView} style={{ transformOrigin: '0 0 0' }} timeout={500 * ((index % 3) + 1)}>
                            <div style={{ height: '100%' }}>
                                <ProjectCard project={proj} />
                            </div>
                        </Grow>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
}

export default Project;