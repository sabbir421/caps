import React from 'react';
import { Box, Container, Typography, Paper, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SpaIcon from '@mui/icons-material/Spa';
import SchoolIcon from '@mui/icons-material/School';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';

const ClimateSmartChildprotection = () => {
    return (
        <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
            <Container maxWidth="lg">
                <Paper elevation={3} sx={{ p: { xs: 2, md: 6 }, borderRadius: 3 }}>
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 700, color: 'primary.main' }}>
                            Climate-smart Child Protection
                        </Typography>
                        <Typography variant="h6" color="text.secondary" align="center">
                            Safeguarding children's well-being in the face of climate change impacts.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <img 
                            src="https://placehold.co/1200x500/E0F2F1/004D40?text=Children+in+a+safe+and+nurturing+environment" 
                            alt="Children participating in a climate-smart activity" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                borderRadius: '12px', 
                                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)' 
                            }} 
                        />
                    </Box>
                    
                    <Typography variant="body1" paragraph sx={{ mt: 4 }}>
                        CAPS (Climate Adaptation Plan Society) approaches the project titled **Climate-smart Child Protection** by focusing on safeguarding children's well-being in the face of climate change impacts. This involves integrating child protection into climate change adaptation and disaster risk reduction strategies, ensuring children's needs and vulnerabilities are considered in all related policies and programs. This approach aims to build children's resilience, prevent and respond to climate-related protection risks, and empower them as agents of change. We follow the best practices promoted by organizations like UNICEF, which focus on climate-resilient child protection systems.
                    </Typography>

                    <Grid container spacing={6} sx={{ mt: 6 }}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                                Climate Change Impact on Children
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><ChildCareIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Increased Vulnerability"
                                        secondary="Children are disproportionately affected by climate change due to their physical and developmental vulnerabilities."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><LockPersonIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Specific Risks"
                                        secondary="Climate change exacerbates existing protection risks like violence, abuse, exploitation, and neglect, and can lead to new ones, such as displacement, food insecurity, and water scarcity."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><PsychologyIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Long-term Consequences"
                                        secondary="The harm caused by climate change can have lasting impacts on children's health, education, and overall well-being, potentially perpetuating cycles of poverty and inequality."
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                                Integrating Child Protection into Climate Action
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><NaturePeopleIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Child-Centered Approach"
                                        secondary="Climate change adaptation and disaster risk reduction strategies should prioritize children's specific needs and perspectives."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><HealthAndSafetyIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Strengthening Protective Systems"
                                        secondary="We enhance the capacity of families, communities, and institutions to protect children from climate-related harms and provide a continuum of care before, during, and after disasters."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><EmojiEventsIcon color="primary" /></ListItemIcon>
                                    <ListItemText
                                        primary="Investing in Children"
                                        secondary="Prioritizing children in climate-related funding and resources is crucial to ensuring their well-being and building their resilience."
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    
                    <Box sx={{ mt: 6 }}>
                        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                            Key Strategies for Climate-Smart Child Protection
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon><SpaIcon color="primary" /></ListItemIcon>
                                <ListItemText
                                    primary="Building Resilience"
                                    secondary="Strengthening families and communities to cope with climate-related shocks and stresses, and promoting positive parenting practices that support children's well-being."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><SchoolIcon color="primary" /></ListItemIcon>
                                <ListItemText
                                    primary="Disaster Risk Reduction Education"
                                    secondary="Equipping children with the knowledge and skills to prepare for and respond to climate-related hazards, including through comprehensive school safety programs."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><PeopleIcon color="primary" /></ListItemIcon>
                                <ListItemText
                                    primary="Promoting Participation"
                                    secondary="Engaging children and young people in climate change adaptation and disaster risk reduction planning and decision-making."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><EmojiEventsIcon color="primary" /></ListItemIcon>
                                <ListItemText
                                    primary="Green Skills Development"
                                    secondary="Providing children and youth with the skills and knowledge to participate in the green economy and build sustainable livelihoods that are less vulnerable to climate change."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><PsychologyIcon color="primary" /></ListItemIcon>
                                <ListItemText
                                    primary="Mental Health Support"
                                    secondary="Addressing the mental health impacts of climate change on children and families, including providing support for those experiencing trauma or distress."
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default ClimateSmartChildprotection;
