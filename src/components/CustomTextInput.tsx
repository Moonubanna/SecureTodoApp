import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface CustomTextInputProps {
    prefix?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'decimal-pad' | 'url' | 'number-pad';
    returnKeyType?: 'done' | 'next' | 'return';
    maxLength?: number;
    multiline?: boolean;
    numberOfLines?: number;
    editable?: boolean;
    style?: object;
    marginHorizontal?: number;
    placeholder?: string;
    onChangeText?: (text: string) => void;
    value?: string;
    onSubmitEditing?: () => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
    prefix = false,
    keyboardType,
    returnKeyType,
    maxLength,
    multiline = false,
    numberOfLines = 1,
    editable = true,
    style,
    marginHorizontal = 0,
    placeholder,
    onChangeText,
    onSubmitEditing,
    value,
    ...rest
}) => {
    return (
        <TextInput
            {...rest}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            maxLength={maxLength}
            multiline={multiline}
            numberOfLines={numberOfLines}
            editable={editable}
            style={[styles.textInputStyle, style]}
            placeholder={placeholder}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            value={value}
        />
    );
};

const styles = StyleSheet.create({
    textInputStyle: {
        flex: 1,
        fontSize: 16,
        padding: 10,
    },
});

export default CustomTextInput;