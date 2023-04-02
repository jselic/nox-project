import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import users from '../assets/user.json';
import * as LoginStyles from '../styles/login_styles'

export function Login({onLogin}){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [errorMessage,setErrorMessage] = useState('');

    const handleLogin = () => {
        const user = users.find(u => u.username === username && u.password === password)
        if (user){
            onLogin(user)
        }else{
            setErrorMessage("Invalid username or password")
        }
    };

    return (
        <View style={LoginStyles.container}>
            <Text style={LoginStyles.logo}>Nox</Text>
            {errorMessage ? <Text style={LoginStyles.error}>{errorMessage}</Text> : null}
            <View style={LoginStyles.input_view}>
                <TextInput
                    style={LoginStyles.input_text}
                    placeholder="Username..."
                    placeholderTextColor="#003f5c"
                    onChangeText={setUsername}
                    value={username}
                />
            </View>
            <View style={LoginStyles.input_view}>
                <TextInput
                    secureTextEntry
                    style={LoginStyles.input_text}
                    placeholder="Password..."
                    placeholderTextColor="#003f5c"
                    onChangeText={setPassword}
                    value={password}
                />
            </View>
            <TouchableOpacity style={LoginStyles.login_button} onPress={handleLogin}>
                <Text style={LoginStyles.login_text}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}