import { View, Text, FlatList, useWindowDimensions, Image } from "react-native";
import React, { useEffect } from "react";
import { socials } from "../../constants/socials";
import { AppTouchable, Container, StyledText } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { fclip } from "../../assets/images";
import { useRouter } from "expo-router";
import { pulseAnimation } from "../../util";
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
} from "react-native-reanimated";
import { ScrollView } from "react-native-gesture-handler";

const About = () => {
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
    <Container className="mb-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <>
            <View className='w-full items-center'>
              <Image
                source={fclip}
                resizeMode="contain"
                style={{ width, height: width * 0.47 }}
              />
            </View>

          {/* Second half */}

          <StyledText
            text="Flipped Classroom Instructional Package."
            size={SIZES.large - 7}
            family={FONTS.Bold}
            className="text-center my-2"
          />
          <StyledText
            text="The Flipped Classroom Instructional Package is a cutting-edge mobile app designed to revolutionize the way educators teach and students learn. This innovative tool empowers teachers to create dynamic and engaging flipped classroom experiences, while students gain greater control over their learning journey."
            size={SIZES.normal + 3}
            family={FONTS.Light}
            className="my-2 text-justify leading-[25px]"
          />
          <StyledText
            text="Key Features."
            size={SIZES.large - 7}
            family={FONTS.Medium}
            className="my-2"
          />

          <StyledText
            text="1. Video Creation and Sharing: The app allows teachers to easily record and upload instructional videos, turning traditional lessons into interactive multimedia experiences. These videos can cover a wide range of subjects, from mathematics to history, making learning more engaging and accessible."
            size={SIZES.normal + 3}
            family={FONTS.Light}
            className="my-2 text-justify leading-[25px]"
          />
          <StyledText
            text="2. Interactive Assessments: Teachers can embed quizzes, polls, and surveys directly into their videos. This ensures that students remain actively engaged and can immediately assess their comprehension, fostering a deeper understanding of the material."
            size={SIZES.normal + 3}
            family={FONTS.Light}
            className="my-2 text-justify leading-[25px]"
          />
          <StyledText
            text="3. Discussion Forums: The Flipped Classroom app provides a space for students to discuss and collaborate on lessons. This encourages peer-to-peer learning, allowing students to ask questions and share insights, fostering a sense of community and a deeper connection to the subject matter."
            size={SIZES.normal + 3}
            family={FONTS.Light}
            className="my-2 text-justify leading-[25px]"
          />
          <StyledText
            text="4. Progress Tracking: Teachers and students can monitor progress through the app, tracking video views, quiz scores, and discussion participation. This data helps educators identify areas where students may need additional support and allows students to take control of their own learning pace."
            size={SIZES.normal + 3}
            family={FONTS.Light}
            className="my-2 text-justify leading-[25px]"
          />
          <StyledText
            text="5. Customizable Content: Teachers can create custom lesson plans and tailor content to their specific needs. Whether it's adding external resources or uploading additional material, the app is flexible and adaptable."
            size={SIZES.normal + 3}
            family={FONTS.Light}
            className="my-2 text-justify leading-[25px]"
          />
          <StyledText
            text="6. Accessibility and Flexibility: The Flipped Classroom Instructional Package is accessible from any mobile device, allowing students to learn at their own pace, anytime, anywhere. It accommodates diverse learning styles and schedules."
            size={SIZES.normal + 3}
            family={FONTS.Light}
            className="my-2 text-justify leading-[25px]"
          />
          {/* <StyledText
            text="7. Parental Engagement: Parents can also access the app to stay informed about their child's progress and support their learning journey."
            size={SIZES.normal + 3}
            family={FONTS.Light}
            className="my-2 text-justify leading-[25px]"
          /> */}
          <StyledText
            text="The Flipped Classroom Instructional Package redefines education by promoting active learning, fostering critical thinking, and creating an engaging, interactive learning environment. With this app, education becomes a dynamic, personalized experience that prepares students for success in an ever-evolving world."
            size={SIZES.normal + 3}
            family={FONTS.Medium}
            className="my-2 text-justify leading-[25px]"
          />
        </>
      </ScrollView>
    </Container>
  );
};

export default About;
