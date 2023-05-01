import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AppContext } from "./AppContext";

export default function IntroductiontoJava() {
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
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
      >
        <Text style={headerStyle}>What is Java?</Text>
        <Text style={textStyle}>
          Java is a programming language that was designed by James Gosling. It
          was made in the early 1990's, it was developed to be a language for
          digital devices. This programming language is still used today since
          it is a multi-platform, object-oriented, and network-centric language
          that can be used a platform as itself. It is used to develop mobile
          apps, enterprise software to big data applications and server side
          technologies. {"\n"}
        </Text>
        <Text style={headerStyle}>Java Compilers</Text>
        <Text style={headerStyle}>JVM (Java Virtual Machine) </Text>
        <Text style={textStyle}>
          This virtual machine does not physically exist and this is a
          specification that provides as a runtime environment that enables Java
          bytecode to be executed. It also can run programs which are written in
          different languages and compiled to Java bytecode. {"\n"}
        </Text>
        <Text style={headerStyle}>JRE (Java Runtime Environment)</Text>
        <Text style={textStyle}>
          This is the set of softare tools that are used in developing Java
          Appplications. It provides a runtime environment physically since it
          is the implementation of JVM. It also contains the set of libraries
          and other files that JVM uses at runtime. {"\n"}
        </Text>

        <Text style={headerStyle}>JDK(Java Development Kit)</Text>
        <Text style={textStyle}>
          This is a software development environment that is used to develop
          Java applications and applets. It is physically exists and contains
          JRE development tools. {"\n"}
        </Text>
        <Text style={headerStyle}>Java Class and Objects</Text>

        <Text style={headerStyle}>Object</Text>
        <Text style={textStyle}>
          It has states and behaviors and it is the instance of a class. An
          example of this is a person that has a state such as a name, race,
          gender and behavior such as walking, reading, learning. {"\n"}{" "}
        </Text>

        <Text style={headerStyle}>Class</Text>
        <Text style={textStyle}>
          The class describes the type of state and behavior that an object
          supports. {"\n"}
        </Text>

        <Text style={headerStyle}>Methods</Text>
        <Text style={textStyle}>
          This can be refer to as the behavior. Methods can be used manny times
          in a class, it is where logics are input, where data are manipulated
          and where actions are executed. {"\n"}{" "}
        </Text>

        <Text style={headerStyle}>Instance Variables</Text>
        <Text style={textStyle}>
          Sets of intance variable are contained in each object. The state of an
          object is created by the values assigned to these instance variabes.{" "}
          {"\n"}
        </Text>

        <Text style={headerStyle}>Creating Your First Java Program</Text>
        <Text style={textStyle}>
          When creating a class always remember to use an uppercase letter when
          naming a class since Java is case sensitive, an example of this is
          that "MyFirstProgram" is not the same with "myfirsprogram". Another
          thing to remember is that the name of your java file should be the
          same with the classname that you will use in your code and when saving
          a file, you shoud add .java at the end of the filename which contains
          the classname of your code like MyFirstProgram.java {"\n"}
        </Text>
        <Text style={textStyle}>This is an example of a java program</Text>

        {/* Insert sample image here */}

        <Text style={headerStyle}>The main() method</Text>
        <Text style={textStyle}>
          This is required in every Java program that you will create. {"\n"}
        </Text>
        <Text style={headerStyle}>public static void main(String[ ] args)</Text>
        <Text style={textStyle}>
          All of the code inside the main method will be executed {"\n"}
        </Text>

        <Text style={headerStyle}>System.out.println()</Text>
        <Text style={textStyle}>
          Using this inside the main method will enable us to print a line of
          text on the screen: {"\n"}
        </Text>
        <Text style={textStyle}>
          This is an example of using System.out.println
        </Text>

        {/* Insert sample image here */}

        <Text style={headerStyle}>Comments</Text>
        <Text style={textStyle}>
          Comments can be used as reminders for the programmer and it can also
          be used to explain the code so it can be more readable.
        </Text>
        <Text style={textStyle}>
          Single line comments use double slash (//)
        </Text>
        <Text style={headerStyle}>//this is a single line comment</Text>
        {/* Insert sample image here */}
        <Text style={textStyle}>
          Another example is putting the single line comment at the end of line
          of a code:
        </Text>
        {/* Insert sample image here */}
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
});
