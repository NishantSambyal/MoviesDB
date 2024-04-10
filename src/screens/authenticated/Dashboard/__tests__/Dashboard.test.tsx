jest.mock('react-native-localization');
import { fireEvent, render } from '@testing-library/react-native';
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

  test('logout functionality works correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Dashboard />
      </Provider>,
    );
    const logoutButton = getByTestId('logout-button');
    fireEvent.press(logoutButton);
    expect(store.getActions()).toEqual([{ type: 'LOGOUT_USER' }]);
  });
});
