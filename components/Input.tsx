import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import StyledText from "./StyledText";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { checkScreenSize } from "../util/helper";

type Props = {
  title: string;
  value: string;
  handleChange: (text: string) => void;
  error?: string;
  handleUpdate: () => Promise<void>;
  placeholder: string;
  color: string,
};

const Input = ({
  title,
  value,
  handleChange,
  error,
  handleUpdate,
  placeholder,
  color,
}: Props) => {
  return (
    <View className="flex flex-row items-center justify-between space-x-1">
      <View className="flex-1 gap-1">
        <Text
          style={{
            fontSize: SIZES.normal,
            fontFamily: FONTS.Light,
            color: color,
          }}
        >
          {title}
        </Text>

        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={handleChange}
          className="border border-APP_ASH rounded-md p-2"
        />

        <Text className="text-red-400">{error}</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleUpdate}
        className="bg-blue-500 px-2 rounded-md"
        style={{
          paddingVertical: checkScreenSize(9, 13),
        }}
      >
        <StyledText text="Update" size={SIZES.normal} family={FONTS.Light} style={{color: 'white'}} />
      </TouchableOpacity>
    </View>
  );
};

export default Input;
