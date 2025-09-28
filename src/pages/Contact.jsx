import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Avatar,
  Stack,
  Divider,
  Paper,
  Chip,
  Fade,
  Zoom,
  useTheme,
  useMediaQuery,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Email,
  Phone,
  LocationOn,
  AccessTime,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Navigation,
  Business,
  Schedule,
  ContactSupport,
  People,
  Info,
  Map,
  Chat,
  Home,
  ChevronRight,
} from "@mui/icons-material";

const contactInfo = [
  {
    icon: <Email />,
    title: "Email Us",
    value: "capsbd25@gmail.com",
    subtitle: "We usually respond within 24 hours",
    color: "#1976d2",
    bgColor: "rgba(25, 118, 210, 0.08)",
  },
  {
    icon: <Phone />,
    title: "Call Us",
    value: "+8801704422997",
    subtitle: "Mon-Fri, 9AM - 6PM",
    color: "#2e7d32",
    bgColor: "rgba(46, 125, 50, 0.08)",
  },
  {
    icon: <LocationOn />,
    title: "Visit Us",
    value: "Purba Basabat, Bottalar Mor, Ward 08",
    subtitle: "Sadar Bagerhat, Bangladesh",
    color: "#7b1fa2",
    bgColor: "rgba(123, 31, 162, 0.08)",
  },
];

import asad2 from "../assets/asad3.jpeg";
import nasirImg from "../assets/nasir.jpeg";
import khokonImg from "../assets/khokon.jpeg";
import jakariaImg from "../assets/jakaria.jpeg";
import morshedaImg from "../assets/morsheda.jpeg";
import taslimaImg from "../assets/taslima.png";
import masudImg from "../assets/masud.jpeg";
import mamunImg from "../assets/mamun.jpeg";
import samimImg from "../assets/shamim.jpeg";
import soniaImg from "../assets/sonia.jpeg";

const teamMembers = [
  {
    name: "Muhammad Asaduzzaman",
    role: "Director General",
    email: "muhammad.asaduzzaman@capsbd.org",
    desc: "Leading the overall strategic direction and management of CAPS. Overseeing all programs and ensuring organizational excellence.",
    img: asad2,
    avatar: "MA",
    featured: true,
    department: "Leadership",
  },

  {
    name: "Muhammad Golam Sarwar",
    role: "Chairperson",
    email: "muhammad.golam.sarwar@capsbd.org",
    desc: "Providing strategic leadership and governance oversight. Ensuring CAPS mission alignment and sustainable growth.",
    img: undefined,
    avatar: "MGS",
    department: "Leadership",
  },
  {
    name: "Masudur Rahman Milton",
    role: "Director, Climate Finance & Resource Mobilization",
    email: "masudur.rahman@capsbd.com",
    desc: "Leading climate finance initiatives and resource mobilization strategies for sustainable development projects.",
    img: masudImg,
    avatar: "MRM",
    department: "Climate Action",
  },
  {
    name: "Taslima Khanam",
    role: "Director, Education & Training",
    email: "taslima.khanam@capsbd.org",
    desc: "Leading climate-smart education initiatives and capacity building programs for sustainable community development.",
    img: taslimaImg,
    avatar: "TK",
    department: "Education & Training",
  },
  {
    name: "M. Nasir Hossain Panchayet",
    role: "Executive Director",
    email: "nasir.hossain@capsbd.org",
    desc: "Managing day-to-day operations and implementing strategic initiatives for climate adaptation and community resilience.",
    img: nasirImg,
    avatar: "NHP",
    department: "Executive",
  },
  {
    name: "Soniya Akter",
    role: "Director, Monitoring Evaluation & Transparent",
    email: "soniya.akter@capsbd.com",
    phone: "+880 1234-567896",
    department: "Community Learning",
    desc: "Leading monitoring and evaluation for climate adaptation programs, ensuring accountability and delivering impact for sustainable development.",
    img: soniaImg,
    avatar: "SA",
    featured: true,
  },
  {
    name: "Muhammad Siddikur Rahman Khokon",
    role: "Executive Director",
    email: "siddikur.rahman@capsbd.com",
    desc: "Coordinating executive operations and strategic planning for sustainable development and climate resilience programs.",
    img: khokonImg,
    avatar: "MSRK",
    department: "Executive",
  },
  {
    name: "Muhammad Jakaria Hossain",
    role: "Director, Administration & Operation",
    email: "jakaria.hossain@capsbd.com",
    desc: "Managing administrative functions and operational efficiency to support CAPS programs and initiatives.",
    img: jakariaImg,
    avatar: "MJH",
    department: "Administration & Operation",
  },
  {
    name: "Mst. Morshada",
    role: "Director, Community Mobilization",
    email: "morshada@capsbd.com",
    desc: "Engaging communities and building partnerships for effective climate adaptation and sustainable development initiatives.",
    img: morshedaImg,
    avatar: "MM",
    department: "Community Mobilization",
  },
  {
    name: "Muhammad Al Mamun Hawlader",
    role: "Director, Project Management",
    email: "al.mamun@capsbd.com",
    desc: "Overseeing project planning, implementation, and monitoring to ensure successful delivery of climate adaptation programs.",
    img: mamunImg,
    avatar: "MAH",
    department: "Project Management",
  },
];

const socialLinks = [
  {
    icon: <Facebook />,
    color: "#1877F2",
    name: "Facebook",
    url: "https://www.facebook.com/share/1RbthrbeBQ/",
  },
];

// Professional styled components
const HeroSection = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%)",
  position: "relative",
  overflow: "hidden",
  width: "100vw",
  maxWidth: "100vw",
  margin: 0,
  padding: 0,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="0.5" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>\')',
    opacity: 0.4,
  },
}));

const SidebarCard = styled(Card)(({ theme }) => ({
  background: "#ffffff",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  height: "100%",
  width: "100%",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  "&:hover": {
    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
    borderColor: "#1976d2",
  },
}));

const ContentCard = styled(Card)(({ theme }) => ({
  background: "#ffffff",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  height: "100%",
  width: "100%",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  "&:hover": {
    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
  },
}));

const TeamCard = styled(Card)(({ theme }) => ({
  background: "#ffffff",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  "&:hover": {
    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
    borderColor: "#1976d2",
    transform: "translateY(-2px)",
  },
}));

const FeaturedTeamCard = styled(Card)(({ theme }) => ({
  background: "#fafafa",
  border: "2px solid #1976d2",
  borderRadius: "12px",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 4px 16px rgba(25, 118, 210, 0.15)",
  "&:hover": {
    boxShadow: "0 8px 24px rgba(25, 118, 210, 0.25)",
    transform: "translateY(-2px)",
  },
}));

const ContactInfoCard = styled(Card)(({ theme }) => ({
  background: "#ffffff",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  height: "100%",
  width: "100%",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  "&:hover": {
    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
    borderColor: "#1976d2",
    transform: "translateY(-2px)",
  },
}));

const SocialButton = styled(IconButton)(({ theme, color }) => ({
  background: color,
  color: "white",
  width: 48,
  height: 48,
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
  },
}));

function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const TabPanel = ({ children, value, index, ...other }) => (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`contact-tabpanel-${index}`}
      aria-labelledby={`contact-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );

  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        minHeight: "100vh",
        width: "100vw",
        maxWidth: "100vw",
        overflowX: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Hero Section */}
      <HeroSection
        sx={{
          py: { xs: 6, md: 8 },
          textAlign: "center",
          color: "white",
          width: "100vw",
          maxWidth: "100vw",
          margin: 0,
          padding: 0,
        }}
      >
        <Box sx={{ px: { xs: 2, sm: 3, md: 4 }, width: "100%" }}>
          <Fade in timeout={800}>
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontWeight: 600,
                mb: 3,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                letterSpacing: "0.5px",
              }}
            >
              Contact Us
            </Typography>
          </Fade>
          <Fade in timeout={1000}>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.9)",
                mb: 4,
              }}
            >
              Get in touch with our team to discuss collaboration opportunities,
              project inquiries, or general information about our climate
              adaptation initiatives.
            </Typography>
          </Fade>
        </Box>
      </HeroSection>

      {/* Breadcrumbs */}
      <Box sx={{ py: 2, px: { xs: 2, sm: 3, md: 4 }, width: "100%" }}>
        <Breadcrumbs
          separator={<ChevronRight fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ color: "#666" }}
        >
          <Link
            underline="hover"
            color="inherit"
            href="/"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Home sx={{ mr: 0.5, fontSize: 20 }} />
            Home
          </Link>
          <Typography color="text.primary">Contact</Typography>
        </Breadcrumbs>
      </Box>

      {/* Main Content with Sidebar */}
      <Box
        sx={{
          py: { xs: 4, md: 6 },
          px: { xs: 2, sm: 3, md: 4 },
          width: "100%",
          maxWidth: "100%",
          margin: 0,
        }}
      >
        <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ width: "100%" }}>
          {/* Sidebar Navigation */}
          <Grid item xs={12} md={3} sx={{ width: "100%" }}>
            <SidebarCard
              sx={{
                p: { xs: 2, sm: 3 },
                position: { xs: "static", md: "sticky" },
                top: 20,
                width: "100%",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: "#1a1a1a",
                  textAlign: "center",
                  fontSize: "1.1rem",
                }}
              >
                Quick Navigation
              </Typography>

              <List sx={{ p: 0 }}>
                <ListItem
                  button
                  selected={activeTab === 0}
                  onClick={() => setActiveTab(0)}
                  sx={{
                    borderRadius: "6px",
                    mb: 1,
                    "&.Mui-selected": {
                      background: "rgba(25, 118, 210, 0.08)",
                      color: "#1976d2",
                      borderLeft: "3px solid #1976d2",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <ContactSupport
                      color={activeTab === 0 ? "primary" : "action"}
                      sx={{ fontSize: 20 }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Contact Information"
                    primaryTypographyProps={{
                      fontSize: "0.9rem",
                      fontWeight: 500,
                    }}
                  />
                </ListItem>

                <ListItem
                  button
                  selected={activeTab === 1}
                  onClick={() => setActiveTab(1)}
                  sx={{
                    borderRadius: "6px",
                    mb: 1,
                    "&.Mui-selected": {
                      background: "rgba(25, 118, 210, 0.08)",
                      color: "#1976d2",
                      borderLeft: "3px solid #1976d2",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <People
                      color={activeTab === 1 ? "primary" : "action"}
                      sx={{ fontSize: 20 }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Our Team"
                    primaryTypographyProps={{
                      fontSize: "0.9rem",
                      fontWeight: 500,
                    }}
                  />
                </ListItem>

                <ListItem
                  button
                  selected={activeTab === 2}
                  onClick={() => setActiveTab(2)}
                  sx={{
                    borderRadius: "6px",
                    mb: 1,
                    "&.Mui-selected": {
                      background: "rgba(25, 118, 210, 0.08)",
                      color: "#1976d2",
                      borderLeft: "3px solid #1976d2",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Info
                      color={activeTab === 2 ? "primary" : "action"}
                      sx={{ fontSize: 20 }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Office Information"
                    primaryTypographyProps={{
                      fontSize: "0.9rem",
                      fontWeight: 500,
                    }}
                  />
                </ListItem>

                <ListItem
                  button
                  selected={activeTab === 3}
                  onClick={() => setActiveTab(3)}
                  sx={{
                    borderRadius: "6px",
                    mb: 1,
                    "&.Mui-selected": {
                      background: "rgba(25, 118, 210, 0.08)",
                      color: "#1976d2",
                      borderLeft: "3px solid #1976d2",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Map
                      color={activeTab === 3 ? "primary" : "action"}
                      sx={{ fontSize: 20 }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Location & Directions"
                    primaryTypographyProps={{
                      fontSize: "0.9rem",
                      fontWeight: 500,
                    }}
                  />
                </ListItem>
              </List>

              {/* Quick Contact */}
              <Divider sx={{ my: 3, borderColor: "#e0e0e0" }} />
              {/* <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "#1a1a1a",
                  textAlign: "center",
                  fontSize: "1rem",
                }}
              >
                Quick Contact
              </Typography>

              <Stack spacing={2}>
                <Button
                  variant="contained"
                  startIcon={<Email />}
                  fullWidth
                  sx={{
                    background: "#1976d2",
                    borderRadius: "6px",
                    py: 1.5,
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": {
                      background: "#1565c0",
                      transform: "translateY(-1px)",
                      boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Send Email
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<Phone />}
                  fullWidth
                  sx={{
                    borderColor: "#1976d2",
                    color: "#1976d2",
                    borderRadius: "6px",
                    py: 1.5,
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": {
                      background: "rgba(25, 118, 210, 0.04)",
                      borderColor: "#1565c0",
                      color: "#1565c0",
                      transform: "translateY(-1px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Call Now
                </Button>
              </Stack> */}
            </SidebarCard>
          </Grid>

          {/* Main Content Area */}
          <Grid item xs={12} md={9} sx={{ width: "100%" }}>
            <ContentCard sx={{ p: { xs: 2, sm: 3, md: 4 }, width: "100%" }}>
              {/* Tab Navigation */}
              <Box sx={{ borderBottom: 1, borderColor: "#e0e0e0", mb: 3 }}>
                <Tabs
                  value={activeTab}
                  onChange={handleTabChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  sx={{
                    "& .MuiTab-root": {
                      minHeight: 48,
                      fontWeight: 500,
                      textTransform: "none",
                      fontSize: "0.9rem",
                      color: "#666",
                      "&.Mui-selected": {
                        color: "#1976d2",
                        fontWeight: 600,
                      },
                    },
                    "& .MuiTabs-indicator": {
                      backgroundColor: "#1976d2",
                      height: 3,
                    },
                  }}
                >
                  <Tab label="Contact Information" icon={<ContactSupport />} />
                  <Tab label="Our Team" icon={<People />} />
                  <Tab label="Office Information" icon={<Info />} />
                  <Tab label="Location & Directions" icon={<Map />} />
                </Tabs>
              </Box>

              {/* Tab Content */}
              <TabPanel value={activeTab} index={0}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    mb: 4,
                    color: "#1a1a1a",
                    fontSize: "1.75rem",
                  }}
                >
                  Contact Information
                </Typography>

                <Grid
                  container
                  spacing={{ xs: 2, sm: 3 }}
                  sx={{ width: "100%" }}
                >
                  {contactInfo.map((item, i) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      lg={4}
                      key={i}
                      sx={{ width: "100%" }}
                    >
                      <Zoom in timeout={600 + i * 200}>
                        <ContactInfoCard sx={{ width: "100%" }}>
                          <CardContent
                            sx={{
                              p: { xs: 2, sm: 3 },
                              textAlign: "center",
                              width: "100%",
                            }}
                          >
                            <Box
                              sx={{
                                width: 64,
                                height: 64,
                                borderRadius: "50%",
                                background: item.bgColor,
                                color: item.color,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mx: "auto",
                                mb: 2,
                                fontSize: 28,
                              }}
                            >
                              {item.icon}
                            </Box>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 600,
                                mb: 2,
                                color: "#1a1a1a",
                                fontSize: "1.1rem",
                              }}
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              sx={{
                                mb: 2,
                                fontWeight: 500,
                                color: "#333",
                                fontSize: "0.95rem",
                              }}
                            >
                              {item.value}
                            </Typography>
                            <Typography
                              color="text.secondary"
                              sx={{ fontSize: "0.85rem", lineHeight: 1.5 }}
                            >
                              {item.subtitle}
                            </Typography>
                          </CardContent>
                        </ContactInfoCard>
                      </Zoom>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>

              <TabPanel value={activeTab} index={1}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    mb: 4,
                    color: "#1a1a1a",
                    fontSize: "1.75rem",
                  }}
                >
                  Our Leadership Team
                </Typography>

                {/* Director General - Featured Single Column */}
                <Box sx={{ mb: 6 }}>
                  <Grid container justifyContent="center">
                    <Grid item xs={12} sm={10} md={8} lg={6}>
                      {(() => {
                        const directorGeneral = teamMembers.find(
                          (member) => member.featured
                        );
                        return directorGeneral ? (
                          <FeaturedTeamCard
                            sx={{
                              width: "100%",
                              maxWidth: "600px",
                              minHeight: "400px",
                              display: "flex",
                              flexDirection: "column",
                              position: "relative",
                              overflow: "hidden",
                              mx: "auto",
                              "&:hover": {
                                transform: "translateY(-8px) scale(1.02)",
                                boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                              },
                            }}
                          >
                            <CardContent
                              sx={{
                                textAlign: "center",
                                p: { xs: 4, sm: 5 },
                                width: "100%",
                                flexGrow: 1,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                              }}
                            >
                              {/* Avatar */}
                              <Box sx={{ mb: 3 }}>
                                <Avatar
                                  className="avatar"
                                  src={directorGeneral.img}
                                  alt={directorGeneral.name}
                                  sx={{
                                    width: { xs: 100, sm: 120, md: 140 },
                                    height: { xs: 100, sm: 120, md: 140 },
                                    margin: "0 auto 20px",
                                    border: "6px solid #fff",
                                    boxShadow: "0 12px 32px rgba(0,0,0,0.2)",
                                  }}
                                >
                                  {directorGeneral.avatar}
                                </Avatar>
                              </Box>

                              {/* Name and Position */}
                              <Box sx={{ mb: 3 }}>
                                <Typography
                                  variant="h4"
                                  sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    color: "#1e3c72",
                                    fontSize: {
                                      xs: "1.5rem",
                                      sm: "1.8rem",
                                      md: "2rem",
                                    },
                                    lineHeight: 1.3,
                                  }}
                                >
                                  {directorGeneral.name}
                                </Typography>
                                <Typography
                                  variant="h5"
                                  sx={{
                                    fontWeight: 600,
                                    mb: 3,
                                    color: "#667eea",
                                    fontSize: {
                                      xs: "1.1rem",
                                      sm: "1.3rem",
                                      md: "1.4rem",
                                    },
                                    lineHeight: 1.4,
                                  }}
                                >
                                  {directorGeneral.role}
                                </Typography>
                              </Box>

                              {/* Department Chip */}
                              <Box sx={{ mb: 4 }}>
                                <Chip
                                  label={directorGeneral.department}
                                  sx={{
                                    backgroundColor: "rgba(102, 126, 234, 0.1)",
                                    color: "#667eea",
                                    fontWeight: 600,
                                    borderRadius: "25px",
                                    fontSize: { xs: "0.9rem", sm: "1rem" },
                                    px: 3,
                                    py: 1.5,
                                    height: "auto",
                                  }}
                                />
                              </Box>

                              {/* Description */}
                              <Typography
                                variant="body1"
                                sx={{
                                  mb: 4,
                                  color: "#666",
                                  lineHeight: 1.7,
                                  fontSize: {
                                    xs: "1rem",
                                    sm: "1.1rem",
                                    md: "1.2rem",
                                  },
                                  textAlign: "justify",
                                  wordBreak: "break-word",
                                  overflowWrap: "break-word",
                                  hyphens: "auto",
                                  flexGrow: 1,
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                {directorGeneral.desc}
                              </Typography>

                              {/* Email Footer */}
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  pt: 3,
                                  borderTop: "2px solid rgba(0,0,0,0.08)",
                                  mt: "auto",
                                }}
                              >
                                <Typography
                                  variant="body1"
                                  sx={{
                                    color: "#888",
                                    fontSize: {
                                      xs: "0.9rem",
                                      sm: "1rem",
                                      md: "1.1rem",
                                    },
                                    fontWeight: 500,
                                    wordBreak: "break-word",
                                    overflowWrap: "break-word",
                                    textAlign: "center",
                                  }}
                                >
                                  <strong>Email:</strong>{" "}
                                  {directorGeneral.email}
                                </Typography>
                              </Box>
                            </CardContent>
                          </FeaturedTeamCard>
                        ) : null;
                      })()}
                    </Grid>
                  </Grid>
                </Box>

                {/* Rest of the Team - 3 Column Grid */}
                <Grid
                  container
                  spacing={{ xs: 3, sm: 4, md: 5 }}
                  justifyContent="center"
                  alignItems="stretch"
                  sx={{ width: "100%", maxWidth: "1200px", mx: "auto" }}
                >
                  {teamMembers
                    .filter((member) => !member.featured)
                    .map((member, index) => (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={4}
                        key={index}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mb: 3,
                        }}
                      >
                        <TeamCard
                          sx={{
                            width: "100%",
                            maxWidth: "350px",
                            minHeight: "500px",
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                            overflow: "hidden",
                            "&:hover": {
                              transform: "translateY(-8px) scale(1.02)",
                              boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                            },
                          }}
                        >
                          <CardContent
                            sx={{
                              textAlign: "center",
                              p: { xs: 3, sm: 4 },
                              width: "100%",
                              flexGrow: 1,
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                            }}
                          >
                            {/* Avatar */}
                            <Box sx={{ mb: 3 }}>
                              <Avatar
                                className="avatar"
                                src={member.img}
                                alt={member.name}
                                sx={{
                                  width: { xs: 70, sm: 80, md: 90 },
                                  height: { xs: 70, sm: 80, md: 90 },
                                  margin: "0 auto 16px",
                                  border: "4px solid #fff",
                                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                                }}
                              >
                                {member.avatar}
                              </Avatar>
                            </Box>

                            {/* Name and Position */}
                            <Box sx={{ mb: 2 }}>
                              <Typography
                                variant="h5"
                                sx={{
                                  fontWeight: 700,
                                  mb: 1,
                                  color: "#1e3c72",
                                  fontSize: {
                                    xs: "1.1rem",
                                    sm: "1.2rem",
                                    md: "1.3rem",
                                  },
                                  lineHeight: 1.3,
                                }}
                              >
                                {member.name}
                              </Typography>
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  fontWeight: 600,
                                  mb: 2,
                                  color: "#667eea",
                                  fontSize: {
                                    xs: "0.9rem",
                                    sm: "1rem",
                                    md: "1.1rem",
                                  },
                                  lineHeight: 1.4,
                                }}
                              >
                                {member.role}
                              </Typography>
                            </Box>

                            {/* Department Chip */}
                            <Box sx={{ mb: 3 }}>
                              <Chip
                                label={member.department}
                                sx={{
                                  backgroundColor: "rgba(102, 126, 234, 0.1)",
                                  color: "#667eea",
                                  fontWeight: 600,
                                  borderRadius: "20px",
                                  fontSize: { xs: "0.75rem", sm: "0.8rem" },
                                  px: 2,
                                  py: 1,
                                }}
                              />
                            </Box>

                            {/* Description */}
                            <Typography
                              variant="body2"
                              sx={{
                                mb: 3,
                                color: "#666",
                                lineHeight: 1.6,
                                fontSize: {
                                  xs: "0.8rem",
                                  sm: "0.85rem",
                                  md: "0.9rem",
                                },
                                textAlign: "justify",
                                wordBreak: "break-word",
                                overflowWrap: "break-word",
                                hyphens: "auto",
                                flexGrow: 1,
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              {member.desc}
                            </Typography>

                            {/* Email Footer */}
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                pt: 2,
                                borderTop: "1px solid rgba(0,0,0,0.08)",
                                mt: "auto",
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "#888",
                                  fontSize: {
                                    xs: "0.7rem",
                                    sm: "0.75rem",
                                    md: "0.8rem",
                                  },
                                  fontWeight: 500,
                                  wordBreak: "break-word",
                                  overflowWrap: "break-word",
                                  textAlign: "center",
                                }}
                              >
                                <strong>Email:</strong> {member.email}
                              </Typography>
                            </Box>
                          </CardContent>
                        </TeamCard>
                      </Grid>
                    ))}
                </Grid>
              </TabPanel>

              <TabPanel value={activeTab} index={2}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    mb: 4,
                    color: "#1a1a1a",
                    fontSize: "1.75rem",
                  }}
                >
                  Office Information
                </Typography>

                <Grid
                  container
                  spacing={{ xs: 2, sm: 3 }}
                  sx={{ width: "100%" }}
                >
                  <Grid item xs={12} md={6} sx={{ width: "100%" }}>
                    <Card
                      sx={{
                        p: { xs: 2, sm: 3 },
                        height: "100%",
                        width: "100%",
                        background: "#ffffff",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        mb={3}
                      >
                        <Schedule sx={{ color: "#1976d2", fontSize: 28 }} />
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600,
                            color: "#1a1a1a",
                            fontSize: "1.3rem",
                          }}
                        >
                          Office Hours
                        </Typography>
                      </Stack>

                      <Stack spacing={2} sx={{ mb: 4 }}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: "6px",
                            bgcolor: "rgba(25, 118, 210, 0.04)",
                            border: "1px solid rgba(25, 118, 210, 0.1)",
                          }}
                        >
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            <Typography fontWeight={500} fontSize="0.9rem">
                              Monday - Friday:
                            </Typography>
                            <Typography
                              color="text.secondary"
                              fontSize="0.9rem"
                            >
                              9:00 AM - 6:00 PM
                            </Typography>
                          </Stack>
                        </Box>

                        <Box
                          sx={{
                            p: 2,
                            borderRadius: "6px",
                            bgcolor: "rgba(46, 125, 50, 0.04)",
                            border: "1px solid rgba(46, 125, 50, 0.1)",
                          }}
                        >
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            <Typography fontWeight={500} fontSize="0.9rem">
                              Saturday:
                            </Typography>
                            <Typography
                              color="text.secondary"
                              fontSize="0.9rem"
                            >
                              9:00 AM - 6:00 PM
                            </Typography>
                          </Stack>
                        </Box>

                        <Box
                          sx={{
                            p: 2,
                            borderRadius: "6px",
                            bgcolor: "rgba(211, 47, 47, 0.04)",
                            border: "1px solid rgba(211, 47, 47, 0.1)",
                          }}
                        >
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            <Typography fontWeight={500} fontSize="0.9rem">
                              Sunday:
                            </Typography>
                            <Typography
                              color="text.secondary"
                              fontSize="0.9rem"
                            >
                              Closed
                            </Typography>
                          </Stack>
                        </Box>
                      </Stack>

                      <Box
                        sx={{
                          background: "#fff3e0",
                          p: 3,
                          borderRadius: "6px",
                          border: "1px solid #ffb74d",
                          textAlign: "center",
                        }}
                      >
                        <Typography
                          fontWeight={600}
                          mb={1}
                          sx={{ color: "#e65100", fontSize: "0.95rem" }}
                        >
                          🚨 Emergency Contact
                        </Typography>
                        <Typography
                          color="error"
                          fontWeight={600}
                          sx={{ fontSize: "1.1rem" }}
                        >
                          +8801704422997
                        </Typography>
                        <Typography
                          color="text.secondary"
                          sx={{ fontSize: "0.8rem" }}
                        >
                          Available 24/7 for urgent matters
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6} sx={{ width: "100%" }}>
                    <Card
                      sx={{
                        p: { xs: 2, sm: 3 },
                        height: "100%",
                        width: "100%",
                        background: "#ffffff",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        mb={3}
                      >
                        <Business sx={{ color: "#7b1fa2", fontSize: 28 }} />
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600,
                            color: "#1a1a1a",
                            fontSize: "1.3rem",
                          }}
                        >
                          Organization Information
                        </Typography>
                      </Stack>

                      <Stack spacing={3}>
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600,
                              mb: 1,
                              color: "#333",
                              fontSize: "0.9rem",
                            }}
                          >
                            Department Structure
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: "0.85rem", lineHeight: 1.5 }}
                          >
                            Leadership, Executive, Climate Action, Education &
                            Training, Community Mobilization, Project
                            Management, and more.
                          </Typography>
                        </Box>

                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600,
                              mb: 1,
                              color: "#333",
                              fontSize: "0.9rem",
                            }}
                          >
                            Focus Areas
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: "0.85rem", lineHeight: 1.5 }}
                          >
                            Climate adaptation, sustainable development,
                            community resilience, and environmental education.
                          </Typography>
                        </Box>

                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600,
                              mb: 1,
                              color: "#333",
                              fontSize: "0.9rem",
                            }}
                          >
                            Response Time
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: "0.85rem", lineHeight: 1.5 }}
                          >
                            We typically respond to inquiries within 24 hours
                            during business days.
                          </Typography>
                        </Box>
                      </Stack>
                    </Card>
                  </Grid>
                </Grid>
              </TabPanel>

              <TabPanel value={activeTab} index={3}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    mb: 4,
                    color: "#1a1a1a",
                    fontSize: "1.75rem",
                  }}
                >
                  Location & Directions
                </Typography>

                <Grid
                  container
                  spacing={{ xs: 2, sm: 3 }}
                  sx={{ width: "100%" }}
                >
                  <Grid item xs={12} md={6} sx={{ width: "100%" }}>
                    <Card
                      sx={{
                        p: { xs: 2, sm: 3 },
                        height: "100%",
                        width: "100%",
                        background: "#ffffff",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        mb={3}
                      >
                        <LocationOn sx={{ color: "#7b1fa2", fontSize: 28 }} />
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600,
                            color: "#1a1a1a",
                            fontSize: "1.3rem",
                          }}
                        >
                          Our Address
                        </Typography>
                      </Stack>

                      <Typography
                        sx={{
                          mb: 4,
                          fontSize: "1rem",
                          lineHeight: 1.6,
                          color: "#333",
                        }}
                      >
                        Purba Basabat, Bottalar Mor Ward 08
                        <br />
                        Sadar Bagerhat, Bangladesh
                      </Typography>

                      <Button
                        variant="contained"
                        startIcon={<Navigation />}
                        size="large"
                        fullWidth
                        sx={{
                          background: "#7b1fa2",
                          py: 1.5,
                          borderRadius: "6px",
                          fontWeight: 500,
                          textTransform: "none",
                          boxShadow: "0 2px 8px rgba(123, 31, 162, 0.3)",
                          "&:hover": {
                            background: "#6a1b9a",
                            transform: "translateY(-1px)",
                            boxShadow: "0 4px 12px rgba(123, 31, 162, 0.4)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        Get Directions
                      </Button>
                    </Card>
                  </Grid>

                  <Grid item xs={12} md={6} sx={{ width: "100%" }}>
                    <Card
                      sx={{
                        p: { xs: 2, sm: 3 },
                        height: "100%",
                        width: "100%",
                        background: "#ffffff",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        mb={3}
                      >
                        <Chat sx={{ color: "#2e7d32", fontSize: 28 }} />
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600,
                            color: "#1a1a1a",
                            fontSize: "1.3rem",
                          }}
                        >
                          Connect With Us
                        </Typography>
                      </Stack>

                      <Stack spacing={3}>
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600,
                              mb: 1,
                              color: "#333",
                              fontSize: "0.9rem",
                            }}
                          >
                            Social Media
                          </Typography>
                          <Stack direction="row" spacing={2}>
                            {socialLinks.map((social, i) => (
                              <Tooltip key={i} title={social.name}>
                                <SocialButton
                                  component="a"
                                  href={social.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  color={social.color}
                                >
                                  {social.icon}
                                </SocialButton>
                              </Tooltip>
                            ))}
                          </Stack>
                        </Box>

                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600,
                              mb: 1,
                              color: "#333",
                              fontSize: "0.9rem",
                            }}
                          >
                            Best Time to Contact
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: "0.85rem", lineHeight: 1.5 }}
                          >
                            Weekdays between 9:00 AM - 6:00 PM for immediate
                            assistance. Emergency contacts available 24/7.
                          </Typography>
                        </Box>

                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600,
                              mb: 1,
                              color: "#333",
                              fontSize: "0.9rem",
                            }}
                          >
                            Visit Planning
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: "0.85rem", lineHeight: 1.5 }}
                          >
                            Please schedule appointments in advance for
                            in-person meetings and consultations.
                          </Typography>
                        </Box>
                      </Stack>
                    </Card>
                  </Grid>
                </Grid>
              </TabPanel>
            </ContentCard>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Contact;
