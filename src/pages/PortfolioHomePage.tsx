import Stack from "@mui/material/Stack";
import HeroSection from "src/components/HeroSection";
import SliderRow from "src/components/SliderRow";
import { usePortfolioData } from "src/hooks/usePortfolioData";

export function Component() {
  const { categories, heroContent } = usePortfolioData();

  return (
    <Stack spacing={2}>
      <HeroSection heroContent={heroContent} />
      {categories.map((category) => (
        <SliderRow
          key={category.id}
          category={category}
        />
      ))}
    </Stack>
  );
}

Component.displayName = "PortfolioHomePage";
