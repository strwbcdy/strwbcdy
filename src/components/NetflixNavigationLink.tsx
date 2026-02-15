import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  useLocation,
} from "react-router-dom";
import Link, { LinkProps } from "@mui/material/Link";

export default function NetflixNavigationLink({
  sx,
  children,
  to,
  ...others
}: LinkProps & RouterLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      {...others}
      to={to}
      component={RouterLink}
      sx={{
        color: isActive ? "white" : "rgba(229, 229, 229, 0.7)",
        fontWeight: isActive ? 700 : 500,
        textDecoration: "none",
        transition: "color 0.2s ease",
        "&:hover": {
          color: "white",
        },
        ...sx,
      }}
    >
      {children}
    </Link>
  );
}
