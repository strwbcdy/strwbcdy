import { forwardRef, useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import Chip from "@mui/material/Chip";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Player from "video.js/dist/types/player";

import MaxLineTypography from "./MaxLineTypography";
import NetflixIconButton from "./NetflixIconButton";
import { useDetailModal } from "src/providers/DetailModalProvider";
import VideoJSPlayer from "./watch/VideoJSPlayer";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} timeout={400} />;
});

export default function DetailModal() {
  const { detail, setDetailType } = useDetailModal();
  const playerRef = useRef<Player | null>(null);
  const [muted, setMuted] = useState(true);

  const handleReady = useCallback((player: Player) => {
    playerRef.current = player;
    setMuted(player.muted() ?? true);
  }, []);

  const handleMute = useCallback((status: boolean) => {
    if (playerRef.current) {
      playerRef.current.muted(!status);
      setMuted(!status);
    }
  }, []);

  const handleClose = () => {
    setDetailType({ id: undefined });
  };

  if (detail.portfolioItem) {
    const item = detail.portfolioItem;
    
    return (
      <Dialog
        fullWidth
        scroll="body"
        maxWidth="md"
        open={!!detail.portfolioItem}
        id="detail_dialog"
        TransitionComponent={Transition}
        PaperProps={{
          sx: {
            maxWidth: "900px",
            bgcolor: "#181818",
            borderRadius: "8px",
            overflow: "hidden",
          },
        }}
      >
        <DialogContent sx={{ p: 0, bgcolor: "#181818" }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingTop: "calc(9 / 16 * 100%)",
              bgcolor: "black",
            }}
          >
            {item.videoUrl ? (
              <>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <VideoJSPlayer
                    options={{
                      loop: true,
                      autoplay: true,
                      controls: false,
                      responsive: true,
                      fluid: true,
                      sources: [
                        {
                          type: item.videoUrl.includes('youtube.com') || item.videoUrl.includes('youtu.be')
                            ? "video/youtube"
                            : "video/mp4",
                          src: item.videoUrl,
                        },
                      ],
                    }}
                    onReady={handleReady}
                  />
                </Box>
              </>
            ) : (
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}
            
            {/* Bottom Gradient Overlay */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "30%",
                background: "linear-gradient(to top, #181818 0%, rgba(24, 24, 24, 0.8) 20%, transparent 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Close Button */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 15,
                right: 15,
                bgcolor: "#181818",
                width: { xs: 32, sm: 40 },
                height: { xs: 32, sm: 40 },
                transition: "background-color 0.2s ease",
                "&:hover": {
                  bgcolor: "#E50914",
                },
              }}
            >
              <CloseIcon
                sx={{ color: "white", fontSize: { xs: 18, sm: 24 } }}
              />
            </IconButton>

            {/* Content Container */}
            <Box
              sx={{
                position: "absolute",
                bottom: 16,
                left: 0,
                right: 0,
                px: { xs: 2, sm: 3, md: 5 },
              }}
            >
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "white",
                    mb: 2,
                  }}
                >
                  {item.title}
                </Typography>
              </Box>

              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Stack direction="row" spacing={2} sx={{ mb: 3, alignItems: "center" }}>
                  {item.link && (
                    <IconButton
                      component="a"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        bgcolor: "white",
                        color: "black",
                        px: 2,
                        py: 1,
                        borderRadius: "4px",
                        fontWeight: 700,
                        textTransform: "none",
                        transition: "opacity 0.2s ease",
                        "&:hover": {
                          bgcolor: "white",
                          opacity: 0.8,
                        },
                      }}
                    >
                      <OpenInNewIcon sx={{ mr: 1, fontSize: 20 }} />
                      <Typography variant="button" sx={{ fontWeight: 700 }}>
                        View Project
                      </Typography>
                    </IconButton>
                  )}
                  <Box flexGrow={1} />
                  {item.videoUrl && (
                    <NetflixIconButton
                      size="large"
                      onClick={() => handleMute(muted)}
                      sx={{ zIndex: 2 }}
                    >
                      {!muted ? <VolumeUpIcon /> : <VolumeOffIcon />}
                    </NetflixIconButton>
                  )}
                </Stack>
              </Box>
            </Box>
          </Box>

          {/* Content Area Below Featured Media */}
          <Container
            sx={{
              p: { xs: 2, sm: 3, md: 5 },
              pt: 3,
            }}
          >
            <Grid container spacing={5} alignItems="flex-start">
              <Grid item xs={12} sm={8}>
                <MaxLineTypography
                  maxLine={5}
                  variant="body1"
                  sx={{
                    fontSize: "1rem",
                    color: "white",
                    mb: 2,
                    lineHeight: 1.5,
                  }}
                >
                  {item.description}
                </MaxLineTypography>
                
                {item.company && (
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "0.875rem",
                      color: "text.secondary",
                      mb: 1,
                    }}
                  >
                    <strong>Company:</strong> {item.company}
                  </Typography>
                )}
                
                {item.date && (
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "0.875rem",
                      color: "text.secondary",
                      mb: 1,
                    }}
                  >
                    <strong>Date:</strong> {item.date}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 1,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Technologies:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {item.tags.map((tag: string, index: number) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                        color: "white",
                        fontSize: "0.75rem",
                        height: "24px",
                        mb: 1,
                      }}
                    />
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </DialogContent>
      </Dialog>
    );
  }

  return null;
}
