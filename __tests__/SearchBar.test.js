import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import SearchBar from '../src/screens/SearchBar';

// this testing is for class component

// this is for testing a function

test('Test the search bar function', () => {
  const AppRef = renderer.create(<SearchBar />).getInstance();
  expect(AppRef.getDataWithoutState(5)).toEqual(15);
});

// Test the state change for `getData` function

test('Test searchbar funtion state',()=>{
    const AppRef = renderer.create(<SearchBar />).getInstance();
    AppRef.getData(5);
    AppRef.getData(10);
    expect(AppRef.state.counter).toEqual(15);
})

