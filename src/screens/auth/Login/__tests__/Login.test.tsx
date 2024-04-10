jest.mock('react-native-localization');

import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';
import Login from '..';

// Mock react-native-localization module
// jest.mock('react-native-localization', () => {
//   // Import JSON files inside the jest.mock() implementation
//   const ar = require('@languages/ar.json');
//   const en = require('@languages/en.json');

//   // Return the mocked module
//   return {
//     default: jest.fn().mockImplementation(() => ({
//       ar,
//       en,
//     })),
//   };
// });

describe('Login Component', () => {
  test('Submitting form with valid email and password', async () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );

    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const submitButton = getByText('Submit');

    // Simulate user input
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');

    // Check if form is initially invalid
    expect(submitButton).toBeDisabled();

    // Check if form becomes valid after inputting email and password
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');
    expect(submitButton).not.toBeDisabled();

    // Simulate form submission
    fireEvent.press(submitButton);

    // Wait for the login process to complete
    await waitFor(() => {
      // Add your assertions for what should happen after form submission
      // For example, you might want to check if the user is redirected to another screen after successful login
    });
  });
});
