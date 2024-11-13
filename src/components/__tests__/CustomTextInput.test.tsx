import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomTextInput from './../CustomTextInput';

describe('CustomTextInput Component', () => {
  it('renders correctly with placeholder and captures text input', () => {
    const mockOnChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <CustomTextInput 
        placeholder="Enter text" 
        onChangeText={mockOnChangeText} 
        value="" 
      />
    );
    const input = getByPlaceholderText('Enter text');
    fireEvent.changeText(input, 'Hello World');
    expect(mockOnChangeText).toHaveBeenCalledWith('Hello World');
  });
});