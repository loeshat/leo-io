import React from "react";
import "../styles/pages/pages.css";
import { theme } from "../styles/Theme";
import "../index.css";
import { Container, Typography, Box, Divider, ImageList, ImageListItem } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
import Slide from '@mui/material/Slide';

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ResumeIcon from "@mui/icons-material/Feed";
import CourseResultsIcon from "@mui/icons-material/MenuBook";

const pastLeadershipExperience = [
  {
    company: "UNSW Engineering Society",
    role: "Programs Vice President (formerly subcom)",
    tenure: "Jan 2022 - Oct 2023",
    skills:
      "Mentoring · Team Leadership · Event Planning · Workshop Presentation · Engineering Consulting · Charity Events · Liasoning",
    logo: "../assets/engsoc.png",
  },
  {
    company: "UNSW Engineering Society",
    role: "Industry Mentoring Program Participant",
    tenure: "Apr 2022 - Sep 2022",
    skills: "Leadership · Professional Preparation",
    logo: "../assets/engsoc.png",
  },
  {
    company: "Amazon Web Services",
    role: "Early Careers Innvoation Program Participant",
    tenure: "Apr 2022 - May 2022",
    skills:
      "AWS Technology · Technology Consulting · Professional Preparation · Networking",
    logo: "../assets/aws.png",
  },
  {
    company: "UNSW CompClub",
    role: "Marketing and HR Subcom, Workshop Mentor",
    tenure: "Mar 2021 - Oct 2022",
    skills: "Mentoring · Marketing · Workshop Content Creation",
    logo: "../assets/compclub.png",
  },
  {
    company: "James Ruse Agricultural High School",
    role: "Sports Captain and Prefect",
    tenure: "Apr 2022 - May 2022",
    skills: "Leadership · Event Planning and Execution · Presentation",
    logo: "../assets/ruse.png",
  },
];

const notableCourseResults = [
  {
    result: "87 | HD",
    code: "COMP6080",
    name: "Web Front-End Programming",
    description:
      "Develop your confidence in building modern web-based applications to industry standards",
  },
  {
    result: "87 | HD",
    code: "FINS2615",
    name: "Intermediate Business Finance",
    description:
      "Corporate finance course that aspires to provide students a holistic view of the principles of financial valuation and financial decision making",
  },
  {
    result: "87 | HD",
    code: "COMP1531",
    name: "Software Engineering Fundamentals",
    description:
      "Introduction to software engineering principles: basic software lifecycle concepts, modern development methodologies and conceptual modeling",
  },
  {
    result: "86 | HD",
    code: "COMP1511",
    name: "Programming Fundamentals",
    description:
      "Introduction to problem-solving via programming, which aims to have students develop proficiency in using a high-level programming language",
  },
];

const notableCourseResults2 = [
  {
    result: "85 | HD",
    code: "COMP4511",
    name: "User Interface Design and Construction",
    description:
      "Addresses the skills and knowledge required in industry to brainstorm, design, implement, and evaluate an application through the user-centred design process",
  },
  {
    result: "85 | HD",
    code: "COMM1140",
    name: "Financial Management",
    description:
      "Fundamental concepts related to how organisations account for and financially report their business activities",
  },
  {
    result: "82 | D",
    code: "FINS2618",
    name: "Capital Markets & Institutions",
    description:
      "Introduction to Australian financial markets and an evaluation of the institutions, instruments and participants involved in the industry",
  },
  {
    result: "82 | D",
    code: "ACCT2511",
    name: "Financial Accounting Fundamentals",
    description:
      "Builds technical competence in recording economic events through accounting systems",
  },
];

const drawingData = ["../assets/draw1.png", "../assets/draw2.png", "../assets/draw3.png", "../assets/draw4.png",]

const HomePage = () => {
  const navigate = useNavigate();

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = "../pdf/leos-resume.pdf";
    link.download = 'leos-resume.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const openLinkInNewTab = (url) => {
    window.open(url, '_blank');
  };

  const openGmailWithDraft = () => {
    const recipient = 'leoshii111@gmail.com';
    const mailtoLink = `mailto:${recipient}`;
    window.open(mailtoLink);
  };

  const scrollDown = () => {
    window.scrollBy({
      top: (window.innerHeight * 2),
      behavior: 'smooth'
    });
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        <TopNav />
        <Container style={{ marginLeft: "3vw" }}>
          <Box style={{ height: "90vh" }}>
            <Box style={{ paddingTop: "20vh" }}>
              <Slide in={true} direction="right" timeout={1000}>
                <Typography variant="h1">Leo Shi</Typography>

              </Slide>
              <Slide in={true} direction="right" timeout={1500}>
                <Typography variant="h2">
                  penultimate student at UNSW majoring in finance and computer
                  science
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
                  alignItems: "center",
                }}
              >
                <EmailIcon fontSize="large" className="blue-icon" onClick={() => openGmailWithDraft()} />
                <GitHubIcon fontSize="large" className="blue-icon" onClick={() => openLinkInNewTab('https://github.com/loeshat')} />
                <LinkedInIcon fontSize="large" className="blue-icon" onClick={() => openLinkInNewTab('https://www.linkedin.com/in/leo-shi111')} />
                <Box className="blue-button" onClick={handleResumeDownload}>
                  <ResumeIcon />
                  <Typography>Resume</Typography>
                </Box>
                <Box className="blue-button" onClick={() => scrollDown()}>
                  <CourseResultsIcon />
                  <Typography>Course Results</Typography>
                </Box>
              </Box>
            </Slide>
          </Box>
        </Container>
        <Box className="work-experience-container" style={{ paddingRight: "5vw" }}>
          <Typography variant="h3" style={{ minWidth: "20vw", paddingLeft: "3vw" }}>
            i've gained lots of leadership experience over my years
          </Typography>
          <Box className="work-container">
            {pastLeadershipExperience.map((item, index) => (
              <Box key={index} className="leadership-box">
                <Box className="work-header">
                  <Box className="work-text">
                    <Typography variant="h4">{item.company}</Typography>
                    <Typography variant="h5">{item.role}</Typography>
                    <Typography variant="h5">{item.tenure}</Typography>
                  </Box>
                  <Box component="img" src={item.logo} className="work-image" />
                </Box>
                <Box>
                  <Typography variant="b" className="hidden-text">
                    <b>Skills: </b>
                    {item.skills}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Container
          style={{ marginLeft: "3vw", marginTop: "10vh", marginBottom: "15vh" }}
        >
          <Typography variant="h3">notable course results</Typography>
          <Divider style={{ marginBottom: "30px", marginTop: "15px" }} />
          <Typography variant="h5">For the most up-to-date statement, please reach out via email.</Typography>
          <Box
            className="course-container-big"
            style={{ marginBottom: "50px" }}
          >
            <Box className="course-container">
              {notableCourseResults.map((item, index) => (
                <Box className="course-box">
                  <Typography variant="h6">
                    {item.code}: {item.name}
                  </Typography>
                  <Typography variant="h5">{item.result}</Typography>
                  <Typography variant="h7">{item.description}</Typography>
                </Box>
              ))}
            </Box>
            <Box className="course-container">
              {notableCourseResults2.map((item, index) => (
                <Box className="course-box">
                  <Typography variant="h6">
                    {item.code}: {item.name}
                  </Typography>
                  <Typography variant="h5">{item.result}</Typography>
                  <Typography variant="h7">{item.description}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
        <Box className="photos-container" style={{ paddingRight: "5vw" }}>
          <Typography variant="h3">drawing projects</Typography>
          <ImageList className="photos" sx={{ width: 1200, borderRadius: 5, overflow: "hidden" }} cols={4} rowHeight={330} onClick={() => openLinkInNewTab('https://www.instagram.com/drawwithleoo/')}>
            {drawingData.map((item) => (
              <ImageListItem key={item} sx={{ borderRadius: 3 }}>
                <img
                  className="draw"
                  srcSet={item}
                  src={item}
                  alt={"draw"}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default HomePage;
