import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import HeroSection from "src/components/HeroSection";
import SliderRow from "src/components/SliderRow";
import { usePortfolioData } from "src/hooks/usePortfolioData";
import { employerCategories, stalkerCategories, othersCategories } from "src/data/portfolioData";

export function Component() {
  const { profile } = useParams<{ profile: string }>();
  const { heroContent } = usePortfolioData();

  let categoriesToShow;
  switch (profile) {
    case "employers":
      categoriesToShow = employerCategories;
      break;
    case "stalkers":
      categoriesToShow = stalkerCategories;
      break;
    case "others":
      categoriesToShow = othersCategories;
      break;
    default:
      categoriesToShow = employerCategories;
  }

  return (
    <Stack spacing={2}>
      <HeroSection heroContent={heroContent} />
      {categoriesToShow.map((category) => (
        <SliderRow
          key={category.id}
          category={category}
        />
      ))}
    </Stack>
  );
}

Component.displayName = "ProfileBrowsePage";
