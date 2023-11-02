import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import quizData from "../../constants/quizData";
import { FONTS, SIZES } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";

// Radio button
const RadioButton = ({
  selected,
  onPress,
}: {
  selected: boolean;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={`w-5 h-5 rounded-full border-2 border-black mr-2 ${
          selected ? "bg-black" : ""
        }`}
      />
    </TouchableOpacity>
  );
};

type AnswerRowProps = {
  label: string;
  answer: string;
  onPress: () => void;
  selected: boolean;
};

//  Answer component
const AnswerRow = ({ label, answer, onPress, selected }: AnswerRowProps) => {
  return (
    <View
      className={`flex flex-row items-center justify-between my-2 bg-white p-2 rounded-md`}
    >
      <View className="flex-row space-x-3 items-center">
        <Text
          style={{
            fontFamily: FONTS.Medium,
            fontSize: SIZES.normal - 2,
          }}
        >
          {label}:
        </Text>
        <Text
          style={{
            fontFamily: FONTS.Light,
            fontSize:
              answer.length > 40 ? SIZES.normal - 7.6 : SIZES.normal - 2,
          }}
        >
          {answer}
        </Text>
      </View>
      <RadioButton onPress={onPress} selected={selected} />
    </View>
  );
};

const Quiz = () => {
  const { title } = useLocalSearchParams();

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [totalScore, setTotalScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Filter through quizData and return questions[]
  //  where each question item has quiz property equal to quiz
  const filteredData = quizData.filter((item) =>
    item.questions ? item.quiz === title : null
  );

  const handleSelectOption = (questionIndex: number, option: string) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionIndex]: option,
    }));

    Animated.timing(progress, {
      toValue: questionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    const currentQuestion =
      filteredData[currentQuestionIndex].questions[questionIndex];
    if (currentQuestion.correctAnswer === option) {
      setTotalScore((prevTotalScore) => prevTotalScore + 5);
    } else if (currentQuestion.correctAnswer !== option && totalScore === 0) {
      return;
    } else {
      setTotalScore((prevTotalScore) => prevTotalScore + 0);
    }
  };

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, filteredData[currentQuestionIndex]?.questions.length],
    outputRange: ["0%", "100%"],
  });

  return (
    <SafeAreaView className="p-4">
      <Stack.Screen
        options={{ title: title as string, headerShadowVisible: false }}
      />
      {/* Progress bar */}
      <View className="w-full rounded-[20px] bg-[#00000020] mb-4">
        <Animated.View
          className="h-[20px] rounded-[20px] bg-APP_RED"
          style={{
            width: progressAnim,
          }}
        />
      </View>

      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <View className="w-full">
            {item.questions.map((question, index) => (
              <View key={index} className="mb-10">
                <View className="flex-row justify-between px-1">
                  {/* Question */}
                  <Text
                    style={{
                      fontFamily: FONTS.Bold,
                      fontSize: SIZES.normal - 2,
                      paddingBottom: 2,
                    }}
                  >
                    {question.question}
                  </Text>

                  {/* Check or X button */}
                  {selectedOptions[index] && (
                    <View>
                      {question.correctAnswer === selectedOptions[index] ? (
                        <Ionicons name="checkmark" size={20} color="green" />
                      ) : (
                        <Text className="text-red-600 text-lg">x</Text>
                      )}
                    </View>
                  )}
                </View>

                {/* Answers row */}
                <AnswerRow
                  label="A"
                  answer={question.answerA}
                  onPress={() => handleSelectOption(index, "A")}
                  selected={selectedOptions[index] === "A"}
                />

                <AnswerRow
                  label="B"
                  answer={question.answerB}
                  onPress={() => handleSelectOption(index, "B")}
                  selected={selectedOptions[index] === "B"}
                />

                <AnswerRow
                  label="C"
                  answer={question.answerC}
                  onPress={() => handleSelectOption(index, "C")}
                  selected={selectedOptions[index] === "C"}
                />

                <AnswerRow
                  label="D"
                  answer={question.answerD as string}
                  onPress={() => handleSelectOption(index, "D")}
                  selected={selectedOptions[index] === "D"}
                />

                {/* Error or success message */}
                {selectedOptions[index] && (
                  <View>
                    {question.correctAnswer !== selectedOptions[index] ? (
                      <Text className="text-red-600">
                        Sorry, ☹️ the correct answer is:{" "}
                        <Text>{question.correctAnswer}</Text>
                      </Text>
                    ) : (
                      <Text className="text-green-600">
                        Good job, on to the next one! 🎉🍾
                      </Text>
                    )}
                  </View>
                )}
              </View>
            ))}

            <View className="mb-8 p-4 bg-[#00000020] w-full rounded-3xl items-center justify-center">
              <Text
                className="text-APP_BLACK"
                style={{
                  fontFamily: FONTS.Bold,
                  fontSize: SIZES.large,
                }}
              >
                Total: {totalScore}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Quiz;
