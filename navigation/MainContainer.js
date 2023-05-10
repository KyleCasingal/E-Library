import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import IntroductiontoJava from "./screens/Introduction to Java";
import JavaInput from "./screens/Java Input";
import JavaScript from "./screens/Java Script";
import Topic4 from "./screens/Topic 4";
import Topic5 from "./screens/Topic 5";
import { Ionicons } from "@expo/vector-icons";
import { AppContextProvider } from "./screens/AppContext";
import { AppContext } from "./screens/AppContext";
import IfandElseStatements from "./screens/If and Else Statements";
import HTML from "./screens/HTML";
import IntroJs from "./screens/IntroJs";
import ControlStructures from "./screens/Control Structures";
import Functions from "./screens/Functions";
import Switch from "./screens/SwitchStatements";
import Loop from "./screens/Looping";
import IntroPy from "./screens/IntroPy";
import InputPy from "./screens/Inputpy";
import IfPy from "./screens/ifpyt";
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
      <Stack.Screen
        name="Java Script"
        component={JavaScript}
        options={{
          headerTitle: "E-Library",
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
      <Stack.Screen
        name="Python"
        component={HTML}
        options={{
          headerTitle: "E-Library",
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
      <Stack.Screen
        name="Introduction to Java"
        component={IntroductiontoJava}
      />
      <Stack.Screen name="Java Input" component={JavaInput} />
      <Stack.Screen
        name="If and Else Statements"
        component={IfandElseStatements}
      />
      <Stack.Screen name="Topic 4" component={Topic4} />
      <Stack.Screen name="Topic 5" component={Topic5} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Introduction to JavaScript" component={IntroJs} />
      <Stack.Screen name="Control Structures" component={ControlStructures}/>
      <Stack.Screen name="Functions" component={Functions} />
      <Stack.Screen name="Switch Statements" component={Switch} />
      <Stack.Screen name="Looping" component={Loop} />
      <Stack.Screen name="Introduction to Python" component={IntroPy} />
      <Stack.Screen name="Python Input" component={InputPy} />
      <Stack.Screen name="Python If and Else Statements" component={IfPy} />
      
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
