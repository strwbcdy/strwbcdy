import { categories, heroContent } from '../data/portfolioData';
import { CategoryConfig, PortfolioItem, HeroContent } from '../types/Portfolio';

export function usePortfolioData() {
  const getCategoryById = (id: string): CategoryConfig | undefined => {
    return categories.find(cat => cat.id === id);
  };

  const getItemById = (id: string): PortfolioItem | undefined => {
    return categories
      .flatMap(cat => cat.items)
      .find(item => item.id === id);
  };

  const allItems = categories.flatMap(cat => cat.items)
  return {
    categories,
    heroContent,
    allItems,
    getCategoryById,
    getItemById
  };
}
