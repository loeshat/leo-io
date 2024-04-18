import React from 'react';
import "../styles/pages/pages.css";
import { theme } from "../styles/Theme";
import "../index.css";
import { ThemeProvider } from "@mui/material/styles";
import { Container, Typography, Box, Divider } from "@mui/material";
import TopNav from '../components/TopNav';
import DownloadIcon from '@mui/icons-material/Download';
import LanguageIcon from '@mui/icons-material/Language';


const designProjectsInfo = [
  {
    title: "TangyTimeTable",
    description: "A timetable scheduling assistant to plan group & friend catchups",
    logo: "../leo-io/assets/tangy.png",
    link: "https://www.figma.com/file/I7GMziARoK8euZ8TZevWRK/TangyTimeTable---HiFi-Prototype---Week-7-Deliverable---COMP4511?type=design&node-id=0%3A1&mode=design&t=eOq1y05zWXRlDX9x-1",
  },
]

const caseCompetitionInfo = [
  {
    title: '2023 FINS2615 Financial Recommendation Presentation - HD',
    question: " Q: Your team plays the role of Equities Analyst to deliver a “stock pitch” or buy/sell investment recommendation",
    logo: "../leo-io/assets/fins.png",
    download: "../leo-io/pdf/wow.pdf",
  },
  {
    title: '2022 Macquarie Group Case Competition - First Place',
    question: 'Q: How might Macquarie unlock the potential of open source code while ensuring cybersecurity is of utmost importance while contributing and/or leveraging open source code?',
    logo: "../leo-io/assets/macq-comp.png",
    download: "../leo-io/pdf/ace.pdf",
  },
  {
    title: '2022 AWS ECIP Case Competition - Runner Up',
    question: 'Q: Should Ochre migrate their workload from on-premise to the cloud to help them be prepared for the Ochre x Local event? How could Ochre make use of AWS services to innovate?',
    logo: "../leo-io/assets/aws-comp.png",
    download: "../leo-io/pdf/ochre.pdf",
  },
  {
    title: '2021 WSP Case Competition - First Place',
    question: 'Q: How can we manage digital fatigue while remaining connected through technology?',
    logo: "../leo-io/assets/wsp-comp.png",
    download: "../leo-io/pdf/wsp.pdf",
  },
];

const researchReports = [
  {
    title: "Artificial Intelligence in Accounting",
    download: "../leo-io/pdf/ai.pdf",
  },
  {
    title: "AASB’s Exposure Draft for Sustainability - Impact on Australian Businesses",
    download: "../leo-io/pdf/aasb.pdf"
  }
]

const openLinkInNewTab = (url) => {
  window.open(url, '_blank');
};

const HomePage = () => {
  const handleSlidesDownload = (href) => {
    const link = document.createElement('a');
    link.href = href;
    const fileName = href.split('/').pop()
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <TopNav />
        <Container
          style={{ marginLeft: "3vw", marginTop: "10vh", marginBottom: "15vh" }}
        >
          <Box>
            <Typography variant="h3">design projects</Typography>
            <Divider style={{ marginBottom: "30px", marginTop: "15px" }} />
            <Typography variant="h5" style={{ marginBottom: "30px" }}>I'm a naturally creative person, so coming up with unique and good-looking designs are enjoyable for me. However, I've also begun applying design and heuristic principles towards my work</Typography>
            <Box style={{ marginBottom: "50px" }}>
              {designProjectsInfo.map((item, index) => (
                <Box className="design-box">
                  <Box component="img" src={item.logo} style={{ height: "150px", borderRadius: "15px" }} />
                  <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box>
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography variant="h5">{item.description}</Typography>
                    </Box>
                    <Box className="download-button" onClick={() => { openLinkInNewTab(item.link) }}>
                      <LanguageIcon variant="lg" />
                      <Typography variant="lg">View Figma</Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Typography variant="h3">case competitions and presentations</Typography>
          <Divider style={{ marginBottom: "30px", marginTop: "15px" }} />
          <Typography variant="h5" style={{ marginBottom: "30px" }}>Case competitions are a place where I can show off my teamwork and critical thinking skills to solve a problem. With a team, I must develop a strategy to solve the issue, then present the findings to industry individuals.</Typography>
          <Box style={{ marginBottom: "50px" }}>
            {caseCompetitionInfo.map((item, index) => (
              <Box className="case-box">
                <Box component="img" src={item.logo} style={{ height: "150px", borderRadius: "15px" }} />
                <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="h5">{item.question}</Typography>
                  </Box>
                  <Box className="download-button" onClick={() => handleSlidesDownload(item.download)}>
                    <DownloadIcon variant="lg" />
                    <Typography variant="lg">Download Slides</Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Box>
            <Typography variant="h3">written reports</Typography>
            <Divider style={{ marginBottom: "30px", marginTop: "15px" }} />
            <Typography variant="h5" style={{ marginBottom: "30px" }}>Here are some personal research projects which I've been curious about throughout my young adult life. Report writing is an essential skill that is used throughout the workforce.</Typography>
            <Box style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
              {researchReports.map((item, index) => (
                <Box className="report-box" onClick={() => handleSlidesDownload(item.download)}>
                  <Typography>{item.title}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default HomePage