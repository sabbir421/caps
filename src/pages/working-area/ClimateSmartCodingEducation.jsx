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
import ComputerIcon from "@mui/icons-material/Computer";
import CodeIcon from "@mui/icons-material/Code";
import GroupIcon from "@mui/icons-material/Group";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import InsightsIcon from "@mui/icons-material/Insights";
import HandymanIcon from "@mui/icons-material/Handyman";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PeopleIcon from "@mui/icons-material/People";

const ClimateSmartCodingEducation = () => {
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
              Climate Smart Coding Education
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              align="center"
              sx={{ textAlign: "justify" }}
            >
              Empowering communities in climate-vulnerable areas with technology
              skills.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <img
              src="https://placehold.co/1200x500/E0F2F1/004D40?text=Coding+for+a+Sustainable+Future"
              alt="A group of people learning to code with a focus on climate solutions"
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
            CAPS (Climate Adaptation Plan Society) believes that providing
            coding education in climate-vulnerable areas can equip individuals
            with the skills to address climate change impacts, develop local
            solutions, and improve their livelihoods. This can be achieved by
            integrating coding into existing curricula, offering specialized
            training programs, and fostering community engagement.
          </Typography>

          <Grid container spacing={6} sx={{ mt: 6 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Integrating Coding into Education
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <SchoolIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Curriculum Integration"
                    secondary="We incorporate coding concepts into subjects like science, math, and social studies, using climate change as a context. Students can design simulations for sea-level rise or develop algorithms for water management."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HandymanIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Climate Change Focused Projects"
                    secondary="We develop coding projects that address specific local climate challenges, such as building early warning systems for floods or designing sustainable farming solutions."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GroupIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Teacher Training"
                    secondary="We equip teachers with the necessary skills and resources to effectively teach coding and its applications to climate change."
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
                Specialized Training Programs
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Vocational Training"
                    secondary="We offer coding boot camps and vocational training programs focused on skills relevant to climate-related industries, such as renewable energy or sustainable agriculture."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ComputerIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Digital Literacy Programs"
                    secondary="We provide digital literacy training alongside coding skills to ensure individuals can use technology to access information and participate in online climate action platforms."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LightbulbIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Entrepreneurship and Innovation"
                    secondary="We encourage the development of climate-focused startups and businesses by providing mentorship and access to resources for coding and technology development."
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
              Benefits and Community Empowerment
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <EmojiEventsIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Enhanced Adaptability"
                  secondary="Coding skills empower individuals to adapt to changing environmental conditions by developing solutions for climate-related challenges."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <InsightsIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Improved Livelihoods"
                  secondary="Coding skills create new economic opportunities in climate-related industries, improving livelihoods and reducing poverty."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PeopleIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Community Empowerment"
                  secondary="Coding education can empower communities to take ownership of climate action by developing local solutions and participating in decision-making processes."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmojiEventsIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Increased Resilience"
                  secondary="By fostering a deeper understanding of climate change and its impacts, coding education contributes to building more resilient communities."
                />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ClimateSmartCodingEducation;
