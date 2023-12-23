import 'react-native';
import React from 'react';
import SButton from '../src/components/common/SButton';

import renderer from 'react-test-renderer';


  test('App test renderer snapshot', () => {
    const snapshot = renderer.create(<SButton />).toJSON();
    console.log(snapshot);
    expect(snapshot).toMatchSnapshot();
  });
