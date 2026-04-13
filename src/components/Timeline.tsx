// src/components/Timeline.tsx
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBriefcase, faServer } from '@fortawesome/free-solid-svg-icons';
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
            "Managed containerized deployment pipelines using Docker and secured the environment via Nginx and Certbot.",
            "Designed high-fidelity wireframes in Figma and defined the MVP roadmap."
        ]
    },
    {
        date: "May 2024 – Aug 2024",
        title: "Graduate Project Consultant & Business Analyst",
        company: "Saint Mary's University & Women's Centres Connect",
        icon: faServer,
        description: "Analyzed legacy data structures to define the schema for a new Azure-based unified reporting system serving a 9-centre network.",
        responsibilities: [
            "Authored Functional Specification Documents to translate operational needs into technical engineering requirements.",
            "Built a functional intermediate reporting solution using Google Apps Script to streamline data collection.",
            "Designed foundational UI components and collaborated on relational database design."
        ]
    },
    {
        date: "Jul 2022 – Jun 2024",
        title: "Project Manager - Finance Solutions",
        company: "Swire Coca-Cola Limited & Swire Pacific Limited",
        icon: faBriefcase,
        description: "Led SAP S/4 HANA migrations and remote deployments of customized SAPUI5 workflow systems across Hong Kong, Vietnam, and Cambodia.",
        responsibilities: [
            "Directed cross-functional development teams to build and integrate 20+ custom ABAP APIs.",
            "Transitioned delivery models to an Agile-hybrid framework, establishing Jira product backlogs for MVP release cycles.",
            "Rescued a critical workflow project mid-flight, delivering a solution that processed 15,000+ applications seamlessly."
        ]
    },
    {
        date: "Apr 2020 – Jul 2022",
        title: "Assistant Project Manager (Technical Lead)",
        company: "Octopus Cards Limited, Hong Kong",
        icon: faBriefcase,
        description: "Led technical deliveries for a 7.4M+ user smart card network, including critical government disbursement initiatives and identity-based transfer systems.",
        responsibilities: [
            "Audited and recovered unmerged C++/Java codebases, personally coding critical logic to meet strict government deadlines.",
            "Implemented stateless identity verification flows connecting kiosk frontends with backend REST APIs.",
            "Designed fault-tolerant architecture handling edge-case transaction failures, achieving 99.9% system uptime."
        ]
    },
    {
        date: "Apr 2017 – Mar 2020",
        title: "Senior System Engineer",
        company: "Octopus Cards Limited, Hong Kong",
        icon: faServer,
        description: "Assumed architectural ownership of the OSP/SK2 distributed kiosk network (50+ nodes), managing the C++/Java stack and scaling backend infrastructure.",
        responsibilities: [
            "Built a Java Spring Boot Kafka consumer to ingest real-time JSON telemetry from 10,000+ devices into Elasticsearch.",
            "Designed a robust offline-first synchronization protocol and managed the MS SQL Server local persistence layer.",
            "Extended legacy infrastructure to support a massive Public Transport Fare Subsidy Scheme for 3.8M monthly users."
        ]
    },
    {
        date: "Jul 2013 – Mar 2017",
        title: "System Engineer / Assistant System Engineer",
        company: "Octopus Cards Limited, Hong Kong",
        icon: faCode,
        description: "Developed core API libraries and foundational C++ firmware logic bridging smart card readers to Java applications via JNI.",
        responsibilities: [
            "Executed contract-first SOA implementations using Apache CXF and Ant scripts for WSDL-to-Java stub generation.",
            "Re-engineered hardware-software interaction logic in C++ via systematic debugging, reducing hardware downtime by 80%.",
            "Developed localized MS SQL Server integration logic handling high-frequency writes for transactional tracking."
        ]
    },
    {
        date: "Jun 2012 – May 2013",
        title: "Mobile Application Programmer Trainee",
        company: "Top Pine Technology Limited, Hong Kong",
        icon: faCode,
        description: "Developed and launched 5 distinct Android applications from concept to completion using Java and the Android SDK.",
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
        <Typography variant="h3">Career History</Typography>
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
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: cardTextColor, mb: -2 }}>{item.title}</Typography>
                <Typography variant="body1" sx={{ fontStyle: 'italic', color: cardSecondaryTextColor, mb: 1 }}>{item.company}</Typography>
                <Typography variant="body2" sx={{ color: cardSecondaryTextColor, mb: 2}}>
                    {item.description}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: cardTextColor, mt: 1}}>Key Responsibilities:</Typography>
                <Box component="ul" sx={{ pl: 1, m: 0, color: cardSecondaryTextColor }}>
                    {item.responsibilities.map((resp, i) => (
                        <Typography key={i} component="li" variant="body2" sx={{ display: 'flex', gap: 1, mt: 1}}>
                            <CheckCircleIcon sx={{ color: cardSecondaryTextColor, fontSize: '1.2rem' }}/>
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