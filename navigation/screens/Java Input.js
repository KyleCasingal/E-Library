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

export default function JavaInput() {
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
        <Text style={headerStyle}>What is Java Input?</Text>
        <Text style={textStyle}>
          This is a method where the user inputs the data into the java program,
          a way to do this is using the scanner class in java.{"\n"}
        </Text>
        <Text style={textStyle}>
          The first step to do this is to import the scanner into your java
          program, this is an example how to import:
        </Text>
        <Image
          source={require("../../assets/codesnap/Scanner.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}>
          Note: when importing always import at the top of your class and not
          after it. {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          The second step is to put this code after your main method as shown in
          this sample: {"\n"}
        </Text>
        <Image
          source={require("../../assets/codesnap/Scanner2.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          The third step is to put the method of what the user will input, the
          syntax for this is var name = input.nextLine(); (This is for string
          values change the word "Line" into Int for integers, Double for
          integer with decimal value and Boolean for boolean values) {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          In this sample we will input string and integer values: {"\n"}{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/Scanner3.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          The last step is to print the values that were input by the user, this
          is the example: {"\n"}{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/Scanner4.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>The output will be: {"\n"} </Text>
        <Text style={headerStyle}>Your name is john and you are 7 years old.</Text>
        <Text style={textStyle}>Note: the value that was input in this sample is john and 7, we used the variables since it will have a value when the user inputs the data when running the program.</Text>
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
