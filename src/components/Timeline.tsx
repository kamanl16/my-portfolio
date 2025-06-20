import React from 'react';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Typography, Box } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const timelineData = [
    {
        date: "Sep 2023 – Jun 2024",
        title: "Temporary Project Manager - Finance Solutions",
        company: "Swire Coca-Cola Limited, Hong Kong (Remote)",
        description: "Orchestrated the remote deployment of a customized SAPUI5 workflow system across Vietnam and Cambodia, eliminating 100% of legacy system costs.",
        responsibilities: [
            "Managed the end-to-end remote project across multiple time zones.",
            "Negotiated a consolidated requirements list to overcome scope creep.",
            "Evaluated and prioritized over 50 change requests post-launch."
        ]
    },
    {
        date: "Jul 2022 – Aug 2023",
        title: "Project Manager - Finance Solutions",
        company: "Swire Pacific Limited - Beverage Division, Hong Kong",
        description: "Led an SAP S/4 HANA migration for the FI/CO module, delivering custom workflows that processed over 15,000 applications and streamlined financial approvals by 50%.",
        responsibilities: [
            "Rescued a critical, in-progress workflow project and ensured successful delivery.",
            "Directed a cross-functional team to build and integrate ~20 custom ABAP APIs.",
            "Established an Agile-like enhancement process using a Jira Product Backlog."
        ]
    },
    {
        date: "Jul 2013 – Jul 2022",
        title: "Assistant Project Manager",
        company: "Octopus Cards Limited, Hong Kong",
        description: "Promoted through four roles from Assistant Software Engineer to Assistant Project Manager, overseeing the kiosk network serving over 7.4 million residents.",
        responsibilities: [
            "Delivered critical functionality for the HK Consumption Voucher & Public Transport Subsidy schemes.",
            "Led a technical team of 5-7 members and directed project rollouts under tight deadlines.",
            "Developed and containerized a backend Kafka client and built an Elasticsearch monitoring dashboard."
        ]
    },
    {
        date: "Jun 2012 – May 2013",
        title: "Mobile Application Programmer Trainee",
        company: "Top Pine Technology Limited, Hong Kong",
        description: "Developed and launched 5 distinct Android applications from concept to completion using Java and the Android SDK.",
        responsibilities: [
            "Built an arithmetic learning app for children (Dr. Math).",
            "Designed an English vocabulary game with interactive gameplay.",
            "Developed a flexible flashcard app to motivate children's English learning."
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
          {/* 2. Now we just map over the data array */}
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
                key={index}
                contentStyle={commonContentStyle}
                contentArrowStyle={commonArrowStyle}
                date={item.date}
                iconStyle={commonIconStyle}
                icon={<FontAwesomeIcon icon={faBriefcase} style={{ color: '#fff' }} />}
            >
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: cardTextColor, mb: -1 }}>{item.title}</Typography>
                <Typography variant="body1" sx={{ fontStyle: 'italic', color: cardSecondaryTextColor, mb: 1 }}>{item.company}</Typography>
                <Typography variant="body2" sx={{ color: cardSecondaryTextColor, mb: 2}}>
                    {item.description}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: cardTextColor }}>Key Responsibilities:</Typography>
                <Box component="ul" sx={{ pl: 2, m: 0, color: cardSecondaryTextColor }}>
                    {item.responsibilities.map((resp, i) => (
                        <Typography key={i} component="li" variant="body2" sx={{ display: 'flex', gap: 1, mt: 1}}>
                            <CheckCircleIcon sx={{ color: cardSecondaryTextColor, fontSize: '1.2rem', ml: -1 }}/>
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