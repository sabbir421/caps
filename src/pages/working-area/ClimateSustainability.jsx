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
  Nature,
  Psychology,
  Business,
  Agriculture,
  Forest,
  CheckCircle,
  Public,
  WaterDrop,
  School,
  Groups,
  Engineering,
  TrendingUp,
  Lightbulb,
  Security,
  Handshake,
  Recycling,
} from "@mui/icons-material";

const ClimateSustainability = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #2e7d32 0%, #4caf50 50%, #66bb6a 100%)",
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
            Climate Sustainability
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
            Caps //Climate Adaptation Plan Society - An Albatross of Sustainable
            Development
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
                Our Mission
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
                We work for sustainable development focuse on meeting present
                needs without compromising the ability of future generations to
                meet their own.
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
                Our speciality is to create a world where societal needs are met
                without compromising the environment's ability to meet future
                needs. This involves balancing economic growth with social
                progress and environmental protection, often through the lens of
                the UN's Sustainable Development Goals (SDGs). Such societies
                work to integrate these three pillars (people, planet,
                prosperity) through various initiatives, including education,
                research, partnerships, and advocacy.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.7,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  color: "#333",
                }}
              >
                This also involves balancing economic, environmental, and social
                considerations to achieve long-term well-being for all. It's a
                holistic approach encompassing various aspects like
                environmental conservation, social equity, and economic
                viability.
              </Typography>
            </Card>
          </Grid>

          {/* Core Principles Section */}
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
                Core Principles
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
                      <CheckCircle />
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
                        Meeting Present Needs:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Sustainable development ensures access to essential
                        resources and opportunities for the current generation.
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
                        Future Generations:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        It also emphasizes protecting the environment and
                        resources so that future generations can thrive.
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
                      <Recycling />
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
                        Holistic Approach:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        This includes economic development, social progress, and
                        environmental protection, often referred to as the four
                        pillars of sustainability.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
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
                Key Aspects
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
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
                      <Nature />
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
                        Environmental Sustainability:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Conserving ecosystems, biodiversity, and natural
                        resources.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
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
                        Social Equity:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Ensuring fair access to resources, opportunities, and
                        participation in society for all, including marginalized
                        groups.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
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
                      <Business />
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
                        Economic Viability:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Promoting economic systems that support long-term
                        prosperity and stability.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* Core Thinking Section */}
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
                Our Core Thinking for Climate Sustainability
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
                A climate-sustainable society is one that operates in a way that
                minimizes its impact on the climate system, reducing greenhouse
                gas emissions and mitigating the effects of climate change. This
                involves transitioning to a low-carbon economy, protecting and
                restoring natural ecosystems, and adapting to the unavoidable
                impacts of climate change. It also requires a shift in societal
                values and behaviors to prioritize long-term sustainability over
                short-term gains.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.7,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  color: "#333",
                }}
              >
                Here's a more detailed look at the key aspects of a
                climate-sustainability:
              </Typography>
            </Card>
          </Grid>

          {/* 1. Climate Mitigation */}
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
                1. Climate Mitigation
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
                        background: "rgba(244, 67, 54, 0.1)",
                        color: "#f44336",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        fontSize: 24,
                        flexShrink: 0,
                      }}
                    >
                      <Nature />
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
                        Reducing Greenhouse Gas Emissions:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        This is the core of climate sustainability and involves
                        transitioning away from fossil fuels, improving energy
                        efficiency, promoting renewable energy sources, and
                        reducing emissions from transportation, agriculture, and
                        other sectors.
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
                      <Engineering />
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
                        Carbon Capture and Storage:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Technologies like carbon capture and storage (CCS) can
                        play a role in mitigating emissions from industrial
                        processes and power plants.
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
                      <Forest />
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
                        Sustainable Land Use:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Managing forests and other ecosystems to maximize carbon
                        sequestration and minimize deforestation.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* 2. Climate Adaptation */}
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
                2. Climate Adaptation
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
                      <Engineering />
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
                        Building Climate-Resilient Infrastructure:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Developing infrastructure that can withstand the impacts
                        of extreme weather events, such as sea-level rise,
                        floods, and droughts.
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
                        Protecting Vulnerable Communities:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Implementing measures to protect communities that are
                        most at risk from climate change impacts.
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
                      <Agriculture />
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
                        Developing Drought-Resistant Crops:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Investing and development of crops that can withstand
                        changing climate conditions.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* 3. Promoting Sustainable Lifestyle */}
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
                3. Promoting a Sustainable Lifestyle
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
                      <Psychology />
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
                        Shifting Consumption Patterns:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Encouraging a shift towards more sustainable consumption
                        patterns, such as reducing meat consumption, minimizing
                        waste, and choosing sustainable products.
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
                      <WaterDrop />
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
                        Promoting Sustainable Transportation:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Encouraging walking, cycling, public transportation, and
                        electric vehicles.
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
                        Educating and Raising Awareness:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Educating the public about climate change and promoting
                        individual and collective action.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* 4. Ensuring a Just Transition */}
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
                4. Ensuring a Just Transition
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
                        Protecting Workers and Communities:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Ensuring that the transition to a low-carbon economy
                        does not disproportionately affect vulnerable workers
                        and communities.
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
                        Investing in Green Jobs:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Creating new jobs in renewable energy, sustainable
                        agriculture, and other green sectors.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* 5. International Cooperation */}
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
                5. International Cooperation
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
                        Sharing Knowledge and Technology:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Sharing knowledge and technology to help developing
                        countries transition to low-carbon economies.
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
                        Providing Financial Assistance:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Providing financial assistance to developing countries
                        to help them adapt to climate change and mitigate its
                        impacts.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* Conclusion */}
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
                Conclusion
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.7,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  color: "#333",
                }}
              >
                A climate-sustainable society requires a collaborative effort
                involving governments, businesses, individuals, and civil
                society organizations. It is a long-term endeavor that requires
                sustained commitment and innovation to achieve a future where
                human well-being and a healthy planet can coexist.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ClimateSustainability;
