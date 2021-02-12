import { StatusBar } from 'expo-status-bar'
import React, { useLayoutEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'

const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login",
        });
    }, [navigation])

    const register = () => {
        
    }


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={styles.heading} >Craete New Account</Text>
            <View style={styles.inputContainer} >
                <Input
                    type="text"
                    placeholder="Full Name"
                    autoFocus
                    value={name}
                    onChangeText={
                        (text) => setName(text)
                    }
                />
                <Input
                    type="email"
                    placeholder="Email"
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
                <Input
                    type="text"
                    placeholder="Profile Picture url (Optional)"
                    value={imageUrl}
                    onChangeText={
                        (text) => setImageUrl(text)
                    }
                />
            </View>

            <Button containerStyle={styles.button} raised containerStyle={styles.button} title="Register" onPress={register} />

        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#fff",
    },
    heading: {
        marginBottom: 30,
        color: "#2c68ed",
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 20,
    }
})
