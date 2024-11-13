import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#F5F5F5'
    },
    subContainer: {
      flex: 1,
      padding: 10
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      },
      input: {
        flex: 1,
        padding: 10,
        fontSize: 16,
      },
      addButton: {
        backgroundColor: '#1E3A8A', // Dark blue
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
      },
      addButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
      },
});

export default styles;