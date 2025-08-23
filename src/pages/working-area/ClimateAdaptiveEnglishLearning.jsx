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
import LanguageIcon from "@mui/icons-material/Language";
import TranslateIcon from "@mui/icons-material/Translate";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MicIcon from "@mui/icons-material/Mic";
import PublicIcon from "@mui/icons-material/Public";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ForumIcon from "@mui/icons-material/Forum";
import ExploreIcon from "@mui/icons-material/Explore";

const ClimateAdaptiveEnglishLearning = () => {
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
              Climate Adaptive English Learning
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center">
              Integrating climate change education into English language
              learning to equip individuals with knowledge and skills for
              climate action.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Climate Adaptive English Learning and language education"
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
            CAPS (Climate Adaptation Plan Society) approaches Climate-adaptive
            English learning refers to integrating climate change education into
            English language learning to equip individuals with the knowledge
            and skills to address climate-related challenges. This approach
            combines language acquisition with understanding climate change
            concepts, enabling learners to communicate effectively about climate
            action and adapt to its impacts.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, mt: 6 }}
          >
            Integrating Climate Change into English Learning:
          </Typography>

          <Grid container spacing={6} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Content-based Instruction
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ textAlign: "justify" }}
              >
                English language lessons can be designed around climate change
                topics, such as: extreme weather events, sustainable living, or
                the impact of climate change on different communities.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Vocabulary Development
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ textAlign: "justify" }}
              >
                Learners can acquire specialized vocabulary related to climate
                science, environmental issues, and climate action in English.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={6} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Reading and Writing
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ textAlign: "justify" }}
              >
                English texts and writing assignments can focus on
                climate-related themes, encouraging learners to research,
                analyze, and express their understanding of climate change.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Speaking and Listening
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ textAlign: "justify" }}
              >
                Discussions, debates, and presentations on climate change topics
                can help learners develop their English speaking and listening
                skills while engaging with the issue.
              </Typography>
            </Grid>
          </Grid>

          <Box sx={{ mt: 6 }}>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Real-world Applications
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              English learning can be connected to real-world climate action
              initiatives, such as participating in local environmental projects
              or learning about international climate agreements.
            </Typography>
          </Box>

          <Box sx={{ mt: 6 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Benefits of Climate-Adaptive English Learning:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <VisibilityIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Enhanced Climate Literacy"
                  secondary="Learners gain a deeper understanding of climate change and its implications."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ForumIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Improved Communication Skills"
                  secondary="They develop the ability to discuss climate issues effectively in English."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmojiEventsIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Increased Engagement with Climate Action"
                  secondary="Learners are empowered to participate in climate-related activities and contribute to solutions."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ExploreIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Global Perspective"
                  secondary="They gain access to a wider range of information and resources on climate change, often available in English."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TrendingUpIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Sustainable Development"
                  secondary="By promoting climate action, this approach supports sustainable development goals and a more resilient future."
                />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ClimateAdaptiveEnglishLearning;
