import { View, Text, FlatList, useWindowDimensions, Image } from "react-native";
import React, { useEffect } from "react";
import { actions } from "../../constants/actions";
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

const Home = () => {
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
    <Container className="gap-5 items-center">
      <Animated.View className="pt-5 items-center justify-center w-full relative bg-transparent">
        <Animated.View
          className="bg-APP_YELLOW opacity-30"
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
      <View className="items-center">
        <Animated.Text
          style={[
            {
              fontFamily: FONTS.Bold,
              fontSize: SIZES.large * 1.3,
              color: COLORS.APP_ASH,
            },
            aniTextStyle,
          ]}
        >
          Flipped
        </Animated.Text>
        <Text
          style={{
            fontFamily: FONTS.Bold,
            fontSize: SIZES.exLarge * 1.3,
            color: COLORS.APP_ASH,
            textTransform: "uppercase",
          }}
        >
          Classroom
        </Text>
        <StyledText
          text="-Make Learning Personal-"
          size={SIZES.normal}
          family={FONTS.Light}
        />
      </View>

      {/* Third half */}
      <View className="w-full items-center bg-transparent">
        <FlatList
          data={actions}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            return (
              <View className="items-center">
                <AppTouchable
                  name={item.icon}
                  color="blue"
                  onPress={() => router.push(`/${item.title}`)}
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

export default Home;
