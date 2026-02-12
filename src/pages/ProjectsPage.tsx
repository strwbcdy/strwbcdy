import { useState } from "react";
import { Container, Typography, Grid, Box, Chip, Stack, Fade } from "@mui/material";
import { usePortfolioData } from "src/hooks/usePortfolioData";
import { PortfolioCategory } from "src/types/Portfolio";
import PortfolioCard from "src/components/PortfolioCard";
import { motion } from "framer-motion";

export function Component() {
  const { allItems } = usePortfolioData();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  
  const projectItems = allItems.filter(
    item => item.category === PortfolioCategory.PROJECT
  );

  // Extract unique tags from all projects
  const allTags = Array.from(
    new Set(projectItems.flatMap(item => item.tags || []))
  ).slice(0, 6); // Limit to 6 tags for cleaner UI

  // Filter projects based on selected tag
  const filteredProjects = selectedFilter === "all" 
    ? projectItems 
    : projectItems.filter(item => item.tags?.includes(selectedFilter));

  return (
    <Box sx={{ bgcolor: "#141414", minHeight: "100vh" }}>
      {/* Header Section */}
      <Box
        sx={{
          pt: { xs: "100px", md: "120px" },
          pb: { xs: 3, md: 4 },
          px: { xs: "30px", sm: "60px" },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h4"
            sx={{ 
              color: "white", 
              mb: 2, 
              fontWeight: 600,
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              letterSpacing: "-0.02em",
            }}
          >
            Projects
          </Typography>

          {/* Filter Chips */}
          {allTags.length > 0 && (
            <Stack 
              direction="row" 
              spacing={1} 
              sx={{ 
                flexWrap: "wrap", 
                gap: 1,
              }}
            >
              <Chip
                label="All"
                onClick={() => setSelectedFilter("all")}
                sx={{
                  bgcolor: selectedFilter === "all" ? "white" : "rgba(255,255,255,0.15)",
                  color: selectedFilter === "all" ? "black" : "white",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  height: "32px",
                  borderRadius: "16px",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: selectedFilter === "all" ? "white" : "rgba(255,255,255,0.25)",
                  },
                }}
              />
              {allTags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  onClick={() => setSelectedFilter(tag)}
                  sx={{
                    bgcolor: selectedFilter === tag ? "white" : "rgba(255,255,255,0.15)",
                    color: selectedFilter === tag ? "black" : "white",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    height: "32px",
                    borderRadius: "16px",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: selectedFilter === tag ? "white" : "rgba(255,255,255,0.25)",
                    },
                  }}
                />
              ))}
            </Stack>
          )}
        </motion.div>
      </Box>

      {/* Projects Grid */}
      <Box sx={{ px: { xs: "30px", sm: "60px" }, pb: 6 }}>
        <Fade in={true} timeout={400}>
          <Box>
            {filteredProjects.length === 0 ? (
              <Box 
                sx={{ 
                  textAlign: "center", 
                  py: 8,
                  color: "grey.500",
                }}
              >
                <Typography variant="h6">
                  No projects found
                </Typography>
              </Box>
            ) : (
              <Grid container spacing={{ xs: 1, sm: 1.5, md: 2 }}>
                {filteredProjects.map((item, index) => (
                  <Grid
                    key={item.id}
                    item
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2.4}
                    sx={{ zIndex: 1 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.03,
                        ease: "easeOut"
                      }}
                    >
                      <PortfolioCard item={item} />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}

Component.displayName = "ProjectsPage";

export default Component;
