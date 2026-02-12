import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs, { BreadcrumbsProps } from "@mui/material/Breadcrumbs";

const Separator = (
  <Box
    component="span"
    sx={{
      width: 4,
      height: 4,
      borderRadius: "50%",
      bgcolor: "text.disabled",
    }}
  />
);

interface CategoryBreadcrumbsProps extends BreadcrumbsProps {
  categories: string[];
}

export default function CategoryBreadcrumbs({
  categories,
  ...others
}: CategoryBreadcrumbsProps) {
  return (
    <Breadcrumbs separator={Separator} {...others}>
      {categories.map((category, idx) => (
        <Typography key={idx} sx={{ color: "text.primary" }}>
          {category}
        </Typography>
      ))}
    </Breadcrumbs>
  );
}
