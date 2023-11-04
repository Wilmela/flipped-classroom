import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import StyledText from "./StyledText";
import { COLORS, FONTS, SIZES } from "../constants/theme";

type Props = {
  title: string;
  value: string;
  handleChange: (text: string) => void;
  error?: string;
  handleUpdate: () => Promise<void>;
  placeholder: string;
};

const Input = ({
  title,
  value,
  handleChange,
  error,
  handleUpdate,
  placeholder,
}: Props) => {
  return (
    <View className="flex flex-row items-center justify-between space-x-1">
      <View className="flex-1 gap-1">
        <Text
          style={{
            fontSize: SIZES.normal,
            fontFamily: FONTS.Light,
            color: COLORS.APP_ASH,
          }}
        >
          {title}
        </Text>

        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={handleChange}
          className="border-2 border-APP_ASH rounded-md p-2"
        />
        <Text>{error}</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleUpdate}
        className="border bg-APP_YELLOW px-2 py-3.5 rounded-md"
      >
        <StyledText text="Update" size={SIZES.normal} family={FONTS.Light} />
      </TouchableOpacity>
    </View>
  );
};

export default Input;
