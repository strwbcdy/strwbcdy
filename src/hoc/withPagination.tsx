import { ElementType } from "react";
import MainLoadingScreen from "src/components/MainLoadingScreen";
import { useMockItemsByCategoryQuery } from "src/store/slices/tempHooks";
import { CONTENT_TYPE } from "src/types/Common";
import { CustomCategory, Category } from "src/types/Category";

export default function withPagination(
  Component: ElementType,
  contentType: CONTENT_TYPE,
  category: Category | CustomCategory
) {
  return function WithPagination() {
    // Always return the mock data
    const { data, isSuccess } = useMockItemsByCategoryQuery({
      contentType,
      categoryId: category.id,
      apiString: (category as CustomCategory).apiString,
      page: 1,
    });
    if (isSuccess && data) {
      return <Component category={category} data={data} handleNext={() => {}} />;
    }
    return <MainLoadingScreen />;
  };
}
