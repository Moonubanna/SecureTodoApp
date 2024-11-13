import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TodoListScreen from '../todolist/TodoListScreen';
import { Todo } from '../todolist/types';

describe('TodoListScreen', () => {
  const mockSetTodoText = jest.fn();
  const mockHandleAddOrUpdateTodo = jest.fn();
  const mockHandleRemoveTodo = jest.fn();
  const mockHandleSelectTodo = jest.fn();

  const mockTodos: Todo[] = [
    { id: '1', title: 'Test Todo 1' },
    { id: '2', title: 'Test Todo 2' },
  ];

  it('should render correctly', () => {
    const { getByText, getByPlaceholderText } = render(
      <TodoListScreen
        todoText=""
        selectedTodo={null}
        setTodoText={mockSetTodoText}
        handleAddOrUpdateTodo={mockHandleAddOrUpdateTodo}
        todos={mockTodos}
        handleRemoveTodo={mockHandleRemoveTodo}
        handleSelectTodo={mockHandleSelectTodo}
      />
    );
    expect(getByText('TODO:')).toBeTruthy();
    expect(getByText('ADD')).toBeTruthy();
    expect(getByPlaceholderText('Enter todo...')).toBeTruthy();
  });

  it('should call handleAddOrUpdateTodo when UPDATE button is pressed', () => {
    const { getByText } = render(
      <TodoListScreen
        todoText="Test Todo 1"
        selectedTodo={{ id: '1', title: 'Test Todo 1' }}
        setTodoText={mockSetTodoText}
        handleAddOrUpdateTodo={mockHandleAddOrUpdateTodo}
        todos={mockTodos}
        handleRemoveTodo={mockHandleRemoveTodo}
        handleSelectTodo={mockHandleSelectTodo}
      />
    );
    fireEvent.press(getByText('UPDATE'));
    expect(mockHandleAddOrUpdateTodo).toHaveBeenCalledTimes(1);
  });
});