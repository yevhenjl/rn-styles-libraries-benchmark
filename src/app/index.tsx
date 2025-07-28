import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../components/Button";
import { NativeWind } from '../components/Nativewind';
import { ReactNative } from '../components/ReactNative';
import { Restyle } from '../components/Restyle';
import { StyledComponents } from '../components/StyledComponents';
import { Tamagui } from '../components/Tamagui';
import { TimedRender } from "../components/TimeRender";
import { Twrnc } from '../components/Twrnc';
import { Unistyles } from "../components/Unistyles";



export default function Index() {
  const [styleType, setStyleType] = useState<string|null>(null);

  const onStyleTypePress = (curry: string|null) => () => {
    setStyleType(curry);
  };

  const renderStyleLibrary = () => {
    switch (styleType) {
      case "React Native StyleSheet":
        return <ReactNative />;
      case "Twrnc":
        return <Twrnc />;
      case "Restyle":
        return <Restyle />;
      case "Styled Components":
        return <StyledComponents />;
      case "NativeWind":
        return <NativeWind />;
      case "Tamagui":
        return <Tamagui />;
      case "Unistyles":
        return <Unistyles />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {
        styleType ? (         
          <TouchableOpacity onPress={onStyleTypePress(null)}>
            <Text style={styles.textButton}>Tap here to clear results</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.text}>Select a style library to start rendering</Text>
        )
      }
      
      <ScrollView horizontal contentContainerStyle={styles.buttonsRow}>
        <Button title="React Native StyleSheet" onPress={onStyleTypePress("React Native StyleSheet")} />
        <Button
          title="twrnc v4.9 (tailwind-react-native-classnames)"
          onPress={onStyleTypePress("Twrnc")}
        />
        <Button title="NativeWind v4 (Tailwind v3)" onPress={onStyleTypePress("NativeWind")} />
        <Button title="Restyle v2.4 (@shopify/restyle)" onPress={onStyleTypePress("Restyle")} />
        <Button
          title="Styled Components v6.1"
          onPress={onStyleTypePress("Styled Components")}
        />
        <Button title="Tamagui v1.132" onPress={onStyleTypePress("Tamagui")} />
        <Button
          title="Unistyles v3"
          onPress={onStyleTypePress("Unistyles")}
        />
      </ScrollView>
      
      {styleType ? (
        <TimedRender key={styleType}>
          <Text style={styles.text}>
            Rendering with <Text style={styles.bold}>{styleType}</Text>
          </Text>
        </TimedRender>
      ) : null}
      <ScrollView>
        {renderStyleLibrary()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
  },
  text: {
    marginVertical: 12,
  },
  textButton: {
    marginVertical: 12,
    color: 'blue',
    textDecorationLine: 'underline'
  },
  buttonsRow: {
    gap: 16, 
    height: 60, 
    paddingHorizontal: 10, 
    marginBottom: 30
  },
  bold: {
    fontWeight: "bold",
    fontSize: 16,
  },
});