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

export default function Loop() {
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
        <Text style={headerStyle}>Looping</Text>
        <Text style={textStyle}>
          Looping enables you to program code that will be executed multiple
          times depending on the condition that is required. There are three
          types of loop in java, it is the for loop, while loop, and the
          do-while loop. {"\n"}
        </Text>
        <Text style={headerStyle}>For Loop</Text>
        <Text style={textStyle}>
          The for loop executes a code for a fixed number of times to be looped.{" "}
          {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          This is the syntax for for loop in java: {"\n"}
        </Text>
        <Image
          source={require("../../assets/codesnap/forloopjava.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          Note: The initialization is used to declare the loop variable and it
          is executed once before the loop starts, the condition is the boolean
          expression that will be evaluated by the program for every loop
          iteration(if the condition is true, the program will continue to loop
          but if the condition is false, it will stop the loop), the increment
          is used to modify the value of the loop variable and it is executed
          each iteration of the loop.{"\n"}
        </Text>
        <Text style={textStyle}>
          This is the example of a for loop in java: {"\n"}{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/forloopjava2.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          Note: The output of this program will be printing the numbers from 1
          to 10. Since we initialize the loop variable int i=1, this will be the
          first number that will be printed. The condition that we put is i is
          less than or equal to 10, so as long as the condition is true it will
          run the code multiple times until the value of the variable is greater
          than 10. The increment statement increases the value of the variable
          by 1 and it is executed after printing the value of the variable and
          will continue the loop as long as the condition is true. {"\n"}{" "}
        </Text>
        <Text style={headerStyle}>While loop</Text>
        <Text style={textStyle}>
          The while loop enables the program to execute code multiple times as
          long as the condition is true. the difference between the while loop
          and for loop is, in the for loop you always know how many loop
          iteration there will be unlike the while loop it can run a loop where
          there is a randomized variable that cannot be used in a for loop.{" "}
          {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          This is the syntax of while loop in java: {"\n"}{" "}
        </Text>

        <Image
          source={require("../../assets/codesnap/forloopjava3.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          Note: The condition is the boolean expression that will be evaluated
          whether it is true or false. The code will be executed as long as the
          condition is true and will only stop if it is false. {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          This is the example of while loop in java: {"\n"}{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/forloopjava4.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          Note: In this program, it will print the numbers 1-10 since we
          declared the int i variable with a value of 1(this will be the first
          number that will be printed then will be followed by 2-10). The code
          will stop after it prints the number 10 since 11 is already greater
          than 10 which makes the condition that we used would be false that
          will result to stopping the loop of the program. {"\n"}{" "}
        </Text>
        <Text style={headerStyle}>Do While loop</Text>
        <Text style={textStyle}>
          The do while loop is very similar to the while loop, the only
          difference is it runs the code once before checking the condition so
          even if the condition is false it is guaranteed that the code that
          will be executed will run once. {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          This is the syntax for a while loop in java: {"\n"}{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/forloopjava5.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          Note: As you can see the code to be executed will run first before
          evaluating the condition of the while statement. If the condition is
          true it will run the loop but if the condition is false the code that
          will be executed will run once but will not perform a loop after.
          {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          This is an example of a do while loop in java: {"\n"}{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/forloopjava6.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          Note: The program will print the value of i once but will not perform
          a loop since the value of i is grater than 10 that makes the condition
          of the while statement false thus making the program stop after
          printing the i which has a value of 11. {"\n"}{" "}
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
