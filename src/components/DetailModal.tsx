import { forwardRef, useCallback, useRef, useState } from "react";
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
  return <Slide direction="up" ref={ref} {...props} />;
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
      >
        <DialogContent sx={{ p: 0, bgcolor: "#181818" }}>
          <Box
            sx={{
              top: 0,
              left: 0,
              right: 0,
              position: "relative",
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: "100%",
                position: "relative",
                height: "calc(9 / 16 * 100%)",
              }}
            >
              {item.videoUrl ? (
                <>
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
                </>
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    height: 0,
                    paddingBottom: "56.25%",
                    position: "relative",
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              )}
              
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
              <IconButton
                onClick={handleClose}
                sx={{
                  top: 15,
                  right: 15,
                  position: "absolute",
                  bgcolor: "#181818",
                  width: { xs: 22, sm: 40 },
                  height: { xs: 22, sm: 40 },
                  "&:hover": {
                    bgcolor: "primary.main",
                  },
                }}
              >
                <CloseIcon
                  sx={{ color: "white", fontSize: { xs: 14, sm: 22 } }}
                />
              </IconButton>
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 16,
                  px: { xs: 2, sm: 3, md: 5 },
                }}
              >
                <MaxLineTypography variant="h4" maxLine={1} sx={{ mb: 2 }}>
                  {item.title}
                </MaxLineTypography>
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
                        borderRadius: 1,
                        "&:hover": {
                          bgcolor: "rgba(255,255,255,0.8)",
                        },
                      }}
                    >
                      <OpenInNewIcon sx={{ mr: 1, fontSize: 20 }} />
                      <Typography variant="button">View Project</Typography>
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

                <Container
                  sx={{
                    p: "0px !important",
                  }}
                >
                  <Grid container spacing={5} alignItems="flex-start">
                    <Grid item xs={12} sm={8}>
                      <MaxLineTypography
                        maxLine={5}
                        variant="body1"
                        sx={{ mb: 2 }}
                      >
                        {item.description}
                      </MaxLineTypography>
                      
                      {item.company && (
                        <Typography variant="body2" sx={{ mb: 1, color: "text.secondary" }}>
                          <strong>Company:</strong> {item.company}
                        </Typography>
                      )}
                      
                      {item.date && (
                        <Typography variant="body2" sx={{ mb: 1, color: "text.secondary" }}>
                          <strong>Date:</strong> {item.date}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography variant="body2" sx={{ mb: 1, fontWeight: "bold" }}>
                        Technologies:
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {item.tags.map((tag: string, index: number) => (
                          <Chip
                            key={index}
                            label={tag}
                            size="small"
                            sx={{
                              bgcolor: "rgba(255,255,255,0.1)",
                              color: "white",
                              mb: 1,
                            }}
                          />
                        ))}
                      </Stack>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    );
  }

  return null;
}
