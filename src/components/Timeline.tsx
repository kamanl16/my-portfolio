// src/components/Timeline.tsx
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Typography, Box } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const timelineData = [
    {
        date: "Aug 2024 – Oct 2024",
        title: "Graduate Project Developer & Consultant",
        company: "Saint Mary's University & Halifax Learning Centre",
        icon: faCode,
        description: "Architected a full-stack SPA for literacy assessment using React, TypeScript, and Django, handling end-to-end delivery from UI design to deployment.",
        responsibilities: [
            "Engineered ML-driven audio features by integrating frontend recording components with backend Python APIs.",
            "Managed containerized deployment pipelines using Docker and secured the Linux server environment via Nginx and Certbot.",
            "Designed high-fidelity wireframes in Figma from scratch and defined the technical MVP roadmap."
        ]
    },
    {
        date: "May 2024 – Aug 2024",
        title: "Graduate Project Consultant & Database Analyst",
        company: "Saint Mary's University & Women's Centres Connect",
        icon: faDatabase,
        description: "Analyzed complex legacy data structures to define the schema for a new Azure-based unified reporting system serving a 9-centre network.",
        responsibilities: [
            "Authored Functional Specification Documents (FSD) to translate ambiguous operational needs into precise technical requirements.",
            "Built a functional intermediate data-collection pipeline using Google Apps Script to actively reduce manual entry errors.",
            "Designed foundational UI components and collaborated on the relational database architecture."
        ]
    },
    {
        date: "Jul 2022 – Jun 2024",
        title: "Technical Lead & Project Manager - Finance Solutions",
        company: "Swire Coca-Cola Limited & Swire Pacific Limited",
        icon: faServer,
        description: "Managed the end-to-end integration of 20+ custom ABAP APIs, connecting an internal financial workflow system with the new SAP S/4 HANA core across Hong Kong, Vietnam, and Cambodia.",
        responsibilities: [
            "Spearheaded the remote customization of a scalable SAPUI5 workflow platform to replace legacy systems, eliminating 100% of external licensing costs.",
            "Led data integrity validation during high-stakes system cutovers, resulting in 11,000+ transactions posting automatically to SAP without manual intervention.",
            "Transitioned delivery operations to an Agile-hybrid framework, partnering directly with developers to refine technical solutions and API schemas."
        ]
    },
    {
        date: "Apr 2020 – Jul 2022",
        title: "Technical Lead & Assistant Project Manager",
        company: "Octopus Cards Limited, Hong Kong",
        icon: faCode,
        description: "Led technical deliveries and system architecture for a 7.4M+ user smart card network, specializing in secure identity verification and high-concurrency API integrations.",
        responsibilities: [
            "Audited and recovered a stalled, unmerged core codebase (C++/Java), programming critical state mechanics to secure a government-mandated launch.",
            "Programmed idempotent transaction logic and stateless real-time verification flows within distributed kiosk applications to securely process public vouchers.",
            "Designed exception-handling software routines for external hardware integrations, achieving a 95% transaction success rate despite mid-transfer user errors."
        ]
    },
    {
        date: "Apr 2017 – Mar 2020",
        title: "Senior System Engineer",
        company: "Octopus Cards Limited, Hong Kong",
        icon: faServer,
        description: "Assumed architectural ownership of the OSP/SK2 distributed kiosk network (50+ nodes), managing the C++/Java stack and scaling backend infrastructure for 3.8M monthly users.",
        responsibilities: [
            "Built a standalone data ingestion application using Java Spring Boot and Apache Kafka to stream real-time JSON telemetry from 10,000+ devices into Elasticsearch.",
            "Programmed secure, low-level on-card write logic to guarantee transaction atomicity and completely prevent duplicate balance claims.",
            "Deconstructed complex administrative fee logic into 8 distinct software pathways, designing end-to-end UI flows and backend execution scripts."
        ]
    },
    {
        date: "Jul 2013 – Mar 2017",
        title: "System Engineer / Assistant System Engineer",
        company: "Octopus Cards Limited, Hong Kong",
        icon: faCode,
        description: "Co-developed foundational terminal APIs and low-level C++ firmware code bridging smart card hardware to Java execution environments via JNI.",
        responsibilities: [
            "Standardized backend enterprise integrations using Apache CXF and Ant scripting to automate WSDL-to-Java stub generation.",
            "Engineered local MS SQL Server relational databases on remote client terminals, optimizing query execution plans for sub-second content rendering.",
            "Spearheaded technical investigations into hardware-software communication tolerances, refactoring C++ physical handling logic to achieve an 80% reduction in downtime."
        ]
    },
    {
        date: "Jun 2012 – May 2013",
        title: "Mobile Application Programmer Trainee",
        company: "Top Pine Technology Limited, Hong Kong",
        icon: faCode,
        description: "Developed and published 5 distinct Android applications from concept to production using Java and the Android SDK.",
        responsibilities: [
            "Built interactive UI components and dynamic game loops for educational arithmetic and vocabulary apps.",
            "Managed memory limits and application lifecycles natively within the mobile environment.",
            "Published applications directly to production while managing version control via SVN."
        ]
    }
];

function Timeline() {
  const theme = useTheme();

  const commonContentStyle = {
    background: theme.palette.mode === 'dark' ? '#fff' : theme.palette.background.paper,
    color: theme.palette.mode === 'dark' ? 'rgb(39, 40, 34)' : theme.palette.text.primary,
    boxShadow: theme.shadows[2],
  };

  const commonArrowStyle = {
    borderRight: `7px solid ${theme.palette.mode === 'dark' ? '#fff' : theme.palette.grey[400]}`,
  };

  const commonIconStyle = {
    background: 'rgb(0, 111, 202)',
    color: '#fff',
    boxShadow: `0 0 0 4px ${theme.palette.grey[300]}`,
  };

  const cardTextColor = theme.palette.mode === 'dark' ? 'rgb(39, 40, 34)' : theme.palette.text.primary;
  const cardSecondaryTextColor = theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.7)' : theme.palette.text.secondary;

  return (
    <Box id="history" sx={{ py: '5%', px: { xs: '5%', md: '10%' }, textAlign: 'left' }}>
        <Typography variant="h3" sx={{ mb: 4 }}>Career History</Typography>
        <VerticalTimeline lineColor={theme.palette.grey[400]}>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
                key={index}
                contentStyle={commonContentStyle}
                contentArrowStyle={commonArrowStyle}
                date={item.date}
                iconStyle={commonIconStyle}
                icon={<FontAwesomeIcon icon={item.icon} style={{ color: '#fff' }} />}
            >
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: cardTextColor, mb: 0 }}>{item.title}</Typography>
                <Typography variant="body1" sx={{ fontStyle: 'italic', color: cardSecondaryTextColor, mb: 1 }}>{item.company}</Typography>
                <Typography variant="body2" sx={{ color: cardSecondaryTextColor, mb: 2}}>
                    {item.description}
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: cardTextColor, mt: 1}}>Key Technical Execution:</Typography>
                <Box component="ul" sx={{ pl: 1, m: 0, color: cardSecondaryTextColor }}>
                    {item.responsibilities.map((resp, i) => (
                        <Typography key={i} component="li" variant="body2" sx={{ display: 'flex', gap: 1, mt: 1}}>
                            <CheckCircleIcon sx={{ color: cardSecondaryTextColor, fontSize: '1.2rem', mt: 0.2 }}/>
                            {resp}
                        </Typography>
                    ))}
                </Box>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
    </Box>
  );
}

export default Timeline;