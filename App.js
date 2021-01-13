import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const CircleButton = (props) => (
  <TouchableOpacity
    style={{
      margin: props.margin,
      height: props.size,
      width: props.size,
      backgroundColor: props.color,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: props.size * 2,
    }}
    onPress={props.onPress}
  >
    <Text style={{ color: props.textColor, fontSize: props.fontSize }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.todo}></View>
      <View style={styles.cantidadDeClicksStack}>
        <Text style={styles.cantidadDeClicks}>
          You have pushed the button this many times:
        </Text>
        <Text style={styles.cantidad}>{count}</Text>
      </View>
      <View style={styles.headerFondo}>
        <Text style={styles.headerTitle}>React Demo Home Page</Text>
      </View>
      <View style={styles.btn}>
        <CircleButton
          style={styles.btn}
          text="+"
          size={60}
          color="#2296F3"
          textColor="white"
          margin={10}
          fontSize={30}
          onPress={() => setCount(count++)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todo: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    left: 0,
    top: 0,
  },
  btn: {
    left: 300,
  },
  cantidadDeClicks: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "#696969",
    fontSize: 14,
    width: "100%",
  },
  cantidad: {
    top: 29,
    left: 130,
    position: "absolute",
    color: "#696969",
    fontSize: 30,
  },
  cantidadDeClicksStack: {
    top: 395,
    left: 50,
    width: "100%",
    height: 77,
    position: "absolute",
  },
  headerFondo: {
    top: 40,
    left: 0,
    width: "100%",
    height: 57,
    position: "absolute",
    backgroundColor: "rgba(74,144,226,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.37,
    shadowRadius: 0,
  },
  headerTitle: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    width: 218,
    height: 24,
    marginTop: 23,
    marginLeft: 60,
  },
});
