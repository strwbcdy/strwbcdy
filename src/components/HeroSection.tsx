import { useEffect, useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import Player from "video.js/dist/types/player";

import MaxLineTypography from "./MaxLineTypography";
import NetflixIconButton from "./NetflixIconButton";
import useOffSetTop from "src/hooks/useOffSetTop";
import { HeroContent } from "src/types/Portfolio";
import VideoJSPlayer from "./watch/VideoJSPlayer";

interface TopTrailerProps {
  heroContent: HeroContent;
}

export default function TopTrailer({ heroContent }: TopTrailerProps) {
  const navigate = useNavigate();
  const [muted, setMuted] = useState(true);
  const playerRef = useRef<Player | null>(null);
  const isOffset = useOffSetTop(window.innerWidth * 0.5625);

  const handleReady = useCallback((player: Player) => {
    playerRef.current = player;
  }, []);

  useEffect(() => {
    if (playerRef.current) {
      if (isOffset) {
        playerRef.current.pause();
      } else {
        if (playerRef.current.paused()) {
          playerRef.current.play();
        }
      }
    }
  }, [isOffset]);

  const handleMute = useCallback((status: boolean) => {
    if (playerRef.current) {
      playerRef.current.muted(!status);
      setMuted(!status);
    }
  }, []);

  const handlePrimaryAction = () => {
    navigate(heroContent.ctaButtons.primary.action);
  };

  const handleSecondaryAction = () => {
    navigate(heroContent.ctaButtons.secondary.action);
  };

  return (
    <Box sx={{ position: "relative", zIndex: 1 }}>
      <Box
        sx={{
          mb: 3,
          pb: "40%",
          top: 0,
          left: 0,
          right: 0,
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "56.25vw",
            position: "absolute",
          }}
        >
          <Box
            sx={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              position: "absolute",
            }}
          >
            {/* Background Image */}
            <Box
              component="img"
              src={heroContent.backgroundImage}
              alt={heroContent.name}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            
            {/* Gradient Overlays */}
            <Box
              sx={{
                background: `linear-gradient(77deg,rgba(0,0,0,.6),transparent 85%)`,
                top: 0,
                left: 0,
                bottom: 0,
                right: "26.09%",
                opacity: 1,
                position: "absolute",
                transition: "opacity .5s",
              }}
            />
            <Box
              sx={{
                backgroundColor: "transparent",
                backgroundImage:
                  "linear-gradient(180deg,hsla(0,0%,8%,0) 0,hsla(0,0%,8%,.15) 15%,hsla(0,0%,8%,.35) 29%,hsla(0,0%,8%,.58) 44%,#141414 68%,#141414)",
                backgroundRepeat: "repeat-x",
                backgroundPosition: "0px top",
                backgroundSize: "100% 100%",
                bottom: 0,
                position: "absolute",
                height: "14.7vw",
                opacity: 1,
                top: "auto",
                width: "100%",
              }}
            />
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <Stack
              spacing={{ xs: 2, sm: 3, md: 4 }}
              sx={{
                bottom: "35%",
                position: "absolute",
                left: { xs: "4%", sm: "4%", md: "60px" },
                top: 0,
                width: { xs: "90%", sm: "70%", md: "50%", lg: "36%" },
                zIndex: 10,
                justifyContent: "flex-end",
              }}
            >
              <MaxLineTypography
                variant="h2"
                maxLine={1}
                color="text.primary"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
                  fontWeight: 700,
                }}
              >
                {heroContent.name}
              </MaxLineTypography>
              <MaxLineTypography
                variant="h4"
                maxLine={1}
                color="text.primary"
                sx={{ 
                  fontWeight: 400,
                  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2rem" },
                }}
              >
                {heroContent.title}
              </MaxLineTypography>
              <MaxLineTypography
                variant="h5"
                maxLine={3}
                color="text.primary"
                sx={{
                  fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem", lg: "1.5rem" },
                  display: { xs: "none", sm: "block" },
                }}
              >
                {heroContent.summary}
              </MaxLineTypography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handlePrimaryAction}
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    fontWeight: 700,
                    fontSize: { xs: "0.875rem", sm: "1rem", md: "1.1rem" },
                    px: { xs: 2, sm: 2.5, md: 3 },
                    py: { xs: 1, sm: 1.25, md: 1.5 },
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.75)",
                    },
                  }}
                >
                  {heroContent.ctaButtons.primary.label}
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleSecondaryAction}
                  sx={{
                    backgroundColor: "rgba(109, 109, 110, 0.7)",
                    color: "white",
                    fontWeight: 700,
                    fontSize: { xs: "0.875rem", sm: "1rem", md: "1.1rem" },
                    px: { xs: 2, sm: 2.5, md: 3 },
                    py: { xs: 1, sm: 1.25, md: 1.5 },
                    "&:hover": {
                      backgroundColor: "rgba(109, 109, 110, 0.4)",
                    },
                  }}
                >
                  {heroContent.ctaButtons.secondary.label}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
