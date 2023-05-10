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

export default function Switch() {
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
        <Text style={headerStyle}>Switch Statements</Text>
        <Text style={textStyle}>
          The switch statement runs a block of code depending on the value of a
          variable or expression. It is mainly used when you want a specific
          code to be executed when a value of a variable or expression depends
          on a choice of the user. {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          This is the syntax of a switch statement: {"\n"}{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/switchsyn2.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          Note: The switch statement evaluates the value of the expression or
          variable in order to compare it to the case values, it will run the
          code of a specific case if the expression or variable is equal to the
          value of the case and if not it will run the code inside the default
          if none of the cases are true {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          This is an example of using the switch statement: {"\n"}{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/switchsyn3.png")}
          style={styles.imageStyle}
              />
              <Text style={textStyle}></Text>
              <Text style={textStyle}>Note: The variable that we used was the gender variable which holds a string value, the case male code will be executed since the value of the gender is "male".  The output will be Blue.</Text>

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
