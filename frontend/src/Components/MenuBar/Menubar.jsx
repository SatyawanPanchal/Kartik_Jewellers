import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const menuItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  {
    label: "Products",
    submenu: [
      { label: "Gold Bars", link: "/products/gold-bars" },
      { label: "Gold Coins", link: "/products/gold-coins" },
    ],
  },
  {
    label: "Category",
    submenu: [
      { label: "Jewelry", link: "/category/jewelry" },
      { label: "Investment", link: "/category/investment" },
    ],
  },
  { label: "Contact", link: "/contact" },
];

const MenuBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuOpen = (event, index) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };

  return (
    <>
      <AppBar position="static" sx={{   maxWidth: "30%",backgroundColor:"transparent",boxShadow:"none"}}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1, justifyContent: "center" }}>
            {menuItems.map((item, index) => (
              <Box key={index} sx={{ position: "relative", mx: 2 }}>
                <Typography
                  sx={{ cursor: "pointer", display: "flex", alignItems: "center" ,fontSize:"1.3rem",color:"#745431"}}
                  onClick={item.submenu ? (event) => handleMenuOpen(event, index) : undefined}
                >
                  {item.label} {item.submenu && <ExpandMoreIcon />}
                </Typography>
                {item.submenu && (
                  <Menu
                    anchorEl={anchorEl}
                    open={activeMenu === index}
                    onClose={handleMenuClose}
                    MenuListProps={{ onMouseLeave: handleMenuClose }}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <MenuItem key={subIndex} onClick={handleMenuClose}>{subItem.label}</MenuItem>
                    ))}
                  </Menu>
                )}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={toggleDrawer(false)}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default MenuBar;
