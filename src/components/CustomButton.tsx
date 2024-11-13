import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import CustomText from './CustomText';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle | ViewStyle[];
    textColor?: string;
    buttonColor?: string;
    disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    style = {},
    textColor = '#FFFFFF',
    buttonColor = '#6200ee',
    disabled = false,
}) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: buttonColor }, style]}
            onPress={disabled ? undefined : onPress}
            disabled={disabled}
        >
            <CustomText title={title} style={[styles.buttonText, { color: textColor }]} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'normal',
    },
});

export default CustomButton;