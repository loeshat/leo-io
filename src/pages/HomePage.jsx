import React from "react";
import "../styles/pages/pages.css";
import { theme } from "../styles/Theme";
import "../index.css";
import { Container, Typography, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
import Slide from '@mui/material/Slide';

import MoodIcon from "@mui/icons-material/Mood";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";

// import Macquarie from "../assets/macquarie.png";

const pastWorkExperience = [
  {
    company: "Macquarie Group",
    role: "Business Analyst Intern",
    tenure: "Dec 2022 - Feb 2023",
    description:
      "Banking and Financial Services Sector | Customer Experience Team",
    skills:
      "User Experience (UX) · User Interface Design · Atlassian Suite · Jira · Business Analysis · Requirements Analysis · Salesforce Lightning · User Stories · Agile Project Management · Customer Experience",
    logo: "/leo-io/assets/macquarie.png",
  },
  {
    company: "Trihalo Accountancy",
    role: "Accounts Assistant",
    tenure: "Nov 2020 - Nov 2022",
    description: "SME Business | Western Sydney Area",
    skills:
      "Office 365 · Xero · Astute · MYOB · Payroll Administration · Annual Reports · Accounts Payable & Receivable · Microsoft Excel",
    logo: "/leo-io/assets/trihalo.png",
  },
  {
    company: "City Beach Australia",
    role: "Sales Assistant",
    tenure: "Dec 2021 - Mar 2022",
    description: "Parramatta Branch",
    skills: "Sales · Retail · Customer Service · Store Mangement",
    logo: "/leo-io/assets/citybeach.png",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const openGmailWithDraft = () => {
    const recipient = 'leoshii111@gmail.com';
    const mailtoLink = `mailto:${recipient}`;
    window.open(mailtoLink);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <TopNav />
        <Container style={{ marginLeft: "3vw" }}>
          <Box style={{ height: "90vh" }}>
            <Box style={{ paddingTop: "20vh" }}>
              <Slide in={true} direction="right" timeout={1000}>

                <Typography variant="h1">hey i'm Leo,</Typography>
              </Slide>
              <Slide in={true} direction="right" timeout={1500}>
                <Typography variant="h2">
                  a computer science and commerce student at UNSW
                </Typography>
              </Slide>
            </Box>
            <Slide in={true} direction="right" timeout={2000}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "20px",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <Box
                  className="blue-button"
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  <MoodIcon />
                  <Typography>About Me</Typography>
                </Box >
                <Box
                  className="blue-button"
                  onClick={() => {
                    navigate("/work");
                  }}
                >
                  <WorkIcon />
                  <Typography>Some of my work</Typography>
                </Box>
                <Box className="blue-button" onClick={() => openGmailWithDraft()}>
                  <EmailIcon />
                  <Typography>Let's collaborate</Typography>
                </Box>
              </Box >
            </Slide>
          </Box >
        </Container >
        <Box className="work-experience-container" style={{ paddingRight: "5vw" }} >
          <Typography variant="h3" style={{ minWidth: "20vw", paddingLeft: "3vw" }}>
            here's some of the teams i've been a part of
          </Typography>
          <Box className="work-container">
            {pastWorkExperience.map((item, index) => (
              <Box key={index} className="work-box">
                <Box className="work-header">
                  <Box className="work-text">
                    <Typography variant="h4">{item.company}</Typography>
                    <Typography variant="h5">{item.role}</Typography>
                    <Typography variant="h5">{item.tenure}</Typography>
                  </Box>
                  <img className="work-image" src={item.logo} />
                </Box>
                <Box>
                  <Typography variant="b" className="hidden-text">
                    {item.description}
                  </Typography>
                  <Typography variant="b" className="hidden-text">
                    <b>Skills: </b>
                    {item.skills}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </ThemeProvider >
    </>
  );
};

export default HomePage;
