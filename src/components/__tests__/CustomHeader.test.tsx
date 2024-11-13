import React from 'react';
import { render } from '@testing-library/react-native';
import CustomHeader from './../CustomHeader';

describe('CustomHeader Component', () => {
  it('renders correctly with title', () => {
    const { getByText } = render(
      <CustomHeader title="My Header" />
    );
    expect(getByText('My Header')).toBeTruthy();
  });
});