import { View, SafeAreaView, useWindowDimensions } from "react-native";
import React from "react";
import { screens } from "../constants/screens";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView className="flex-1">
      <View
        className={`${className}`}
        style={{
          paddingHorizontal: width <= screens.width.small ? 10 : 8,
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Container;
