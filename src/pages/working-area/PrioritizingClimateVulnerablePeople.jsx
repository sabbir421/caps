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
import PublicIcon from "@mui/icons-material/Public";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PolicyIcon from "@mui/icons-material/Policy";
import GroupsIcon from "@mui/icons-material/Groups";
import GavelIcon from "@mui/icons-material/Gavel";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import InsightsIcon from "@mui/icons-material/Insights";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const PrioritizingClimateVulnerablePeople = () => {
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
              Prioritizing Climate-Vulnerable People
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              align="center"
              sx={{ textAlign: "justify" }}
            >
              Integrating climate considerations and social protection into
              outsourcing projects.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <img
              src="https://placehold.co/1200x500/E0F2F1/004D40?text=Community+resilience+and+support"
              alt="A group of diverse people from a vulnerable community working together."
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
            sx={{ mt: 4, textAlign: "justify" }}
          >
            CAPS (Climate Adaptation Plan Society) approaches **prioritizing
            climate-vulnerable people** in outsourcing by focusing on creating
            decent work, ensuring social protection, and promoting fair labor
            practices within the context of climate adaptation and mitigation
            efforts. This involves integrating climate considerations into all
            aspects of the outsourcing process, from contract negotiations to
            project implementation, with a particular emphasis on supporting
            those most at risk from climate change impacts.
          </Typography>

          <Grid container spacing={6} sx={{ mt: 6 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                1. Integrate Climate Considerations into Outsourcing
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CrisisAlertIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Risk Assessment"
                    secondary="We conduct thorough climate risk assessments for outsourcing locations, identifying potential impacts on workers and communities from hazards like sea-level rise and extreme weather."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AssignmentTurnedInIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Mitigation and Adaptation"
                    secondary="We prioritize projects that contribute to climate change mitigation and adaptation, such as supporting renewable energy or resilient infrastructure."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccountTreeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Green Procurement"
                    secondary="We incorporate environmental and social criteria into our procurement processes, favoring suppliers with strong climate commitments and sustainable practices."
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
                2. Focus on Decent Work and Social Protection
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HandshakeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Just Transition"
                    secondary="We ensure a 'just transition' for workers and communities affected by climate change by providing social protection, decent work opportunities, and retraining programs for new green jobs."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GavelIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Fair Labor Practices"
                    secondary="We uphold fair labor standards in outsourcing contracts, including safe working conditions, fair wages, and the right to organize, particularly in climate-vulnerable sectors."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <InsightsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Capacity Building"
                    secondary="We invest in initiatives that empower local communities and workers in climate-vulnerable regions to adapt to climate change and participate in the green economy."
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>

          <Box sx={{ mt: 6 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              3. Transparency and Accountability
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <GroupsIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Stakeholder Engagement"
                  secondary="We engage with local communities, workers, and civil society organizations in the design and implementation of projects to ensure they are aligned with local needs and priorities."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PolicyIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Monitoring and Evaluation"
                  secondary="We establish robust frameworks to track the social and environmental impacts of outsourcing projects, focusing on the well-being of climate-vulnerable populations."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <MonetizationOnIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Climate Finance"
                  secondary="We ensure that climate finance is directed towards projects that directly benefit climate-vulnerable populations and support their adaptation and resilience efforts."
                />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default PrioritizingClimateVulnerablePeople;
