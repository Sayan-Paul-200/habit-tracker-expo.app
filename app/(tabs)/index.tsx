import { useAuth } from "@/lib/auth-context";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Index() {

  const { signOut } = useAuth()

  return (
    <View
      style={styles.view}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button 
        mode="text"
        onPress={signOut}
        icon={"logout"}
      >Sign Out</Button>
    </View>
  );
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navBtn: {
    marginTop: 20,
    fontSize: 18,
    color: 'blue',
    width: 200,
    textAlign: 'center',
    height: 40,
    lineHeight: 40,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
  }
})