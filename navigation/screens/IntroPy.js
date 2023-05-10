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

export default function IntroPy() {
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
        <Text style={headerStyle}>What is Python?</Text>
        <Image
          source={require("../../assets/codesnap/pytlogo.png")}
          style={{ width: 250, height: 260 }}
        />
        <Text style={textStyle}>
          Source:https://en.wikipedia.org/wiki/Python_%28programming_language%29{" "}
          {"\n"}
        </Text>
        <Text style={textStyle}>
          Python is a high-level programming language that can be used to make
          web applications, artificial intelligence learning, automate tasks,
          and desktop applications and games. {"\n"}{" "}
        </Text>
        <Text style={headerStyle}>Variables</Text>
        <Text style={textStyle}>
          In python, when you declare variables you do not need to specify what
          kind of data type is it in order to declare them. You just need to put
          the variable name then put equal to the value you want to assign in
          the variable. {"\n"}
        </Text>
        <Text style={textStyle}>
          Here are some of the variables and data types that you may use in
          python: {"\n"}
        </Text>
        <Image
          source={require("../../assets/codesnap/pyt.png")}
          style={{ width: 400, height: 400 }}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          Note: Integers holds whole numbers, float holds whole numbers with
          decimal value, String holds texts, List are a collection of values
          that can be changed while tuples is also a collection of values but it
          canot be changed once declared, Set hold unordered collection of of
          unique elements used for mathematical operations such as union,
          intersection and difference. {"\n"}
        </Text>
        <Text style={headerStyle}>Creating your first python program</Text>
        <Text style={textStyle}>
          In our first program we are going to create a program that will
          display the values of variables that we will declare.{"\n"}
        </Text>
        <Image
          source={require("../../assets/codesnap/pyt2.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          Note: The file name of a python prgram can be anything as long as the
          extensionof the file is .py. The output of the program we made will be
          Hello, Kian! Nice to meet you.(we printed the vale of the variable
          name using print( ) function ).  {"\n"}
        </Text>
        <Text style={textStyle}>
          You can also notice that python does not need semi-colon to end a
          statement and it uses simple words to carry out a task that we
          assigned to the program.
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
