import { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export const pulseAnimation = (comp?: any, value = 0.5) => {
  const AnimatedComp: any = Animated.createAnimatedComponent(comp);
  const progress = useSharedValue(value);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleX: progress.value }, { scaleY: progress.value }],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true);
  }, []);

  return { AnimatedComp, rStyle, Animated };
};
