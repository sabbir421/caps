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
import PsychologyIcon from "@mui/icons-material/Psychology";
import BuildIcon from "@mui/icons-material/Build";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import PolicyIcon from "@mui/icons-material/Policy";
import SecurityIcon from "@mui/icons-material/Security";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShieldIcon from "@mui/icons-material/Shield";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WorkIcon from "@mui/icons-material/Work";

const ClimateSmartSchooling = () => {
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
              Climate-Smart Schooling
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center">
              Education that equips students with knowledge, skills, and values
              to address climate change and its impacts.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Climate-smart schooling and sustainable education"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
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
            CAPS (Climate Adaptation Plan Society) approches "Climate-smart
            schooling" refers to education that equips students with the
            knowledge, skills, and values to address climate change and its
            impacts, while also ensuring the sustainability of education systems
            themselves. It involves integrating climate change adaptation and
            environmental sustainability into education policies, curricula, and
            school infrastructure. This approach aims to create a generation
            prepared to live and thrive in a changing climate.
          </Typography>

          <Grid container spacing={6} sx={{ mt: 6 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Key Aspects of Climate-Smart Schooling
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <SchoolIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Curriculum Integration"
                    secondary="Climate change and environmental sustainability are incorporated into various subjects, fostering understanding and critical thinking about climate-related issues."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PsychologyIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Skills Development"
                    secondary="Students gain practical skills related to climate adaptation, mitigation, and green technologies, preparing them for a changing job market."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BuildIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="School Infrastructure"
                    secondary="Schools are designed and managed to be resilient to climate change impacts, such as extreme weather events, with features like water conservation and renewable energy sources."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GroupsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Community Engagement"
                    secondary="Schools serve as hubs for climate action, engaging students, teachers, and the wider community in initiatives like tree planting, waste management, and sustainable gardening."
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
                Additional Components
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PersonIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Teacher Training"
                    secondary="Educators receive training on climate change and how to effectively teach related topics, ensuring they are equipped to guide students."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PolicyIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Policy and Planning"
                    secondary="Education systems integrate climate considerations into their policies, budgets, and overall planning processes."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SecurityIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Disaster Risk Reduction"
                    secondary="Schools develop and implement plans for disaster preparedness, ensuring learning continuity during emergencies."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccountBalanceWalletIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Access to Climate Finance"
                    secondary="Securing funding for climate-smart education initiatives is crucial for implementing necessary changes and ensuring equitable access to quality education."
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
              Benefits of Climate-Smart Schooling
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ShieldIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Enhanced Climate Resilience"
                  secondary="Equips individuals with the knowledge and skills to adapt to climate change impacts."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TrendingUpIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Sustainable Development"
                  secondary="Promotes environmentally responsible practices and contributes to a greener future."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GroupsIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Social Equity"
                  secondary="Ensures that all students, regardless of background, have access to quality education that prepares them for a changing world."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <WorkIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Economic Opportunities"
                  secondary="Creates a workforce equipped with the skills needed for green jobs and a sustainable economy."
                />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ClimateSmartSchooling;
