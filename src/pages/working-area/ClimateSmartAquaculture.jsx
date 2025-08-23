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
import WavesIcon from "@mui/icons-material/Waves";
import PublicIcon from "@mui/icons-material/Public";
import ScienceIcon from "@mui/icons-material/Science";
import PeopleIcon from "@mui/icons-material/People";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import GavelIcon from "@mui/icons-material/Gavel";
import HubIcon from "@mui/icons-material/Hub";

const ClimateSmartAquaculture = () => {
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
              Climate-smart aquaculture
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              align="center"
              sx={{ textAlign: "justify" }}
            >
              CAPS (Climate Adaptation Plan Society) approaches Climate-smart
              aquaculture (CSA) as a sustainable approach to fish farming that
              aims to increase productivity, enhance resilience to climate
              change, and reduce greenhouse gas emissions. It involves
              integrating strategies for both adapting to climate change impacts
              and mitigating its effects on aquaculture systems.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <img
              src="https://placehold.co/1200x500/C8E6C9/1B5E20?text=Sustainable+Aquaculture"
              alt="An aquaculture farm with clean, sustainable practices."
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Key Goals of Climate-Smart Aquaculture
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <ShowChartIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Increased Productivity and Efficiency"
                    secondary="CSA aims to improve fish farming practices to increase yields and profitability, ensuring food security and livelihoods for aquaculture farmers."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SpaIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Enhanced Resilience and Adaptation"
                    secondary="CSA focuses on building the capacity of aquaculture systems to withstand the impacts of climate change, such as rising water temperatures, extreme weather events, and changing water quality."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NaturePeopleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Reduced Greenhouse Gas Emissions"
                    secondary="CSA seeks to minimize the environmental footprint of aquaculture by reducing emissions of greenhouse gases, contributing to global climate change mitigation efforts."
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
                How it Works
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <GavelIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Hard and Soft Technologies"
                    secondary="CSA utilizes both physical or infrastructural assets (like climate-resilient pond construction or improved water management systems) and soft technologies (like knowledge-sharing, advisory services, and early warning systems)."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PublicIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Integration of Adaptation and Mitigation"
                    secondary="CSA emphasizes the strategic alignment of adaptation and mitigation measures. For example, using climate-resilient fish species can both reduce the impact of climate change on production and potentially lower emissions."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PeopleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Stakeholder Engagement"
                    secondary="Successful implementation of CSA requires active participation and collaboration among various stakeholders, including farmers, researchers, policymakers, and extension agencies."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WaterDropIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Diversification"
                    secondary="Introducing climate-resilient species and diversifying aquaculture production systems can enhance resilience and reduce reliance on a single species or system."
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
                Examples of Climate-Smart Aquaculture Practices
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <AgricultureIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Integrated Farming"
                    secondary="Combining fish farming with other agricultural activities, like rice cultivation, can improve resource use efficiency and reduce reliance on external inputs."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WavesIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Water Management"
                    secondary="Implementing efficient water management systems, such as rainwater harvesting or recirculating aquaculture systems, can improve water use and reduce vulnerability to droughts."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NaturePeopleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Climate-Resilient Species"
                    secondary="Utilizing fish species that are better adapted to changing climate conditions, such as air-breathing fish, can enhance resilience and productivity."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HubIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Diversification of Species"
                    secondary="Introducing new, climate-resilient species can reduce the risk associated with relying on a single species."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LightbulbIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Improved Feed Management"
                    secondary="Optimizing feed types and feeding strategies can reduce feed costs and improve feed conversion efficiency, thereby lowering the environmental impact of aquaculture."
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

export default ClimateSmartAquaculture;
