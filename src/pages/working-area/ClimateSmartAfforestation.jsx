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
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import ForestIcon from "@mui/icons-material/Forest";
import PeopleIcon from "@mui/icons-material/People";
import SpaIcon from "@mui/icons-material/Spa";
import WavesIcon from "@mui/icons-material/Waves";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PolicyIcon from "@mui/icons-material/Policy";
import GavelIcon from "@mui/icons-material/Gavel";
import EuroIcon from "@mui/icons-material/Euro";

const ClimateSmartAfforestation = () => {
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
              Climate-smart Afforestation
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              align="center"
              sx={{ textAlign: "justify" }}
            >
              CAPS (Climate Adaptation Plan Society) has launched the project
              titled **Climate-smart Afforestation**, which involves
              establishing or restoring forests with consideration for climate
              change impacts, is a crucial adaptation strategy. It aims to
              enhance resilience to climate change by diversifying tree species,
              promoting sustainable forest management, and integrating community
              participation. This approach not only mitigates climate change by
              sequestering carbon but also provides multiple benefits like
              protecting coastlines, improving livelihoods, and enhancing
              biodiversity.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <img
              src="https://placehold.co/1200x500/C8E6C9/1B5E20?text=Restoring+Our+Forests"
              alt="A lush, green forest showing the benefits of afforestation."
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>

          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Here's a more detailed look at climate-smart afforestation for
            adaptation:
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                1. Enhancing Resilience to Climate Change Impacts
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <NaturePeopleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Species Selection"
                    secondary="Choosing a diverse range of tree species that are resilient to anticipated climate change impacts, such as increased temperatures, altered rainfall patterns, and extreme weather events, is crucial."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ForestIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Sustainable Forest Management"
                    secondary="Implementing practices that ensure the long-term health and productivity of forests, such as selective logging and fire management, can enhance their ability to withstand climate change impacts."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PeopleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Community Involvement"
                    secondary="Engaging local communities in the planning, implementation, and management of afforestation and reforestation projects ensures their success and sustainability, as they are often the most directly affected by climate change."
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
                2. Multiple Benefits of Climate-Smart Afforestation
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <SpaIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Carbon Sequestration"
                    secondary="Forests act as carbon sinks, absorbing atmospheric carbon dioxide and mitigating climate change."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WavesIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Coastal Protection"
                    secondary="Mangrove forests, in particular, can act as natural barriers against storm surges, coastal erosion, and tsunamis, protecting vulnerable coastal communities."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalFloristIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Biodiversity Conservation"
                    secondary="Afforestation can create habitats for a wide range of plant and animal species, contributing to biodiversity conservation."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AgricultureIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Livelihood Improvement"
                    secondary="Afforestation projects can provide communities with access to resources like fuelwood, timber, and non-timber forest products, improving their livelihoods and resilience."
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
                3. Examples of Climate-Smart Afforestation Projects
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <ForestIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Caps’s Afforestation"
                    secondary="The Projects launched by Caps in Bangladesh have focused on establishing mangrove plantations to protect coastal communities from cyclones and tidal surges."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PeopleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Community-Based Adaptation"
                    secondary="The afforestation projects integrate community participation in planning and management, empowering local communities to adapt to climate change."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HandshakeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Integrating Climate-Resilient Livelihoods"
                    secondary="Afforestation projects can be linked to other initiatives that promote climate-resilient livelihoods, such as sustainable agriculture and ecotourism."
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
                4. Policy and Institutional Support
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <EuroIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Incentives for Investment"
                    secondary="Caps takes Policies that encourage private sector investment in afforestation and reforestation projects are essential for scaling up these initiatives."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GavelIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Holistic Policy Frameworks"
                    secondary="Caps need to develop comprehensive policies and action plans that integrate climate change adaptation into forestry and land management."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PolicyIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Strengthening Governance"
                    secondary="Caps tries to Strengthen local governance, including participatory and community-based governance, is crucial for ensuring the success of afforestation projects."
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

export default ClimateSmartAfforestation;
