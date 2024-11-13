
export interface Todo {
    id: string;
    title: string;
};
export interface TodoListScreenProps {
    todoText: string;
    selectedTodo: Todo | null;
    setTodoText: (text: string) => void;
    handleAddOrUpdateTodo: () => void;
    todos: Todo[];
    handleRemoveTodo: (id: string) => void;
    handleSelectTodo: (todo: Todo) => void;
};