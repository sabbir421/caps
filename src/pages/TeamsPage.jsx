import React from "react";
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
  Paper,
  useTheme,
  useMediaQuery,
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
import asad2 from "../assets/asad2.jpeg";
import nasirImg from "../assets/nasir.jpeg";
import khokonImg from "../assets/khokon.jpeg";
import jakariaImg from "../assets/jakaria.jpeg";
import morshedaImg from "../assets/morsheda.jpeg";
import taslimaImg from "../assets/taslima.png";
import masudImg from "../assets/masud.jpeg";
import mamunImg from "../assets/mamun.jpeg";
import sabrinaImg from "../assets/sabrina.jpeg";
import mahfuzaImg from "../assets/mahfuza.jpeg";
import asadImg3 from "../assets/asad3.jpeg";

// Styled components for modern design
const HeroSection = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
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

const TeamCard = styled(Card)(({ theme }) => ({
  height: "100%",
  background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: "16px",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
  },
  "&:hover": {
    transform: "translateY(-12px)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    "& .avatar": {
      transform: "scale(1.1)",
    },
  },
}));

const AdvisoryCard = styled(Card)(({ theme }) => ({
  height: "100%",
  background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: "16px",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "linear-gradient(90deg, #f093fb 0%, #f5576c 100%)",
  },
  "&:hover": {
    transform: "translateY(-12px)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    "& .avatar": {
      transform: "scale(1.1)",
    },
  },
}));

const DirectorCard = styled(Card)(({ theme }) => ({
  height: "100%",
  background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: "16px",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
  },
  "&:hover": {
    transform: "translateY(-12px)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    "& .avatar": {
      transform: "scale(1.1)",
    },
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  margin: "0 auto 20px",
  border: "4px solid #fff",
  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
  transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  fontSize: "2rem",
  fontWeight: 600,
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "& img": {
    objectFit: "cover",
  },
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(6),
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-16px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "60px",
    height: "4px",
    background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "2px",
  },
}));

const TeamsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Team Members Data (real data + asset images)
  const teamMembers = [
    {
      name: "Muhammad Asaduzzaman",
      position: "Director General",
      email: "muhammad.asaduzzaman@capsbd.org",
      department: "Leadership",
      description:
        "Leading the overall strategic direction and management of CAPS. Overseeing all programs and ensuring organizational excellence.",
      img: asadImg3,
      avatar: "MA",
      icon: Business,
    },
    {
      name: "Muhammad Golam Sarwar",
      position: "Chairperson",
      email: "muhammad.golam.sarwar@capsbd.org",
      department: "Leadership",
      description:
        "Providing strategic leadership and governance oversight. Ensuring CAPS mission alignment and sustainable growth.",
      img: undefined,
      avatar: "MGS",
      icon: Verified,
    },
    {
      name: "Md. Masud Rana Milton",
      position: "Director, Climate Finance & Resource Mobilization",
      email: "masud.hossain@capsbd.org",
      department: "Climate Finance",
      description:
        "Leading climate finance initiatives and resource mobilization strategies for sustainable development projects.",
      img: masudImg,
      avatar: "MRM",
      icon: Business,
    },
    {
      name: "Taslima Khanam",
      position: "Director, Education & Training",
      email: "taslima.khanam@capsbd.org",
      department: "Education & Training",
      description:
        "Leading climate-smart education initiatives and capacity building programs for sustainable community development.",
      img: taslimaImg,
      avatar: "TK",
      icon: School,
    },

    {
      name: "M. Nasir Hossain Panchayet",
      position: "Executive Director",
      email: "nasir.hossain@capsbd.com",
      department: "Executive",
      description:
        "Managing day-to-day operations and implementing strategic initiatives for climate adaptation and community resilience.",
      img: nasirImg,
      avatar: "NHP",
      icon: Business,
    },
    {
      name: "Sabrina Akter",
      position: "Director Community Learning Research.",
      email: "sabrina.akter@capsbd.com",
      department: "Community Learning",
      description:
        "Managing day-to-day operations and implementing strategic initiatives for climate adaptation and community resilience.",
      img: sabrinaImg,
      avatar: "SA",
      icon: School,
    },
    {
      name: "Mahfuza Akter",
      position: "Director, Climate Smart Education",
      email: "mahfuza.akter@capsbd.com",
      department: "Community Learning",
      description:
        "Managing day-to-day operations and implementing strategic initiatives for climate adaptation and community resilience.",
      img: mahfuzaImg,
      avatar: "MA",
      icon: School,
    },

    {
      name: "Muhammad Siddikur Rahman Khokon",
      position: "Executive Director",
      email: "siddikur.rahman@capsbd.com",
      department: "Executive",
      description:
        "Coordinating executive operations and strategic planning for sustainable development and climate resilience programs.",
      img: khokonImg,
      avatar: "MSRK",
      icon: Business,
    },
    {
      name: "Muhammad Jakaria Hossain",
      position: "Director, Administration & Operation",
      email: "jakaria.hossain@capsbd.com",
      department: "Administration & Operation",
      description:
        "Managing administrative functions and operational efficiency to support CAPS programs and initiatives.",
      img: jakariaImg,
      avatar: "MKH",
      icon: AccountBalance,
    },
    {
      name: "Mst. Morshada",
      position: "Director, Community Mobilization",
      email: "morshada@capsbd.com",
      department: "Community Mobilization",
      description:
        "Engaging communities and building partnerships for effective climate adaptation and sustainable development initiatives.",
      img: undefined,
      avatar: "MM",
      icon: Psychology,
    },
    {
      name: "Muhammad Al Mamun Hawlader",
      position: "Director, Project Management",
      email: "al.mamun@capsbd.com",
      department: "Project Management",
      description:
        "Overseeing project planning, implementation, and monitoring to ensure successful delivery of climate adaptation programs.",
      img: mamunImg,
      avatar: "MAH",
      icon: Engineering,
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Hero Section */}
      <HeroSection sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 } }}>
          <Box sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                color: "white",
                fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
                mb: 3,
                textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              Our Team
            </Typography>
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
              Meet the dedicated professionals driving sustainable change and
              environmental protection
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Chip
                icon={<Group />}
                label={`${teamMembers.length} Team Members`}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  fontWeight: 600,
                }}
              />
            </Box>
          </Box>
        </Container>
      </HeroSection>

      <Container
        maxWidth="xl"
        sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, sm: 3 } }}
      >
        {/* Team Members Section */}
        <SectionHeader>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: "#1e3c72",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              mb: 2,
            }}
          >
            Our Team Members
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#666",
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Dedicated professionals working together to create sustainable
            solutions
          </Typography>
        </SectionHeader>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <TeamCard>
                <CardContent sx={{ textAlign: "center", p: 4 }}>
                  <StyledAvatar
                    className="avatar"
                    src={member.img}
                    alt={member.name}
                  >
                    {member.avatar}
                  </StyledAvatar>
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
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 3,
                      color: "#666",
                      lineHeight: 1.6,
                      fontSize: "0.95rem",
                    }}
                  >
                    {member.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      pt: 2,
                      borderTop: "1px solid rgba(0,0,0,0.08)",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#888",
                        fontSize: "0.85rem",
                        fontWeight: 500,
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

        <Divider sx={{ my: 8, borderColor: "rgba(0,0,0,0.1)" }} />
      </Container>
    </Box>
  );
};

export default TeamsPage;
