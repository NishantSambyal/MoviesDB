import '@testing-library/jest-native/extend-expect';
import { render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from '..';
import { getMovies } from '../dataController';

// Mocking dataController
jest.mock('../dataController');

// Mocking useSelector and useDispatch
jest.mock('react-redux');

describe('Dashboard Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders DashboardScreen with initial movie list', async () => {
    // Mock useSelector to return a language
    useSelector.mockReturnValue('en');

    // Mock initial movies
    const initialMovies = [
      { id: 1, title: 'Movie 1' },
      { id: 2, title: 'Movie 2' },
    ];
    getMovies.mockResolvedValueOnce({ results: initialMovies });

    const { getByTestId } = render(<Dashboard />);

    // Wait for DashboardScreen to render
    await waitFor(() =>
      expect(getByTestId('dashboard-component')).toBeTruthy(),
    );

    // Check if initial movies are rendered
    initialMovies.forEach(movie => {
      expect(getByTestId(`movie-item-${movie.id}`)).toBeTruthy();
    });
  });

  test('calls console.log when movies fetch fails', async () => {
    // Mock useSelector to return a language
    useSelector.mockReturnValue('en');

    // Mock rejected promise for getMovies
    const errorMessage = 'Failed to fetch movies';
    getMovies.mockRejectedValueOnce(errorMessage);

    const consoleSpy = jest.spyOn(console, 'log');

    render(<Dashboard />);

    // Wait for a short time to allow for potential console log
    await waitFor(() => {}, { timeout: 500 });

    // Check if console log is called with the error message
    expect(consoleSpy).toHaveBeenCalledWith('error', errorMessage);
  });
});
