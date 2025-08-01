import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();

  const footerSections = [
    {
      title: "About Us",
      links: [
        { name: "Our Mission", href: "/about" },
        { name: "Our Team", href: "/about" },
        { name: "Our History", href: "/about" },
        { name: "Annual Reports", href: "/publications" },
      ],
    },
    {
      title: "Our Programs",
      links: [
        { name: "Climate Action", href: "/what-we-do" },
        { name: "Rural Development", href: "/working-area" },
        { name: "Education", href: "/what-we-do" },
        { name: "Healthcare", href: "/working-area" },
      ],
    },
    {
      title: "Get Involved",
      links: [
        { name: "Volunteer", href: "/contact" },
        { name: "Donate", href: "/contact" },
        { name: "Partner With Us", href: "/contact" },
        { name: "Careers", href: "/contact" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: LinkedIn, href: "#", label: "LinkedIn" },
    { icon: YouTube, href: "#", label: "YouTube" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.primary,
        color: theme.palette.text.primary,
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Organization Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: 700,
                color: theme.palette.primary.main,
                mb: 2,
              }}
            >
              Climate Action NGO
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: 1.7,
                color: theme.palette.text.secondary,
              }}
            >
              We are dedicated to combating climate change and promoting
              sustainable rural development through innovative solutions and
              community engagement.
            </Typography>

            {/* Contact Info */}
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <LocationOn
                  sx={{
                    color: theme.palette.primary.main,
                    mr: 1,
                    fontSize: 20,
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  123 Climate Street, Green City, GC 12345
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Phone
                  sx={{
                    color: theme.palette.primary.main,
                    mr: 1,
                    fontSize: 20,
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Email
                  sx={{
                    color: theme.palette.primary.main,
                    mr: 1,
                    fontSize: 20,
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  info@climateaction.org
                </Typography>
              </Box>
            </Box>

            {/* Social Media */}
            <Box>
              <Typography
                variant="h6"
                sx={{ mb: 2, color: theme.palette.text.primary }}
              >
                Follow Us
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    component={Link}
                    href={social.href}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <social.icon />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <Grid item xs={12} sm={6} md={2} key={section.title}>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  mb: 2,
                }}
              >
                {section.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {section.links.map((link) => (
                  <Box component="li" key={link.name} sx={{ mb: 1 }}>
                    <Link
                      href={link.href}
                      sx={{
                        color: theme.palette.text.secondary,
                        textDecoration: "none",
                        "&:hover": {
                          color: theme.palette.primary.main,
                          textDecoration: "underline",
                        },
                        transition: "color 0.3s ease",
                      }}
                    >
                      {link.name}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(0, 0, 0, 0.1)" }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: { xs: "left", md: "left" } }}
          >
            © {new Date().getFullYear()} Climate Action NGO. All rights
            reserved.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Link
              href="/privacy"
              sx={{
                color: theme.palette.text.secondary,
                textDecoration: "none",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
                fontSize: "0.875rem",
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              sx={{
                color: theme.palette.text.secondary,
                textDecoration: "none",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
                fontSize: "0.875rem",
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              sx={{
                color: theme.palette.text.secondary,
                textDecoration: "none",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
                fontSize: "0.875rem",
              }}
            >
              Sitemap
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
