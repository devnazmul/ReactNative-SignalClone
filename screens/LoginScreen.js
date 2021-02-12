// ######################################
// ALL DEPEN.. IS HERE...................
// ######################################
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'

import { Button, ThemeProvider, Image, Input } from 'react-native-elements';
// ######################################
// FUCTIONAL COMP IS HERE................
// ######################################
const LoginScreen = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = () => {
        
    }



    return (
        <KeyboardAvoidingView behavior='padding'  style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={{
                    uri: "https://www.politico.com/news-tips/logo-signal.png",
                }}
                style={{
                    width: 200, height: 200
                }}
            />

            <View style={styles.inputContainer} >
                <Input
                    type="email"
                    placeholder="Email"
                    autoFocus
                    value={email}
                    onChangeText={
                        (text) => setEmail(text)
                    }
                />
                <Input
                    type="password"
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={
                        (text) => setPassword(text)
                    }
                />
            </View>
            <Button containerStyle={styles.button} title="Login" onPress={login} />
            <Button containerStyle={styles.button} type="outline" title="Register" />

            <View style={{height: 100}} />
        </KeyboardAvoidingView>
    )
}
    
export default LoginScreen;

// ######################################
// STYLE IS HERE.........................
// ######################################
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#fff",
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    }
})
