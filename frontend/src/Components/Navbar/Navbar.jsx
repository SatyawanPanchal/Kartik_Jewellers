import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CategoryIcon from "@mui/icons-material/Category";
import StoreIcon from "@mui/icons-material/Store";
import ContactsIcon from "@mui/icons-material/Contacts";
import logo from "../../assets/Logo.png";
import {
  StyledAppBar,
  StyledToolbar,
  StyledButton,
  RightBox,
  StyledIconButton,
} from "./NavbarStyles.js";
import MenuBar from "../MenuBar/Menubar.jsx";
import {
  Box,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material";

const menuItems = [
  { label: "Home", icon: <HomeIcon />, link: "/" },
  { label: "About", icon: <InfoIcon />, link: "/about" },
  { label: "Products", icon: <StoreIcon />, link: "/products" },
  { label: "Category", icon: <CategoryIcon />, link: "/category" },
  { label: "Contact", icon: <ContactsIcon />, link: "/contact" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  // Toggle Drawer function
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          style={{ height: 100, padding: "1rem", borderRadius: "50%" }}
        />

        {/* Menu and Login Button Layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "row-reverse" : "row",
            justifyContent: isSmallScreen ? "flex-start" : "center",
            flexGrow: 1,
          }}
        >
          {!isSmallScreen && <MenuBar />}
        </Box>

        {/* Right Box: Contains Login Button & Menu Toggle Button (Mobile Only) */}
        <RightBox>
          <StyledButton variant="contained">Login</StyledButton>

          {/* Menu Toggle Button (Visible on Small Screens Only) */}
          {isSmallScreen && (
            <StyledIconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </StyledIconButton>
          )}
        </RightBox>
      </StyledToolbar>

      {/* Stylish Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 250,
            background: "rgba(173, 130, 94, 0.8)", // Dark semi-transparent background
            color: "white",
            padding: "1rem",
          },
        }}
      >
        {/* Drawer Header */}
        <Box sx={{ textAlign: "center", marginBottom: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#593C2D" }}>
            Menu
          </Typography>
        </Box>

        {/* Menu Items */}
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              sx={{
                "&:hover": {
                  backgroundColor: "#fdd835", // Gold hover effect
                  color: "black",
                },
                borderRadius: "8px",
                margin: "5px 0",
              }}
              onClick={toggleDrawer(false)}
            >
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} sx={{ fontSize: "1.2rem" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </StyledAppBar>
  );
};

export default Navbar;
