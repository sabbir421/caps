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
  School,
  Agriculture,
  Psychology,
  Work,
  Security,
  TouchApp,
  Schedule,
  Computer,
} from "@mui/icons-material";

const ClimateSmartOnlineEducation = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #009688 0%, #00acc1 50%, #009688 100%)",
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
            Climate-Smart Online Education
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "white",
            }}
          >
            Providing online courses and learning resources focused on study
            loss recovery for unavoidable Climate Change Impact
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
                Caps//Climate Adaptation Plan Society approches a program
                "Climate-smart online education" it's aim is to provide online
                courses and learning resources focused on study loss recovery
                for unavoidable Climate Change Impact and equipping individuals
                with the knowledge and skills to address climate change and
                build a sustainable future. This includes understanding climate
                change impacts, implementing climate-smart agricultural
                practices, and fostering climate-resilient communities.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.7,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  color: "#333",
                }}
              >
                Key aspects of climate-smart online education:
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
                    background: "rgba(0, 150, 136, 0.1)",
                    color: "#009688",
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
                  Climate Literacy:
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
                Courses cover the science of climate change, its causes, and its
                impacts on various sectors like agriculture, food systems, and
                natural resources.
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
                  <Agriculture />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#1a1a1a",
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                  }}
                >
                  Climate-Smart Agriculture (CSA):
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
                Many online courses focus on CSA principles, which aim to
                sustainably increase agricultural productivity, build resilience
                to climate change, and reduce greenhouse gas emissions according
                to the Food and Agriculture Organization.
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
                  <Psychology />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#1a1a1a",
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                  }}
                >
                  Adaptation and Mitigation Strategies:
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
                Courses teach practical strategies for adapting to climate
                change impacts and mitigating greenhouse gas emissions in
                different contexts, including agriculture, forestry, and
                fisheries.
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
                  <Work />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#1a1a1a",
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                  }}
                >
                  Skills for Green Jobs:
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
                Education programs equip individuals with skills needed for
                green jobs, such as sustainable land management, renewable
                energy, and climate-smart agriculture.
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
                  <Security />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#1a1a1a",
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                  }}
                >
                  Building Resilience:
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
                Online courses promote climate resilience by educating
                communities on how to prepare for and respond to climate-related
                disasters.
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
                    background: "rgba(156, 39, 176, 0.1)",
                    color: "#9c27b0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                    fontSize: 28,
                  }}
                >
                  <TouchApp />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#1a1a1a",
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                  }}
                >
                  Interactive Learning:
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
                Many online courses utilize interactive modules, case studies,
                and practical exercises to enhance learning and application of
                knowledge.
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
                    background: "rgba(0, 188, 212, 0.1)",
                    color: "#00bcd4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                    fontSize: 28,
                  }}
                >
                  <Schedule />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#1a1a1a",
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                  }}
                >
                  Flexible Learning:
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
                Online courses offer flexibility, allowing individuals to learn
                at their own pace and convenience.
              </Typography>
            </Card>
          </Grid>

          {/* Course Categories Section */}
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
                Course Categories
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                  >
                    <TouchApp sx={{ color: "#009688", mr: 1, mt: 0.5 }} />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        color: "#333",
                      }}
                    >
                      Climate Science Fundamentals
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                  >
                    <TouchApp sx={{ color: "#009688", mr: 1, mt: 0.5 }} />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        color: "#333",
                      }}
                    >
                      Sustainable Agriculture
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                  >
                    <TouchApp sx={{ color: "#009688", mr: 1, mt: 0.5 }} />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        color: "#333",
                      }}
                    >
                      Renewable Energy Systems
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                  >
                    <TouchApp sx={{ color: "#009688", mr: 1, mt: 0.5 }} />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        color: "#333",
                      }}
                    >
                      Disaster Risk Reduction
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                  >
                    <TouchApp sx={{ color: "#009688", mr: 1, mt: 0.5 }} />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        color: "#333",
                      }}
                    >
                      Community Resilience Building
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                  >
                    <TouchApp sx={{ color: "#009688", mr: 1, mt: 0.5 }} />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        color: "#333",
                      }}
                    >
                      Green Technology Innovation
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* Benefits Section */}
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
                Benefits of Online Learning
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
                      <Computer />
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
                        Accessibility:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Reach learners in remote areas and provide education to
                        those who cannot attend traditional classes due to
                        climate-related disruptions.
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
                        background: "rgba(46, 125, 50, 0.1)",
                        color: "#2e7d32",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        fontSize: 24,
                        flexShrink: 0,
                      }}
                    >
                      <Schedule />
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
                        Flexibility:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Allow learners to study at their own pace and fit
                        education around their daily responsibilities and
                        climate adaptation activities.
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
                        background: "rgba(123, 31, 162, 0.1)",
                        color: "#7b1fa2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        fontSize: 24,
                        flexShrink: 0,
                      }}
                    >
                      <TouchApp />
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
                        Interactive Content:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Provide engaging multimedia content, simulations, and
                        real-world case studies to enhance learning
                        effectiveness.
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
                      <Work />
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
                        Career Development:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Equip learners with skills for emerging green jobs and
                        sustainable development careers.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ClimateSmartOnlineEducation;
