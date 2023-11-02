import { View, Text, Pressable} from 'react-native'
import React from 'react';
import quizzes from '../constants/quizData';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import { Container, StyledText } from '../components';
import { useRouter } from 'expo-router';

const Quiz = () => {
  const router = useRouter();
  return (
   <Container className="gap-5 pt-10">
      {quizzes.map((quiz) => (
        <View key={quiz.quiz}>
          <Pressable
            onPress={() => {
              router.push(`/quiz/${quiz.quiz}`);
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
            <FontAwesome name="question-circle-o" size={24} color={COLORS.APP_YELLOW} />
            <StyledText
              text={quiz.quiz}
              size={SIZES.large - 5}
              family={FONTS.Light}
            />
          </Pressable>
        </View>
      ))}
    </Container>
  );
  
}

export default Quiz