import React, { useEffect, useState } from 'react';
import TodoListScreen from './TodoListScreen';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addTodo, deleteTodo, updateTodo } from '../../redux/slices/todoSlice';
import { Todo } from './types';
import { authenticate } from '../../utils';

const TodoListContainer = () => {
    const [todoText, setTodoText] = useState('');
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
    const todos = useSelector((state: RootState) => state.todos.todos);
    const dispatch = useDispatch();
    // Effect hook to handle authentication on initial load
    useEffect(() => {
        authenticate();
    }, [])
    // Add or update todo item
    const handleAddOrUpdateTodo = async () => {
        if (await authenticate()) {
            if (todoText.trim() !== '') {
                if (selectedTodo) {
                    // Update existing todo
                    dispatch(updateTodo({ ...selectedTodo, title: todoText }));
                    setSelectedTodo(null); // Clear selectedTodo after update
                } else {
                    // Add new todo
                    dispatch(addTodo(todoText));
                }
                setTodoText(''); // Clear todo input
            }
        }
    };
    // Remove todo item
    const handleRemoveTodo = async (id: string) => {
        if (await authenticate()) {
            dispatch(deleteTodo(id)); // Remove the todo item
        }
    };
    // Select todo item to update
    const handleSelectTodo = (todo: Todo) => {
        setTodoText(todo.title);
        setSelectedTodo(todo); // Set the selected todo for editing
    };

    return (
        <TodoListScreen
            todoText={todoText}
            setTodoText={setTodoText}
            handleAddOrUpdateTodo={handleAddOrUpdateTodo}
            todos={todos}
            selectedTodo={selectedTodo}
            handleRemoveTodo={handleRemoveTodo}
            handleSelectTodo={handleSelectTodo}
        />
    );
};

export default TodoListContainer;