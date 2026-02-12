import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import useOffSetTop from "src/hooks/useOffSetTop";
import { getAssetPath } from "src/utils/assetPath"
import { APP_BAR_HEIGHT } from "src/constant";
import Logo from "../Logo";
import SearchBox from "../SearchBox";
import NetflixNavigationLink from "../NetflixNavigationLink";

const pages = [
  { label: "View Projects", path: "/projects" },
  { label: "About Me", path: "/about" }
];

const MainHeader = () => {
  const navigate = useNavigate();
  const isOffset = useOffSetTop(APP_BAR_HEIGHT);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleAccountClick = () => {
    handleCloseUserMenu();
    navigate('/');
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        maxwidth: "100vw",
        height: APP_BAR_HEIGHT,
        backgroundImage: "none",
        bgcolor: isOffset ? "rgba(20, 20, 20, 0.95)" : "transparent",
        backdropFilter: isOffset ? "blur(10px)" : "none",
        background: isOffset 
          ? "rgba(20, 20, 20, 0.95)" 
          : "linear-gradient(180deg, rgba(0,0,0,0.7) 10%, transparent)",
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
        boxShadow: 0,
      }}
    >
      <Toolbar 
        disableGutters 
        sx={{ 
          minHeight: APP_BAR_HEIGHT,
          height: APP_BAR_HEIGHT,
          px: { xs: "15px", sm: "30px", md: "60px" },
          margin: 0,
          boxSizing: "border-box",
        }}
      >
        <Logo sx={{ mr: { xs: 1, sm: 2, md: 4 } }} />

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem 
                key={page.label} 
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(page.path);
                }}
              >
                <Typography textAlign="center">{page.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 2.5 }}
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 3 }}
        >
          {pages.map((page) => (
            <NetflixNavigationLink
              to={page.path}
              variant="subtitle1"
              key={page.label}
              sx={{
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}
            >
              {page.label}
            </NetflixNavigationLink>
          ))}
        </Stack>

        <Box sx={{ flexGrow: 0, display: "flex", gap: { xs: 1, sm: 2 } }}>
          <SearchBox />
          <Tooltip title="Account">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar 
                alt="user_avatar" 
                src="/images/lilly.jpg" 
                variant="rounded"
                sx={{ width: { xs: 28, sm: 32 }, height: { xs: 28, sm: 32 } }}
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="avatar-menu"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleAccountClick}>
              <Typography textAlign="center">Switch Profile</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Account Settings</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Sign Out</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default MainHeader;
