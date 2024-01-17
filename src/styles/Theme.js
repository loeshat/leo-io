import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      color: "#6b6b6b",
      fontWeight: "bold",
      fontSize: "60px",
      paddingBottom: "20px",
    },
    h2: {
      color: "#a0a0a0",
      fontSize: "45px",
      paddingBottom: "15px",
    },
    h3: {
      color: "#6b6b6b",
      fontSize: "40px",
    },
    h4: {
      color: "black",
      fontSize: "25px",
    },
    h5: {
      fontStyle: "italic",
      color: "#6b6b6b",
      fontSize: "18px",
    },
    h6: {
      color: "black",
      fontSize: "20px",
      fontWeight: "normal",
    },
    h7: {
      fontStyle: "italic",
      color: "#6b6b6b",
      fontSize: "14px",
    },
  },
});
