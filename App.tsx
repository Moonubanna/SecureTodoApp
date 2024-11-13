import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import TodoListContainer from './src/screens/todolist';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }} testID="app-container">
        <TodoListContainer/>
      </SafeAreaView>
    </Provider>
  );
}