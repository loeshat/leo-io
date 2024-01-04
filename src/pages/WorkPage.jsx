import React from 'react';
import "../styles/pages/pages.css";
import { theme } from "../styles/Theme";
import "../index.css";
import { ThemeProvider } from "@mui/material/styles";
import { Container, Typography, Box, Divider } from "@mui/material";
import TopNav from '../components/TopNav';
import DownloadIcon from '@mui/icons-material/Download';

const caseCompetitionInfo = [
  {
    title: '2023 FINS2615 Financial Recommendation Presentation - HD',
    question: " Q: Your team plays the role of Equities Analyst to deliver a “stock pitch” or buy/sell investment recommendation",
    logo: "../assets/fins.png",
    download: "../pdf/wow.pdf",
  },
  {
    title: '2022 Macquarie Group Case Competition - First Place',
    question: 'Q: How might Macquarie unlock the potential of open source code while ensuring cybersecurity is of utmost importance while contributing and/or leveraging open source code?',
    logo: "../assets/macq-comp.png",
    download: "../pdf/ace.pdf",
  },
  {
    title: '2022 AWS ECIP Case Competition - Runner Up',
    question: 'Q: Should Ochre migrate their workload from on-premise to the cloud to help them be prepared for the Ochre x Local event? How could Ochre make use of AWS services to innovate?',
    logo: "../assets/aws-comp.png",
    download: "../pdf/ochre.pdf",
  },
  {
    title: '2021 WSP Case Competition - First Place',
    question: 'Q: How can we manage digital fatigue while remaining connected through technology?',
    logo: "../assets/wsp-comp.png",
    download: "../pdf/wsp.pdf",
  },
];

const researchReports = [
  {
    title: "Artificial Intelligence in Accounting",
    download: "../pdf/ai.pdf",
  }
]

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
            <Box style={{ display: "flex", flexDirection: "row" }}>
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