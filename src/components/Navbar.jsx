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
  Collapse,
} from "@mui/material";
import logo from "../assets/logo.jpeg";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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
        name: "Community Education",
        path: "/working-area/community-education",
        icon: School,
        subSubItems: [
          {
            name: "Climate Smart Community Education",
            path: "/working-area/community-education/community-education",
          },
          {
            name: "Climate-smart Child Protection",
            path: "/working-area/community-education/child-protection",
          },
          {
            name: "Climate Smart Coding Education",
            path: "/working-area/community-education/coding-education",
          },
          {
            name: "Climate-smart Programs for People with Disabilities",
            path: "/working-area/community-education/disabilities",
          },
          {
            name: "Climate-Smart Women Entrepreneurs",
            path: "/working-area/community-education/women-entrepreneurs",
          },
          {
            name: "Prioritizing Climate-Vulnerable People",
            path: "/working-area/community-education/vulnerable-people",
          },
          {
            name: "Climate-Smart Migration",
            path: "/working-area/community-education/migration",
          },
          {
            name: "Climate Smart Campus & Class Room",
            path: "/working-area/climate-smart-campus-classroom",
          },
          {
            name: "Climate-Smart Extracurricular Activities",
            path: "/working-area/climate-smart-extracurricular-activities",
          },
          {
            name: "Climate-Smart Online Education",
            path: "/working-area/climate-smart-online-education",
          },
          {
            name: "Climate-Smart Ecotourism Park",
            path: "/working-area/climate-smart-ecotourism-park",
          },
          {
            name: "Climate Sustainability",
            path: "/working-area/climate-sustainability",
          },
          {
            name: "Climate-smart Technical Education",
            path: "/working-area/climate-smart-technical-education",
          },
          {
            name: "Climate-smart Housing",
            path: "/working-area/climate-smart-housing",
          },
          {
            name: "Climate-smart Schooling",
            path: "/working-area/climate-smart-schooling",
          },
          {
            name: "Climate Smart Club",
            path: "/working-area/climate-smart-club",
          },
          {
            name: "Climate Adaptive English Learning",
            path: "/working-area/climate-adaptive-english-learning",
          },
          {
            name: "Climate-smart Community Learning Research Centre",
            path: "/working-area/community-learning-research-centre",
          },
          {
            name: "Climate-smart Language Learning (CLL)",
            path: "/working-area/climate-smart-language-learning",
          },
          {
            name: "Global Green Ambassador Program for Climate Adaptation",
            path: "/working-area/global-green-ambassador-program",
          },
        ],
      },
      {
        name: "Volunteer & Community Engagement",
        path: "/working-area/volunteer-community",
        icon: Psychology,
        subSubItems: [
          {
            name: "Climate-Smart Volunteer",
            path: "/working-area/climate-smart-volunteer",
          },
          {
            name: "Climate Smart Global Green Ambassador",
            path: "/working-area/climate-smart-global-green-ambassador",
          },
        ],
      },
      {
        name: "Waste & Plastic Management",
        path: "/working-area/waste-management",
        icon: Recycling,
        subSubItems: [
          {
            name: "Climate Smart Community Garbage Management",
            path: "/working-area/waste-management/garbage-management",
          },
          {
            name: "Climate-smart Plastic Management",
            path: "/working-area/waste-management/plastic-management",
          },
        ],
      },
      {
        name: "Coastal & Forest Ecosystems",
        path: "/working-area/coastal-forests",
        icon: Nature,
        subSubItems: [
          {
            name: "Climate-smart Sundarbans",
            path: "/working-area/coastal-forests/sundarbans",
          },
          {
            name: "Climate-smart Afforestation",
            path: "/working-area/coastal-forests/afforestation",
          },
          {
            name: "Climate-smart Wildlife Adaptation",
            path: "/working-area/coastal-forests/wildlife",
          },
          {
            name: "Climate-smart Wilderness",
            path: "/working-area/coastal-forests/wilderness",
          },
          {
            name: "Climate-smart Fisherman Resettlement",
            path: "/working-area/coastal-forests/fisherman-resettlement",
          },
          {
            name: "Climate-smart Resettlement for Women",
            path: "/working-area/coastal-forests/women-resettlement",
          },
        ],
      },
      {
        name: "Agriculture & Water",
        path: "/working-area/agriculture-water",
        icon: Agriculture,
        subSubItems: [
          {
            name: "Climate-smart Agro-forestry",
            path: "/working-area/agriculture-water/agro-forestry",
          },
          {
            name: "Climate-smart Agriculture (CSA)",
            path: "/working-area/agriculture-water/csa",
          },
          {
            name: "Climate-smart Irrigation",
            path: "/working-area/agriculture-water/irrigation",
          },
          {
            name: "Climate Smart Water Plant",
            path: "/working-area/agriculture-water/water-plant",
          },
          {
            name: "Climate-smart Canal and River Excavation",
            path: "/working-area/agriculture-water/canal-river",
          },
          {
            name: "Climate-smart Aquaculture",
            path: "/working-area/agriculture-water/aquaculture",
          },
        ],
      },

      {
        name: "Marine Life",
        path: "/working-area/marine-life",
        icon: WaterDrop,
        subSubItems: [
          {
            name: "Climate-smart Adaptation for Sea Species",
            path: "/working-area/marine-life/sea-species",
          },
        ],
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
      // {
      //   name: "Partnerships",
      //   path: "/what-we-do/partnerships",
      //   icon: Business,
      // },
    ],
  },
  { name: "Publications & Stories", path: "/publications" },
  { name: "Our Team", path: "/teams" },
  { name: "Contact Us", path: "/contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState({});
  const [openSubMenus, setOpenSubMenus] = useState({});
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

  const handleSubMenuToggle = (itemName) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
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
                component={subItem.subSubItems ? "div" : Link}
                to={subItem.subSubItems ? null : subItem.path}
                onClick={
                  subItem.subSubItems
                    ? (e) => handleMenuOpen(e, subItem.name)
                    : () => handleMenuClose(item.name)
                }
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
                {subItem.subSubItems && <ChevronRightIcon />}
              </MenuItem>
            ))}
          </Menu>
          {/* Sub-sub-menu rendering */}
          {item.subItems.map(
            (subItem) =>
              subItem.subSubItems && (
                <Menu
                  key={subItem.name}
                  anchorEl={anchorEl[subItem.name]}
                  open={Boolean(anchorEl[subItem.name])}
                  onClose={() => handleMenuClose(subItem.name)}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  PaperProps={{
                    sx: {
                      mt: 0,
                      ml: 1,
                      minWidth: 250,
                      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                      borderRadius: 2,
                    },
                  }}
                >
                  {subItem.subSubItems.map((subSubItem) => (
                    <MenuItem
                      key={subSubItem.name}
                      component={Link}
                      to={subSubItem.path}
                      onClick={() => {
                        handleMenuClose(subItem.name);
                        handleMenuClose(item.name);
                      }}
                      sx={{
                        py: 1.5,
                        px: 2,
                        "&:hover": {
                          backgroundColor: theme.palette.background.primary,
                        },
                      }}
                    >
                      <ListItemText
                        primary={subSubItem.name}
                        primaryTypographyProps={{
                          fontWeight: isActive(subSubItem.path) ? 600 : 400,
                          color: isActive(subSubItem.path)
                            ? theme.palette.primary.main
                            : theme.palette.text.primary,
                        }}
                      />
                    </MenuItem>
                  ))}
                </Menu>
              )
          )}
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
            onClick={() => handleSubMenuToggle(item.name)}
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
            {openSubMenus[item.name] ? (
              <ExpandMoreIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </ListItem>
          <Collapse in={openSubMenus[item.name]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.subItems.map((subItem) => (
                <Box key={subItem.name}>
                  <ListItem
                    onClick={() => handleSubMenuToggle(subItem.name)}
                    sx={{
                      pl: 4,
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
                    {subItem.subSubItems &&
                      (openSubMenus[subItem.name] ? (
                        <ExpandMoreIcon />
                      ) : (
                        <ChevronRightIcon />
                      ))}
                  </ListItem>
                  {subItem.subSubItems && (
                    <Collapse
                      in={openSubMenus[subItem.name]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {subItem.subSubItems.map((subSubItem) => (
                          <ListItem
                            key={subSubItem.name}
                            component={Link}
                            to={subSubItem.path}
                            onClick={handleDrawerToggle}
                            sx={{
                              pl: 8,
                              padding: theme.spacing(1.5, 3),
                              margin: theme.spacing(0.25, 1),
                              borderRadius: 2,
                              transition: "all 0.3s ease",
                              backgroundColor: isActive(subSubItem.path)
                                ? theme.palette.background.primary
                                : "transparent",
                              "&:hover": {
                                backgroundColor:
                                  theme.palette.background.primary,
                                transform: "translateX(8px)",
                              },
                            }}
                          >
                            <ListItemText
                              primary={subSubItem.name}
                              primaryTypographyProps={{
                                fontWeight: isActive(subSubItem.path)
                                  ? 600
                                  : 400,
                                color: isActive(subSubItem.path)
                                  ? theme.palette.primary.main
                                  : theme.palette.text.primary,
                                fontSize: "0.85rem",
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </Box>
              ))}
            </List>
          </Collapse>
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
        <img
          src={logo}
          alt="CAPS Logo"
          style={{
            height: "50px",
            width: "auto",
            marginBottom: "8px",
            borderRadius: "4px",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: "1.5rem",
            color: theme.palette.primary.main,
          }}
        >
          CAPSBD
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
              <img
                src={logo}
                alt="CAPS Logo"
                style={{
                  height: "60px",
                  width: "auto",
                  marginRight: "12px",
                  borderRadius: "4px",
                }}
              />
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
                CAPS BD
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
