import '@testing-library/jest-native/extend-expect';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { rootReducer, store } from 'src/redux/store';

import { configureStore } from '@reduxjs/toolkit';
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

  test('login form submission stores email in Redux state', () => {
    jest.mock('react-redux', () => ({
      ...jest.requireActual('react-redux'),
      useDispatch: jest.fn().mockReturnValue((action: any) => action),
    }));

    const newStore = configureStore({ reducer: rootReducer });

    const { getByTestId } = render(
      <Provider store={newStore}>
        <Login />
      </Provider>,
    );

    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const loginButton = getByTestId('Submit');

    // Simulate user input
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'Pass@123');

    // Simulate form submission

    fireEvent.press(loginButton);

    // Check if the email is stored in Redux state
    expect(newStore.getState().userProfileReducer.userInfo).toBe(
      'test@example.com',
    );
  });
});
