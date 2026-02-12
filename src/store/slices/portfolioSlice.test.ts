import { describe, it, expect } from 'vitest';
import portfolioReducer, {
  setSelectedItem,
  openModal,
  closeModal,
  setCurrentCategory,
} from './portfolioSlice';
import type { PortfolioItem } from '../../types/Portfolio';
import { PortfolioCategory } from '../../types/Portfolio';

describe('portfolioSlice', () => {
  const initialState = {
    selectedItem: null,
    modalOpen: false,
    currentCategory: null,
  };

  const mockPortfolioItem: PortfolioItem = {
    id: 'test-1',
    title: 'Test Project',
    description: 'A test project',
    image: '/images/test.jpg',
    tags: ['React', 'TypeScript'],
    category: PortfolioCategory.PROJECT,
  };

  describe('setSelectedItem', () => {
    it('should set the selected item', () => {
      const state = portfolioReducer(initialState, setSelectedItem(mockPortfolioItem));
      expect(state.selectedItem).toEqual(mockPortfolioItem);
    });

    it('should clear the selected item when null is passed', () => {
      const stateWithItem = {
        ...initialState,
        selectedItem: mockPortfolioItem,
      };
      const state = portfolioReducer(stateWithItem, setSelectedItem(null));
      expect(state.selectedItem).toBeNull();
    });
  });

  describe('openModal', () => {
    it('should set modalOpen to true', () => {
      const state = portfolioReducer(initialState, openModal());
      expect(state.modalOpen).toBe(true);
    });
  });

  describe('closeModal', () => {
    it('should set modalOpen to false and clear selectedItem', () => {
      const stateWithModalOpen = {
        ...initialState,
        modalOpen: true,
        selectedItem: mockPortfolioItem,
      };
      const state = portfolioReducer(stateWithModalOpen, closeModal());
      expect(state.modalOpen).toBe(false);
      expect(state.selectedItem).toBeNull();
    });
  });

  describe('setCurrentCategory', () => {
    it('should set the current category', () => {
      const state = portfolioReducer(initialState, setCurrentCategory('projects'));
      expect(state.currentCategory).toBe('projects');
    });

    it('should clear the current category when null is passed', () => {
      const stateWithCategory = {
        ...initialState,
        currentCategory: 'projects',
      };
      const state = portfolioReducer(stateWithCategory, setCurrentCategory(null));
      expect(state.currentCategory).toBeNull();
    });
  });

  describe('initial state', () => {
    it('should return the initial state when undefined state is passed', () => {
      const state = portfolioReducer(undefined, { type: 'unknown' });
      expect(state).toEqual(initialState);
    });
  });
});
