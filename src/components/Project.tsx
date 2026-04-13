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
        name: "HLC Literacy Assessment Web App",
        images: [workPlaceholder],
        category: "Full-Stack Web Development",
        description: "Architected a responsive Single Page Application for literacy assessment. Developed a React/TypeScript frontend and integrated a Python/Django machine learning backend for audio pattern matching. Secured and containerized the Linux deployment using Docker and Nginx.",
        tech: ["React", "TypeScript", "Django", "Docker", "MySQL"],
    },
    {
        name: "Full-Stack Hotel Reservation System",
        images: [Screen01, Screen02],
        category: "Full-Stack Mobile Development",
        description: "Built a full-stack hotel reservation system from scratch. Engineered the RESTful backend API with Java Spring Boot and Spring Data JPA, while developing the native Android client using Java and Retrofit for dynamic room availability and multi-guest bookings.",
        tech: ["Java", "Spring Boot", "Android SDK", "MySQL", "REST API"],
        sourceLink: "https://github.com/kamanl16/MCDA5550_A00476407_MyHotelApp/"
    },
    {
        name: "Real-Time Telemetry Data Pipeline",
        images: [workPlaceholder], 
        category: "Backend & Data Engineering",
        description: "Designed and built a Java Spring Boot Kafka consumer application to ingest real-time JSON telemetry from over 10,000 retail devices. Implemented data processing pipelines to index logs into Elasticsearch for Kibana health visualization.",
        tech: ["Java", "Spring Boot", "Kafka", "Elasticsearch", "JSON"],
    },
    {
        name: "Distributed Terminal Core Architecture",
        images: [workPlaceholder],
        category: "Systems Engineering (C++/Java)",
        description: "Engineered a multi-layered API for a distributed kiosk network serving 7.4M residents. Built foundational C++ firmware logic for secure memory writes and established a JNI middleware bridge to the Java application layer.",
        tech: ["C++", "Java", "JNI", "MS SQL Server", "XML"],
    },
    {
        name: "Large-Scale Public Transport Subsidy System",
        images: [workPlaceholder],
        category: "High-Concurrency Architecture",
        description: "Extended legacy architecture to support a massive subsidy scheme handling 3.8M monthly users. Designed a robust offline-first synchronization protocol and a highly resilient local persistence layer using native MS SQL Server to ensure zero data loss.",
        tech: ["Java", "C++", "MS SQL Server", "System Design"],
    },
    {
        name: "Government Voucher & Identity API Integration",
        images: [workPlaceholder],
        category: "API & Security Development",
        description: "Recovered unmerged code and personally developed critical logic for an identity-based concession card transfer system. Implemented a stateless identity verification flow against backend REST APIs that strictly ensured zero local storage of sensitive data.",
        tech: ["Java", "REST APIs", "C++", "Security Design"],
    },
    {
        name: "Unified Azure Data Architecture",
        images: [workPlaceholder],
        category: "Database Design & Prototyping",
        description: "Analyzed legacy non-profit data structures to design the relational schema for a new Azure-based unified reporting system serving a 9-centre network. Built functional intermediate prototypes using Google Apps Script to immediately streamline data collection.",
        tech: ["Azure", "SQL", "Google Apps Script", "Figma"],
    },
    {
        name: "Android Educational Application Suite",
        images: [workPlaceholder],
        category: "Mobile Application Development",
        description: "Developed and published 5 distinct Android applications from concept to production. Handled memory management, interactive game loop design, and interactive UI component creation using native Java and the Android SDK.",
        tech: ["Java", "Android SDK", "SVN", "UI/UX Design"],
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