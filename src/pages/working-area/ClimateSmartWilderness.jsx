import React from 'react';
import { Box, Container, Typography, Paper, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import PublicIcon from '@mui/icons-material/Public';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PolicyIcon from '@mui/icons-material/Policy';
import ScienceIcon from '@mui/icons-material/Science';
import PeopleIcon from '@mui/icons-material/People';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import InsightsIcon from '@mui/icons-material/Insights';
import ForestIcon from '@mui/icons-material/Forest';
import ParkIcon from '@mui/icons-material/Park';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import HubIcon from '@mui/icons-material/Hub';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import WavesIcon from '@mui/icons-material/Waves';
import GrassIcon from '@mui/icons-material/Grass';

const ClimateSmartWilderness = () => {
    return (
        <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
            <Container maxWidth="lg">
                <Paper elevation={3} sx={{ p: { xs: 2, md: 6 }, borderRadius: 3 }}>
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 700, color: 'primary.main' }}>
                            Climate-smart Wilderness
                        </Typography>
                        <Typography variant="h6" color="text.secondary" align="center">
                            CAPS (Climate Adaptation Plan Society) approaches the project titled Climate-smart wilderness focuses on managing natural areas in a way that anticipates and responds to the impacts of climate change, ensuring the long-term health and resilience of ecosystems and the communities that depend on them.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <img
                            src="https://placehold.co/1200x500/B2DFDB/00695C?text=Protecting+Our+Wilderness"
                            alt="A scenic view of a wild, untouched landscape."
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '12px',
                                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)'
                            }}
                        />
                    </Box>

                    <Typography variant="body1" paragraph>
                        It involves integrating climate change considerations into conservation planning and management practices, aiming to enhance the ability of species, ecosystems, and human populations to cope with a changing climate.
                    </Typography>

                    <Grid container spacing={6} sx={{ mt: 6 }}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                                1. Understanding the Impacts
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><InsightsIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Recognizing climate effects on ecosystems"
                                        secondary="Climate-smart conservation recognizes that climate change will affect ecosystems and their inhabitants in various ways, including changes in temperature, precipitation patterns, sea levels, and extreme weather events."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CrisisAlertIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Acknowledging secondary stressors"
                                        secondary="It also acknowledges that climate change can exacerbate existing threats like habitat loss, pollution, and invasive species."
                                    />
                                </ListItem>
                            </List>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                                2. Principles of Climate-Smart Conservation
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><WbIncandescentIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Forward-thinking"
                                        secondary="Conservation efforts must be proactive and consider future climate scenarios, not just current conditions."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><ForestIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Ecosystem-based"
                                        secondary="Focusing on the health and resilience of entire ecosystems, rather than individual species, is crucial."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><ScienceIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Adaptive management"
                                        secondary="Conservation strategies should be flexible and adaptable, allowing for adjustments as new information becomes available and conditions change."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><PeopleIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Community engagement"
                                        secondary="Involving local communities in planning and implementation is essential for successful and equitable adaptation."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><HandshakeIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Multi-benefit solutions"
                                        secondary="Conservation actions should also address other challenges like poverty, food security, and sustainable livelihoods."
                                    />
                                </ListItem>
                            </List>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                                3. Key Strategies
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><ForestIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Protecting and restoring natural habitats"
                                        secondary="Healthy ecosystems are more resilient to climate change. Conservation efforts should focus on protecting existing natural areas and restoring degraded ones."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><AgricultureIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Promoting climate-resilient agriculture"
                                        secondary="This includes using drought-resistant crops, implementing water-wise irrigation techniques, and diversifying farming practices."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><WaterDropIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Managing water resources"
                                        secondary="Climate change is altering water availability, so it's important to develop strategies for water conservation, efficient irrigation, and flood management."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><PolicyIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Reducing other threats"
                                        secondary="Addressing pollution, invasive species, and habitat fragmentation can enhance the resilience of ecosystems to climate change."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><PeopleIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Building community capacity"
                                        secondary="Providing education, training, and resources to local communities can empower them to adapt to climate change and build sustainable livelihoods."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><ScienceIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Using technology"
                                        secondary="Drones, AI, and earth observation technologies can help monitor ecosystems, track climate impacts, and inform adaptation strategies."
                                    />
                                </ListItem>
                            </List>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                                4. Examples
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><WavesIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Restoring coastal wetlands"
                                        secondary="These act as natural buffers against sea-level rise and storm surges."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><GrassIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Promoting agroforestry"
                                        secondary="Integrating trees into agricultural systems can provide shade, reduce erosion, and improve soil health."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><AgricultureIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Developing drought-resistant crop varieties"
                                        secondary="This helps farmers adapt to changing rainfall patterns."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><WaterDropIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Implementing water harvesting techniques"
                                        secondary="Collecting and storing rainwater can provide a more reliable water supply."
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        
                        <Grid item xs={12}>
                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                                5. Importance of Climate-Smart Wilderness Adaptation
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><SpaIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Biodiversity conservation"
                                        secondary="Protecting ecosystems and species from climate change impacts is crucial for maintaining biodiversity."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><NaturePeopleIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Ecosystem services"
                                        secondary="Healthy ecosystems provide vital services like clean air and water, food, and carbon sequestration."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><PeopleIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Community well-being"
                                        secondary="Climate-smart conservation can help communities adapt to climate change, build resilience, and improve livelihoods."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><PublicIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Long-term sustainability"
                                        secondary="By addressing climate change proactively, we can ensure the long-term health and sustainability of both natural ecosystems and human societies."
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

export default ClimateSmartWilderness;
