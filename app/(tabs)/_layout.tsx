import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { StyledText } from "../../components";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerTitleStyle: {
          fontFamily: FONTS.Bold,
          fontSize: SIZES.large - 5,
          color:COLORS.APP_ASH
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "HOME",
          headerTitle: "",
          headerLeft: () => {
            return (
              <StyledText
                text="FCLIP"
                size={SIZES.large - 5}
                family={FONTS.Bold}
                className="text-APP_YELLOW pl-4"
              />
            );
          },

          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          tabBarActiveTintColor: COLORS.APP_ASH,
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "ABOUT",
          tabBarIcon: ({ color }) => <TabBarIcon name="info" color={color} />,
          tabBarActiveTintColor: COLORS.APP_ASH,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "CONTACT",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="phone-square" color={color} />
          ),
          tabBarActiveTintColor: COLORS.APP_ASH,
        }}
      />
    </Tabs>
  );
}
