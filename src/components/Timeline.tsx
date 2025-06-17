import React from "react";
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Typography, Box } from "@mui/material";

function Timeline() {
  const theme = useTheme();

  const commonContentStyle = {
    background: theme.palette.mode === 'dark' ? '#fff' : theme.palette.background.paper,
    color: theme.palette.mode === 'dark' ? 'rgb(39, 40, 34)' : theme.palette.text.primary,
    boxShadow: theme.shadows[2],
  };

  const commonArrowStyle = {
    borderRight: `7px solid ${theme.palette.mode === 'dark' ? '#fff' : theme.palette.background.paper}`,
  };

  const commonIconStyle = {
    background: 'rgb(0, 111, 202)',
    color: '#fff',
    boxShadow: `0 0 0 4px ${theme.palette.grey[400]}`,
  };

  const textSecondary = {
      color: theme.palette.mode === 'dark' ? 'rgb(39, 40, 34)' : theme.palette.text.secondary
  }

  return (
    <Box id="history" sx={{ py: '5%', px: { xs: '5%', md: '10%' }, textAlign: 'left' }}>
        <Typography variant="h2" sx={{ mb: 4 }}>Career History</Typography>
        <VerticalTimeline lineColor={theme.palette.grey[400]}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={commonContentStyle}
            contentArrowStyle={commonArrowStyle}
            date="Sep 2023 – Jun 2024"
            iconStyle={commonIconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Project Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Swire Coca-Cola Limited, Hong Kong</h4>
            <p style={textSecondary}>
              Remotely supervised and supported systems across Hong Kong, Vietnam, and Cambodia, adapting an SAPUI5 workflow to replace a costly system. Improved applicant processing, accelerated deployment, and leveraged SDLC, Hybrid PM, and Jira.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2022 – Aug 2023"
            iconStyle={commonIconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            contentStyle={commonContentStyle}
            contentArrowStyle={commonArrowStyle}
          >
            <h3 className="vertical-timeline-element-title">Project Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Swire Pacific Limited, Hong Kong</h4>
            <p style={textSecondary}>
              Led an SAP HANA S/4 migration for FI/CO module, integrating workflows that processed 15K+ applications. Oversaw SDLC using ABAP APIs and SAPUI5 systems, streamlining approvals by 50%. Directed cross-functional teams and facilitated UAT.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2013 – Jul 2022"
            iconStyle={commonIconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            contentStyle={commonContentStyle}
            contentArrowStyle={commonArrowStyle}
          >
            <h3 className="vertical-timeline-element-title">Assistant Project Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Octopus Cards Limited, Hong Kong</h4>
            <p style={textSecondary}>
              Oversaw the Octopus Service Points kiosk network (Java, C++, SQL, RESTful). Led development from initial launch to major enhancements like Consumption Voucher & Public Transport Subsidy schemes. Developed backend for New Retail Reader integration (Spring Boot, Kafka, Elasticsearch, Docker).
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2012 – May 2013"
            iconStyle={commonIconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            contentStyle={commonContentStyle}
            contentArrowStyle={commonArrowStyle}
          >
            <h3 className="vertical-timeline-element-title">Mobile Application Programmer Trainee</h3>
            <h4 className="vertical-timeline-element-subtitle">Top Pine Technology Limited, Hong Kong</h4>
            <p style={textSecondary}>
              Developed Android applications (Java, Android SDK) with intuitive interfaces, including educational and interactive apps. Supported implementation and updates for multiple mobile projects.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
    </Box>
  );
}

export default Timeline;