import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider,
  Chip,
  Button,
  useTheme,
  useMediaQuery,
  Fade,
  Zoom,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Business,
  School,
  Science,
  Psychology,
  Engineering,
  AccountBalance,
  Group,
  Star,
  Verified,
} from "@mui/icons-material";
import asad2 from "../assets/asad3.jpeg";
import nasirImg from "../assets/nasir.jpeg";
import khokonImg from "../assets/khokon.jpeg";
import jakariaImg from "../assets/jakaria.jpeg";
import morshedaImg from "../assets/morsheda.jpeg";
import taslimaImg from "../assets/taslima.png";
import masudImg from "../assets/masud.jpeg";
import mamunImg from "../assets/mamun.jpeg";
import sabrinaImg from "../assets/sabrina.jpeg";
import mahfuzaImg from "../assets/mahfuza.jpeg";

import samimImg from "../assets/shamim.jpeg";
import soniaImg from "../assets/sonia.jpeg";

// Enhanced styled components for modern design
const HeroSection = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  position: "relative",
  overflow: "hidden",
  padding: theme.spacing(12, 0),
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)
    `,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="40" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>\')',
    opacity: 0.3,
  },
}));

const EnhancedTeamCard = styled(Card)(({ theme }) => ({
  height: "100%",
  background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: "20px",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
    transform: "scaleX(0)",
    transition: "transform 0.3s ease",
  },
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    "&::before": {
      transform: "scaleX(1)",
    },
    "& .avatar": {
      transform: "scale(1.05)",
    },
  },
}));

const EnhancedAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  margin: "0 auto 20px",
  border: "4px solid #fff",
  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
  transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  fontSize: "2.5rem",
  fontWeight: 600,
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "& img": {
    objectFit: "cover",
  },
}));

const TeamsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpanded = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  // Team Members Data
  const teamMembers = [
    {
      name: "Muhammad Asaduzzaman",
      position: "Director General",
      email: "muhammad.asaduzzaman@capsbd.com",
      phone: "+880 1234-567890",
      department: "Leadership",
      description:
        "Leading the overall strategic direction and management of CAPS. ",
      img: asad2,
      avatar: "MA",
      icon: Business,
      linkedin: "https://linkedin.com/in/muhammad-asaduzzaman",
    },
    {
      name: "Samim Chowdhury",
      position: "Executive Director, Climate-Smart Microfinance",
      email: "shamim@capsbd.com",
      phone: "+880 1234-567890",
      department: "Microfinance",
      description:
        "Advancing climate-smart microfinance for sustainable livelihoods and climate resilience.",
      img: samimImg,
      avatar: "SC",
      icon: Business,
      linkedin: "https://linkedin.com/in/samim-chowdhury",
    },
    {
      name: "Muhammad Golam Sarwar",
      position: "Chairperson",
      email: "muhammad.golam.sarwar@capsbd.org",
      phone: "+880 1234-567891",
      department: "Leadership",
      description:
        "Providing strategic leadership and governance oversight. Ensuring CAPS mission alignment and sustainable growth.",
      img: undefined,
      avatar: "MGS",
      icon: Verified,
      linkedin: "https://linkedin.com/in/muhammad-golam-sarwar",
    },
    {
      name: "Md. Masud Rana Milton",
      position: "Director, Climate Finance & Resource Mobilization",
      email: "masud.hossain@capsbd.org",
      phone: "+880 1234-567892",
      department: "Climate Finance",
      description:
        "Leading climate finance initiatives and resource mobilization strategies for sustainable development projects.",
      img: masudImg,
      avatar: "MRM",
      icon: Business,
      linkedin: "https://linkedin.com/in/masud-rana-milton",
    },
    {
      name: "Taslima Khanam",
      position: "Director, Education & Training",
      email: "taslima.khanam@capsbd.org",
      phone: "+880 1234-567893",
      department: "Education & Training",
      description:
        "Leading climate-smart education initiatives and capacity building programs for sustainable community development.",
      img: taslimaImg,
      avatar: "TK",
      icon: School,
      linkedin: "https://linkedin.com/in/taslima-khanam",
    },
    {
      name: "M. Nasir Hossain Panchayet",
      position: "Executive Director",
      email: "nasir.hossain@capsbd.org",
      phone: "+880 1234-567894",
      department: "Executive",
      description:
        "Managing day-to-day operations and implementing strategic initiatives for climate adaptation and community resilience.",
      img: nasirImg,
      avatar: "NHP",
      icon: Business,
      linkedin: "https://linkedin.com/in/nasir-hossain",
    },
    {
      name: "Sabrina Akter",
      position: "Director, Community Learning Research",
      email: "sabrina.akter@capsbd.com",
      phone: "+880 1234-567895",
      department: "Community Learning",
      description:
        "Leading research initiatives in community learning and development. Designing innovative educational programs that empower communities through climate-smart learning approaches.",
      img: sabrinaImg,
      avatar: "SA",
      icon: School,
      linkedin: "https://linkedin.com/in/sabrina-akter",
    },
    {
      name: "Mahfuza Akter",
      position: "Director, Climate Smart Education",
      email: "mahfuza.akter@capsbd.com",
      phone: "+880 1234-567896",
      department: "Community Learning",
      description:
        "Spearheading climate-smart education programs and curriculum development. Creating sustainable learning environments that integrate environmental awareness with practical skills development.",
      img: mahfuzaImg,
      avatar: "MA",
      icon: School,
      linkedin: "https://linkedin.com/in/mahfuza-akter",
    },
    {
      name: "Soniya Akter",
      position: "Director, Monitoring, Evaluation & Transparency",
      email: "soniya.akter@capsbd.com",
      phone: "+880 1234-567896",
      department: "M&E",
      description:
        "Leading monitoring and evaluation for climate adaptation programs, ensuring accountability and delivering impact for sustainable development.",
      img: soniaImg,
      avatar: "SA",
      icon: Business,
      linkedin: "https://linkedin.com/in/soniya-akter",
    },
    {
      name: "Muhammad Siddikur Rahman Khokon",
      position: "Executive Director",
      email: "siddikur.rahman@capsbd.com",
      phone: "+880 1234-567897",
      department: "Executive",
      description:
        "Coordinating executive operations and strategic planning for sustainable development and climate resilience programs.",
      img: khokonImg,
      avatar: "MSRK",
      icon: Business,
      linkedin: "https://linkedin.com/in/siddikur-rahman",
    },
    {
      name: "Muhammad Jakaria Hossain",
      position: "Director, Administration & Operation",
      email: "jakaria.hossain@capsbd.com",
      phone: "+880 1234-567898",
      department: "Administration & Operation",
      description:
        "Managing administrative functions and operational efficiency to support CAPS programs and initiatives.",
      img: jakariaImg,
      avatar: "MKH",
      icon: AccountBalance,
      linkedin: "https://linkedin.com/in/jakaria-hossain",
    },
    {
      name: "Mst. Morshada",
      position: "Director, Community Mobilization",
      email: "morshada@capsbd.com",
      phone: "+880 1234-567899",
      department: "Community Mobilization",
      description:
        "Engaging communities and building partnerships for effective climate adaptation and sustainable development initiatives.",
      img: morshedaImg,
      avatar: "MM",
      icon: Psychology,
      linkedin: "https://linkedin.com/in/mst-morshada",
    },
    {
      name: "Muhammad Al Mamun Hawlader",
      position: "Director, Project Management",
      email: "al.mamun@capsbd.com",
      phone: "+880 1234-567900",
      department: "Project Management",
      description:
        "Overseeing project planning, implementation, and monitoring to ensure successful delivery of climate adaptation programs.",
      img: mamunImg,
      avatar: "MAH",
      icon: Engineering,
      linkedin: "https://linkedin.com/in/al-mamun-hawlader",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Enhanced Hero Section */}
      <HeroSection>
        <Container
          maxWidth="xl"
          sx={{ px: { xs: 2, sm: 3 }, position: "relative", zIndex: 1 }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Fade in timeout={1000}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  color: "white",
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                  mb: 3,
                  textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                Meet Our Team
              </Typography>
            </Fade>
            <Fade in timeout={1200}>
              <Typography
                variant="h5"
                sx={{
                  color: "rgba(255,255,255,0.95)",
                  fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                  maxWidth: "800px",
                  mx: "auto",
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                Dedicated professionals driving sustainable change and
                environmental protection
              </Typography>
            </Fade>

            {/* Team Stats */}
            <Fade in timeout={1400}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 3,
                  flexWrap: "wrap",
                }}
              >
                <Chip
                  icon={<Group />}
                  label={`${teamMembers.length} Team Members`}
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.2)",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "1rem",
                  }}
                />
              </Box>
            </Fade>
          </Box>
        </Container>
      </HeroSection>

      {/* Team Members Grid */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 }, pb: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          {/* Director General - Single Column */}
          {teamMembers
            .filter((member) => member.position === "Director General")
            .map((member, index) => (
              <Grid item xs={12} key={index}>
                <Zoom in timeout={500 + index * 100}>
                  <Box sx={{ maxWidth: "600px", mx: "auto" }}>
                    <EnhancedTeamCard>
                      <CardContent
                        sx={{
                          textAlign: "center",
                          p: 4,
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <EnhancedAvatar
                          className="avatar"
                          src={member.img}
                          alt={member.name}
                        >
                          {member.avatar}
                        </EnhancedAvatar>

                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 700,
                            mb: 1,
                            color: "#1e3c72",
                            fontSize: { xs: "1.5rem", md: "1.8rem" },
                          }}
                        >
                          {member.name}
                        </Typography>

                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 2,
                            color: "#667eea",
                            fontSize: { xs: "1.1rem", md: "1.3rem" },
                          }}
                        >
                          {member.position}
                        </Typography>

                        <Chip
                          icon={<member.icon />}
                          label={member.department}
                          sx={{
                            mb: 3,
                            backgroundColor: "rgba(102, 126, 234, 0.1)",
                            color: "#667eea",
                            fontWeight: 600,
                            borderRadius: "20px",
                            fontSize: "1rem",
                          }}
                        />

                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="body1"
                            sx={{
                              color: "#666",
                              lineHeight: 1.6,
                              fontSize: "1rem",
                              textAlign: "justify",
                            }}
                          >
                            {member.description}
                          </Typography>
                        </Box>

                        <Divider
                          sx={{ my: 2, borderColor: "rgba(0,0,0,0.08)" }}
                        />

                        {/* Contact Information */}
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                            alignItems: "center",
                            mt: "auto",
                          }}
                        >
                          {/* <Typography
                            variant="body1"
                            sx={{
                              color: "#888",
                              fontSize: "1rem",
                              fontWeight: 500,
                              textAlign: "center",
                            }}
                          >
                            {member.email}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#888",
                              fontSize: "0.9rem",
                              fontWeight: 400,
                              textAlign: "center",
                            }}
                          >
                            {member.phone}
                          </Typography> */}
                        </Box>
                      </CardContent>
                    </EnhancedTeamCard>
                  </Box>
                </Zoom>
              </Grid>
            ))}

          {/* Other Team Members - 3 Column Grid */}
          {teamMembers
            .filter((member) => member.position !== "Director General")
            .map((member, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Zoom in timeout={500 + index * 100}>
                  <EnhancedTeamCard>
                    <CardContent
                      sx={{
                        textAlign: "center",
                        p: 4,
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <EnhancedAvatar
                        className="avatar"
                        src={member.img}
                        alt={member.name}
                      >
                        {member.avatar}
                      </EnhancedAvatar>

                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                          color: "#1e3c72",
                          fontSize: { xs: "1.2rem", md: "1.3rem" },
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
                          fontSize: { xs: "1rem", md: "1.1rem" },
                        }}
                      >
                        {member.position}
                      </Typography>

                      <Chip
                        icon={<member.icon />}
                        label={member.department}
                        sx={{
                          mb: 3,
                          backgroundColor: "rgba(102, 126, 234, 0.1)",
                          color: "#667eea",
                          fontWeight: 600,
                          borderRadius: "20px",
                        }}
                      />

                      <Box sx={{ mb: 3 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#666",
                            lineHeight: 1.6,
                            fontSize: "0.95rem",
                            minHeight: "4rem",
                            textAlign: "justify",
                          }}
                        >
                          {expandedCards[index]
                            ? member.description
                            : truncateText(member.description, 100)}
                        </Typography>
                        {member.description.length > 100 && (
                          <Button
                            onClick={() => toggleExpanded(index)}
                            sx={{
                              mt: 1,
                              color: "#667eea",
                              textTransform: "none",
                              fontSize: "0.85rem",
                              fontWeight: 600,
                              p: 0,
                              minWidth: "auto",
                              "&:hover": {
                                backgroundColor: "transparent",
                                textDecoration: "underline",
                              },
                            }}
                          >
                            {expandedCards[index] ? "Read Less" : "Read More"}
                          </Button>
                        )}
                      </Box>

                      <Divider
                        sx={{ my: 2, borderColor: "rgba(0,0,0,0.08)" }}
                      />

                      {/* Contact Information */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                          alignItems: "center",
                          mt: "auto",
                        }}
                      >
                        {/* <Typography
                          variant="body2"
                          sx={{
                            color: "#888",
                            fontSize: "0.9rem",
                            fontWeight: 500,
                            textAlign: "center",
                          }}
                        >
                          {member.email}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#888",
                            fontSize: "0.85rem",
                            fontWeight: 400,
                            textAlign: "center",
                          }}
                        >
                          {member.phone}
                        </Typography> */}
                      </Box>
                    </CardContent>
                  </EnhancedTeamCard>
                </Zoom>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamsPage;
