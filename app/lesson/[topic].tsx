import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import lessons from "../../constants/lessonData";
import { Stack, useLocalSearchParams } from "expo-router";
import { Container } from "../../components";

const Lesson = () => {
  const { topic } = useLocalSearchParams();

  const selectedContent = lessons.find((lesson) => lesson.topic === topic);

  return (
    <Container>
      <Stack.Screen options={{ 
        title:`${selectedContent?.topic}`
       }}  />
       
      <ScrollView>
        <>
          <Image
            source={selectedContent?.bgImg}
            resizeMode="cover"
            className="w-full h-48"
          />
          {selectedContent?.content()}
        </>
      </ScrollView>
    </Container>
  );
};

export default Lesson;
