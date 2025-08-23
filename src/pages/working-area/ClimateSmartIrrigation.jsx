import React from 'react';
import { Box, Container, Typography, Paper, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import GrassIcon from '@mui/icons-material/Grass';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PublicIcon from '@mui/icons-material/Public';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BoltIcon from '@mui/icons-material/Bolt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HubIcon from '@mui/icons-material/Hub';

const ClimateSmartIrrigation = () => {
    return (
        <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
            <Container maxWidth="lg">
                <Paper elevation={3} sx={{ p: { xs: 2, md: 6 }, borderRadius: 3 }}>
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 700, color: 'primary.main' }}>
                            Climate-smart irrigation
                        </Typography>
                        <Typography variant="h6" color="text.secondary" align="center" sx={{ textAlign: "justify" }}>
                            CAPS (Climate Adaptation Plan Society) aims to promote climate-smart irrigation practices to enhance agricultural productivity, build resilience to climate change, and minimize greenhouse gas emissions related to irrigation.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <img
                            src="https://placehold.co/1200x500/E1F5FE/01579B?text=Efficient+Water+for+Farming"
                            alt="A field with a modern, efficient irrigation system."
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '12px',
                                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)'
                            }}
                        />
                    </Box>

                    <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
                        It emphasizes efficient water use, water conservation, and the integration of weather information and technology to optimize irrigation scheduling.
                    </Typography>

                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                                Caps’s Activities in Climate-Smart Irrigation
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><WbIncandescentIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Precision Irrigation"
                                        secondary="Utilizing technologies like sensors, drones, and IoT to monitor soil moisture and crop needs, enabling targeted and efficient water application."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><WaterDropIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Micro-Irrigation"
                                        secondary="Employing systems like drip irrigation that deliver water directly to plant roots, minimizing water loss through evaporation and runoff."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><PublicIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Water Harvesting"
                                        secondary="Implementing techniques to collect and store rainwater or runoff for later use, reducing reliance on external water sources."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><AgricultureIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Drought-Resistant Crops"
                                        secondary="Selecting and cultivating crop varieties that are tolerant to water scarcity and high temperatures, reducing irrigation needs."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><GrassIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Soil Moisture Management"
                                        secondary="Utilizing practices like mulching and cover cropping to retain soil moisture and reduce evaporation."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><LocalFloristIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="No-Till Farming"
                                        secondary="Reducing soil disturbance during planting, which helps improve water infiltration and retention."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><HubIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Integrated Water Management"
                                        secondary="Combining different water management techniques to optimize water use and ensure sustainable irrigation practices."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><WbIncandescentIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Remote Sensing"
                                        secondary="Leveraging satellite and drone imagery to assess soil conditions and crop health, enabling timely irrigation interventions."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><LightbulbIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Automated Irrigation Systems"
                                        secondary="Implementing automated systems that control irrigation based on real-time data and pre-defined schedules, improving efficiency."
                                    />
                                </ListItem>
                            </List>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                                Benefits of Climate-Smart Irrigation
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><WaterDropIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Increased Water Use Efficiency"
                                        secondary="Reduced water wastage and improved water productivity."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><ShowChartIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Enhanced Crop Yields"
                                        secondary="Optimized water application leads to better crop growth and higher yields."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><BoltIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Reduced Energy Consumption"
                                        secondary="Lower energy requirements for irrigation, especially when using solar-powered pumps."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><PublicIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Mitigation of Climate Change Impacts"
                                        secondary="Reduced greenhouse gas emissions from irrigation and increased resilience to droughts."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><GrassIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Improved Soil Health"
                                        secondary="Practices like no-till farming and cover cropping improve soil structure and water retention."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><MonetizationOnIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Cost Savings for Farmers"
                                        secondary="Reduced water and energy bills, leading to increased profitability."
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

export default ClimateSmartIrrigation;
