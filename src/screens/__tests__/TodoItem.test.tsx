import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TodoItem from '../todolist/components/TodoItem';
import { Todo } from '../todolist/types';

describe('TodoItem Component', () => {
  const mockOnRemove = jest.fn();
  const mockOnSelect = jest.fn();

  const todo: Todo = {
    id: '1',
    title: 'Test Todo',
  };

  it('should render correctly', () => {
    const { getByText } = render(
      <TodoItem todo={todo} onRemove={mockOnRemove} onSelect={mockOnSelect} />
    );
    expect(getByText('Test Todo')).toBeTruthy();
    expect(getByText('REMOVE')).toBeTruthy();
  });

  it('should call onSelect when the item is pressed', () => {
    const { getByTestId } = render(
      <TodoItem todo={todo} onRemove={mockOnRemove} onSelect={mockOnSelect} />
    );
    fireEvent.press(getByTestId('todoItem'));
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
  });

  it('should call onRemove when remove button is pressed', () => {
    const { getByText } = render(
      <TodoItem todo={todo} onRemove={mockOnRemove} onSelect={mockOnSelect} />
    );
    fireEvent.press(getByText('REMOVE'));
    expect(mockOnRemove).toHaveBeenCalledTimes(1);
  });
});