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

export default function Functions() {
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
        <Text style={headerStyle}>Functions</Text>
        <Text style={textStyle}>
          Functions are blocks of codes that can be used many times that has
          different arguments. They can perform unique sets of tasks and can
          return a value. {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          This is the syntax of a function in javascript:{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/jss10.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}>
          Note: functions have names so that when they are called they execute
          the code inside of them. You can also use multiple parameters to pass
          down your input values. {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          This is an example of using a function in javascript.{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/jss11.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          In this example, we defined a function called addNumbers that has two
          parameters whic is num1 and num2 and the objetive of this code is to
          add two numbers. {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          To use the function, you need to call and pass it to the argument just
          like in this sample: {"\n"}{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/jss13.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          In the example, we put two arguments 5 and 7 as we called the function
          in the code. The result of the function call will be the sum of 5 and
          7 which is 12, the value of result is printed by using the
          console.log() method {"\n"}
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
