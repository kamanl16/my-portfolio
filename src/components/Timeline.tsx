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
            icon={<FontAwesomeIcon icon={faBriefcase} style={{ color: '#fff' }} />}
          >
            <h3 className="vertical-timeline-element-title">Temporary Project Manager - Finance Solutions</h3>
            <h4 className="vertical-timeline-element-subtitle">Swire Coca-Cola Limited, Hong Kong (Remote)</h4>
            <p style={textSecondary}>
              Eliminated 100% of ongoing third-party system expenses across Vietnam and Cambodia by orchestrating the rapid, remote deployment of a customized SAPUI5 workflow system.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2022 – Aug 2023"
            iconStyle={commonIconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} style={{ color: '#fff' }} />}
            contentStyle={commonContentStyle}
            contentArrowStyle={commonArrowStyle}
          >
            <h3 className="vertical-timeline-element-title">Project Manager - Finance Solutions</h3>
            <h4 className="vertical-timeline-element-subtitle">Swire Pacific Limited - Beverage Division, Hong Kong</h4>
            <p style={textSecondary}>
              Led an SAP S/4 HANA migration for the FI/CO module, delivering custom workflows that processed 15,000+ applications in 6 months and streamlined financial approvals by 50%.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2013 – Jul 2022"
            iconStyle={commonIconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} style={{ color: '#fff' }} />}
            contentStyle={commonContentStyle}
            contentArrowStyle={commonArrowStyle}
          >
            <h3 className="vertical-timeline-element-title">Assistant Project Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Octopus Cards Limited, Hong Kong</h4>
            <p style={textSecondary}>
              Oversaw the software development lifecycle for the 51-location Octopus Service Points kiosk network serving over 7.4 million residents, and delivered critical functionality for government initiatives like the HK Consumption Voucher Scheme.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2012 – May 2013"
            iconStyle={commonIconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} style={{ color: '#fff' }} />}
            contentStyle={commonContentStyle}
            contentArrowStyle={commonArrowStyle}
          >
            <h3 className="vertical-timeline-element-title">Mobile Application Programmer Trainee</h3>
            <h4 className="vertical-timeline-element-subtitle">Top Pine Technology Limited, Hong Kong</h4>
            <p style={textSecondary}>
              Developed and launched 5 distinct Android applications from concept to completion, including educational apps and interactive games, using Java and the Android SDK.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
    </Box>
  );
}

export default Timeline;