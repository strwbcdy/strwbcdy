import { useParams, Navigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { usePortfolioData } from "src/hooks/usePortfolioData";
import PortfolioCard from "src/components/PortfolioCard";

export function Component() {
  const { genreId: categoryId } = useParams<{ genreId: string }>();
  const { getCategoryById } = usePortfolioData();
  
  if (!categoryId) {
    return <Navigate to="/browse" />;
  }

  const category = getCategoryById(categoryId);
  
  if (!category) {
    return <Navigate to="/browse" />;
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        px: { xs: "30px", sm: "60px" },
        pb: 4,
        pt: "150px",
        bgcolor: "inherit",
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: "text.primary", mb: 2 }}
      >
        {category.name}
      </Typography>
      <Grid container spacing={2}>
        {category.items.map((item, idx) => (
          <Grid
            key={`${item.id}_${idx}`}
            item
            xs={6}
            sm={3}
            md={2}
            sx={{ zIndex: 1 }}
          >
            <PortfolioCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

Component.displayName = "CategoryExplore";
