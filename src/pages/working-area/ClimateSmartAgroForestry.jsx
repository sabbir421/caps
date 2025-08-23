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
import SpaIcon from "@mui/icons-material/Spa";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import PublicIcon from "@mui/icons-material/Public";
import ScienceIcon from "@mui/icons-material/Science";
import PeopleIcon from "@mui/icons-material/People";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PolicyIcon from "@mui/icons-material/Policy";
import SchoolIcon from "@mui/icons-material/School";
import InsightsIcon from "@mui/icons-material/Insights";
import HubIcon from "@mui/icons-material/Hub";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

const ClimateSmartAgroforestry = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "grey.50" }}>
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: { xs: 2, md: 6 }, borderRadius: 3 }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              align="center"
              sx={{ fontWeight: 700, color: "primary.main" }}
            >
              Climate-smart Agroforestry
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              align="center"
              sx={{ textAlign: "justify" }}
            >
              CAPS (Climate Adaptation Plan Society) takes an approach titled
              **Climate-smart Agroforestry** that integrates trees into
              agricultural systems to enhance both agricultural productivity and
              climate resilience. It combines forestry and agriculture to
              optimize land use, improve soil health, conserve water, and
              sequester carbon.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <img
              src="https://placehold.co/1200x500/E8F5E9/2E7D32?text=Agroforestry+for+a+Sustainable+Future"
              alt="A farm with trees integrated into the agricultural landscape."
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>

          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            By doing so, CAPS helps farmers adapt to climate change impacts like
            extreme weather and fluctuating crop yields, while also mitigating
            climate change through carbon sequestration. The society aims to
            integrate trees into agricultural systems to enhance food security,
            improve livelihoods, and protect the environment.
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Core Objectives
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LightbulbIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Promote Agroforestry"
                    secondary="Educate farmers and communities about the benefits of agroforestry, including its role in climate-smart agriculture."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HandshakeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Facilitate Adoption"
                    secondary="Provide resources, training, and support for the implementation of agroforestry practices like alley cropping, silvopasture, and windbreaks."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ScienceIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Research and Development"
                    secondary="Conduct research to identify best practices, suitable tree species, and optimal agroforestry designs for specific regions and climates."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PolicyIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Policy Advocacy"
                    secondary="Advocate for policies that support the integration of agroforestry into national agricultural strategies and land management plans."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PeopleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Community Engagement"
                    secondary="Foster collaboration among farmers, researchers, policymakers, and other stakeholders to create a supportive ecosystem for climate-smart agroforestry."
                  />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Key Activities
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <SchoolIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Workshops and Training"
                    secondary="Organize workshops and training sessions to teach farmers about agroforestry techniques, such as selecting appropriate tree species, planting and pruning methods, and integrating trees with crops and livestock."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <InsightsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Demonstration Farms"
                    secondary="Establish demonstration farms to showcase the practical applications and benefits of different agroforestry systems."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalFloristIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Seed and Plant Distribution"
                    secondary="Provide farmers with access to high-quality seeds and planting materials of suitable tree species."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HubIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Networking and Knowledge Sharing"
                    secondary="Facilitate knowledge exchange among farmers, researchers, and other stakeholders through conferences, workshops, and online platforms."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PolicyIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Policy Dialogue"
                    secondary="Engage with policymakers to advocate for policies that incentivize and support agroforestry adoption, such as payments for ecosystem services."
                  />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Benefits of Climate-Smart Agroforestry
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <AgricultureIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Increased Food Security"
                    secondary="Diversifying crops and integrating trees can improve yields and provide a wider range of food sources."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ShowChartIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Improved Livelihoods"
                    secondary="Agroforestry can generate income from timber, fuelwood, fodder, and other non-timber forest products."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NaturePeopleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Climate Change Mitigation"
                    secondary="Trees can sequester carbon dioxide from the atmosphere, helping to reduce greenhouse gas emissions."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PublicIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Climate Change Adaptation"
                    secondary="Agroforestry systems can increase the resilience of farms to climate change impacts, such as droughts, floods, and extreme temperatures."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NaturePeopleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Ecosystem Services"
                    secondary="Agroforestry can improve soil health, conserve water, enhance biodiversity, and provide other valuable ecosystem services."
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

export default ClimateSmartAgroforestry;
