import React from 'react';
import { Box, Container, Typography, Paper, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import GavelIcon from '@mui/icons-material/Gavel';
import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SpaIcon from '@mui/icons-material/Spa';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import InsightsIcon from '@mui/icons-material/Insights';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PolicyIcon from '@mui/icons-material/Policy';
import ScienceIcon from '@mui/icons-material/Science';
import SchoolIcon from '@mui/icons-material/School';
import LandscapeIcon from '@mui/icons-material/Landscape';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import GroupsIcon from '@mui/icons-material/Groups';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import ForestIcon from '@mui/icons-material/Forest';
import WavesIcon from '@mui/icons-material/Waves';
import BuildIcon from '@mui/icons-material/Build';
import EuroIcon from '@mui/icons-material/Euro';

const ClimateSmartSundarbans = () => {
    return (
        <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
            <Container maxWidth="lg">
                <Paper elevation={3} sx={{ p: { xs: 2, md: 6 }, borderRadius: 3 }}>
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 700, color: 'primary.main' }}>
                            Climate-smart Sundarbans
                        </Typography>
                        <Typography variant="h6" color="text.secondary" align="center" sx={{ textAlign: "justify" }}>
                            The Sundarbans, a UNESCO World Heritage site and the world's largest mangrove forest, faces significant climate change impacts, particularly in the form of sea-level rise and increased salinity. Climate-smart strategies are crucial for the Sundarbans' adaptation and require a multi-faceted approach that integrates conservation, sustainable livelihoods, and community participation.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <img 
                            src="https://placehold.co/1200x500/E0F2F1/004D40?text=Protecting+the+Sundarbans" 
                            alt="The Sundarbans mangrove forest, a UNESCO World Heritage site." 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                borderRadius: '12px', 
                                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)' 
                            }} 
                        />
                    </Box>
                    
                    <Typography variant="body1" paragraph sx={{ mt: 4, textAlign: "justify" }}>
                        CAPS (Climate Adaptation Plan Society) have launched the project titled **Climate-smart Sundarbans** which focuses on sustainable development and climate resilience in the Sundarbans region, which is highly vulnerable to climate change impacts. This involves integrating climate considerations into various aspects of life, including agriculture, resource management, and livelihoods, to ensure long-term sustainability and reduce vulnerability.
                    </Typography>

                    <Grid container spacing={6} sx={{ mt: 6 }}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                                Key Climate Change Impacts and Challenges
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><WaterDropIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Sea-level rise"
                                        secondary="Threatens to inundate low-lying areas and displace communities."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><CrisisAlertIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Increased salinity"
                                        secondary="Impacts agriculture, drinking water sources, and biodiversity."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><WavesIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Extreme weather events"
                                        secondary="Cyclones, storm surges, and floods cause damage to infrastructure and livelihoods."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><LandscapeIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Salinity intrusion"
                                        secondary="Affects the availability of freshwater and reduces agricultural productivity."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><LocalFloristIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Biodiversity loss"
                                        secondary="Threatens the unique flora and fauna of the Sundarbans."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><PeopleIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Livelihood disruptions"
                                        secondary="Affecting communities that rely on agriculture, fishing, and other natural resources."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><EuroIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Lack of financial support"
                                        secondary="A significant barrier to implementing climate-smart adaptation measures."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><InsightsIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Knowledge gaps"
                                        secondary="Many communities lack sufficient awareness about climate change and its impacts."
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                                Climate-Smart Adaptation Strategies
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="h6" component="h3" sx={{ fontWeight: 500 }}>Nature-based solutions:</Typography>
                                <List dense>
                                    <ListItem>
                                        <ListItemIcon><LocalFloristIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Mangrove restoration" secondary="Enhancing the natural defenses of the Sundarbans against storm surges and erosion." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><WavesIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Coastal aforestation" secondary="Protecting coastlines and providing habitats for various species." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><SpaIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Restoration of degraded land" secondary="Improving ecosystem resilience and carbon sequestration." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><AgricultureIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Promoting sustainable aquaculture" secondary="Developing climate-resilient aquaculture practices." />
                                    </ListItem>
                                </List>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="h6" component="h3" sx={{ fontWeight: 500 }}>Sustainable livelihoods:</Typography>
                                <List dense>
                                    <ListItem>
                                        <ListItemIcon><AgricultureIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Climate-smart agriculture" secondary="Implementing practices like saline-tolerant crop cultivation, crop diversification, and improved water management." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><GroupsIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Alternative livelihood options" secondary="Promoting ecotourism, handicrafts, and other income-generating activities." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><WaterDropIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Floating farms" secondary="Utilizing innovative techniques like float farming to overcome salinity issues and ensure food security." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><WbIncandescentIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Promoting renewable energy" secondary="Reducing reliance on fossil fuels and lowering carbon emissions." />
                                    </ListItem>
                                </List>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="h6" component="h3" sx={{ fontWeight: 500 }}>Community-based adaptation:</Typography>
                                <List dense>
                                    <ListItem>
                                        <ListItemIcon><SchoolIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Community awareness and education" secondary="Empowering communities with knowledge about climate change and adaptation strategies." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><CrisisAlertIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Strengthening disaster preparedness" secondary="Improving cyclone shelters, early warning systems, and evacuation plans." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><PeopleIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Promoting participatory decision-making" secondary="Engaging local communities in the planning and implementation of adaptation projects." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><HandshakeIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Capacity building" secondary="Training communities in climate-smart agriculture, disaster management, and other relevant skills." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Developing climate-resilient infrastructure" secondary="Strengthening embankments, building elevated platforms, and improving drainage systems." />
                                    </ListItem>
                                </List>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="h6" component="h3" sx={{ fontWeight: 500 }}>Policy and governance:</Typography>
                                <List dense>
                                    <ListItem>
                                        <ListItemIcon><PolicyIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Mainstreaming climate change into development plans" secondary="Integrating climate resilience into all relevant sectors." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><GavelIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Strengthening institutional capacity" secondary="Enhancing the ability of local authorities to implement adaptation measures." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><PublicIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Promoting transboundary cooperation" secondary="Fostering collaboration between India and Bangladesh to address climate change impacts on the Sundarbans." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><EuroIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Securing financial resources" secondary="Mobilizing funding for climate adaptation projects and initiatives." />
                                    </ListItem>
                                </List>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="h6" component="h3" sx={{ fontWeight: 500 }}>Research and innovation:</Typography>
                                <List dense>
                                    <ListItem>
                                        <ListItemIcon><ScienceIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Developing climate-resilient technologies" secondary="Investing in research on drought-resistant crops, water-efficient irrigation systems, and other relevant technologies." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><InsightsIcon color="primary" /></ListItemIcon>
                                        <ListItemText primary="Monitoring climate change impacts" secondary="Conducting regular assessments to track changes in the Sundarbans ecosystem and inform adaptation strategies." />
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container spacing={6} sx={{ mt: 6 }}>
                        <Grid item xs={12}>
                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                                Here's a breakdown of key aspects
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><AgricultureIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Climate-Smart Agriculture (CSA)"
                                        secondary="**Adopting resilient farming practices:** This includes using drought-resistant crops, water-efficient irrigation methods, and organic fertilizers to minimize the impact of changing weather patterns on agriculture. **Diversifying livelihoods:** Moving beyond traditional agriculture to explore alternative income-generating activities like aquaculture, apiculture, and eco-tourism, which can be more resilient to climate changes."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><PeopleIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Community-Based Adaptation"
                                        secondary="**Local knowledge and participation:** Recognizing and incorporating the traditional knowledge and practices of the local communities in climate change adaptation strategies. **Community-led initiatives:** Supporting community-based organizations and initiatives focused on climate change adaptation, such as mangrove restoration and disaster preparedness."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><ForestIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Sustainable Resource Management"
                                        secondary="**Mangrove conservation and restoration:** Protecting and restoring the Sundarbans mangrove forests, which act as a natural buffer against cyclones, storm surges, and erosion. **Sustainable harvesting practices:** Promoting responsible resource extraction, such as sustainable fishing and honey collection, to prevent overexploitation and ensure long-term availability."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Climate-Resilient Infrastructure"
                                        secondary="**Improved infrastructure:** Investing in climate-resilient infrastructure, such as cyclone shelters, elevated roads, and water management systems, to protect communities and assets from climate-related hazards. **Access to clean energy:** Promoting access to renewable energy sources like solar power to reduce reliance on fossil fuels and improve energy security."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><HandshakeIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Strengthening Governance and Cooperation"
                                        secondary="**Co-management of resources:** Implementing co-management approaches involving local communities and government agencies for the sustainable management of natural resources. **Cross-border cooperation:** Fostering collaboration between India and Bangladesh, as the Sundarbans spans both countries, to address transboundary climate change impacts and promote joint adaptation efforts."
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

export default ClimateSmartSundarbans;