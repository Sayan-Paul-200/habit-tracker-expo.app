import { Account, Client, Databases } from 'react-native-appwrite'

// Initialize the Appwrite client
export const client = new Client()
                .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
                .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
                .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!)

// Initialize the Appwrite Account service
export const account = new Account(client)