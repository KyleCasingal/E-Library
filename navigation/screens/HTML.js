import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AppContext } from "./AppContext";

export default function HTML({ navigation }) {
  const { isDarkMode, toggleDarkMode } = useContext(AppContext);
  const [toggleIcon, setToggleIcon] = useState(isDarkMode ? "sunny" : "moon");

  const handleToggle = () => {
    toggleDarkMode();
    setToggleIcon((prevIcon) => (prevIcon === "moon" ? "sunny" : "moon"));
  };

  const topics = [
    {
      id: "1",
      title: "Introduction",
      screen: "Introduction to Python",
      color: "#71eaf5",
    },
    { id: "2", title: " Python Input", screen: "Python Input", color: "#ff7f50" },
    {
      id: "3",
      title: "If and Else Statements",
      screen: "Python If and Else Statements",
      color: "#98fb98",
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.item,
        { backgroundColor: isDarkMode ? "#2b2b2b" : item.color },
      ]}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#000" }]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#2b2b2b" : "#fff" },
      ]}
    >
      <View style={styles.header}>
        <Text style={[styles.heading, { color: isDarkMode ? "#fff" : "#000" }]}>
          Python
        </Text>
      </View>
      <TouchableOpacity style={styles.toggle} onPress={handleToggle}>
        <Ionicons
          name={isDarkMode ? "moon" : "sunny"}
          size={40}
          color={isDarkMode ? "#fff" : "#000"}
        />
      </TouchableOpacity>
      <FlatList
        data={topics}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
      />
      <View style={styles.bottomArrows}>
        <TouchableOpacity
          style={[styles.arrowButton, { top: 0, left: 0 }]}
          onPress={() => navigation.navigate("Java Script")}
        >
          <Ionicons
            name="arrow-back"
            size={50}
            color={isDarkMode ? "#fff" : "#000"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.arrowButton, { top: 0, right: 0 }]}
          onPress={() => navigation.navigate("E-Library")}
        >
          <Ionicons
            name="arrow-forward"
            size={50}
            color={isDarkMode ? "#fff" : "#000"}
          />
        </TouchableOpacity>
      </View>
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
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 45,
    textAlign: "center",
    fontWeight: "bold",
  },
  item: {
    padding: 60,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  toggle: {
    marginTop: 20,
    marginBottom: 10,
  },
  bottomArrows: {
    position: "absolute",
    top: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  arrow: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
  },
  leftArrow: {
    left: 20,
  },
  rightArrow: {
    right: 20,
  },
  arrowIcon: {
    fontSize: 30,
  },
});
