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

export default function ControlStructures() {
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
        <Text style={headerStyle}>Control Structures</Text>
        <Text style={textStyle}>
          This controls the flow of a program in javascript. It consists of if
          else statements, for loop, while loops and switch statements. {"\n"}{" "}
        </Text>
        <Text style={headerStyle}>If Else Statements</Text>
        <Text style={textStyle}>
          Like in java, if statements holds a condition that when the condition
          is met it will execute the code inside the curly brackets. This also
          applies to else if statements since we use this statements when there
          is two or more conditions that can be used to determine what code to
          execute depending on your code while else statements simply runs the
          code when the conditions on if and else if statements are not met or
          not true. {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          This is an example of using if and else if statements in a javascript
          code: {"\n"}
        </Text>

        <Image
          source={require("../../assets/codesnap/jss3.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          Note: In this code, the if statement will run since the condition is
          true so it will print Your are old enough to vote. {"\n"}
        </Text>
        <Text style={headerStyle}>For Loops</Text>
        <Text style={textStyle}>
          This is used to execute a code on a fixed number of times depending on
          the condition or while the condition is true. You should also know
          when the loop will stop. {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          This is the syntax for using the for loop in javascript: {"\n"}{" "}
        </Text>

        <Image
          source={require("../../assets/codesnap/jss4.png")}
          style={styles.imageStyle}
        />

        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          The initialization is where you declare variables that will be used in
          the code, the condition is the boolean expression where the code will
          be executed when te condition is true but will stop when the condition
          is false, the increment/decrement is where you change the value of a
          variable whether it will increment or decrement the value for each
          loop iteration. The code to be executed is the block of code that when
          the condition is true it will execute until the condition is not met
          or until it becomes false. {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          Note: increment can also mean increase while decrement can also mean
          decrease. {"\n"}{" "}
        </Text>

        <Text style={textStyle}>
          This is the example of for loop in javascript: {"\n"}{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/jss5.png")}
          style={styles.imageStyle}
        />

        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          Note: The loop will be executed 5 times since the starting value of i
          is 0 and will increment or increase the value by 1 in each loop
          interation then it will stop when it reaches the value of 4. It stops
          the code when it reaches the value of 4 because the when the value of
          i incremented to the value of 4 the next loop iteration will add 1 to
          the value of i thus making the value of i to be 5, the condition will
          be false since 5 is not less than 5. The value of i is printed
          everytime the condition was true. {"\n"}{" "}
        </Text>
        <Text style={headerStyle}>While Loops</Text>
        <Text style={textStyle}>
          While loops are used when the number of loops cannot be predicted
          unlike for loops where you know when the loop will be stopped. {"\n"}
        </Text>
        <Text style={textStyle}>
          This the syntax for using while loop: {"\n"}{" "}
        </Text>

        <Image
          source={require("../../assets/codesnap/jss6.png")}
          style={styles.imageStyle}
        />

        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          Note: The condition is the boolean expression that will be evaluated
          for each loop if it is true or false. If true, the code will
          continiously be executed. The code to be executed will not run at all.{" "}
          {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          This is an example of using a while loop in javascript: {"\n"}{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/jss7.png")}
          style={styles.imageStyle}
        />

        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          Note: the loop will continue to execute if the value of i does not
          exceed or equal to 10 and will print the value of i for each loop
          iteration in the console using the console.log method. The value of i
          does not have a fixed inrcementation instead it will be added by a
          random number from 0-2 since it uses the Math.floor() method and the
          Math.random() method. The number of loops cannot be predicted since
          the value added to i is random. {"\n"}{" "}
        </Text>
        <Text style={headerStyle}>Switch Statements</Text>
        <Text style={textStyle}>
          Just like in java, switch statements in javascript evaluates the
          expression that is used in the statement in order to execute a
          specific code when the variable matches the value of the case value.
          {"\n"}{" "}
        </Text>
        <Text style={textStyle}>
          This is the syntax for switch statements in javascript:{"\n"}
        </Text>
        <Image
          source={require("../../assets/codesnap/jss8.png")}
          style={styles.imageStyle}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          Note: the expressiomn is the variable or expression that will be
          evaluated to execute the codeof a case if the variable matches the
          value of a case value. If none of the case values are equal to the
          value of the variable or expression, it will go to the default
          statement and run the code inside of it. {"\n"}{" "}
        </Text>
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          This is the example of using a switch statement in javascript: {"\n"}{" "}
        </Text>
        <Image
          source={require("../../assets/codesnap/jss9.png")}
          style={{ width: 340, height: 250 }}
        />
        <Text style={textStyle}></Text>
        <Text style={textStyle}>
          Note: The output of the code will be You chose 2 since the value of
          the variable num matches the value of the case 2 {"\n"}{" "}
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
