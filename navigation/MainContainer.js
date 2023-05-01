import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import IntroductiontoJava from "./screens/Introduction to Java";
import Topic2 from "./screens/Topic 2";
import Topic3 from "./screens/Topic 3";
import Topic4 from "./screens/Topic 4";
import Topic5 from "./screens/Topic 5";
import { Ionicons } from "@expo/vector-icons";
import { AppContextProvider } from "./screens/AppContext";
import { AppContext } from "./screens/AppContext";
const Stack = createStackNavigator();

function HomeStack({ navigation }) {
  const { isDarkMode } = React.useContext(AppContext);

  const iconColor = isDarkMode ? "#fff" : "#000";

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode ? "#212121" : "#f0f0f0",
        },
        headerTintColor: isDarkMode ? "#fff" : "#000",
      }}
    >
      <Stack.Screen
        name="E-Library"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Ionicons
              name="library"
              size={35}
              color={iconColor}
              style={{ marginLeft: 10 }}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="help-circle"
              size={30}
              color={iconColor}
              onPress={() => navigation.navigate("About")}
              style={{ marginRight: 10 }}
            />
          ),
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen name="Introduction to Java" component={IntroductiontoJava} />
      <Stack.Screen name="Topic 2" component={Topic2} />
      <Stack.Screen name="Topic 3" component={Topic3} />
      <Stack.Screen name="Topic 4" component={Topic4} />
      <Stack.Screen name="Topic 5" component={Topic5} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}


export default function MainContainer() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="E-Librarylol"
            component={HomeStack}
            options={{
              headerShown: false,
              headerLeft: () => (
                <Ionicons name="library" size={30} style={{ marginLeft: 10 }} />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}
