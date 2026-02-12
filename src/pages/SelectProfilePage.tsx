import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import { getAssetPath } from "src/utils/assetPath";

const ProfileCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    "& .profile-avatar": {
      borderColor: theme.palette.common.white,
    },
    "& .profile-name": {
      color: theme.palette.common.white,
    },
  },
}));

const profiles = [
  {
    name: "Employers",
    description: "Professional Portfolio",
    path: "/employers",
    avatar: getAssetPath("/images/lilly.jpg"),
  },
  {
    name: "Stalkers",
    description: "Personal Interests",
    path: "/stalkers",
    avatar: getAssetPath("/images/lilly.jpg"),
  },
  {
    name: "Others",
    description: "Blog & Articles",
    path: "/others",
    avatar: getAssetPath("/images/lilly.jpg"),
  },
];

export function Component() {
  const navigate = useNavigate();

  const handleProfileSelect = (path: string) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#141414",
        pt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center">
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: 400,
              fontSize: { xs: "2rem", md: "3.5rem" },
            }}
          >
            My Portfolio
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 4, sm: 6, md: 8 }}
            justifyContent="center"
            alignItems="center"
          >
            {profiles.map((profile) => (
              <ProfileCard
                key={profile.name}
                onClick={() => handleProfileSelect(profile.path)}
              >
                <Avatar
                  className="profile-avatar"
                  src={profile.avatar}
                  alt={profile.name}
                  variant="rounded"
                  sx={{
                    width: { xs: 120, sm: 150, md: 180 },
                    height: { xs: 120, sm: 150, md: 180 },
                    mb: 2,
                    border: "3px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                />
                <Typography
                  className="profile-name"
                  variant="h6"
                  sx={{
                    color: "grey.500",
                    transition: "color 0.3s ease",
                    fontSize: { xs: "1rem", md: "1.25rem" },
                  }}
                >
                  {profile.name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "grey.600",
                    fontSize: { xs: "0.75rem", md: "0.875rem" },
                  }}
                >
                  {profile.description}
                </Typography>
              </ProfileCard>
            ))}
          </Stack>

          <Typography
            variant="body2"
            sx={{
              color: "grey.600",
              mt: 4,
              textAlign: "center",
            }}
          >
            Select a profile to view different aspects of the portfolio
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

Component.displayName = "SelectProfilePage";
