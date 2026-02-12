import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { PortfolioItem } from '@/types/Portfolio';

interface PortfolioState {
  selectedItem: PortfolioItem | null;
  modalOpen: boolean;
  currentCategory: string | null;
}

const initialState: PortfolioState = {
  selectedItem: null,
  modalOpen: false,
  currentCategory: null,
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setSelectedItem: (state, action: PayloadAction<PortfolioItem | null>) => {
      state.selectedItem = action.payload;
    },
    openModal: (state) => {
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
      state.selectedItem = null;
    },
    setCurrentCategory: (state, action: PayloadAction<string | null>) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { setSelectedItem, openModal, closeModal, setCurrentCategory } = portfolioSlice.actions;
export default portfolioSlice.reducer;
