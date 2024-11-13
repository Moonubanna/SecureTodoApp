import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Todo } from '../types';
import CustomText from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';

interface TodoItemProps {
  todo: Todo;
  onRemove: () => void;
  onSelect: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemove, onSelect }) => (
  <TouchableOpacity onPress={onSelect} style={styles.todoItem} testID="todoItem">
    <View style={styles.todoTextContainer}>
      <View style={styles.circle} />
      <CustomText title={todo.title} numberOfLines={2} style={styles.todoText} />
    </View>
    <CustomButton
      title="REMOVE"
      onPress={onRemove}
      textColor="#FFFFFF"
      buttonColor="#db6155"
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  todoTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#1E3A8A',
    marginRight: 10,
  },
  todoText: {
    fontSize: 16,
    color: '#4A4A4A',
    flexShrink: 1,
  },
  removeButtonContainer: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  removeButton: {
    fontSize: 14,
    color: '#A1A1A1'
  },
});

export default TodoItem;