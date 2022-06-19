import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//for stack
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

//for tab
const PageE = () => {
  return (
    <View style={styles.container}>
      <Text>I am E</Text>
    </View>
  );
};

const PageF = () => {
  return (
    <View style={styles.container}>
      <Text>I am F</Text>
    </View>
  );
};

const PageG = () => {
  return (
    <View style={styles.container}>
      <Text>I am G</Text>
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
        title="Go to C"
        onPress={() => navigation.navigate('PageC')}
      ></Button>
    </View>
  );
};
//stack navigation
const Stack = createStackNavigator();
//tab navigation
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
    <>
      {/* Stack Navigator */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="PageA" component={PageA} />
          <Stack.Screen name="PageB" component={PageB} />
          <Stack.Screen name="PageC" component={PageC} />
        </Stack.Navigator>
      
      </NavigationContainer>
      {/* Tab Navigator */}
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="PageE" component={PageE} />
          <Tab.Screen name="PageF" component={PageF} />
          <Tab.Screen name="PageG" component={PageG} />
        </Tab.Navigator>
      </NavigationContainer></>
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
