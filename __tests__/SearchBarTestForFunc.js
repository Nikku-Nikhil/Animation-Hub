import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import SearchBar from '../src/screens/SearchBar';

// Test the `getDataWithoutState` function
test('Test the search bar function', async () => {
  const { getByText } = render(<SearchBar />);
  const result = SearchBar.prototype.getDataWithoutState(5); // Access the function directly if it's not using component state or props
  expect(result).toEqual(15);
});

// Test the state change for `getData` function
test('test searchbar function state', async () => {
  const { getByText } = render(<SearchBar />);
  
  // Since we are testing functional components with hooks, we need to trigger the state change
  // If there is a button or any other UI element that triggers `getData`, you would use `fireEvent` to simulate that action.

});