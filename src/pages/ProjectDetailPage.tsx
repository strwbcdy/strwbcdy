import { useState, useRef, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Player from "video.js/dist/types/player";
import { Box, Stack, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import SettingsIcon from "@mui/icons-material/Settings";
import BrandingWatermarkOutlinedIcon from "@mui/icons-material/BrandingWatermarkOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import useWindowSize from "src/hooks/useWindowSize";
import { usePortfolioData } from "src/hooks/usePortfolioData";
import { formatTime } from "src/utils/common";

import MaxLineTypography from "src/components/MaxLineTypography";
import VolumeControllers from "src/components/watch/VolumeControllers";
import VideoJSPlayer from "src/components/watch/VideoJSPlayer";
import PlayerSeekbar from "src/components/watch/PlayerSeekbar";
import PlayerControlButton from "src/components/watch/PlayerControlButton";
import MainLoadingScreen from "src/components/MainLoadingScreen";

export function Component() {
  const { itemId } = useParams<{ itemId: string }>();
  const { getItemById } = usePortfolioData();
  const navigate = useNavigate();
  
  // Get the portfolio item by ID
  const item = itemId ? getItemById(itemId) : undefined;

  const playerRef = useRef<Player | null>(null);
  const [playerState, setPlayerState] = useState({
    paused: false,
    muted: false,
    playedSeconds: 0,
    duration: 0,
    volume: 0.8,
    loaded: 0,
  });

  const [playerInitialized, setPlayerInitialized] = useState(false);

  const windowSize = useWindowSize();

  // Handle 404 - item not found
  if (!item) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          color: "white",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
          404
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Project Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 600 }}>
          The project you're looking for doesn't exist or has been removed.
        </Typography>
        <PlayerControlButton onClick={() => navigate("/browse")}>
          <KeyboardBackspaceIcon sx={{ mr: 1 }} />
          Back to Home
        </PlayerControlButton>
      </Box>
    );
  }

  // Handle items without videoUrl
  if (!item.videoUrl) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          color: "white",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
          {item.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 800 }}>
          {item.description}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: "wrap", justifyContent: "center" }}>
          {item.tags.map((tag) => (
            <Typography
              key={tag}
              variant="caption"
              sx={{
                px: 1.5,
                py: 0.5,
                bgcolor: "rgba(255, 255, 255, 0.1)",
                borderRadius: 1,
                mb: 1,
              }}
            >
              {tag}
            </Typography>
          ))}
        </Stack>
        <Typography variant="body2" sx={{ mb: 4 }}>
          This project doesn't have a video demo available.
        </Typography>
        <PlayerControlButton onClick={() => navigate("/browse")}>
          <KeyboardBackspaceIcon sx={{ mr: 1 }} />
          Back to Home
        </PlayerControlButton>
      </Box>
    );
  }

  const videoJsOptions = useMemo(() => {
    if (!item.videoUrl) return null;
    
    return {
      preload: "metadata",
      autoplay: true,
      controls: false,
      width: windowSize.width,
      height: windowSize.height,
      sources: [
        {
          src: item.videoUrl,
          type: item.videoUrl.includes('.m3u8') ? "application/x-mpegurl" : "video/mp4",
        },
      ],
    };
  }, [windowSize, item.videoUrl]);

  const handlePlayerReady = function (player: Player): void {
    player.on("pause", () => {
      setPlayerState((draft) => {
        return { ...draft, paused: true };
      });
    });

    player.on("play", () => {
      setPlayerState((draft) => {
        return { ...draft, paused: false };
      });
    });

    player.on("timeupdate", () => {
      setPlayerState((draft) => {
        return { ...draft, playedSeconds: player.currentTime() || 0 };
      });
    });

    player.one("durationchange", () => {
      setPlayerInitialized(true);
      setPlayerState((draft) => ({ ...draft, duration: player.duration() || 0 }));
    });

    playerRef.current = player;

    setPlayerState((draft) => {
      return { ...draft, paused: player.paused() };
    });
  };

  const handleVolumeChange = (_: Event, value: number | number[]) => {
    const volumeValue = Array.isArray(value) ? value[0] : value;
    playerRef.current?.volume(volumeValue / 100);
    setPlayerState((draft) => {
      return { ...draft, volume: volumeValue / 100 };
    });
  };

  const handleSeekTo = (v: number) => {
    playerRef.current?.currentTime(v);
  };

  const handleGoBack = () => {
    navigate("/browse");
  };

  if (videoJsOptions && videoJsOptions.width) {
    return (
      <Box
        sx={{
          position: "relative",
        }}
      >
        <VideoJSPlayer options={videoJsOptions} onReady={handlePlayerReady} />
        {playerRef.current && playerInitialized && (
          <Box
            sx={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              position: "absolute",
            }}
          >
            <Box px={2} sx={{ position: "absolute", top: 75 }}>
              <PlayerControlButton onClick={handleGoBack}>
                <KeyboardBackspaceIcon />
              </PlayerControlButton>
            </Box>
            <Box
              px={2}
              sx={{
                position: "absolute",
                top: { xs: "40%", sm: "55%", md: "60%" },
                left: 0,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: "white",
                }}
              >
                {item.title}
              </Typography>
            </Box>
            <Box
              px={{ xs: 0, sm: 1, md: 2 }}
              sx={{
                position: "absolute",
                top: { xs: "50%", sm: "60%", md: "70%" },
                right: 0,
              }}
            >
              {item.tags.length > 0 && (
                <Typography
                  variant="subtitle2"
                  sx={{
                    px: 1,
                    py: 0.5,
                    fontWeight: 700,
                    color: "white",
                    bgcolor: "primary.main",
                    borderRadius: "12px 0px 0px 12px",
                  }}
                >
                  {item.tags[0]}
                </Typography>
              )}
            </Box>

            <Box
              px={{ xs: 1, sm: 2 }}
              sx={{ position: "absolute", bottom: 20, left: 0, right: 0 }}
            >
              {/* Seekbar */}
              <Stack direction="row" alignItems="center" spacing={1}>
                <PlayerSeekbar
                  playedSeconds={playerState.playedSeconds}
                  duration={playerState.duration}
                  seekTo={handleSeekTo}
                />
              </Stack>
              {/* end Seekbar */}

              {/* Controller */}
              <Stack direction="row" alignItems="center">
                {/* left controller */}
                <Stack
                  direction="row"
                  spacing={{ xs: 0.5, sm: 1.5, md: 2 }}
                  alignItems="center"
                >
                  {!playerState.paused ? (
                    <PlayerControlButton
                      onClick={() => {
                        playerRef.current?.pause();
                      }}
                    >
                      <PauseIcon />
                    </PlayerControlButton>
                  ) : (
                    <PlayerControlButton
                      onClick={() => {
                        playerRef.current?.play();
                      }}
                    >
                      <PlayArrowIcon />
                    </PlayerControlButton>
                  )}
                  <PlayerControlButton>
                    <SkipNextIcon />
                  </PlayerControlButton>
                  <VolumeControllers
                    muted={playerState.muted}
                    handleVolumeToggle={() => {
                      playerRef.current?.muted(!playerState.muted);
                      setPlayerState((draft) => {
                        return { ...draft, muted: !draft.muted };
                      });
                    }}
                    value={playerState.volume}
                    handleVolume={handleVolumeChange}
                  />
                  <Typography variant="caption" sx={{ color: "white" }}>
                    {`${formatTime(playerState.playedSeconds)} / ${formatTime(
                      playerState.duration
                    )}`}
                  </Typography>
                </Stack>
                {/* end left controller */}

                {/* middle description */}
                <Box flexGrow={1}>
                  <MaxLineTypography
                    maxLine={1}
                    variant="subtitle1"
                    textAlign="center"
                    sx={{ maxWidth: 300, mx: "auto", color: "white" }}
                  >
                    {item.description}
                  </MaxLineTypography>
                </Box>
                {/* end middle description */}

                {/* right controller */}
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={{ xs: 0.5, sm: 1.5, md: 2 }}
                >
                  <PlayerControlButton>
                    <SettingsIcon />
                  </PlayerControlButton>
                  <PlayerControlButton>
                    <BrandingWatermarkOutlinedIcon />
                  </PlayerControlButton>
                  <PlayerControlButton>
                    <FullscreenIcon />
                  </PlayerControlButton>
                </Stack>
                {/* end right controller */}
              </Stack>
              {/* end Controller */}
            </Box>
          </Box>
        )}
      </Box>
    );
  }
  return null;
}

Component.displayName = "ProjectDetailPage";
