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

export default function IfPy() {
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
        <Text style={headerStyle}>If and Else Statements in Python</Text>
        <Text style={textStyle}>
          If and else statments are used to execute blocks of code when a
          specific condition is true or false. It helps the program to choose
          what code to execute in a specific situation. {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          Here is the syntax of if and else statements in python: {"\n"}{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/pyt5.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          If your program needs more conditions that will be evaluated, you will
          use elif (short term for else if) statement so the program can
          evaluate more conditions. This is the syntax of else if statement:{" "}
          {"\n"}
        </Text>
        <Image
          source={require("../../assets/codesnap/pyt6.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          Now that we know the syntax of if and else statements, let us apply it
          in a program. This is an example of using if and else statement in a
          python program: {"\n"}
        </Text>
        <Image
          source={require("../../assets/codesnap/pyt7.png")}
          style={styles.imageStyle}
              />
              <Text style={textStyle}></Text>
              <Text style={textStyle}>Note: In this program, there are three conditions that was available to evaluate which are if the number is positive,negative or equal to zero, so we used an elif statement in order to evaluate three conditions.  The output of the program if the user inputs a number that is greater than zero, the program will print The number is positive.  If the number was less than zero, it will print The number is negative.  If the number was equal to zero, the program will print The number is zero. {"\n"} </Text>
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
