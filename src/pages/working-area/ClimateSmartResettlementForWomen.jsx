import React from 'react';
import { Box, Container, Typography, Paper, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import PublicIcon from '@mui/icons-material/Public';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BuildIcon from '@mui/icons-material/Build';
import PeopleIcon from '@mui/icons-material/People';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import PolicyIcon from '@mui/icons-material/Policy';
import SchoolIcon from '@mui/icons-material/School';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Diversity2Icon from '@mui/icons-material/Diversity2';

const ClimateSmartResettlementForWomen = () => {
    return (
        <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
            <Container maxWidth="lg">
                <Paper elevation={3} sx={{ p: { xs: 2, md: 6 }, borderRadius: 3 }}>
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 700, color: 'primary.main' }}>
                            Climate-smart Resettlement for Women
                        </Typography>
                        <Typography variant="h6" color="text.secondary" align="center">
                            CAPS (Climate Adaptation Plan Society) aims at climate-smart resettlement for women, which involves integrating gender-responsive strategies into relocation efforts to ensure women's safety, well-being, and economic empowerment during and after displacement due to climate change impacts.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <img
                            src="https://placehold.co/1200x500/F0F4C3/689F38?text=Empowering+Women+in+a+Changing+Climate"
                            alt="A group of women in a community working together on a sustainable project."
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '12px',
                                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)'
                            }}
                        />
                    </Box>

                    <Typography variant="body1" paragraph>
                        This includes providing access to resources, training, and support systems that enable women to build climate-resilient livelihoods and participate in decision-making processes.
                    </Typography>

                    <Grid container spacing={6} sx={{ mt: 6 }}>
                        <Grid item xs={12}>
                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                                Key Principles and Considerations
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><PolicyIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Gender-Responsive Planning"
                                        secondary="Resettlement plans must acknowledge and address the specific needs and vulnerabilities of women, considering their roles in households, communities, and economies."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><MonetizationOnIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Livelihood Diversification"
                                        secondary="Supporting women in developing diverse and climate-resilient livelihoods is crucial, such as through training in climate-smart agriculture, business skills, and access to financial resources."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><HandshakeIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Access to Resources"
                                        secondary="Ensuring women have equal access to land, water, credit, and other resources is essential for their economic empowerment and ability to adapt to changing conditions."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><Diversity2Icon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Social Inclusion and Empowerment"
                                        secondary="Resettlement should promote women's participation in decision-making, access to education and healthcare, and protection from gender-based violence."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><BuildIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Climate-Smart Infrastructure"
                                        secondary="Relocation sites should be designed with climate resilience in mind, incorporating features like flood-resistant housing, access to clean water and sanitation, and energy-efficient technologies."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><PeopleIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Community Engagement"
                                        secondary="Engaging women and local communities in the planning, implementation, and monitoring of resettlement efforts is vital for ensuring their success and sustainability."
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

export default ClimateSmartResettlementForWomen;
