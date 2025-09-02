import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Public,
  Gavel,
  School,
  Groups,
  Handshake,
  Leaderboard,
} from "@mui/icons-material";

const ClimateSmartGlobalGreenAmbassador = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #ff6f00 0%, #ff8f00 50%, #ff6f00 100%)",
          color: "white",
          py: { xs: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              color:"white"
            }}
          >
            Climate Smart Global Green Ambassador
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
              fontSize: { xs: "1rem", md: "1.2rem" },
              color:"white"
            }}
          >
            Promoting and advocating for climate-smart solutions and sustainable
            practices on a global scale
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4}>
          {/* Overview Section */}
          <Grid item xs={12}>
            <Card sx={{ p: { xs: 3, md: 4 }, mb: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: "#1a1a1a",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                Overview
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  lineHeight: 1.7,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  color: "#333",
                }}
              >
                Caps//Climate Adaptation Plan Society approches "Climate Smart
                Global Green Ambassador" Aims to make learners who actively
                promote and advocate for climate-smart solutions and sustainable
                practices on a global scale. They leverage their influence and
                expertise to raise awareness, drive policy changes, and inspire
                action to address climate change. These ambassadors often work
                with diverse communities, organizations, and governments to
                implement climate-smart initiatives and build resilient
                communities.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.7,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  color: "#333",
                }}
              >
                Key aspects of a Climate Smart Global Green Ambassador:
              </Typography>
            </Card>
          </Grid>

          {/* Key Aspects Grid */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "rgba(255, 111, 0, 0.1)",
                    color: "#ff6f00",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                    fontSize: 28,
                  }}
                >
                  <Public />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#1a1a1a",
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                  }}
                >
                  Advocacy and Awareness:
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.6,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  color: "#333",
                }}
              >
                They actively communicate the urgency of climate action and the
                benefits of climate-smart approaches through various platforms,
                including public speaking, media engagement, and social media.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "rgba(25, 118, 210, 0.1)",
                    color: "#1976d2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                    fontSize: 28,
                  }}
                >
                  <Gavel />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#1a1a1a",
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                  }}
                >
                  Policy Influence:
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.6,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  color: "#333",
                }}
              >
                They engage with policymakers and governments to advocate for
                climate-friendly policies and regulations that support
                sustainable development.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "rgba(46, 125, 50, 0.1)",
                    color: "#2e7d32",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                    fontSize: 28,
                  }}
                >
                  <School />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#1a1a1a",
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                  }}
                >
                  Knowledge Sharing:
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.6,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  color: "#333",
                }}
              >
                They share knowledge and best practices on climate-smart
                solutions, adaptation strategies, and mitigation efforts with
                different stakeholders.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "rgba(123, 31, 162, 0.1)",
                    color: "#7b1fa2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                    fontSize: 28,
                  }}
                >
                  <Groups />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#1a1a1a",
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                  }}
                >
                  Community Engagement:
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.6,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  color: "#333",
                }}
              >
                They work with local communities, particularly those most
                vulnerable to climate impacts, to build resilience and empower
                them to adapt to changing conditions.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "rgba(0, 150, 136, 0.1)",
                    color: "#009688",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                    fontSize: 28,
                  }}
                >
                  <Handshake />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#1a1a1a",
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                  }}
                >
                  Collaboration and Partnerships:
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.6,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  color: "#333",
                }}
              >
                They foster collaborations between various sectors, including
                governments, businesses, civil society, and academia, to
                accelerate climate action.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "rgba(255, 152, 0, 0.1)",
                    color: "#ff9800",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                    fontSize: 28,
                  }}
                >
                  <Leaderboard />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#1a1a1a",
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                  }}
                >
                  Leadership and Inspiration:
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.6,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  color: "#333",
                }}
              >
                They serve as role models and inspire others to take action on
                climate change through their own commitment and leadership.
              </Typography>
            </Card>
          </Grid>

          {/* Ambassador Activities Section */}
          <Grid item xs={12}>
            <Card sx={{ p: { xs: 3, md: 4 }, mt: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: "#1a1a1a",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                Ambassador Activities
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                  >
                    <Box sx={{ color: "#ff6f00", mr: 1, mt: 0.5 }}>
                      <Public />
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        color: "#333",
                      }}
                    >
                      International climate conferences
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                  >
                    <Box sx={{ color: "#ff6f00", mr: 1, mt: 0.5 }}>
                      <Gavel />
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        color: "#333",
                      }}
                    >
                      Policy advocacy and lobbying
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                  >
                    <Box sx={{ color: "#ff6f00", mr: 1, mt: 0.5 }}>
                      <Public />
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        color: "#333",
                      }}
                    >
                      Media interviews and publications
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                  >
                    <Box sx={{ color: "#ff6f00", mr: 1, mt: 0.5 }}>
                      <School />
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        color: "#333",
                      }}
                    >
                      Community capacity building
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                  >
                    <Box sx={{ color: "#ff6f00", mr: 1, mt: 0.5 }}>
                      <Groups />
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        color: "#333",
                      }}
                    >
                      Cross-sector partnerships
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                  >
                    <Box sx={{ color: "#ff6f00", mr: 1, mt: 0.5 }}>
                      <Public />
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        color: "#333",
                      }}
                    >
                      Youth engagement programs
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* Global Impact Section */}
          <Grid item xs={12}>
            <Card sx={{ p: { xs: 3, md: 4 }, mt: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: "#1a1a1a",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                Global Impact
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  lineHeight: 1.7,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  color: "#333",
                }}
              >
                Climate Smart Global Green Ambassadors work across borders and
                cultures to create a unified response to climate change. They
                bridge the gap between local communities and global policy,
                ensuring that grassroots knowledge informs international
                decisions while global best practices reach vulnerable
                communities.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.7,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  color: "#333",
                }}
              >
                Through their work, they contribute to building a more
                equitable, resilient, and sustainable world where climate action
                is accessible to all communities, regardless of their size or
                resources.
              </Typography>
            </Card>
          </Grid>

        
        </Grid>
      </Container>
    </Box>
  );
};

export default ClimateSmartGlobalGreenAmbassador;
