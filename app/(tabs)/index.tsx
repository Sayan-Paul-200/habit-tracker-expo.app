import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.view}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link 
        href='/login'
        style={styles.navBtn}
      >Go to Login Page</Link>
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