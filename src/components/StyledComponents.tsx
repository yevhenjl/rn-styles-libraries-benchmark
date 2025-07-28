import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { COUNT } from "../constants";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

type StyledBoxProps = {
    isEven: boolean;
  };

const StyledBox = styled.View<StyledBoxProps>`
  border-color: red;
  border-width: 2px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isEven ? "blue" : "grey")};
`;

const StyledTextTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const StyledTextBody = styled.Text`
  font-size: 16px;
  line-height: 24px;
`;

export const StyledComponents = () => {
  return (
    <Container>
      {new Array(COUNT).fill(0).map((_, i) => (
        <TouchableOpacity
          key={i}
          style={{ margin: 5 }}
          onPress={() => alert(`Item ${i} clicked!`)}
        >
          <StyledBox isEven={i % 2 === 0}>
            <StyledTextTitle>Item {i}</StyledTextTitle>
            <StyledTextBody>This is static content</StyledTextBody>
          </StyledBox>
        </TouchableOpacity>
      ))}
    </Container>
  );
};
