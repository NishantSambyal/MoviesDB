jest.mock('react-native-localization');
import { render } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from '..';
import { store } from '../../../../redux/store';

describe('Dashboard Component', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Dashboard />
      </Provider>,
    );
    const dashboardComponent = getByTestId('dashboard-component');
    expect(dashboardComponent).toBeTruthy();
  });
});
