import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { Container } from "../../components";
import { Stack, useLocalSearchParams } from "expo-router";
import videosData from "../../constants/videoData";
import { Video, ResizeMode } from "expo-av";
import { FontAwesome } from "@expo/vector-icons";

type VideoStatus = {
  isPlaying?: boolean;
  duration?: number;
  currentTime?: number;
  isBuffering?: boolean;
  // Add other relevant properties as needed.
};
const VideoPage = () => {
  const { title } = useLocalSearchParams();
  const video = useRef<Video | null>(null);
  const [status, setStatus] = useState<VideoStatus>({});
  const selectedVideo = videosData.find((data) => data.title === title);
  const { width } = useWindowDimensions();

  return (
    <Container>
      <Stack.Screen
        options={{
          title: `${title}`,
        }}
      />
      <View className="w-full items-center">
        <Video
          ref={video}
          style={{ width: width * 0.90, height: width}}
          source={selectedVideo?.url}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={() => setStatus(() => status)}
        />

        <View className="items-center mt-2">
          <FontAwesome
            name="play-circle-o"
            size={54}
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? video.current?.pauseAsync()
                : video.current?.playAsync()
            }
          />
        </View>
      </View>
    </Container>
  );
};

export default VideoPage;
