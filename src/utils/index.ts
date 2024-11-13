import * as LocalAuthentication from 'expo-local-authentication';
import { Alert } from 'react-native';

// Function generates a random number between 0 and 99999 and returns it as a string.
export const getRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100000);
    return randomNum.toString();
  };
// Function to authenticate the user
export const authenticate = async () => {
  try {
    const result = await LocalAuthentication.authenticateAsync();
    if (!result.success) {
      Alert.alert('Authentication failed', 'You must authenticate to access this feature');
    }
    return result.success;
  } catch (error) {
    Alert.alert('Authentication Error', 'An error occurred while trying to authenticate');
    return false;
  }
};