import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeroSection from "src/components/HeroSection";
import SliderRow from "src/components/SliderRow";
import { usePortfolioData } from "src/hooks/usePortfolioData";
import { PortfolioCategory } from "src/types/Portfolio";

export function Component() {
  const { allItems, heroContent } = usePortfolioData();

  // Filter for personal content: Hobbies, Movies, Music
  const personalCategories = [
    {
      id: "hobbies",
      name: "Hobbies & Interests",
      category: PortfolioCategory.HOBBY,
      items: allItems.filter(item => item.category === PortfolioCategory.HOBBY),
    },
    {
      id: "movies",
      name: "Favorite Movies",
      category: PortfolioCategory.MOVIE,
      items: allItems.filter(item => item.category === PortfolioCategory.MOVIE),
    },
    {
      id: "music",
      name: "Music I Love",
      category: PortfolioCategory.MUSIC,
      items: allItems.filter(item => item.category === PortfolioCategory.MUSIC),
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
          Personal Interests
        </Typography>
      </Box>
      {personalCategories.map((category) => (
        <SliderRow
          key={category.id}
          category={category}
        />
      ))}
    </Stack>
  );
}

Component.displayName = "StalkersPage";

export default Component;
