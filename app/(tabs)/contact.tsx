import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  Image,
  Linking,
} from "react-native";
import { useEffect, useState } from "react";
// import { socials } from "../../constants/socials";
import { AppTouchable, Container, StyledText } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { darlington, student } from "../../assets/images";
import { pulseAnimation } from "../../util";
import {
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
} from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Socials } from "../../type/type";
import { checkScreenSize } from "../../util/helper";

const Contact = () => {
  const [email, setEmail] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const { Animated, rStyle } = pulseAnimation(View, 0.95);

  const { width } = useWindowDimensions();

  const progress = useSharedValue(0);

  const socials: Socials[] = [
    {
      title: "What's app",
      icon: "whatsapp",
      url: `whatsapp://send?text=Hello Sir&phone=+234${whatsapp}`,
    },
    {
      title: "Email",
      icon: "envelope",
      url: `mailto:${email}?subject=Hello Sir`,
    },
    {
      title: "Phone",
      icon: "phone",
      url: `tel:+234${phone}`,
    },
  ];

  useEffect(() => {
    const rotateIn = withSpring(2 * Math.PI, { damping: 2, stiffness: 60 });
    const rotateOut = withSpring(0, { damping: 2, stiffness: 30 });

    progress.value = withRepeat(withSequence(rotateIn, rotateOut), -1, false);
  }, []);

  useEffect(() => {
    // Function to fetch values from AsyncStorage
    const getKeys = async () => {
      const res = await AsyncStorage.multiGet(["email", "whatsapp", "phone"]);

      for (const [k, v] of res) {
        if (k === "email") {
          setEmail(String(v));
        }
        if (k === "whatsapp") {
          setWhatsapp(String(v));
        }
        if (k === "phone") {
          setPhone(String(v));
        }
      }
    };

    // Call the function to initialize the component's state
    getKeys();

    // Use AsyncStorage.setItem to update values (for example, when user changes them)
    async function updateAsyncStorage() {
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("whatsapp", whatsapp);
      await AsyncStorage.setItem("phone", phone);
    }

    // Call updateAsyncStorage whenever one of the values changes
    updateAsyncStorage();
  }, [email, phone, whatsapp]);
  return (
    <Container>
      <Animated.View className="pt-10 items-center justify-center w-full relative bg-transparent">
        <Animated.View
          className="bg-APP_RED opacity-30"
          style={[
            {
              width: checkScreenSize(width * 0.7, width * 0.8),

              height: checkScreenSize(width * 0.7, width * 0.8),

              borderRadius: width / 2,
            },
            rStyle,
          ]}
        />

        <View className="absolute">
          <Image
            source={student}
            resizeMode="contain"
            style={{ width: checkScreenSize(170, 200) }}
          />
        </View>
      </Animated.View>

      {/* Second half */}

      <StyledText
        text="Darlington"
        size={SIZES.normal}
        family={FONTS.Light}
        className="text-center my-2"
      />
      <StyledText
        text="You can reach me on:"
        size={SIZES.large - 7}
        family={FONTS.Bold}
        className="text-center mb-2"
      />

      {/* Third half */}
      <View className="w-full items-center bg-transparent">
        <FlatList
          data={socials}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            return (
              <View className="items-center">
                <AppTouchable
                  name={item.icon}
                  onPress={() => Linking.openURL(`${item.url}`)}
                />
                <StyledText
                  text={item.title}
                  family={FONTS.Light}
                  size={SIZES.normal}
                  className="text-APP_ASH capitalize"
                />
              </View>
            );
          }}
          horizontal
          contentContainerStyle={{ gap: width * 0.15 }}
        />
      </View>
    </Container>
  );
};

export default Contact;
