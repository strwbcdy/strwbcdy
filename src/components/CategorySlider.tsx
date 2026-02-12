import withPagination from "src/hoc/withPagination";
import { CONTENT_TYPE } from "src/types/Common";
import { CustomCategory, Category } from "src/types/Category";
import SlickSlider from "./slick-slider/SlickSlider";

interface SliderRowForCategoryProps {
  category: Category | CustomCategory;
  contentType: CONTENT_TYPE;
}
export default function SliderRowForCategory({
  category,
  contentType,
}: SliderRowForCategoryProps) {
  const Component = withPagination(SlickSlider, contentType, category);
  return <Component />;
}
