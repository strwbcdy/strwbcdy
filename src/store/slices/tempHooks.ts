// Temporary hooks to maintain build compatibility after removing RTK Query
// These will be removed when components are refactored to use static data

import { Category } from "src/types/Category";

// Temporary replacement for useMockCategoriesQuery
export const useMockCategoriesQuery = () => {
  return {
    data: [] as Category[],
    isSuccess: false,
    isLoading: false,
    isError: false,
  };
};

// Temporary replacement for useGetConfigurationQuery
export const useGetConfigurationQuery = (_: undefined) => {
  return {
    data: undefined,
    isSuccess: false,
    isLoading: false,
    isError: false,
  };
};

// Temporary replacement for useMockItemsByCategoryQuery
export const useMockItemsByCategoryQuery = (_params: any) => {
  return {
    data: undefined,
    isSuccess: false,
    isLoading: false,
    isError: false,
    isFetching: false,
  };
};

// Temporary replacement for useMockItemDetailQuery
export const useMockItemDetailQuery = (_params: any) => {
  return {
    data: undefined,
    isSuccess: false,
    isLoading: false,
    isError: false,
  };
};
