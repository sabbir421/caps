import React from 'react';
import { Box, Container, Typography, Paper, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import WavesIcon from '@mui/icons-material/Waves';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import PolicyIcon from '@mui/icons-material/Policy';
import SchoolIcon from '@mui/icons-material/School';
import GavelIcon from '@mui/icons-material/Gavel';
import ScienceIcon from '@mui/icons-material/Science';
import PublicIcon from '@mui/icons-material/Public';
import GroupsIcon from '@mui/icons-material/Groups';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';

const ClimateSmartAdaptationForSeaSpecies = () => {
    return (
        <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
            <Container maxWidth="lg">
                <Paper elevation={3} sx={{ p: { xs: 2, md: 6 }, borderRadius: 3 }}>
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 700, color: 'primary.main' }}>
                            Climate-smart Adaptation for Sea Species
                        </Typography>
                        <Typography variant="h6" color="text.secondary" align="center">
                            Strategies for building resilience in marine ecosystems.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <img 
                            src="https://placehold.co/1200x500/E0F2F1/004D40?text=Protecting+Marine+Ecosystems" 
                            alt="A vibrant marine ecosystem with fish and coral." 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                borderRadius: '12px', 
                                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)' 
                            }} 
                        />
                    </Box>
                    
                    <Typography variant="body1" paragraph sx={{ mt: 4 }}>
                        CAPS (Climate Adaptation Plan Society) approaches **Climate-smart adaptation for sea species** by implementing strategies that build resilience and promote sustainable practices in marine ecosystems to mitigate the impacts of climate change. This includes protecting critical habitats, managing fisheries sustainably, and fostering adaptive capacity in coastal communities.
                    </Typography>

                    <Grid container spacing={6} sx={{ mt: 6 }}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                                1. Protecting Critical Habitats
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><WavesIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Marine Protected Areas (MPAs)"
                                        secondary="Establishing and managing MPAs, including climate refugia, to safeguard biodiversity hotspots and provide a buffer against climate change effects."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><LocalFloristIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Ecosystem-based Management"
                                        secondary="Adopting approaches that consider the interconnectedness of marine life and their environment is crucial for effective conservation."
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                                2. Sustainable Fisheries Management
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><SchoolIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Adaptive Management"
                                        secondary="Implementing adaptive management strategies in fisheries, such as adjusting catch limits and fishing seasons based on scientific data, to maintain healthy fish populations."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><GavelIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Climate-Smart Aquaculture"
                                        secondary="Promoting sustainable aquaculture practices that minimize environmental impact and enhance the resilience of aquatic food systems."
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>

                    <Grid container spacing={6} sx={{ mt: 6 }}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                                3. Building Adaptive Capacity
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><PublicIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Coastal Adaptation"
                                        secondary="Implementing measures like restoring natural habitats and constructing engineered structures to mitigate the impacts of sea-level rise and storms."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><HandshakeIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Diversification"
                                        secondary="Encouraging diversification of livelihoods in coastal communities to reduce dependence on climate-sensitive sectors like fishing."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><GroupsIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Community Engagement"
                                        secondary="Involving local communities in the planning and implementation of adaptation strategies to ensure effectiveness and social equity."
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                                4. Addressing Climate Change Impacts
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><CrisisAlertIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Reducing Greenhouse Gas Emissions"
                                        secondary="Mitigation efforts to reduce greenhouse gas emissions are crucial for slowing down the rate of climate change and its impacts on marine ecosystems."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><ScienceIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Research and Monitoring"
                                        secondary="Investing in research to better understand the impacts of climate change on marine species and ecosystems, and developing effective monitoring systems."
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    
                    <Box sx={{ mt: 6 }}>
                        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                            5. Integrating Climate Considerations
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon><PolicyIcon color="primary" /></ListItemIcon>
                                <ListItemText
                                    primary="Climate-Smart Marine Spatial Planning (MSP)"
                                    secondary="Integrating climate change considerations into marine spatial planning processes can help optimize the use of marine space for various activities while ensuring the protection of ecosystems."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><HandshakeIcon color="primary" /></ListItemIcon>
                                <ListItemText
                                    primary="Cross-Sectoral Collaboration"
                                    secondary="Fostering collaboration among different sectors, including fisheries, aquaculture, tourism, and coastal management, is essential for developing comprehensive adaptation strategies."
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default ClimateSmartAdaptationForSeaSpecies;
