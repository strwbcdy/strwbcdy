import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeroSection from "src/components/HeroSection";
import SliderRow from "src/components/SliderRow";
import { usePortfolioData } from "src/hooks/usePortfolioData";
import { PortfolioCategory } from "src/types/Portfolio";

export function Component() {
  const { allItems, heroContent } = usePortfolioData();

  // Filter for research/blog content
  const contentCategories = [
    {
      id: "research",
      name: "Research & Articles",
      category: PortfolioCategory.RESEARCH,
      items: allItems.filter(item => item.category === PortfolioCategory.RESEARCH),
    },
    {
      id: "projects",
      name: "Side Projects",
      category: PortfolioCategory.PROJECT,
      items: allItems.filter(item => item.category === PortfolioCategory.PROJECT).slice(0, 6),
    },
  ].filter(cat => cat.items.length > 0);

  return (
    <Stack spacing={2}>
      <HeroSection heroContent={heroContent} />
      <Box sx={{ px: { xs: "30px", sm: "60px" }, py: 2 }}>
        <Typography
          variant="h5"
          sx={{
            color: "grey.400",
            fontWeight: 500,
            fontSize: "1rem",
            mb: 2,
          }}
        >
          Blog & Articles
        </Typography>
      </Box>
      {contentCategories.map((category) => (
        <SliderRow
          key={category.id}
          category={category}
        />
      ))}
    </Stack>
  );
}

Component.displayName = "OthersPage";

export default Component;
