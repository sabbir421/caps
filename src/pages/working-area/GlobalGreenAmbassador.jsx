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
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import PublicIcon from "@mui/icons-material/Public";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import CampaignIcon from "@mui/icons-material/Campaign";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import GroupsIcon from "@mui/icons-material/Groups";
import PsychologyIcon from "@mui/icons-material/Psychology";
import BusinessIcon from "@mui/icons-material/Business";

const GlobalGreenAmbassador = () => {
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
              Global Green Ambassador Program
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center">
              Empowering passionate individuals to become climate adaptation
              champions and drive positive change in communities worldwide.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
              alt="Global Green Ambassadors working together for climate action"
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
            CAPS (Climate Adaptation Plan Society) has taken a program to create
            a Global Green Ambassador for climate adaptation, focusing on
            identifying individuals with a passion for sustainability and
            empowering them to educate and inspire others. This can be achieved
            through initiatives like offering resources, training, and platforms
            for ambassadors to share their knowledge and promote climate action.
          </Typography>

          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Our Global Green Ambassador program is designed to build a worldwide
            network of climate champions who can effectively communicate the
            urgency of climate action and implement practical solutions in their
            communities. We believe that by empowering passionate individuals
            with the right knowledge, skills, and support, we can create a
            ripple effect of positive change across the globe.
          </Typography>

          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            The program focuses on creating a comprehensive ecosystem that
            supports ambassadors throughout their journey, from initial
            identification and recruitment to ongoing training, networking, and
            action opportunities. We understand that successful climate
            adaptation requires not just individual action, but collective
            effort and community engagement.
          </Typography>

          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            By focusing on these key elements and learning from existing
            successful programs, our Global Green Ambassador program for climate
            adaptation can effectively empower individuals to drive positive
            change in their communities and beyond. We are committed to building
            a diverse, inclusive, and effective network of climate champions who
            represent different backgrounds, experiences, and perspectives.
          </Typography>

          <Grid container spacing={6} sx={{ mt: 6 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Key Elements for Success
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PeopleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Identify and Recruit Ambassadors"
                    secondary="Look for individuals with a strong interest in climate change and sustainability, and who possess excellent communication and leadership skills."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SchoolIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Provide Training and Resources"
                    secondary="Equip ambassadors with the knowledge and tools they need to effectively educate and inspire others. This includes information on climate science, adaptation strategies, and communication techniques."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ConnectWithoutContactIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Create a Supportive Network"
                    secondary="Connect ambassadors with each other and with relevant organizations to foster collaboration and knowledge sharing."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CampaignIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Offer Platforms for Action"
                    secondary="Provide opportunities for ambassadors to share their knowledge and inspire action through various channels, such as public speaking events, online platforms, and community engagement initiatives."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AssessmentIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Monitor and Evaluate"
                    secondary="Regularly assess the impact of the program and make adjustments as needed to ensure its effectiveness."
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
                Ambassador Programs
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <EmojiPeopleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Youth Climate Justice"
                    secondary="Amplifying the voices of young people fighting for climate justice and action through dedicated youth ambassador programs."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SchoolIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Staff & Student Development"
                    secondary="Developing agency amongst staff and young people, enhancing their climate education and skills development."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GroupsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="School Sustainability Champions"
                    secondary="Encouraging a new generation of sustainability champions in schools through student ambassador initiatives."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BusinessIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Community Leadership"
                    secondary="Empowering local community leaders to drive climate adaptation and sustainability initiatives in their regions."
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
              Specific Examples of Existing Programs
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <PublicIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="CAPS's Global Ambassadors Programme"
                  secondary="This program focuses on amplifying the voices of young people fighting for climate justice and action."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PsychologyIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Climate Ambassadors scheme"
                  secondary="This scheme aims to develop agency amongst staff and young people, enhancing their climate education and skills development."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <VolunteerActivismIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Global Green Ambassadors"
                  secondary="This program focuses on encouraging a new generation of sustainability champions in schools."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LightbulbIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Innovation and Leadership Development"
                  secondary="Encouraging ambassadors to develop innovative approaches and take leadership roles in climate action through recognition and support systems."
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mt: 6, p: 4, bgcolor: "primary.light", borderRadius: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 600, color: "primary.main" }}
            >
              Our Impact
            </Typography>
            <Typography variant="body1" paragraph>
              Through our Global Green Ambassador program, we have successfully
              trained and empowered over 500 ambassadors across 50+ countries,
              reaching more than 10,000 people through educational initiatives
              and implementing over 100 community projects focused on climate
              adaptation and sustainability.
            </Typography>
            <Typography variant="body1">
              Join our mission to create a worldwide network of climate
              champions. Together, we can build a more sustainable and resilient
              future for generations to come.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default GlobalGreenAmbassador;
