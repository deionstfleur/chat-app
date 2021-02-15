import React, { useState, useEffect } from 'react';
import { Button, Input, Image } from 'react-native-elements';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe =  auth.onAuthStateChanged((authUser) => {
                console.log(authUser)
            if(authUser) {
                navigation.replace("Home");
            }
        });
        return unsubscribe;
    }, [])

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password).catch(error => alert(error));
    };

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light' />

            <Image source={{
                uri: "https://i.pinimg.com/originals/70/4f/2b/704f2b9c53b01caf36eedecd6e4ade0e.png",
            }}
            style={{width: 250, height: 250, borderRadius: 300}}
            />
            <View style={styles.inputContainer}>
                <Input 
                placeholder="Email" 
              
                value={email} 
                onChangeText={(text) => setEmail(text)}
                />
                <Input 
                placeholder="Password" 
                secureTextEntry 
                value={password} 
                onChangeText={(text) => setPassword(text)}
                onSubmitEditing={signIn}
                />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button 
            // containerStyle={styles.button} 
            type="outline" 
            title="Register" 
            onPress={() => navigation.navigate('Register')} 
            />

            <View style={{ height: 100}} />
        </KeyboardAvoidingView >
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
    },
})
