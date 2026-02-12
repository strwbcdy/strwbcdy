import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { getAssetPath } from "src/utils/assetPath";

export function Component() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundImage: `url(${getAssetPath("/images/hero-bg.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)",
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <Stack spacing={4} alignItems="center" sx={{ px: 3 }}>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: { xs: "2.5rem", md: "4rem" },
              textAlign: "center",
              textShadow: "2px 2px 12px rgba(0,0,0,0.8)",
            }}
          >
            Welcome to My Portfolio
          </Typography>
          
          <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/about")}
              sx={{
                bgcolor: "white",
                color: "black",
                fontWeight: 700,
                fontSize: "1.1rem",
                px: 4,
                py: 1.5,
                borderRadius: "4px",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.8)",
                },
              }}
            >
              About Me
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate("/projects")}
              sx={{
                borderColor: "white",
                color: "white",
                fontWeight: 700,
                fontSize: "1.1rem",
                px: 4,
                py: 1.5,
                borderRadius: "4px",
                borderWidth: "2px",
                textTransform: "none",
                "&:hover": {
                  borderColor: "white",
                  borderWidth: "2px",
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              View Projects
            </Button>
          </Stack>
        </Stack>
      </motion.div>
    </Box>
  );
}

Component.displayName = "HomePage";

export default Component;
