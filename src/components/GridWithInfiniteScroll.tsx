import { useRef, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PortfolioCard from "./PortfolioCard";
import { CustomCategory, Category } from "src/types/Category";
import { PortfolioItem } from "src/types/Portfolio";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";

interface GridWithInfiniteScrollProps {
  category: Category | CustomCategory;
  data: {
    page: number;
    total_pages: number;
    results: PortfolioItem[];
  };
  handleNext: (page: number) => void;
}
export default function GridWithInfiniteScroll({
  category,
  data,
  handleNext,
}: GridWithInfiniteScrollProps) {
  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersection = useIntersectionObserver(intersectionRef);

  useEffect(() => {
    if (
      intersection &&
      intersection.intersectionRatio === 1 &&
      data.page < data.total_pages
    ) {
      handleNext(data.page + 1);
    }
  }, [intersection]);

  return (
    <>
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
        >{`${category.name} Projects`}</Typography>
        <Grid container spacing={2}>
          {data.results
            .filter((item) => !!item.image)
            .map((item, idx) => (
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
      <Box sx={{ display: "hidden" }} ref={intersectionRef} />
    </>
  );
}
