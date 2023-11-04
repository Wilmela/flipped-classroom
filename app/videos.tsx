import {
  View,
  FlatList,
  useWindowDimensions,
} from "react-native";
import React from "react";
import videos from "../constants/videoData";
import { Container, StyledText } from "../components";
import VideoPlayer from "../components/VideoPlayer";
import { FONTS, SIZES } from "../constants/theme";

const Videos = () => {

  const { width } = useWindowDimensions();

  return (
    <Container className="pt-10 items-center">

      <FlatList
        data={videos}
        keyExtractor={({ title }) => title}
        renderItem={({ item }) => {
          return (
            <View
              key={item.title}
              style={{
                width: width * 0.35,
                height: width * 0.35,
                marginRight: 20,
                marginBottom: 15
              }}
            >
              <VideoPlayer url={item?.url} />
              <StyledText text={item?.title} size={SIZES.normal} family={FONTS.Light} />
            </View>
          );
        }}
        numColumns={2}
        contentContainerStyle={{ gap: 25, flex: 1 }}
      />
    </Container>
  );
};

export default Videos;
