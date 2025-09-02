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
  Language,
  Science,
  Mic,
  Person,
  Public,
  TrendingUp,
  Book,
} from "@mui/icons-material";

const ClimateSmartLanguageLearning = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #d84315 0%, #e64a19 50%, #ff5722 100%)",
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
            Climate-smart Language Learning (CLL)
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
            Integrating climate action and environmental awareness into language
            education
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
                Climate Adaptation Plan Society launched Climate-smart Language
                Learning (CLL) refers to integrating climate action and
                environmental awareness into language education. It aims to
                equip learners with the language skills and knowledge to
                understand, discuss, and address climate change and related
                environmental issues, while also promoting sustainable practices
                and solutions sothat learners in their future can be migrated in
                home and abroad as language skilled people get preference in
                their work and living in new places.
              </Typography>
            </Card>
          </Grid>

          {/* How It Works Section */}
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
                Here's how it works:
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
                        background: "rgba(216, 67, 21, 0.1)",
                        color: "#d84315",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        fontSize: 24,
                        flexShrink: 0,
                      }}
                    >
                      <Language />
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
                        Integrating Environmental Issues:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Language lessons can incorporate themes related to
                        climate change, environmental sustainability, and
                        related topics, allowing students to learn new
                        vocabulary and develop communication skills while
                        exploring these critical issues.
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
                      <Science />
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
                        Developing Climate Literacy:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Climate-smart language learning helps students become
                        more climate literate, meaning they can understand the
                        science of climate change, its impacts, and potential
                        solutions, according to OER Commons.
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
                      <Mic />
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
                        Promoting Action and Advocacy:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Language skills are essential for effective
                        communication and advocacy. By engaging with
                        climate-related content in language learning, students
                        can develop the skills to discuss, debate, and advocate
                        for climate action in their communities.
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
                      <Person />
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
                        Resource for Teachers:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Caps follows Several organizations and initiatives, like
                        the British Council, offer resources and training for
                        teachers to integrate climate action into their language
                        lessons.
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
                Specific Examples
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
                        British Council's Climate Connection:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Caps follows The British Council's Climate Connection
                        project provides resources for English language teachers
                        to integrate climate change education into their
                        lessons, including lesson plans, activities, and online
                        training.
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
                Benefits of Climate-smart Language Learning
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
                      <Language />
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
                        Enhanced Language Skills:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Students develop vocabulary and communication skills
                        while learning about critical environmental issues.
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
                      <Science />
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
                        Climate Literacy:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Learners gain understanding of climate change science,
                        impacts, and potential solutions.
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
                        Career Opportunities:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Language-skilled individuals get preference in work and
                        living opportunities both at home and abroad.
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
                        Advocacy Skills:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Students develop skills to discuss, debate, and advocate
                        for climate action in their communities.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* Implementation Examples */}
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
                Implementation Examples
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
                        background: "rgba(216, 67, 21, 0.1)",
                        color: "#d84315",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        fontSize: 24,
                        flexShrink: 0,
                      }}
                    >
                      <Book />
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
                        Climate-themed Reading Materials:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Using articles, stories, and reports about climate
                        change to develop reading comprehension and vocabulary
                        skills.
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
                      <Mic />
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
                        Climate Debates and Discussions:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Organizing structured debates on climate topics to
                        practice argumentative language and critical thinking.
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
                      <Book />
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
                        Climate Action Writing Projects:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Assigning research papers, opinion essays, and creative
                        writing tasks focused on environmental themes.
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
                        International Climate Projects:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "#333",
                        }}
                      >
                        Collaborating with students from other countries to work
                        on climate-related research and presentations.
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

export default ClimateSmartLanguageLearning;
