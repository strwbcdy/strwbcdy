import { describe, it, expect } from 'vitest';
import store from './index';
import type { RootState } from './index';

describe('Redux Store Configuration', () => {
  it('should have portfolio reducer configured', () => {
    const state: RootState = store.getState();
    expect(state).toHaveProperty('portfolio');
  });

  it('should not have discover reducer', () => {
    const state: RootState = store.getState();
    expect(state).not.toHaveProperty('discover');
  });

  it('should not have tmdbApi reducer', () => {
    const state: RootState = store.getState();
    expect(state).not.toHaveProperty('tmdbApi');
  });

  it('should have correct initial portfolio state', () => {
    const state: RootState = store.getState();
    expect(state.portfolio).toEqual({
      selectedItem: null,
      modalOpen: false,
      currentCategory: null,
    });
  });

  it('should not have RTK Query middleware configured', () => {
    // Verify store configuration doesn't include API middleware
    // by checking that the store only has the portfolio reducer
    const state: RootState = store.getState();
    const stateKeys = Object.keys(state);
    expect(stateKeys).toEqual(['portfolio']);
  });
});
