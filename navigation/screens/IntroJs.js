import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AppContext } from "./AppContext";

export default function IntroJs() {
  const { isDarkMode, toggleDarkMode } = useContext(AppContext);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: isDarkMode ? "#2b2b2b" : "#fff",
      },
      headerTintColor: isDarkMode ? "#fff" : "#000",
      headerTitleStyle: {
        color: isDarkMode ? "#fff" : "#000",
      },
      headerRight: () => (
        <TouchableOpacity onPress={toggleSwitch} style={styles.toggleContainer}>
          <Ionicons
            name={isDarkMode ? "moon" : "sunny"}
            size={30}
            color={iconColor}
          />
        </TouchableOpacity>
      ),
    });
  }, [isDarkMode, navigation]);

  const toggleSwitch = () => {
    toggleDarkMode();
  };

  const containerStyle = [
    styles.container,
    { backgroundColor: isDarkMode ? "#2b2b2b" : "#fff" },
  ];

  const textStyle = [styles.text, { color: isDarkMode ? "#fff" : "#000" }];
  const headerStyle = [styles.header, { color: isDarkMode ? "#fff" : "#000" }];
  
  const iconColor = isDarkMode ? "#fff" : "#000";

  return (
    <View style={containerStyle}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
      >
        <Text style={headerStyle}>What is JavaScript?</Text>
        <Image
          source={require("../../assets/codesnap/jslogo.png")}
          style={{ width: 250, height: 260 }}
        />
        <Text style={textStyle}>
          Source:https://commons.wikimedia.org/wiki/File:JavaScript-logo.png
          {"\n"}
        </Text>
        <Text style={textStyle}>
          It is a programming language used to create interactive websites and
          web applications. It can be run on client side or in the browser as
          well as on the server side (with Node.js). {"\n"}
        </Text>
        <Text style={headerStyle}>Variables</Text>
        <Text style={textStyle}>
          Variables contains the data values in JavaScript. The variables in
          JavaScript can be declared using var, let, or const (these are
          keywords to declare a variable). {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          These are the examples of declaring a variable: {"\n"}{" "}
        </Text>

        <Image
          source={require("../../assets/codesnap/jss.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={headerStyle}>How to make your first JavaScript code?</Text>
        <Text style={textStyle}>
          The first step is to declare a variable in your javascript file that
          is filename.js
        </Text>
        <Text style={textStyle}>
          Note: That in javascript, it is recommended to use lowercase letters
          in creating a file since javascript is also a case-sensitive language
          it is easier for developers to remember the name of a file if it is
          all lowercase and can be referenced easily. You can run javascript
          files in visual studio since it supports almost all programming
          languages. In this example, we are using visual studio as an editor of
          our code for javascript: {"\n"}{" "}
        </Text>

        <Image
          source={require("../../assets/codesnap/jss2.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}>
          after declaring a variable we will print the value of the variable by
          using the console.log() function.{" "}
        </Text>
        <Text style={textStyle}>
          Note: We use console.log in order to see the output in the console
        </Text>

        {/* This is a single-line comment in JSX */}

        <Text style={textStyle}>
          This is only a simple code for javascript, as you can see it has a
          resemblance on how a java program works
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,

    textAlign: "justify",
    marginVertical: 0,
  },
  toggleContainer: {
    padding: 5,
    borderRadius: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  imageStyle: {
    width: 420,
    height: 150,
  },
  scrollView: {
    flex: 0,
    width: "100%",
  },
});
