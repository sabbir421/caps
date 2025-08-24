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
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import GavelIcon from "@mui/icons-material/Gavel";
import PublicIcon from "@mui/icons-material/Public";
import PeopleIcon from "@mui/icons-material/People";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import SpaIcon from "@mui/icons-material/Spa";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import InsightsIcon from "@mui/icons-material/Insights";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PolicyIcon from "@mui/icons-material/Policy";
import ScienceIcon from "@mui/icons-material/Science";
import SchoolIcon from "@mui/icons-material/School";
import LandscapeIcon from "@mui/icons-material/Landscape";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import GroupsIcon from "@mui/icons-material/Groups";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import ForestIcon from "@mui/icons-material/Forest";
import WavesIcon from "@mui/icons-material/Waves";
import BuildIcon from "@mui/icons-material/Build";
import EuroIcon from "@mui/icons-material/Euro";

const ClimateSmartSundarbans = () => {
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
              Climate-smart Sundarbans
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              align="center"
              sx={{
                textAlign: "justify",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                maxWidth: { xs: "100%", sm: "800px", md: "900px" },
                mx: "auto",
              }}
            >
              The Sundarbans, a UNESCO World Heritage site and the world's
              largest mangrove forest, faces significant climate change impacts,
              particularly in the form of sea-level rise and increased salinity.
              Climate-smart strategies are crucial for the Sundarbans'
              adaptation and require a multi-faceted approach that integrates
              conservation, sustainable livelihoods, and community
              participation.
            </Typography>
          </Box>

          <Box sx={{ mb: { xs: 4, md: 6 } }}>
            <img
              src="https://placehold.co/1200x500/E0F2F1/004D40?text=Protecting+the+Sundarbans"
              alt="The Sundarbans mangrove forest, a UNESCO World Heritage site."
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
            }}
          >
            CAPS (Climate Adaptation Plan Society) have launched the project
            titled **Climate-smart Sundarbans** which focuses on sustainable
            development and climate resilience in the Sundarbans region, which
            is highly vulnerable to climate change impacts. This involves
            integrating climate considerations into various aspects of life,
            including agriculture, resource management, and livelihoods, to
            ensure long-term sustainability and reduce vulnerability.
          </Typography>

          <Grid
            container
            spacing={{ xs: 3, md: 6 }}
            sx={{ mt: { xs: 4, md: 6 } }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
                }}
              >
                Key Climate Change Impacts and Challenges
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <WaterDropIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Sea-level rise"
                    secondary="Threatens to inundate low-lying areas and displace communities."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CrisisAlertIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Increased salinity"
                    secondary="Impacts agriculture, drinking water sources, and biodiversity."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <WavesIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Extreme weather events"
                    secondary="Cyclones, storm surges, and floods cause damage to infrastructure and livelihoods."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
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
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Salinity intrusion"
                    secondary="Affects the availability of freshwater and reduces agricultural productivity."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <LocalFloristIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Biodiversity loss"
                    secondary="Threatens the unique flora and fauna of the Sundarbans."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
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
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Livelihood disruptions"
                    secondary="Affects fishing, agriculture, and other traditional livelihoods."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
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
                  fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
                }}
              >
                Climate-Smart Adaptation Strategies
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  }}
                >
                  Community engagement and capacity building:
                </Typography>
                <List dense>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <GroupsIcon
                        color="primary"
                        sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Promoting participatory decision-making"
                      secondary="Engaging local communities in the planning and implementation of adaptation projects."
                      sx={{
                        "& .MuiListItemText-primary": {
                          fontWeight: 600,
                          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                        },
                        "& .MuiListItemText-secondary": {
                          fontSize: { xs: "0.7rem", sm: "0.8rem" },
                        },
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <HandshakeIcon
                        color="primary"
                        sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Capacity building"
                      secondary="Training communities in climate-smart agriculture, disaster management, and other relevant skills."
                      sx={{
                        "& .MuiListItemText-primary": {
                          fontWeight: 600,
                          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                        },
                        "& .MuiListItemText-secondary": {
                          fontSize: { xs: "0.7rem", sm: "0.8rem" },
                        },
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <BuildIcon
                        color="primary"
                        sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Developing climate-resilient infrastructure"
                      secondary="Strengthening embankments, building elevated platforms, and improving drainage systems."
                      sx={{
                        "& .MuiListItemText-primary": {
                          fontWeight: 600,
                          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                        },
                        "& .MuiListItemText-secondary": {
                          fontSize: { xs: "0.7rem", sm: "0.8rem" },
                        },
                      }}
                    />
                  </ListItem>
                </List>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  }}
                >
                  Policy and governance:
                </Typography>
                <List dense>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <PolicyIcon
                        color="primary"
                        sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Mainstreaming climate change into development plans"
                      secondary="Integrating climate resilience into all relevant sectors."
                      sx={{
                        "& .MuiListItemText-primary": {
                          fontWeight: 600,
                          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                        },
                        "& .MuiListItemText-secondary": {
                          fontSize: { xs: "0.7rem", sm: "0.8rem" },
                        },
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <GavelIcon
                        color="primary"
                        sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Strengthening institutional capacity"
                      secondary="Enhancing the ability of local authorities to implement adaptation measures."
                      sx={{
                        "& .MuiListItemText-primary": {
                          fontWeight: 600,
                          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                        },
                        "& .MuiListItemText-secondary": {
                          fontSize: { xs: "0.7rem", sm: "0.8rem" },
                        },
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <PublicIcon
                        color="primary"
                        sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Promoting transboundary cooperation"
                      secondary="Fostering collaboration between India and Bangladesh to address climate change impacts on the Sundarbans."
                      sx={{
                        "& .MuiListItemText-primary": {
                          fontWeight: 600,
                          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                        },
                        "& .MuiListItemText-secondary": {
                          fontSize: { xs: "0.7rem", sm: "0.8rem" },
                        },
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <EuroIcon
                        color="primary"
                        sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Securing financial resources"
                      secondary="Mobilizing funding for climate adaptation projects and initiatives."
                      sx={{
                        "& .MuiListItemText-primary": {
                          fontWeight: 600,
                          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                        },
                        "& .MuiListItemText-secondary": {
                          fontSize: { xs: "0.7rem", sm: "0.8rem" },
                        },
                      }}
                    />
                  </ListItem>
                </List>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  }}
                >
                  Research and innovation:
                </Typography>
                <List dense>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <ScienceIcon
                        color="primary"
                        sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Developing climate-resilient technologies"
                      secondary="Investing in research on drought-resistant crops, water-efficient irrigation systems, and other relevant technologies."
                      sx={{
                        "& .MuiListItemText-primary": {
                          fontWeight: 600,
                          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                        },
                        "& .MuiListItemText-secondary": {
                          fontSize: { xs: "0.7rem", sm: "0.8rem" },
                        },
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <InsightsIcon
                        color="primary"
                        sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Monitoring climate change impacts"
                      secondary="Conducting regular assessments to track changes in the Sundarbans ecosystem and inform adaptation strategies."
                      sx={{
                        "& .MuiListItemText-primary": {
                          fontWeight: 600,
                          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                        },
                        "& .MuiListItemText-secondary": {
                          fontSize: { xs: "0.7rem", sm: "0.8rem" },
                        },
                      }}
                    />
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={{ xs: 3, md: 6 }}
            sx={{ mt: { xs: 4, md: 6 } }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
                }}
              >
                Here's a breakdown of key aspects
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <AgricultureIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Climate-Smart Agriculture (CSA)"
                    secondary="**Adopting resilient farming practices:** This includes using drought-resistant crops, water-efficient irrigation methods, and organic fertilizers to minimize the impact of changing weather patterns on agriculture. **Diversifying livelihoods:** Moving beyond traditional agriculture to explore alternative income-generating activities like aquaculture, apiculture, and eco-tourism, which can be more resilient to climate changes."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
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
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Community-Based Adaptation"
                    secondary="**Local knowledge and participation:** Recognizing and incorporating the traditional knowledge and practices of the local communities in climate change adaptation strategies. **Community-led initiatives:** Supporting community-based organizations and initiatives focused on climate change adaptation, such as mangrove restoration and disaster preparedness."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <ForestIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Sustainable Resource Management"
                    secondary="**Mangrove conservation and restoration:** Protecting and restoring the Sundarbans mangrove forests, which act as a natural buffer against cyclones, storm surges, and erosion. **Sustainable harvesting practices:** Promoting responsible resource extraction, such as sustainable fishing and honey collection, to prevent overexploitation and ensure long-term availability."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <BuildIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Climate-Resilient Infrastructure"
                    secondary="**Improved infrastructure:** Investing in climate-resilient infrastructure, such as cyclone shelters, elevated roads, and water management systems, to protect communities and assets from climate-related hazards. **Access to clean energy:** Promoting access to renewable energy sources like solar power to reduce reliance on fossil fuels and improve energy security."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <HandshakeIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Strengthening Governance and Cooperation"
                    secondary="**Co-management of resources:** Implementing co-management approaches involving local communities and government agencies for the sustainable management of natural resources. **Cross-border cooperation:** Fostering collaboration between India and Bangladesh, as the Sundarbans spans both countries, to address transboundary climate change impacts and promote joint adaptation efforts."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
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
        </Paper>
      </Container>
    </Box>
  );
};

export default ClimateSmartSundarbans;
