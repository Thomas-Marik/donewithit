import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const App = () => {
  //return <WelcomeScreen />;
  return <ViewImageScreen />;
};

const styles = StyleSheet.create({});
export default App;
