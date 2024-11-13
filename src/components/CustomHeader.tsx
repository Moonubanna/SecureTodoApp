import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from './CustomText';

interface CustomHeaderProps {
  title: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <CustomText title={title} style={styles.title} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  title: {
    flex: 1,
    textAlign: 'left',
    fontSize: 16,
    color: '#1E3A8A',
    fontWeight: 'bold',
  },
});

export default CustomHeader;