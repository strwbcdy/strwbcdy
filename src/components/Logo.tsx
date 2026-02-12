import Box, { BoxProps } from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { MAIN_PATH } from "src/constant";

export default function Logo({ sx }: BoxProps) {
  return (
    <RouterLink to={`/${MAIN_PATH.root}`} style={{ textDecoration: 'none' }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          color: '#e50914',
          letterSpacing: '-1px',
          fontFamily: 'Netflix Sans, Arial, sans-serif',
          fontSize: { xs: '1.25rem', md: '1.5rem' },
          textTransform: 'uppercase',
          ...sx
        }}>
        Portfolio
      </Typography>
    </RouterLink>
  );
}
