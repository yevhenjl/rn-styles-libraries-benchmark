import { createBox, createText, ThemeProvider } from "@shopify/restyle";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { COUNT } from "../constants";
import theme from "../themes/restyle";

const Box = createBox();
const RestyleText = createText();

export const Restyle = () => {
  return (
    <ThemeProvider theme={theme}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        {new Array(COUNT).fill(0).map((_, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => alert(`Item ${i} clicked!`)}
            style={styles.touchable}
          >
            <Box
              padding="s"
              borderColor="red"
              borderWidth={2}
              justifyContent="center"
              alignItems="center"
              backgroundColor={i % 2 === 0 ? "blue" : "gray"}
            >
              <RestyleText variant="title">Item {i}</RestyleText>
              <RestyleText variant="body">This is static content</RestyleText>
            </Box>
          </TouchableOpacity>
        ))}
      </View>
    </ThemeProvider>
  );
};

const styles = {
  touchable: {
    margin: 5,
  },
};
