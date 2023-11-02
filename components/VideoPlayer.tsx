import React, { useRef, useState } from "react";
import { Video, ResizeMode, AVPlaybackSource } from "expo-av";

type VideoStatus = {
  isPlaying?: boolean;
  duration?: number;
  currentTime?: number;
  isBuffering?: boolean;
};
const VideoPlayer = ({ url }: { url: any}) => {

  const video = useRef<Video | null>(null);
  const [status, setStatus] = useState<VideoStatus>({});

  return (
    <>
      <Video
        ref={video}
        style={{ width: "100%", height: "100%" }}
        source={url}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={() => setStatus(() => status)}
      />

      {/* <View className="items-center mt-2">
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
        </View> */}
    </>
  );
};

export default VideoPlayer;
