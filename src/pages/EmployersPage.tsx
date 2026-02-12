import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeroSection from "src/components/HeroSection";
import SliderRow from "src/components/SliderRow";
import { usePortfolioData } from "src/hooks/usePortfolioData";
import { PortfolioCategory } from "src/types/Portfolio";

export function Component() {
  const { allItems, heroContent } = usePortfolioData();

  // Filter for professional content: Projects and Experience
  const professionalCategories = [
    {
      id: "projects",
      name: "Projects",
      category: PortfolioCategory.PROJECT,
      items: allItems.filter(item => item.category === PortfolioCategory.PROJECT),
    },
    {
      id: "experience",
      name: "Professional Experience",
      category: PortfolioCategory.EXPERIENCE,
      items: allItems.filter(item => item.category === PortfolioCategory.EXPERIENCE),
    },
    {
      id: "skills",
      name: "Technical Skills",
      category: PortfolioCategory.SKILL,
      items: allItems.filter(item => item.category === PortfolioCategory.SKILL),
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
          Professional Portfolio
        </Typography>
      </Box>
      {professionalCategories.map((category) => (
        <SliderRow
          key={category.id}
          category={category}
        />
      ))}
    </Stack>
  );
}

Component.displayName = "EmployersPage";

export default Component;
