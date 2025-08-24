import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PublicIcon from "@mui/icons-material/Public";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PeopleIcon from "@mui/icons-material/People";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BookIcon from "@mui/icons-material/Book";
import HandymanIcon from "@mui/icons-material/Handyman";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ScienceIcon from "@mui/icons-material/Science";
import GamesIcon from "@mui/icons-material/Games";
import LandscapeIcon from "@mui/icons-material/Landscape";
import Diversity3Icon from "@mui/icons-material/Diversity3";

const ClimateSmartCommunityEducation = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "grey.50" }}>
      <Container maxWidth="xl">
        <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 3 }}>
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              align="center"
              sx={{
                fontWeight: 700,
                color: "primary.main",
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              }}
            >
              Climate Smart Community Education
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              align="center"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                maxWidth: { xs: "100%", sm: "800px", md: "900px" },
                mx: "auto",
                px: { xs: 2, sm: 0 },
              }}
            >
              Equipping communities with the knowledge and skills to build a
              resilient future.
            </Typography>
          </Box>

          <Box sx={{ mb: { xs: 4, md: 6 } }}>
            <img
              src="https://placehold.co/1200x500/E0F2F1/004D40?text=Community+Learning+Center"
              alt="A group of people, including children, learning in a community center"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>

          <Typography
            variant="body1"
            paragraph
            sx={{
              mt: { xs: 3, md: 4 },
              textAlign: "justify",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              lineHeight: 1.6,
            }}
          >
            CAPS (Climate Adaptation Plan Society) believes that education is
            paramount for development, as it is a fundamental human right and a
            key driver for individual and societal progress. Education equips
            individuals with the knowledge, skills, and critical thinking
            abilities needed to participate fully in the economy and contribute
            to a more prosperous and equitable society. Therefore, CAPS wants to
            implement every project through education and prioritize education
            first.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              textAlign: "justify",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              lineHeight: 1.6,
            }}
          >
            We establish **Community Learning Centres (CLCs)** in small
            communities with a minimum of 20 and a maximum of 50 houses. As per
            our system, people from all walks of life encourage us to inaugurate
            the CLC in their small communities, as they see their children are
            falling behind in education due to climate change impacts. The
            frequent question we face is, "Why is there no CLC for our
            community? Why are our children deprived?" In this 20-50 house
            community system, children can swiftly and easily reach the centre
            within their small community, as it is much closer to their houses.
            This is crucial in the west-southern part of Asia, particularly the
            most vulnerable coastal area of Bangladesh, where heavy rainfall,
            drought, and sudden rough weather are important negative issues due
            to climate change.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              textAlign: "justify",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              lineHeight: 1.6,
            }}
          >
            For the purpose of vulnerable coastal children's protection and
            their Education in Emergencies (EiE), we open CLC branches one after
            another in areas where we have already launched the project titled
            "Climate-smart education," which is also known as climate-resilient
            education. This involves integrating climate change adaptation and
            environmental sustainability into education systems. It aims to
            prepare learners to understand and address the impacts of climate
            change while fostering a more sustainable future. This includes
            equipping them with the knowledge, skills, and values to adapt to
            climate-related challenges and contribute to mitigation efforts.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              textAlign: "justify",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              lineHeight: 1.6,
            }}
          >
            The "Climate-smart education" project will surely accelerate the
            resettlement process and activities of the most climate-vulnerable
            people in coastal areas. It focuses on integrating climate change
            awareness and resilience into educational systems to support
            communities being relocated due to climate change impacts. This
            approach aims to equip individuals with the knowledge, skills, and
            mindset needed to adapt to a changing environment and build
            sustainable livelihoods in new locations.
          </Typography>

          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            sx={{ mt: { xs: 4, md: 6 } }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
                }}
              >
                CAPS's Principles of Climate-Smart Education
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <SchoolIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Integrating Climate Change into the Curriculum"
                    secondary="Climate-smart education incorporates climate change science, its impacts, and adaptation strategies into existing subjects and creates new learning opportunities specifically focused on climate resilience."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <HandymanIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Experiential Learning"
                    secondary="This hands-on approach allows students to engage with local environmental challenges, explore indigenous knowledge, and develop solutions for their communities."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CastForEducationIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Teacher Training and Support"
                    secondary="We equip teachers with the knowledge and skills to effectively teach climate change and facilitate experiential learning activities."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <VolunteerActivismIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Promoting Climate Justice"
                    secondary="Our goal is to ensure all individuals, especially the most vulnerable to climate impacts, have access to the quality education and resources needed to adapt and thrive."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <EmojiEventsIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Building Resilience"
                    secondary="We empower individuals to cope with climate-related risks, such as extreme weather events, and build more sustainable and resilient communities in resettlement areas."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
                }}
              >
                Relevance to Resettlement
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <PublicIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Understanding Climate Change Impacts"
                    secondary="Education helps resettled communities understand the reasons for their relocation and the potential climate risks in their new location."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <LightbulbIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Developing Sustainable Livelihoods"
                    secondary="Climate-smart education equips individuals with skills needed for climate-smart agriculture, water management, and other sustainable practices relevant to their new environment."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <PeopleIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Fostering Community Participation"
                    secondary="Education facilitates community engagement in planning and decision-making related to resettlement and the development of climate-resilient infrastructure and livelihoods."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <BookIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Promoting Adaptation"
                    secondary="By providing knowledge and skills, education helps resettled communities adapt to new environmental conditions and build more sustainable and resilient lives."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>

          <Box sx={{ mt: { xs: 4, md: 6 } }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
              }}
            >
              Examples of Climate-Smart Education in Practice
            </Typography>
            <List>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <ScienceIcon
                    color="primary"
                    sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Integrating climate change into existing subjects"
                  secondary="For example, teaching water conservation in a science class or discussing climate-resilient agriculture in social studies."
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      fontWeight: 600,
                    },
                    "& .MuiListItemText-secondary": {
                      fontSize: { xs: "0.8rem", sm: "0.875rem" },
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <GamesIcon
                    color="primary"
                    sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Developing climate-focused games and simulations"
                  secondary="Such as the Climate Fresco game or the Climate Game, to engage learners in climate change scenarios and decision-making."
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      fontWeight: 600,
                    },
                    "& .MuiListItemText-secondary": {
                      fontSize: { xs: "0.8rem", sm: "0.875rem" },
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <LandscapeIcon
                    color="primary"
                    sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Promoting stewardship and community engagement"
                  secondary="Through initiatives like the Bangladesh Youth Environmental Initiative (BYEI), which encourages youth to be responsible caretakers of nature."
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      fontWeight: 600,
                    },
                    "& .MuiListItemText-secondary": {
                      fontSize: { xs: "0.8rem", sm: "0.875rem" },
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <Diversity3Icon
                    color="primary"
                    sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Supporting teacher training on climate change education"
                  secondary="Providing teachers with the necessary knowledge and pedagogical skills to effectively teach climate change."
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      fontWeight: 600,
                    },
                    "& .MuiListItemText-secondary": {
                      fontSize: { xs: "0.8rem", sm: "0.875rem" },
                    },
                  }}
                />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ClimateSmartCommunityEducation;
