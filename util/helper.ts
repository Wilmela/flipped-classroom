import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform, useWindowDimensions } from "react-native";
import * as z from "zod";
import { screens } from "../constants/screens";

export const setKey = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);

    const result = await AsyncStorage.getItem(key);

    return result;
  } catch (error) {
    throw error;
  }
};

export function checkScreenSize(v1: number, v2: number): number {
  const { width, height } = useWindowDimensions();

  if (height < screens.height.small) return v1;
  return v2;
}
export function checkOS(v1: string | null, v2?: string | null): any {
  if (Platform.OS === "android") return v1;
  return v2;
}

export const emailSchema = z.string().email({ message: "Provide a valid email" })

export const phoneAndWhatsAppSchema = z
  .string()
  .min(10)
  .max(10, { message: "Phone should be 10 characters " });
