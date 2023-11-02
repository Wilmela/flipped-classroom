import { SafeAreaView } from "react-native";
import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <SafeAreaView className={`flex-1 px-4 ${className}`}>
      {children}
    </SafeAreaView>
  );
};

export default Container;
