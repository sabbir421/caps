import { createTheme } from "@mui/material/styles";

// Clean color palette - Professional and modern
const theme = createTheme({
  palette: {
    primary: {
      main: "#667eea", // Soft blue-purple
      light: "#8b9df8",
      dark: "#4c63d2",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f093fb", // Sweet pink-purple
      light: "#f7b7ff",
      dark: "#d86ce8",
      contrastText: "#ffffff",
    },
    accent: {
      main: "#FF6B35", // Warm orange
      light: "#FF8A65", // Light orange
      dark: "#E64A19", // Dark orange
    },
    success: {
      main: "#48bb78", // Soft green
      light: "#68d391",
      dark: "#38a169",
    },
    warning: {
      main: "#ed8936", // Warm orange
      light: "#f6ad55",
      dark: "#dd6b20",
    },
    error: {
      main: "#f56565", // Soft red
      light: "#fc8181",
      dark: "#e53e3e",
    },
    info: {
      main: "#0288D1", // Info blue
      light: "#4FC3F7",
      dark: "#01579B",
    },
    background: {
      default: "#f8fafc", // Very light blue-gray
      paper: "#ffffff",
      primary: "#e8f2ff", // Soft blue background
      secondary: "#f0f4ff", // Lighter blue background
      hero: "#2E7D32", // Solid green for hero
      section: "#F5F7FA", // Light gray for sections
    },
    text: {
      primary: "#2d3748", // Dark gray-blue
      secondary: "#4a5568", // Medium gray
      light: "#85929E", // Light gray
    },
    divider: "rgba(0, 0, 0, 0.08)",
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.2,
      color: "#2d3748",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: 1.3,
      color: "#2d3748",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.4,
      color: "#2d3748",
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.4,
      color: "#2d3748",
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: 1.4,
      color: "#2d3748",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1.4,
      color: "#2d3748",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#4a5568",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      color: "#4a5568",
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0.025em",
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    "none",
    "0px 2px 4px rgba(0, 0, 0, 0.05)",
    "0px 4px 8px rgba(0, 0, 0, 0.08)",
    "0px 8px 16px rgba(0, 0, 0, 0.1)",
    "0px 16px 32px rgba(0, 0, 0, 0.12)",
    "0px 32px 64px rgba(0, 0, 0, 0.15)",
    "0px 2px 4px rgba(0, 0, 0, 0.05)",
    "0px 4px 8px rgba(0, 0, 0, 0.08)",
    "0px 8px 16px rgba(0, 0, 0, 0.1)",
    "0px 16px 32px rgba(0, 0, 0, 0.12)",
    "0px 32px 64px rgba(0, 0, 0, 0.15)",
    "0px 2px 4px rgba(0, 0, 0, 0.05)",
    "0px 4px 8px rgba(0, 0, 0, 0.08)",
    "0px 8px 16px rgba(0, 0, 0, 0.1)",
    "0px 16px 32px rgba(0, 0, 0, 0.12)",
    "0px 32px 64px rgba(0, 0, 0, 0.15)",
    "0px 2px 4px rgba(0, 0, 0, 0.05)",
    "0px 4px 8px rgba(0, 0, 0, 0.08)",
    "0px 8px 16px rgba(0, 0, 0, 0.1)",
    "0px 16px 32px rgba(0, 0, 0, 0.12)",
    "0px 32px 64px rgba(0, 0, 0, 0.15)",
    "0px 2px 4px rgba(0, 0, 0, 0.05)",
    "0px 4px 8px rgba(0, 0, 0, 0.08)",
    "0px 8px 16px rgba(0, 0, 0, 0.1)",
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          fontWeight: 500,
          padding: "10px 24px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
            transform: "translateY(-1px)",
          },
          transition: "all 0.2s ease-in-out",
        },
        contained: {
          backgroundColor: "#667eea",
          "&:hover": {
            backgroundColor: "#5a67d8",
          },
        },
        outlined: {
          borderColor: "#667eea",
          color: "#667eea",
          "&:hover": {
            backgroundColor: "#667eea",
            color: "#ffffff",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
          border: "1px solid #e2e8f0",
          "&:hover": {
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.12)",
            transform: "translateY(-2px)",
          },
          transition: "all 0.3s ease-in-out",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
