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

export default function InputPy() {
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
        <Text style={headerStyle}>
          How do we make the user input the data in Python?
        </Text>
        <Text style={textStyle}>
          In python, to prompt the user to input a value we use the input()
          function. In the input() function the question that will be prompted
          is also included. {"\n"}
        </Text>
        <Text style={textStyle}>
          This is an example how to implement the input() function in python:{" "}
          {"\n"}{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/pyt3.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          Note: The user will input a string value then the program will print
          the Hello, Kian!(Kian is the string value that was input by the user
          in this sample). input() function always return a string value so how
          do we input numbers? {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          This is an example how to input numbers in the input function that
          will use mathematical operations: {"\n"}{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/pyt4.png")}
          style={styles.imageStyle}
              />
              <Text style={textStyle}></Text>
              <Text style={textStyle}>Note: When printing numbers next to string we use "," to seperate the values.  You can also notice we specify what kind of data type will be input by the user before the input() function is used.  The output of the program will be the sum of the two numbers the user will input after getting the prompt.</Text>
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
