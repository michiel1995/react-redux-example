import { createSelector } from 'reselect';

const isLoading = createSelector(
  state => state.auth.isLoading,
  isLoading => isLoading,
);
export default {
  isLoading,
};
