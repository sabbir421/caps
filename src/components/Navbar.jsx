import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, useLocation } from "react-router-dom";
import {
  Nature,
  School,
  LocalHospital,
  Agriculture,
  WaterDrop,
  SolarPower,
  Recycling,
  Psychology,
  Business,
  Engineering,
} from "@mui/icons-material";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Working Area",
    path: "/working-area",
    subItems: [
      {
        name: "Climate Action",
        path: "/working-area/climate-action",
        icon: Nature,
      },
      { name: "Education", path: "/working-area/education", icon: School },
      {
        name: "Healthcare",
        path: "/working-area/healthcare",
        icon: LocalHospital,
      },
      {
        name: "Agriculture",
        path: "/working-area/agriculture",
        icon: Agriculture,
      },
      {
        name: "Water Management",
        path: "/working-area/water",
        icon: WaterDrop,
      },
      {
        name: "Renewable Energy",
        path: "/working-area/energy",
        icon: SolarPower,
      },
    ],
  },
  {
    name: "What We Do",
    path: "/what-we-do",
    subItems: [
      {
        name: "Programs Overview",
        path: "/what-we-do/programs",
        icon: Business,
      },
      {
        name: "Community Development",
        path: "/what-we-do/community",
        icon: Psychology,
      },
      {
        name: "Research & Innovation",
        path: "/what-we-do/research",
        icon: Engineering,
      },
      { name: "Capacity Building", path: "/what-we-do/capacity", icon: School },
      { name: "Advocacy & Policy", path: "/what-we-do/advocacy", icon: Nature },
      {
        name: "Partnerships",
        path: "/what-we-do/partnerships",
        icon: Business,
      },
    ],
  },
  { name: "Publications", path: "/publications" },
  { name: "Contact Us", path: "/contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event, itemName) => {
    setAnchorEl({ ...anchorEl, [itemName]: event.currentTarget });
  };

  const handleMenuClose = (itemName) => {
    setAnchorEl({ ...anchorEl, [itemName]: null });
  };

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const renderNavItem = (item) => {
    if (item.subItems) {
      return (
        <Box key={item.name}>
          <Button
            onClick={(e) => handleMenuOpen(e, item.name)}
            sx={{
              color: isActive(item.path)
                ? theme.palette.primary.main
                : theme.palette.text.primary,
              margin: theme.spacing(0, 1),
              fontWeight: isActive(item.path) ? 600 : 400,
              fontSize: "0.95rem",
              textTransform: "none",
              borderRadius: 2,
              padding: "8px 16px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: theme.palette.background.primary,
                color: theme.palette.primary.main,
                transform: "translateY(-1px)",
              },
            }}
            endIcon={<ExpandMoreIcon />}
          >
            {item.name}
          </Button>
          <Menu
            anchorEl={anchorEl[item.name]}
            open={Boolean(anchorEl[item.name])}
            onClose={() => handleMenuClose(item.name)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            PaperProps={{
              sx: {
                mt: 1,
                minWidth: 250,
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                borderRadius: 2,
              },
            }}
          >
            {item.subItems.map((subItem) => (
              <MenuItem
                key={subItem.name}
                component={Link}
                to={subItem.path}
                onClick={() => handleMenuClose(item.name)}
                sx={{
                  py: 1.5,
                  px: 2,
                  "&:hover": {
                    backgroundColor: theme.palette.background.primary,
                  },
                }}
              >
                <ListItemIcon>
                  <subItem.icon sx={{ color: theme.palette.primary.main }} />
                </ListItemIcon>
                <ListItemText
                  primary={subItem.name}
                  primaryTypographyProps={{
                    fontWeight: isActive(subItem.path) ? 600 : 400,
                    color: isActive(subItem.path)
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  }}
                />
              </MenuItem>
            ))}
          </Menu>
        </Box>
      );
    }

    return (
      <Button
        key={item.name}
        component={Link}
        to={item.path}
        sx={{
          color: isActive(item.path)
            ? theme.palette.primary.main
            : theme.palette.text.primary,
          margin: theme.spacing(0, 1),
          fontWeight: isActive(item.path) ? 600 : 400,
          fontSize: "0.95rem",
          textTransform: "none",
          borderRadius: 2,
          padding: "8px 16px",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: theme.palette.background.primary,
            color: theme.palette.primary.main,
            transform: "translateY(-1px)",
          },
        }}
      >
        {item.name}
      </Button>
    );
  };

  const renderDrawerItem = (item) => {
    if (item.subItems) {
      return (
        <Box key={item.name}>
          <ListItem
            onClick={(e) => handleMenuOpen(e, item.name)}
            sx={{
              padding: theme.spacing(2, 3),
              margin: theme.spacing(0.5, 1),
              borderRadius: 2,
              transition: "all 0.3s ease",
              backgroundColor: isActive(item.path)
                ? theme.palette.background.primary
                : "transparent",
              "&:hover": {
                backgroundColor: theme.palette.background.primary,
                transform: "translateX(8px)",
              },
            }}
          >
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{
                fontWeight: isActive(item.path) ? 600 : 400,
                color: isActive(item.path)
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
              }}
            />
            <ExpandMoreIcon />
          </ListItem>
          {Boolean(anchorEl[item.name]) && (
            <List sx={{ pl: 2 }}>
              {item.subItems.map((subItem) => (
                <ListItem
                  key={subItem.name}
                  component={Link}
                  to={subItem.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    padding: theme.spacing(1.5, 3),
                    margin: theme.spacing(0.25, 1),
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    backgroundColor: isActive(subItem.path)
                      ? theme.palette.background.primary
                      : "transparent",
                    "&:hover": {
                      backgroundColor: theme.palette.background.primary,
                      transform: "translateX(8px)",
                    },
                  }}
                >
                  <ListItemIcon>
                    <subItem.icon
                      sx={{ color: theme.palette.primary.main, fontSize: 20 }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={subItem.name}
                    primaryTypographyProps={{
                      fontWeight: isActive(subItem.path) ? 600 : 400,
                      color: isActive(subItem.path)
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                      fontSize: "0.9rem",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      );
    }

    return (
      <ListItem
        key={item.name}
        component={Link}
        to={item.path}
        onClick={handleDrawerToggle}
        sx={{
          textDecoration: "none",
          color: "inherit",
          padding: theme.spacing(2, 3),
          margin: theme.spacing(0.5, 1),
          borderRadius: 2,
          transition: "all 0.3s ease",
          backgroundColor: isActive(item.path)
            ? theme.palette.background.primary
            : "transparent",
          "&:hover": {
            backgroundColor: theme.palette.background.primary,
            transform: "translateX(8px)",
          },
        }}
      >
        <ListItemText
          primary={item.name}
          primaryTypographyProps={{
            fontWeight: isActive(item.path) ? 600 : 400,
            color: isActive(item.path)
              ? theme.palette.primary.main
              : theme.palette.text.primary,
          }}
        />
      </ListItem>
    );
  };

  const drawer = (
    <Box sx={{ width: 280, pt: 2 }}>
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: "1.5rem",
            color: theme.palette.primary.main,
          }}
        >
          Climate Action NGO
        </Typography>
      </Box>
      <List>{navItems.map(renderDrawerItem)}</List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: theme.palette.primary.main,
                }}
              >
                Climate Action NGO
              </Typography>
            </Box>

            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {navItems.map(renderNavItem)}
              </Box>
            )}

            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  ml: 2,
                  color: theme.palette.primary.main,
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
