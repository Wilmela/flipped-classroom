import AsyncStorage from "@react-native-async-storage/async-storage";
import * as z from "zod";

export const setKey = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);

    const result = await AsyncStorage.getItem(key);

    return result;
  } catch (error) {
    throw error;
  }
};

// Zod Schema
export const emailSchema = z
  .string()
  .min(1, { message: "Email should be longer than 1 character" });

export const phoneAndWhatsAppSchema = z
  .string()
  .min(10)
  .max(10, { message: "Phone should be 10 character long" });
