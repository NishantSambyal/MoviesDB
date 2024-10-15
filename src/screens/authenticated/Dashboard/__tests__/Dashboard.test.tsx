import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-native/extend-expect';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { Alert } from 'react-native';
import * as reactRedux from 'react-redux';
import { rootReducer } from 'src/redux/store';
import Dashboard from '..';
import { getMovies } from '../dataController';

jest.mock('../dataController');

jest.mock('react-redux');

describe('Dashboard Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const mockedMoviesContext = getMovies as jest.Mock<any>;
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  test('renders DashboardScreen with initial movie list', async () => {
    useSelectorMock.mockReturnValue('en');

    // Mock initial movies
    const initialMovies = [
      { id: 1, title: 'Movie 1', poster_path: 'path/to/movie1.jpg' },
      { id: 2, title: 'Movie 2', poster_path: 'path/to/movie2.jpg' },
    ];
    mockedMoviesContext.mockResolvedValueOnce({ results: initialMovies });

    const { getByTestId } = render(<Dashboard />);

    await waitFor(() =>
      expect(getByTestId('dashboard-component')).toBeTruthy(),
    );

    initialMovies.forEach(movie => {
      expect(getByTestId(`movie-item-${movie.id}`)).toBeTruthy();
    });
  });

  test('calls console.log when movies fetch fails', async () => {
    useSelectorMock.mockReturnValue('en');

    const errorMessage = 'Failed to fetch movies';
    mockedMoviesContext.mockRejectedValueOnce(errorMessage);

    const consoleSpy = jest.spyOn(console, 'log');

    render(<Dashboard />);

    await waitFor(() => {}, { timeout: 500 });

    expect(consoleSpy).toHaveBeenCalledWith('error', errorMessage);
  });

  test('calls logoutUser action when logout button is pressed', () => {
    jest.spyOn(Alert, 'alert');
    const store = configureStore({ reducer: rootReducer });

    useDispatchMock.mockReturnValue(jest.fn()); // Mock useDispatch

    useSelectorMock.mockReturnValue('en'); // Mock useSelector

    const initialMovies = [
      { id: 1, title: 'Movie 1', poster_path: 'path/to/movie1.jpg' },
      { id: 2, title: 'Movie 2', poster_path: 'path/to/movie2.jpg' },
    ];
    mockedMoviesContext.mockResolvedValueOnce({ results: initialMovies });

    const { getByTestId } = render(<Dashboard />); // Render the component

    // Mock initial movies

    // Simulate press on logout button
    fireEvent.press(getByTestId('logout-button'));

    // Expect the Alert component to have been called with the correct parameters

    expect(Alert.alert).toHaveBeenCalledWith(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: expect.any(Function),
        },
      ],
    );

    Alert.alert.mock.calls[0][2][1].onPress();
    expect(store.getState().userProfileReducer.userInfo).toBeUndefined();
  });
});
