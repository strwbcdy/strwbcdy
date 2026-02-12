import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        px: 3,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, #141414 100%)",
      }}
    >
      <Typography 
        variant="h1" 
        sx={{ 
          fontSize: { xs: "4rem", sm: "6rem", md: "8rem" },
          fontWeight: 700, 
          mb: 2,
          background: "linear-gradient(45deg, #e50914 30%, #b20710 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        404
      </Typography>
      <Typography 
        variant="h4" 
        sx={{ 
          mb: 2,
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          fontWeight: 600,
        }}
      >
        Lost in the Portfolio
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          mb: 4, 
          color: "text.secondary",
          maxWidth: "500px",
          fontSize: { xs: "0.95rem", sm: "1rem" },
          lineHeight: 1.6,
        }}
      >
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={() => navigate("/")}
        sx={{ 
          textTransform: "none",
          backgroundColor: "#e50914",
          color: "#fff",
          fontWeight: 600,
          fontSize: "1rem",
          px: 4,
          py: 1.5,
          borderRadius: "4px",
          "&:hover": {
            backgroundColor: "#b20710",
          },
        }}
      >
        Go to Home
      </Button>
    </Box>
  );
}

export default NotFoundPage;
