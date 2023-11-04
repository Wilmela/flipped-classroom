import React, { useEffect, useState } from "react";
import { Container } from "../../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { emailSchema, phoneAndWhatsAppSchema, setKey } from "../../util/helper";
import { Input } from "../../components";
import { useRouter } from "expo-router";

const Settings = () => {
  const [email, setEmail] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const updateEmail = async () => {
    try {
      await setKey("email", emailSchema.parse(email));
      setEmail("");
      router.replace("/contact");
    } catch (error) {
      throw error;
    }
  };

  const updateWhatsapp = async () => {
    try {
      await setKey("whatsapp", phoneAndWhatsAppSchema.parse(whatsapp));
      setWhatsapp("");
      router.replace("/contact");
    } catch (error) {
      throw error;
    }
  };

  const updatePhone = async () => {
    try {
      await setKey("phone", phoneAndWhatsAppSchema.parse(phone));
      setPhone("");
      router.replace("/contact");
    } catch (error) {
      throw error;
    }
  };

  return (
    <Container className="pt-10">
      <Input
        title="Email"
        value={email}
        handleChange={(e: string) => setEmail(e)}
        handleUpdate={updateEmail}
        placeholder="Enter email"
      />
      <Input
        title="Whatsapp"
        value={whatsapp}
        handleChange={(e: string) => setWhatsapp(e)}
        handleUpdate={updateWhatsapp}
        placeholder="e.g 9079125783"
      />
      <Input
        title="Phone"
        value={phone}
        handleChange={(e: string) => setPhone(e)}
        handleUpdate={updatePhone}
        placeholder="e.g 9079125783"
      />
    </Container>
  );
};

export default Settings;
