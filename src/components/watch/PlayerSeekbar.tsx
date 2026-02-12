import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

import { formatTime } from "src/utils/common";

const StyledSlider = styled(Slider)({
  borderRadius: 0,
  "& .NetflixSlider-track": {
    backgroundColor: "red !important",
    border: 0,
  },
  "& .NetflixSlider-rail": {
    border: "none",
    backgroundColor: "white !important",
    opacity: 0.85,
  },
  "& .NetflixSlider-thumb": {
    borderRadius: "50%",
    height: 10,
    width: 10,
    backgroundColor: "red",
    "&:focus, &:hover, &.Netflix-active, &.Netflix-focusVisible": {
      boxShadow: "inherit",
      height: 15,
      width: 15,
    },
    "&:before": {
      display: "none",
      boxShadow: "0 2px 2px 0 #fff",
      height: 10,
      width: 10,
    },
  },
});

function PlayerSeekbar({
  playedSeconds,
  duration,
  seekTo,
}: {
  playedSeconds: number;
  duration: number;
  seekTo: (value: number) => void;
}) {
  return (
    <StyledSlider
      valueLabelDisplay="auto"
      valueLabelFormat={(v) => formatTime(v)}
      value={playedSeconds}
      max={duration}
      onChange={(_, value) => {
        seekTo(value as number);
      }}
    />
  );
}

export default PlayerSeekbar;
