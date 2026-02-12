import withPagination from "src/hoc/withPagination";
import { CONTENT_TYPE } from "src/types/Common";
import { CustomCategory, Category } from "src/types/Category";
import GridWithInfiniteScroll from "./GridWithInfiniteScroll";

interface GridPageProps {
  category: Category | CustomCategory;
  contentType: CONTENT_TYPE;
}
export default function GridPage({ category, contentType }: GridPageProps) {
  const Component = withPagination(
    GridWithInfiniteScroll,
    contentType,
    category
  );
  return <Component />;
}
