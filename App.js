import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const PageA = () => {
  // without using props navigation
  // const navigation =useNavigation();
  return (
    <View style={styles.container}>
      <Text>I am A</Text>
      <Button
        title="Go to Home Page"
        onPress={() => navigation.navigate('HomePage')}
      ></Button>
    </View>
  );
};

const PageC = () => {
  return (
    <View style={styles.container}>
      <Text>I am C</Text>
      <Button
        title="Go to Home Page"
        onPress={() => navigation.navigate('HomePage')}
      ></Button>
    </View>
  );
};

const PageB = () => {
  return (
    <View style={styles.container}>
      <Text>I am B</Text>
      <Button
        title="Go to Home Page"
        onPress={() => navigation.navigate('HomePage')}
      ></Button>
    </View>
  );
};

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>I am Home Page</Text>
      <Button
        title="Go to A"
        onPress={() => navigation.navigate('PageA')}
      ></Button>
            <Button
        title="Go to B"
        onPress={() => navigation.navigate('PageB')}
      ></Button>
            <Button
        title="Go to B"
        onPress={() => navigation.navigate('PageC')}
      ></Button>
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    //Stack Navigator
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="PageA" component={PageA} />
        <Stack.Screen name="PageB" component={PageB} />
        <Stack.Screen name="PageC" component={PageC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
