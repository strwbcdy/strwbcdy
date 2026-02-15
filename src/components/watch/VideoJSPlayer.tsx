import { useEffect, useRef, useState } from "react";
import Player from "video.js/dist/types/player";
import videojs from "video.js";
import "videojs-youtube";
import "video.js/dist/video-js.css";
import { Box, Typography } from "@mui/material";
import { getAssetPath } from "src/utils/assetPath";

export default function VideoJSPlayer({
  options,
  onReady,
  onError,
}: {
  options: any;
  onReady: (player: Player) => void;
  onError?: () => void;
}) {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    (async function handleVideojs() {
      // Make sure Video.js player is only initialized once
      if (!playerRef.current) {
        // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
        const videoElement = document.createElement("video-js");
        // videoElement.classList.add("vjs-big-play-centered", "vjs-16-9");

        videoRef.current?.appendChild(videoElement);
        const player = (playerRef.current = videojs(
          videoElement,
          options,
          () => {
            onReady && onReady(player);
          }
        ));

        // Add error handler
        player.on("error", () => {
          setHasError(true);
          onError && onError();
        });

        // You could update an existing player in the `else` block here
        // on prop change, for example:
      } else {
        const player = playerRef.current;
        player.width(options.width);
        player.height(options.height);
      }
    })();
  }, [options, videoRef, onReady, onError]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  if (hasError) {
    return (
      <Box
        sx={{
          width: options.width,
          height: options.height,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          backgroundImage: `url(${getAssetPath("/images/placeholder.svg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "white",
            textAlign: "center",
            px: 2,
            position: "relative",
            zIndex: 1,
          }}
        >
          Media could not be loaded
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            textAlign: "center",
            px: 2,
            mt: 1,
            position: "relative",
            zIndex: 1,
          }}
        >
          The video format may not be supported or the file is unavailable
        </Typography>
      </Box>
    );
  }

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
}
