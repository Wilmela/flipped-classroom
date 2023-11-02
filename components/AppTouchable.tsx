import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { COLORS } from "../constants/theme";

import { pulseAnimation } from "../util";

type Props = {
  name: any;
  color?: string;
  onPress?: () => void;
};

const AppTouchable = ({ name, color, onPress }: Props) => {
  const { AnimatedComp, rStyle } = pulseAnimation(TouchableOpacity, 0.75);
 
  return (
    <AnimatedComp
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        { alignItems: "center", justifyContent: "center", marginVertical: 10 },
        rStyle,
      ]}
    >
      <View className="w-16 h-16 rounded-full bg-APP_RED opacity-10 -z-10 relative" />
      <View className="absolute">
        <FontAwesome name={name} size={30} color={COLORS.APP_RED} />
      </View>
    </AnimatedComp>
  );
};

export default AppTouchable;
