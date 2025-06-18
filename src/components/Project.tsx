import React from 'react';
import { Box, Typography, Grow } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard'; // Import the new component

import Screen01 from '../assets/images/hotel-app/HotelAppImage01.png';
import Screen02 from '../assets/images/hotel-app/HotelAppImage02.png';
import workPlaceholder from '../assets/images/work-project-placeholder.png';

const projectData = [
    {
        name: "Full-Stack Hotel Reservation System",
        images: [Screen01, Screen02],
        category: "Full-Stack",
        description: "Architected and developed a full-stack hotel reservation system featuring a Java Spring Boot backend and a native Android client application.",
        tech: ["Java", "Spring Boot", "Android SDK", "MySQL", "RESTful API"],
        sourceLink: "https://github.com/kamanl16/MCDA5550_A00476407_MyHotelApp/"
    },
    {
        name: "SAP S/4 HANA Migration & Workflow Automation",
        images: [workPlaceholder],
        category: "Work Project (ERP)",
        description: "Led an SAP S/4 HANA migration for the FI/CO module, delivering custom SAPUI5 workflows that processed over 15,000 applications in the first six months.",
        tech: ["SAPUI5", "ABAP", "SAP HANA S/4", "SQL"],
    },
    {
        name: "Octopus Kiosk - HK Consumption Voucher Scheme",
        images: [workPlaceholder], 
        category: "Work Project (Public Initiative)",
        description: "Delivered critical functionality for a government scheme on a 3-month deadline, enabling over 6.5 million residents to collect vouchers while maintaining >99.9% uptime.",
        tech: ["Java", "C++", "JNI", "SOAP"],
    },
    {
        name: "Octopus Kiosk - System Development & Recovery",
        images: [workPlaceholder],
        category: "Work Project (Hardware & Software)",
        description: "Co-developed a new kiosk system that migrated 500,000+ cards. Later reduced kiosk downtime by 80% by leading a root cause analysis and collaborating with the hardware vendor on physical modifications.",
        tech: ["Java", "C++", "JNI", "ASP.NET", "Vendor Management"],
    },
];

function Project() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Box ref={ref} id="projects" sx={{ py: '5%', px: { xs: '5%', md: '10%' }, textAlign: 'left' }}>
            <Typography variant="h3" sx={{ mb: 4 }}>Projects</Typography>
            <Grid2 container spacing={4} sx={{ alignItems: 'stretch' }}> {/* Ensure items stretch */}
                {projectData.map((proj, index) => (
                    <Grid2 xs={12} sm={6} lg={4} key={index}>
                        <Grow in={inView} style={{ transformOrigin: '0 0 0' }} timeout={500 * (index + 1)}>
                             {/* Added a div with height: '100%' to ensure the card can stretch */}
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