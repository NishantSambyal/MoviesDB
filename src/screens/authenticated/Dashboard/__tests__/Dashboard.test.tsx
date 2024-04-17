import '@testing-library/jest-native/extend-expect';
import { render, waitFor } from '@testing-library/react-native';
import React from 'react';
import * as reactRedux from 'react-redux';
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
});
