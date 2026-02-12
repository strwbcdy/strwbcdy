import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { getAssetPath } from "src/utils/assetPath";

export function Component() {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "AWS", "Docker",
    "PostgreSQL", "MongoDB", "GraphQL", "REST APIs", "CI/CD",
    "Microservices", "Redux", "Next.js", "TensorFlow"
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#141414",
        pt: { xs: 12, md: 15 },
        pb: 8,
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "40vh", md: "50vh" },
          mb: 6,
          backgroundImage: `url(${getAssetPath("/images/lilly.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "150px",
            background: "linear-gradient(to top, #141414, transparent)",
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            height: "100%",
            display: "flex",
            alignItems: "flex-end",
            pb: 4,
            zIndex: 1,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: { xs: "2.5rem", md: "4rem" },
            }}
          >
            About Me
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Stack spacing={6}>
          {/* Introduction */}
          <Box>
            <Typography
              variant="h4"
              sx={{ color: "white", mb: 3, fontWeight: 600 }}
            >
              Alex Morgan
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#e50914", mb: 2, fontWeight: 500 }}
            >
              Full Stack Developer & Creative Technologist
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "grey.400", lineHeight: 1.8, fontSize: "1.1rem" }}
            >
              I'm a passionate software engineer with over 5 years of experience building
              scalable web applications and leading development teams. I specialize in
              modern JavaScript frameworks, cloud architecture, and creating intuitive
              user experiences that solve real-world problems.
            </Typography>
          </Box>

          {/* Background */}
          <Box>
            <Typography
              variant="h5"
              sx={{ color: "white", mb: 2, fontWeight: 600 }}
            >
              Background
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "grey.400", lineHeight: 1.8, mb: 2 }}
            >
              My journey in software development began during my computer science studies,
              where I discovered my passion for creating elegant solutions to complex problems.
              Since then, I've worked with startups and established companies, contributing
              to projects that serve millions of users worldwide.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "grey.400", lineHeight: 1.8 }}
            >
              I believe in continuous learning and staying current with emerging technologies.
              When I'm not coding, you'll find me contributing to open source projects,
              writing technical articles, or exploring new photography locations.
            </Typography>
          </Box>

          {/* Skills */}
          <Box>
            <Typography
              variant="h5"
              sx={{ color: "white", mb: 3, fontWeight: 600 }}
            >
              Technical Skills
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              {skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    fontSize: "0.95rem",
                    py: 2.5,
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.2)",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Contact */}
          <Box>
            <Typography
              variant="h5"
              sx={{ color: "white", mb: 3, fontWeight: 600 }}
            >
              Get In Touch
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="subtitle2" sx={{ color: "grey.500", mb: 0.5 }}>
                  Email
                </Typography>
                <Typography variant="body1" sx={{ color: "white" }}>
                  alex.morgan@example.com
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="subtitle2" sx={{ color: "grey.500", mb: 0.5 }}>
                  GitHub
                </Typography>
                <Typography variant="body1" sx={{ color: "white" }}>
                  github.com/alexmorgan
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="subtitle2" sx={{ color: "grey.500", mb: 0.5 }}>
                  LinkedIn
                </Typography>
                <Typography variant="body1" sx={{ color: "white" }}>
                  linkedin.com/in/alexmorgan
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

Component.displayName = "AboutPage";

export default Component;
