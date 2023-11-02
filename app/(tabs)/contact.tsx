import { View, Text, FlatList, useWindowDimensions, Image, Linking } from "react-native";
import React, { useEffect } from "react";
import { socials } from "../../constants/socials";
import { AppTouchable, Container, StyledText } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { student } from "../../assets/images";
import { useRouter } from "expo-router";
import { pulseAnimation } from "../../util";
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
  Easing,
} from "react-native-reanimated";

const Contact = () => {
  const { Animated, rStyle } = pulseAnimation(View, 0.95);

  const { width } = useWindowDimensions();
  const router = useRouter();

  const progress = useSharedValue(0);

  const aniTextStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${progress.value}rad` }],
    };
  }, []);

  useEffect(() => {
    const rotateIn = withSpring(2 * Math.PI, { damping: 2, stiffness: 60 });
    const rotateOut = withSpring(0, { damping: 2, stiffness: 30 });

    progress.value = withRepeat(withSequence(rotateIn, rotateOut), -1, false);
  }, []);
  return (
    <Container>
      <Animated.View className="pt-10 items-center justify-center w-full relative bg-transparent">
        <Animated.View
          className="bg-APP_RED opacity-30"
          style={[
            {
              width: width * 0.8,
              height: width * 0.8,
              borderRadius: (width * 0.8) / 2,
            },
            rStyle,
          ]}
        />

        <View className="absolute">
          <Image source={student} resizeMode="contain" style={{ width: 200 }} />
        </View>
      </Animated.View>

      {/* Second half */}

      <StyledText
        text="You can reach me on:"
        size={SIZES.large - 7}
        family={FONTS.Bold}
        className="text-center my-2"
      />

      {/* Third half */}
      <View className="w-full items-center bg-transparent">
        <FlatList
          data={socials}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            return (
              <View className="items-center">
                <AppTouchable
                  name={item.icon}
                  onPress={() => Linking.openURL(`${item.url}`)}
                />
                <StyledText
                  text={item.title}
                  family={FONTS.Light}
                  size={SIZES.normal}
                  className="text-APP_ASH capitalize"
                />
              </View>
            );
          }}
          horizontal
          contentContainerStyle={{ gap: width * 0.15 }}
        />
      </View>
    </Container>
  );
};

export default Contact;
