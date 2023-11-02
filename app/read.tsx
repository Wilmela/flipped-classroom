import { View, Text, Pressable } from "react-native";
import React from "react";
import topics from "../constants/lessonData";
import { MaterialIcons } from "@expo/vector-icons";
import { StyledView, Container, StyledText } from "../components";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { useRouter } from "expo-router";

type TOPIC = {
  topic: string;
  bgImg: any;
  content: () => React.JSX.Element;
};

const Read = () => {
  const router = useRouter();

  return (
    <Container className="gap-5 pt-10">
      {topics.map((topic: TOPIC) => (
        <View key={topic.topic}>
          <Pressable
            onPress={() => {
              router.push(`/lesson/${topic.topic}`);
            }}
            style={{
              backgroundColor: "#fff",
              shadowOffset: { width: 0, height: 2 },
              shadowColor: "#000",
              shadowRadius: 10,
              elevation: 8,
              width: "100%",
              padding: 10,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <MaterialIcons name="topic" size={24} color={COLORS.APP_YELLOW} />
            <StyledText
              text={topic.topic}
              size={SIZES.large - 5}
              family={FONTS.Light}
            />
          </Pressable>
        </View>
      ))}
    </Container>
  );
};

export default Read;
