import React from 'react';
import { View, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import TodoItem from './components/TodoItem';
import { TodoListScreenProps } from './types';
import styles from './styles';
import CustomHeader from '../../components/CustomHeader';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';

const TodoListScreen: React.FC<TodoListScreenProps> = ({
  todoText,
  selectedTodo,
  setTodoText,
  handleAddOrUpdateTodo,
  todos,
  handleRemoveTodo,
  handleSelectTodo
}) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <CustomHeader title={'TODO:'} />
      <View style={styles.subContainer}>
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              onRemove={() => handleRemoveTodo(item.id)}
              onSelect={() => handleSelectTodo(item)}
            />
          )}
        />
        <View style={styles.inputContainer}>
          <CustomTextInput
            prefix={true}
            placeholder="Enter todo..."
            onChangeText={setTodoText}
            value={todoText}
            keyboardType="default"
            maxLength={100}
            editable={true}
          />
          <CustomButton
            title={!selectedTodo ? 'ADD' : 'UPDATE'}
            onPress={handleAddOrUpdateTodo}
            textColor="#FFFFFF"
            buttonColor="#1E3A8A"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default TodoListScreen;