import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import MaxLineTypography from "./MaxLineTypography";
import { HeroContent } from "src/types/Portfolio";

interface TopTrailerProps {
  heroContent: HeroContent;
}

export default function TopTrailer({ heroContent }: TopTrailerProps) {
  const navigate = useNavigate();

  const handlePrimaryAction = () => {
    navigate(heroContent.ctaButtons.primary.action);
  };

  const handleSecondaryAction = () => {
    navigate(heroContent.ctaButtons.secondary.action);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "70vh", sm: "75vh", md: "80vh" },
        minHeight: "500px",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={heroContent.backgroundImage}
        alt={heroContent.name}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Bottom Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "40%",
          background:
            "linear-gradient(to top, #141414 0%, rgba(20, 20, 20, 0.8) 20%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Left Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content Container */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "15%", md: "25%" },
          left: 0,
          px: { xs: "30px", sm: "60px" },
          maxWidth: "600px",
          zIndex: 2,
        }}
      >
        {/* Title with animation */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MaxLineTypography
            variant="h1"
            maxLine={2}
            sx={{
              fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
              fontWeight: 700,
              color: "white",
              mb: 2,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            }}
          >
            {heroContent.name}
          </MaxLineTypography>
        </Box>

        {/* Subtitle with animation */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MaxLineTypography
            variant="h4"
            maxLine={1}
            sx={{
              fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
              fontWeight: 400,
              color: "white",
              mb: 2,
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
            }}
          >
            {heroContent.title}
          </MaxLineTypography>
        </Box>

        {/* Description with animation */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <MaxLineTypography
            variant="body1"
            maxLine={4}
            sx={{
              fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
              fontWeight: 400,
              color: "white",
              mb: 3,
              maxWidth: "500px",
              lineHeight: 1.4,
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
            }}
          >
            {heroContent.summary}
          </MaxLineTypography>
        </Box>

        {/* CTA Buttons with animation */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Stack direction="row" spacing="12px" sx={{ flexWrap: "wrap" }}>
            <Button
              variant="contained"
              onClick={handlePrimaryAction}
              sx={{
                bgcolor: "white",
                color: "black",
                px: "24px",
                py: "12px",
                borderRadius: "4px",
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "none",
                transition: "opacity 0.2s ease",
                "&:hover": {
                  bgcolor: "white",
                  opacity: 0.8,
                },
              }}
            >
              {heroContent.ctaButtons.primary.label}
            </Button>
            <Button
              variant="contained"
              onClick={handleSecondaryAction}
              sx={{
                bgcolor: "rgba(109, 109, 110, 0.7)",
                color: "white",
                px: "24px",
                py: "12px",
                borderRadius: "4px",
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "none",
                backdropFilter: "blur(10px)",
                transition: "opacity 0.2s ease",
                "&:hover": {
                  bgcolor: "rgba(109, 109, 110, 0.7)",
                  opacity: 0.8,
                },
              }}
            >
              {heroContent.ctaButtons.secondary.label}
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
