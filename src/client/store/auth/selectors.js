import { createSelector } from 'reselect';

const isLoading = createSelector(
  state => state.auth.isLoading,
  loading => loading,
);

const isRegistered = createSelector(
  state => state.auth.isRegistered,
  reg => reg,
);

export default {
  isRegistered,
  isLoading,
};
