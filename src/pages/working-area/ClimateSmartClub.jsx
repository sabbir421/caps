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
import NatureIcon from "@mui/icons-material/Nature";
import RecyclingIcon from "@mui/icons-material/Recycling";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import ScienceIcon from "@mui/icons-material/Science";
import CampaignIcon from "@mui/icons-material/Campaign";
import GroupsIcon from "@mui/icons-material/Groups";
import GavelIcon from "@mui/icons-material/Gavel";
import ShareIcon from "@mui/icons-material/Share";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PersonIcon from "@mui/icons-material/Person";
import BookIcon from "@mui/icons-material/Book";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const ClimateSmartClub = () => {
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
              Climate Smart Club in High Schools, Colleges & Universities
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center">
              Extracurricular groups focused on educating students about climate
              change and empowering them to take action.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <img
              src="https://images.unsplash.com/photo-1523240794102-9c5f81b0b0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Climate Smart Club activities and student engagement"
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
            CAPS (Climate Adaptation Plan Society) has set up some "Climate
            Smart Club" in high schools, Colleges and Universities. It context
            is extracurricular group focused on educating students about climate
            change and empowering them to take action. These clubs often involve
            hands-on projects, awareness campaigns, and community engagement
            initiatives to address environmental issues and promote
            sustainability within the school and beyond.
          </Typography>

          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            By engaging in these activities, Climate Smart Clubs can empower
            students to become environmentally conscious citizens who are
            equipped to address the challenges of climate change and contribute
            to a more sustainable future.
          </Typography>

          <Grid container spacing={6} sx={{ mt: 6 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                1. Education and Awareness
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <SchoolIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Climate Change Fundamentals"
                    secondary="Teach students about the causes and impacts of climate change, including its effects on ecosystems, human health, and communities."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PsychologyIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Climate Justice"
                    secondary="Explore the disproportionate impact of climate change on vulnerable populations and advocate for equitable solutions."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NatureIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Sustainable Practices"
                    secondary="Educate students about reducing their environmental footprint through energy conservation, waste reduction, and responsible consumption."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EnergySavingsLeafIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Resource Management"
                    secondary="Promote efficient use of resources like water and energy within the school and at home."
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
                2. Action-Oriented Projects
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <NatureIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="School Gardens and Farms"
                    secondary="Establish school gardens or farms to grow food, promote biodiversity, and educate students about sustainable agriculture."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <RecyclingIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Waste Reduction and Recycling"
                    secondary="Implement waste reduction programs, recycling initiatives, and composting systems to minimize landfill waste."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EnergySavingsLeafIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Energy Audits and Conservation"
                    secondary="Conduct energy audits of the school building to identify areas for improvement and implement energy-saving measures."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ScienceIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Citizen Science Projects"
                    secondary="Participate in citizen science projects, such as monitoring air or water quality, to collect data and contribute to scientific research."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CampaignIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Climate Action Campaigns"
                    secondary="Launch awareness campaigns to educate the school community about climate change and promote sustainable practices."
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>

          <Grid container spacing={6} sx={{ mt: 6 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                3. Community Engagement
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <GroupsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Partnerships with Local Organizations"
                    secondary="Collaborate with local environmental organizations, community groups, and businesses to amplify their impact."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GavelIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Advocacy and Policy Engagement"
                    secondary="Encourage students to engage in advocacy efforts, such as writing letters to elected officials or participating in climate marches."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ShareIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Sharing Knowledge and Skills"
                    secondary="Share knowledge and skills gained through the club with other students, families, and the wider community."
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
                4. Leadership and Skill Development
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <GroupWorkIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Teamwork and Collaboration"
                    secondary="Foster teamwork and collaboration among club members through group projects and activities."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <RecordVoiceOverIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Communication and Public Speaking"
                    secondary="Provide opportunities for students to develop their communication and public speaking skills through presentations, workshops, and outreach events."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LightbulbIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Critical Thinking and Problem-Solving"
                    secondary="Encourage students to develop critical thinking and problem-solving skills through analyzing climate challenges and developing solutions."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmojiEventsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Community Engagement"
                    secondary="Enhance their leadership skills by leading initiatives and engaging with the wider community."
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
              5. Resources and Support
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <PersonIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Teacher Advisors"
                  secondary="Connect with teachers who can provide guidance and support for the club."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BookIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Curriculum Resources"
                  secondary="Utilize educational resources and materials on climate change and sustainability."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccountBalanceWalletIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Funding and Grants"
                  secondary="Explore funding opportunities and grant programs to support club activities and initiatives."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ConnectWithoutContactIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Networking and Collaboration"
                  secondary="Connect with other schools and clubs to share best practices and resources."
                />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ClimateSmartClub;
