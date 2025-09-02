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
  Paper,
} from "@mui/material";
import {
  School,
  Groups,
  LocalFlorist,
  Handshake,
  Hub,
  Security,
  TrendingUp,
} from "@mui/icons-material";

const ClimateSmartCommunityLearningResearchCentre = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #ab47bc 100%)",
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
              color: "white",
            }}
          >
            Climate-smart Community Learning Research Centre
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              maxWidth: "900px",
              mx: "auto",
              lineHeight: 1.6,
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "white",
            }}
          >
            A place where communities engage in learning and research activities
            focused on addressing local climate change challenges
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
                Project Overview
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
                Climate-smart Community Learning Research Center (CLRC) is a
                place where communities engage in learning and research
                activities, often focused on addressing local needs and
                challenges to climate change impact. These centers can take
                various forms, from traditional school-based programs to more
                informal community spaces, and they play a vital role in
                fostering lifelong learning and community development.
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
                Caps//Climate Adaptation Plan Society approches to set up CLRC
                in every High Schools, Colleges and Universities Aims to engage
                teengae and matured learners to focuse on research of developing
                and implementing agricultural practices that increase
                productivity, enhance resilience to climate change, and reduce
                greenhouse gas emissions. These centers often involve research,
                training, and knowledge sharing to help farmers and communities
                adapt to a changing climate.
              </Typography>
            </Card>
          </Grid>

          {/* Key Aspects Section */}
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
                Key Aspects of a Community Learning Research Center
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        background: "rgba(156, 39, 176, 0.1)",
                        color: "#9c27b0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        fontSize: 24,
                        flexShrink: 0,
                      }}
                    >
                      <School />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: "#1a1a1a",
                          fontSize: "1.1rem",
                        }}
                      >
                        Community-driven:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        CLRCs are typically initiated and managed by community
                        members, ensuring that programs and research align with
                        local needs and priorities.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        background: "rgba(25, 118, 210, 0.1)",
                        color: "#1976d2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        fontSize: 24,
                        flexShrink: 0,
                      }}
                    >
                      <School />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: "#1a1a1a",
                          fontSize: "1.1rem",
                        }}
                      >
                        Lifelong learning:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        They provide opportunities for learning across all age
                        groups, from early childhood to older adults, and focus
                        on both formal and non-formal education.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        background: "rgba(76, 175, 80, 0.1)",
                        color: "#4caf50",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        fontSize: 24,
                        flexShrink: 0,
                      }}
                    >
                      <School />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: "#1a1a1a",
                          fontSize: "1.1rem",
                        }}
                      >
                        Research and knowledge sharing:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        CLRCs facilitate research activities, often involving
                        community members as participants or researchers, and
                        promote the sharing of knowledge and best practices.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        background: "rgba(255, 152, 0, 0.1)",
                        color: "#ff9800",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        fontSize: 24,
                        flexShrink: 0,
                      }}
                    >
                      <LocalFlorist />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: "#1a1a1a",
                          fontSize: "1.1rem",
                        }}
                      >
                        Focus on local issues:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        They address specific challenges and opportunities
                        within the community, such as education, health,
                        agriculture, or economic development.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        background: "rgba(0, 150, 136, 0.1)",
                        color: "#009688",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        fontSize: 24,
                        flexShrink: 0,
                      }}
                    >
                      <Handshake />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: "#1a1a1a",
                          fontSize: "1.1rem",
                        }}
                      >
                        Partnerships and collaboration:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        CLRCs often involve partnerships with various
                        stakeholders, including schools, local government, NGOs,
                        and other community organizations.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* Examples Section */}
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
                Examples of CLRCs
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        background: "rgba(33, 150, 243, 0.1)",
                        color: "#2196f3",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        fontSize: 24,
                        flexShrink: 0,
                      }}
                    >
                      <Hub />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: "#1a1a1a",
                          fontSize: "1.1rem",
                        }}
                      >
                        Community-based learning environments:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        These environments, often informal and flexible, promote
                        collaboration and knowledge sharing among community
                        members.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* Benefits Section */}
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
                Benefits of CLRCs
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        background: "rgba(76, 175, 80, 0.1)",
                        color: "#4caf50",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        fontSize: 24,
                        flexShrink: 0,
                      }}
                    >
                      <School />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: "#1a1a1a",
                          fontSize: "1.1rem",
                        }}
                      >
                        Improved educational outcomes:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        CLRCs can enhance learning opportunities and improve
                        educational attainment for individuals and communities.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        background: "rgba(156, 39, 176, 0.1)",
                        color: "#9c27b0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        fontSize: 24,
                        flexShrink: 0,
                      }}
                    >
                      <Groups />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: "#1a1a1a",
                          fontSize: "1.1rem",
                        }}
                      >
                        Increased community engagement:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        They foster a sense of ownership and participation in
                        community development.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        background: "rgba(255, 152, 0, 0.1)",
                        color: "#ff9800",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        fontSize: 24,
                        flexShrink: 0,
                      }}
                    >
                      <Security />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: "#1a1a1a",
                          fontSize: "1.1rem",
                        }}
                      >
                        Strengthened community resilience:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        CLRCs can help communities address challenges and adapt
                        to changing circumstances.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        background: "rgba(33, 150, 243, 0.1)",
                        color: "#2196f3",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        fontSize: 24,
                        flexShrink: 0,
                      }}
                    >
                      <TrendingUp />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: "#1a1a1a",
                          fontSize: "1.1rem",
                        }}
                      >
                        Empowered communities:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        They empower community members to take control of their
                        learning and development.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* Conclusion Section */}
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
                Empowering Communities Through Learning and Research
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
                In essence, a Community Learning Research Center is a dynamic
                and evolving model that leverages the power of community
                engagement to foster learning, research, and positive change.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ClimateSmartCommunityLearningResearchCentre;
