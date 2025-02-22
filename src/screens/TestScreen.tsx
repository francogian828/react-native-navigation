import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Props } from '../navigation/props'

const TestScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Login' }] })}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
                    <Text style={styles.buttonText}>Test</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TestScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#2C3E50"
    },
    input: {
        width: "100%",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        marginBottom: 20,
        fontSize: 16,
        color: "white"
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    button: {
        backgroundColor: "#F7B733",
        minWidth: "30%",
        paddingVertical: 15,
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        marginBottom: 20,
    },
    passwordInput: {
        flex: 1,
        height: 50,
        fontSize: 16,
        color: "white"
    },
});