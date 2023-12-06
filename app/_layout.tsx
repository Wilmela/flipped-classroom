import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { checkOS } from "../util/helper";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    extraBold: require("../assets/fonts/Switzer-Black.otf"),
    Bold: require("../assets/fonts/Switzer-Bold.otf"),
    SemiBold: require("../assets/fonts/Switzer-Semibold.otf"),
    Medium: require("../assets/fonts/Switzer-Medium.otf"),
    Light: require("../assets/fonts/Switzer-Light.otf"),
    ...FontAwesome5.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerTitleStyle: {
            fontFamily: FONTS.Bold,
            fontSize: SIZES.large - 5,
            color: COLORS.APP_ASH,
          },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen
          name="read"
          options={{
            title: "TOPICS",
            presentation: checkOS("containedTransparentModal"),
          }}
        />
        <Stack.Screen name="videos" options={{ title: "VIDEO PLAYLIST" }} />
        <Stack.Screen
          name="quizzes"
          options={{
            title: "QUIZ",
            presentation: checkOS("containedTransparentModal"),
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
