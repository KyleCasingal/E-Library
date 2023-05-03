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

export default function IfandElseStatements() {
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
        <Text style={headerStyle}>Introduction</Text>
        <Text style={textStyle}>
          Using the if and else statements is one of the most important things
          to learn in java since it allows to execute codes baased on different
          conditions {"\n"}{" "}
        </Text>
        <Text style={headerStyle}>If Statements</Text>
        <Text style={textStyle}>
          An if statement is used to execute a code when the condition is true,
          here is the syntax for an if statement: {"\n"}{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/ifstate.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          The codition is considered as a boolean expression, it can be true or
          false. When the condition is true, the code inside the curly brackets
          will be executed but if the condition is false it will skip the code
          in the curly bracket. {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          This is an example of an if statement: {"\n"}{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/ifstate2.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          In this example if the user inputs a number greater than or equal to
          18, the program will print You are an adult. So we use else statements
          to execute a code when a condition is not met. {"\n"}{" "}
        </Text>
        <Text style={headerStyle}>Else Statements</Text>
        <Text style={textStyle}>
          Like mentioned earlier, we use else statements to run a code when a
          condtion is not met or it is false, an example for using else
          statement is: {"\n"}{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/ifstate3.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          In this code, if the number that will be input by the user is greater
          than or equal to 18 it will be true and will print You are an adult.
          If the number that was input is less than 18 it will be false and will
          proceed to the else statement therefore it will print You are a minor.{" "}
          {"\n"}{" "}
        </Text>
        <Text style={headerStyle}>Else if Statements</Text>
        <Text style={textStyle}>
          When do we use else if statements? we use it when we require 2 or more
          conditions to be a basis of what code will the program execute. The
          syntax for an else if statement is: {"\n"}{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/ifstate4.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          In this code there are 2 conditions that can be true since else if
          needs a specific condition unlike else that only base if the condition
          above it is false, it will immediately execute the code under the else
          statement. {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          This is an example of else if statement: {"\n"}{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/ifstate5.png")}
          style={styles.imageStyle}
        />

        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          In this code, if the number that will be input is greater than or
          equal to 18 it will print You are an adult, if the number is greater
          than or equal to 13 it will print You are a teenager, then if none of
          the conditions are met it will print You are a child.{" "}
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
