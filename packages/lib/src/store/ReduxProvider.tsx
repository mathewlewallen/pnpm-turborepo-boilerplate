// packages/lib/src/store/Provider.tsx
// A simple provider to wrap the Redux store around the child components.

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
