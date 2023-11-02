import { View, Text } from "react-native";
import React from "react";

const StyledView = ({
  children,
  className,
  props,
}: {
  children?: React.ReactNode;
  className: string;
  props?: any;
}) => {
  return (
    <View className={className} {...props}>
      {children}
    </View>
  );
};

export default StyledView;
