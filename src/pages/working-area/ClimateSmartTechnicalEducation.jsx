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
import PsychologyIcon from "@mui/icons-material/Psychology";
import PublicIcon from "@mui/icons-material/Public";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import BuildIcon from "@mui/icons-material/Build";
import SecurityIcon from "@mui/icons-material/Security";
import NatureIcon from "@mui/icons-material/Nature";
import WorkIcon from "@mui/icons-material/Work";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShieldIcon from "@mui/icons-material/Shield";
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity";
import BusinessIcon from "@mui/icons-material/Business";

const ClimateSmartTechnicalEducation = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "grey.50" }}>
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: { xs: 2, md: 6 }, borderRadius: 3 }}>
          {/* Title */}
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              align="center"
              sx={{ fontWeight: 700, color: "primary.main" }}
            >
              Climate-Smart Technical Education
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center">
              Integrating climate change adaptation and mitigation strategies
              into technical and vocational training programs.
            </Typography>
          </Box>

          {/* Image */}
          <Box sx={{ mb: 6 }}>
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Technical education and climate-smart training"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>

          {/* Intro */}
          <Typography
            variant="body1"
            paragraph
            sx={{ mt: 4, textAlign: "justify" }}
          >
            CAPS (Climate Adaptation Plan Society) has undertaken a project
            called <b>“Climate-Smart Technical Education”</b>, which focuses on
            integrating climate change adaptation and mitigation strategies into
            technical and vocational training programs. This approach equips
            individuals with the knowledge and skills to tackle climate-related
            challenges and contribute to sustainable development, particularly
            in sectors such as agriculture, energy, and water management.
          </Typography>

          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            In essence, climate-smart technical education is a crucial pathway
            to building a more sustainable and resilient future by equipping
            individuals with the expertise needed to navigate the challenges of
            a changing climate.
          </Typography>

          {/* Key Aspects */}
          <Grid container spacing={6} sx={{ mt: 6 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Key Aspects of Climate-Smart Technical Education
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <SchoolIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Curriculum Integration"
                    secondary="Involves embedding climate change concepts, sustainable practices, and green technologies into existing technical and vocational curricula."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EngineeringIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Skills Development"
                    secondary="Provides practical skills in renewable energy, water conservation, climate-resilient agriculture, and waste management."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PsychologyIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Promoting Climate Action"
                    secondary="Encourages students to become change-makers by raising awareness and applying climate-smart technologies within communities and workplaces."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PublicIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Addressing Climate Vulnerability"
                    secondary="Adapts training to local challenges, such as droughts, floods, and extreme weather events."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ShieldIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Fostering Climate Resilience"
                    secondary="Equips individuals and communities with the ability to adapt effectively to climate change impacts."
                  />
                </ListItem>
              </List>
            </Grid>

            {/* Specialized Areas */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Specialized Training Areas
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <NatureIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Eco-Friendly Materials"
                    secondary="Promoting the use of sustainable, renewable, and low-impact resources."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BuildIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Climate-Resilient Infrastructure"
                    secondary="Training in designing and constructing infrastructure that can withstand climate impacts."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SecurityIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Disaster Risk Reduction"
                    secondary="Focus on disaster preparedness, early warning systems, and emergency response."
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>

          {/* Benefits */}
          <Box sx={{ mt: 6 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Benefits of Climate-Smart Technical Education
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <WorkIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Enhanced Employability"
                  secondary="Equips individuals with in-demand green skills, boosting their job opportunities in an evolving economy."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TrendingUpIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Sustainable Development"
                  secondary="Supports the transition to a low-carbon, climate-resilient economy by building a capable workforce."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ShieldIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Increased Climate Resilience"
                  secondary="Strengthens communities to adapt to climate change and secure sustainable livelihoods."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ReduceCapacityIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Reduced Greenhouse Gas Emissions"
                  secondary="Encourages the adoption of technologies and practices that help mitigate climate change."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BusinessIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Economic Growth"
                  secondary="Promotes the development of green industries and generates new economic opportunities."
                />
              </ListItem>
            </List>
          </Box>

          {/* Closing */}
          <Typography variant="body1" paragraph sx={{ mt: 4 }}>
            Climate-smart technical education is a vital step toward a
            sustainable and resilient future by preparing individuals and
            communities with the knowledge and skills needed to address climate
            challenges effectively.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default ClimateSmartTechnicalEducation;
