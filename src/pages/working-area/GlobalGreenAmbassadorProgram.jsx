import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
} from "@mui/material";
import {
  Groups,
  School,
  Hub,
  Campaign,
  Assessment,
  EmojiEvents,
  Public,
  Lightbulb,
  TrendingUp,
  Handshake,
  Support,
} from "@mui/icons-material";

const GlobalGreenAmbassadorProgram = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #2e7d32 0%, #388e3c 50%, #4caf50 100%)",
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
            Global Green Ambassador Program for Climate Adaptation
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              maxWidth: "900px",
              mx: "auto",
              lineHeight: 1.6,
              fontSize: { xs: "1rem", md: "1.2rem" },
              color:"white"
            }}
          >
            Empowering individuals to drive positive change in their communities
            and beyond
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
                Program Overview
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
                To establish a Global Green Ambassador program for climate
                adaptation, focus on identifying individuals with a passion for
                sustainability and empowering them to educate and inspire
                others. This can be achieved through initiatives like offering
                resources, training, and platforms for ambassadors to share
                their knowledge and promote climate action.
              </Typography>
            </Card>
          </Grid>

          {/* Key Elements Section */}
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
                Key elements for creating a successful Global Green Ambassador
                program:
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
                        Identify and Recruit Ambassadors:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Look for individuals with a strong interest in climate
                        change and sustainability, and who possess excellent
                        communication and leadership skills.
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
                        Provide Training and Resources:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Equip ambassadors with the knowledge and tools they need
                        to effectively educate and inspire others. This includes
                        information on climate science, adaptation strategies,
                        and communication techniques.
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
                        Create a Supportive Network:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Connect ambassadors with each other and with relevant
                        organizations to foster collaboration and knowledge
                        sharing.
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
                      <Campaign />
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
                        Offer Platforms for Action:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Provide opportunities for ambassadors to share their
                        knowledge and inspire action through various channels,
                        such as public speaking events, online platforms, and
                        community engagement initiatives.
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
                      <Assessment />
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
                        Monitor and Evaluate:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Regularly assess the impact of the program and make
                        adjustments as needed to ensure its effectiveness.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* Specific Examples Section */}
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
                Specific examples of existing programs:
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
                      <EmojiEvents />
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
                        Caps's Global Ambassadors Programme:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        This program focuses on amplifying the voices of young
                        people fighting for climate justice and action.
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
                        Climate Ambassadors scheme:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        This scheme aims to develop agency amongst staff and
                        young people, enhancing their climate education and
                        skills development.
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
                        Global Green Ambassadors:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        This program focuses on encouraging a new generation of
                        sustainability champions in schools.
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
                Benefits of the Global Green Ambassador Program
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
                      <Public />
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
                        Community Impact:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Ambassadors drive positive change in their local
                        communities through education and action.
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
                      <Lightbulb />
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
                        Knowledge Sharing:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Facilitates the exchange of climate adaptation
                        strategies and best practices across regions.
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
                        Leadership Development:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Builds leadership skills and empowers individuals to
                        become climate action champions.
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
                        Global Collaboration:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Creates international networks for climate adaptation
                        and sustainability initiatives.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* Implementation Strategy */}
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
                Implementation Strategy
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
                      <Support />
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
                        Training Programs:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Comprehensive training on climate science, adaptation
                        strategies, and effective communication techniques.
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
                        Digital Platform:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Online platform for ambassadors to connect, share
                        resources, and collaborate on projects.
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
                      <Campaign />
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
                        Events and Workshops:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Regular events, workshops, and conferences to showcase
                        ambassador work and inspire action.
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
                      <Assessment />
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
                        Impact Measurement:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Regular assessment and reporting on program
                        effectiveness and community impact.
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

export default GlobalGreenAmbassadorProgram;
