import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AppContext } from "./AppContext";

export default function AboutScreen() {
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

  const iconColor = isDarkMode ? "#fff" : "#000";
  const url = 'https://docs.google.com/forms/d/e/1FAIpQLSeLXlEQ2_DJm6Zjpl6Y_wNwX35epsu8wECDW3ghonmyHLIbBg/viewform?usp=pp_url;'
  return (
    <View style={containerStyle}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
      >
        <Text style={textStyle}>
          This application is made under the requirement of an output in our
          research, we thank the respondents for our research in testing out our
          app and we accept suggestions on the questionnaire. To access the
          questionnaire, please click or double-click the icon below.
        </Text>
        <Text style={textStyle}></Text>
        <Text style={textStyle}></Text>
        <Text style={textStyle}></Text>
        <Text style={textStyle}></Text>
        <Text style={textStyle}></Text>
        <Text style={textStyle}></Text>
        <Text style={textStyle}></Text>
        <Text style={textStyle}></Text>
        <Text style={textStyle}></Text>
        <Text style={textStyle}></Text>
        <Text style={textStyle}></Text>
        <Text style={textStyle}></Text>
        <Text style={textStyle}></Text>
      
       
        <Text style={textStyle}></Text>
        <TouchableOpacity onPress={() => Linking.openURL(url)}>
          <Image
            source={require("../../assets/codesnap/glogo.png")}
            style={{
              width: 160,
              height: 200,
              justifyContent: "center",
              position: "absolute",
              bottom: 100,
              alignItems: "center",
              alignSelf: "center",
            }}
          />
        </TouchableOpacity>
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
    fontSize: 25,
    justifyContent: "center",
    textAlign: "justify",
    alignItems: "center",
    marginVertical: 0,
  },
  toggleContainer: {
    padding: 5,
    borderRadius: 5,
  },
});
