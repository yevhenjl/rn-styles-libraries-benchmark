import React from 'react';
import { StyleSheet, Text, TouchableOpacity, type ButtonProps } from 'react-native';

export const Button: React.FC<ButtonProps> = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'blue',
        flex: 1,
    },
    text: {
        textTransform: 'uppercase',
        color: 'white',
    }
})