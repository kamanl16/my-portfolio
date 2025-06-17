import React from "react";
import { Box, Typography, Link, Grid } from '@mui/material';
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';


const projects = [
    { href: "https://www.filmate.club/", src: mock10, title: "Filmate AI", description: "Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask." },
    { href: "https://yujisatojr.itch.io/highspeedchase", src: mock09, title: "High Speed Chase", description: "Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy." },
    { href: "https://yujisatojr.itch.io/spacecraft", src: mock08, title: "Astro Raiders", description: "Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace." },
    { href: "https://www.datumlearn.com/", src: mock07, title: "Datum: Integrated Learning Platform", description: "This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails." },
    { href: "http://www.wemanage.jp/", src: mock06, title: "WeManage: Real Estate Asset Management", description: "This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript." },
    { href: "https://www.byuh.edu/covid-19-case-management", src: mock05, title: "COVID-19 Case Management", description: "Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes." },
    { href: "https://github.com/yujisatojr/multi-reg-analysis", src: mock04, title: "Multiple Regression Property Analysis", description: "Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn." },
    { href: "https://holokai.byuh.edu/programs-of-study", src: mock03, title: "Programs of Study", description: "Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module." },
    { href: "https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix", src: mock02, title: "Transfer Evaluation Matrix", description: "Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits." },
    { href: "https://github.com/yujisatojr/submeowrine", src: mock01, title: "Submeowrine", description: "Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game." },
];

function Project() {
    return(
        <Box id="projects" sx={{ py: '5%', px: { xs: '5%', md: '10%' }, textAlign: 'left' }}>
            <Typography variant="h1" sx={{ mb: 4 }}>Personal Projects</Typography>
            <Grid container spacing={5}>
                {projects.map(project => (
                    <Grid item xs={12} md={6} key={project.title}>
                        <Link href={project.href} target="_blank" rel="noreferrer">
                            <Box
                                component="img"
                                src={project.src}
                                alt="thumbnail"
                                sx={{
                                    width: '100%',
                                    borderRadius: '5px',
                                    transition: 'transform .2s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            />
                        </Link>
                        <Link href={project.href} target="_blank" rel="noreferrer" sx={{ textDecoration: 'none' }}>
                            <Typography variant="h2" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                                {project.title}
                            </Typography>
                        </Link>
                        <Typography paragraph>{project.description}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Project;