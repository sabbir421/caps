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
import EngineeringIcon from "@mui/icons-material/Engineering";
import PublicIcon from "@mui/icons-material/Public";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SpaIcon from "@mui/icons-material/Spa";
import GrassIcon from "@mui/icons-material/Grass";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import BoltIcon from "@mui/icons-material/Bolt";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import ScienceIcon from "@mui/icons-material/Science";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const ClimateSmartTechnicalEducation = () => {
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
              Climate Smart Technical Education
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
              CAPS (Climate Adaptation Plan Society) has taken a project in hand
              as "Climate-smart technical education" focuses on integrating
              climate change adaptation and mitigation strategies into technical
              and vocational training programs. This approach equips individuals
              with the knowledge and skills to address climate-related
              challenges and contribute to sustainable development, particularly
              in sectors like agriculture, energy, and water management.
            </Typography>
          </Box>

          <Box sx={{ mb: { xs: 4, md: 6 } }}>
            <img
              src="https://placehold.co/1200x500/B3E5FC/01579B?text=Climate+Smart+Technical+Education"
              alt="A climate-smart technical education program with students learning sustainable practices."
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
              textAlign: "justify",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            }}
          >
            Key aspects of climate-smart technical education include curriculum
            integration, skills development, promoting climate action,
            addressing climate vulnerability, and fostering climate resilience.
          </Typography>

          <Grid container spacing={{ xs: 3, md: 6 }}>
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
                Key Aspects of Climate-Smart Technical Education
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <SchoolIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Curriculum Integration"
                    secondary="Caps involves incorporating climate change concepts, sustainable practices, and green technologies into existing technical and vocational curricula."
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
                    <EngineeringIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Skills Development"
                    secondary="Caps focuses on building practical skills in areas like renewable energy, water conservation, climate-resilient agriculture, and waste management."
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
                    <TrendingUpIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Promoting Climate Action"
                    secondary="Caps encourages students to become agents of change by promoting climate awareness, sustainable practices, and climate-smart technologies within their communities and workplaces."
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
                    <LightbulbIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Addressing Climate Vulnerability"
                    secondary="Caps tailors training to address the specific climate challenges and vulnerabilities of a region, such as drought, floods, or extreme weather events."
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
                    <SpaIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Fostering Climate Resilience"
                    secondary="Caps equips individuals with the knowledge and skills to adapt to climate change impacts and build more resilient communities."
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

              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  mt: { xs: 3, md: 4 },
                  fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
                }}
              >
                Additional Focus Areas
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <WbIncandescentIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Use of Eco-friendly Materials"
                    secondary="Caps promotes the use of eco-friendly materials in technical education and construction practices."
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
                    <GrassIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Climate-Resilient Infrastructure"
                    secondary="Caps provides education on designing and building infrastructure that can withstand the impacts of climate change."
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
                    <BoltIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Disaster Risk Reduction"
                    secondary="Caps offers training in disaster preparedness, early warning systems, and emergency response."
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
                Benefits of Climate-Smart Technical Education
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <TrendingUpIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Enhanced Employability"
                    secondary="Caps provides individuals with in-demand green skills, increasing their job prospects in a changing economy."
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
                    primary="Sustainable Development"
                    secondary="Caps supports the transition to a low-carbon, climate-resilient economy by fostering a workforce equipped to address climate challenges."
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
                    <NaturePeopleIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Increased Climate Resilience"
                    secondary="Caps empowers communities to adapt to climate change impacts and build more sustainable livelihoods."
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
                    <ScienceIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Reduced Greenhouse Gas Emissions"
                    secondary="Caps promotes the adoption of climate-smart technologies and practices that can help mitigate climate change."
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
                    <PublicIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Economic Growth"
                    secondary="Caps supports the growth of green industries and creates new economic opportunities."
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

              <Typography
                variant="body1"
                paragraph
                sx={{
                  textAlign: "justify",
                  mt: { xs: 3, md: 4 },
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                In essence, climate-smart technical education is a crucial
                pathway to building a more sustainable and resilient future by
                equipping individuals with the knowledge and skills needed to
                navigate the challenges of a changing climate.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default ClimateSmartTechnicalEducation;
