import { useAuth } from "@/lib/auth-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, View, StyleSheet } from "react-native";
import { TextInput, Text, Button, useTheme } from "react-native-paper";

export default function AuthScreen() {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string | null>("")
    const [isSignUp, setIsSignUp] = useState<boolean>(false)

    const theme = useTheme()
    const router = useRouter()

    const { signIn, signUp } = useAuth()

    const handleAuth = async () => {

        if (!email || !password) {
            setError("Email and Password are both required.")
            return
        }

        if (password.length < 8) {
            setError("Password must be at least 6 characters long.")
            return
        }

        setError(null)

        if (isSignUp) {
            const error = await signUp(email, password)
            if (error) {
                setError(error)
                return
            }
        } else {
            const error = await signIn(email, password)
            if (error) {
                setError(error)
                return
            }
            router.replace('/')
        }

    }

    const handleSwitchMode = () => {

        setIsSignUp((prev) => !prev)

    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding': 'height'}
        >

            <View style={styles.content}>
                
                <Text 
                    style={styles.title}
                    variant="headlineMedium"
                >{ isSignUp ? "Create Account" : "Welcome Back" }</Text>

                <TextInput
                    label="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="example123@gmail.com"
                    mode="outlined"
                    style={styles.input}
                    onChangeText={setEmail}
                />

                <TextInput
                    label="Password"
                    autoCapitalize="none"
                    secureTextEntry
                    mode="outlined"
                    style={styles.input}
                    onChangeText={setPassword}
                />

                { error && <Text style={{color: theme.colors.error}}>{error}</Text> }

                <Button 
                    mode="contained"
                    style={styles.button}
                    onPress={handleAuth}
                >
                    { isSignUp ? "Sign Up" : "Sign In" }
                </Button>
                
                <Button 
                    mode="text"
                    onPress={handleSwitchMode}
                    style={styles.switchModeLogo}
                >
                    { isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up" }
                </Button>

            </View>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        marginBottom: 24,
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginTop: 8,
    },
    switchModeLogo: {
        marginTop: 16,
    }
})