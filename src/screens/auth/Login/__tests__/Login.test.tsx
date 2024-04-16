import '@testing-library/jest-native/extend-expect';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';

import Login from '..';

jest.useFakeTimers();
describe('Login Component', () => {
  test('Submitting form with valid email and password', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );

    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const submitButton = getByTestId('Submit');

    // Simulate user input
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');

    // Check if form is initially invalid
    expect(submitButton).toBeDisabled();

    // Check if form becomes valid after inputting email and password
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'Password@123');
    expect(submitButton).not.toBeDisabled();
  });
});
