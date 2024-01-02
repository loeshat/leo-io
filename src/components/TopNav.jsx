import "../styles/components/TopNav.css";
import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MoodIcon from "@mui/icons-material/Mood";
import WorkIcon from "@mui/icons-material/Work";

const navItems = [
  { path: "/", icon: HomeIcon, label: "Home" },
  { path: "/profile", icon: MoodIcon, label: "Profile" },
  { path: "/work", icon: WorkIcon, label: "Work" },
];

const TopNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Box className="container">
          {navItems.map((item, index) => (
            <Box
              key={index}
              className={
                location.pathname === item.path
                  ? "appbar-component"
                  : "appbar-component-disabled"
              }
              onClick={() => {
                navigate(item.path);
              }}
            >
              {location.pathname === item.path ? (
                <item.icon />
              ) : (
                <item.icon className="disabled" />
              )}
              {location.pathname === item.path && (
                <Typography style={{ fontWeight: "bold" }}>
                  {item.label}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
