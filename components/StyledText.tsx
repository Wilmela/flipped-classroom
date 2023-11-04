import { View, Text, StyleProp, TextStyle } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";

type Props = {
  text: string | any;
  family: string;
  size: number;
  className?: string;
  style?: StyleProp<any>;
};
const StyledText = ({ text, family, size, className, style }: Props) => {
  return (
    <Text
      className={`${className}`}
      style={[
        {
          fontFamily: family,
          fontSize: size,
          color: COLORS.APP_ASH,
        },
        { ...style },
      ]}
    >
      {text}
    </Text>
  );
};

export default StyledText;
