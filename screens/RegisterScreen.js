import { StatusBar } from 'expo-status-bar'
import React, { useState, useLayoutEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet,  View } from 'react-native';
import { Input, Button, Text} from 'react-native-elements';
import {auth} from '../firebase';


const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Login",
        });
    }, [navigation]);


    const register = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
            authUser.user.update({
                displayName: name,
                photoURL: 
                imageUrl || 
                "https://banner2.cleanpng.com/20180616/sxr/kisspng-avatar-computer-icons-avatar-icon-5b254abb7cf344.7556131215291706195118.jpg",
            });
        })
        .catch((error) => alert(error.message));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />

            <Text h3 style={{ marginBottom: 50}}>
                Create an account
            </Text>

            <View style={styles.inputContainer}>
            <Input 
            placeholder="Full Name" 
            autoFocus 
            type="text" 
            value={name} 
            onChangeText={(text) => setName(text)}
             />
               <Input 
            placeholder="Email" 
            autoFocus 
            type="email" 
            value={email} 
            onChangeText={(text) => setEmail(text)}
             />
               <Input 
            placeholder="Password" 
            autoFocus 
            type="password" 
            secureTextEntry
            value={password} 
            onChangeText={(text) => setPassword(text)}
             />
               <Input 
            placeholder="Profile Picture (Optional)" 
            autoFocus 
            type="text" 
            value={imageUrl} 
            onChangeText={(text) => setImageUrl(text)}
            onSubmitEditing={register}
             />
            </View>

            <Button  
            // containerStyle={styles.button}
            raised 
            title="Register" 
            onPress={register} 
            />
            <View style={{height: 100}}/>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    inputContainer: {
        width: 300,
    }
})

