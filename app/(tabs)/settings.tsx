import React, { useState } from "react";
import { Container } from "../../components";
import { emailSchema, phoneAndWhatsAppSchema, setKey } from "../../util/helper";
import { Input } from "../../components";
import { useRouter } from "expo-router";
import { COLORS } from "../../constants/theme";

const Settings = () => {
  const [email, setEmail] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [emailError, setEmailError] = useState("");
  const [whatsappError, setWhatsappError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const router = useRouter();

  const updateEmail = async () => {
    const data = emailSchema.safeParse(email);
    if (!data.success) {
      const error = data.error.errors.map((e) => e.message);
      setEmailError(error.toString());
      return;
    }

    try {
      await setKey("email", data.data);
      setEmail("");
      router.replace("/contact");
    } catch (error) {
      throw error;
    }
  };

  const updateWhatsapp = async () => {
    const data = phoneAndWhatsAppSchema.safeParse(whatsapp);
    if (!data.success) {
      const error = data.error.errors.map((e) => e.message);
      setWhatsappError(error.toString());
      return;
    }
    try {
      await setKey("whatsapp", data.data);
      setWhatsapp("");
      router.replace("/contact");
    } catch (error) {
      throw error;
    }
  };

  const updatePhone = async () => {
    const data = phoneAndWhatsAppSchema.safeParse(phone);
    if (!data.success) {
      const error = data.error.errors.map((e) => e.message);
      setPhoneError(error.toString());
      return;
    }
    try {
      await setKey("phone", data.data);
      setPhone("");
      router.replace("/contact");
    } catch (error) {
      throw error;
    }
  };

  return (
    <Container className="pt-10">
      <Input
        title={emailError ? emailError : "Email"}
        value={email}
        handleChange={(e: string) => setEmail(e)}
        handleUpdate={updateEmail}
        placeholder="Enter email"
        color={emailError ? "red" : COLORS.APP_ASH}
      />
      <Input
        title={whatsappError ? whatsappError : "Whatsapp"}
        value={whatsapp}
        handleChange={(e: string) => setWhatsapp(e)}
        handleUpdate={updateWhatsapp}
        placeholder="e.g 9079125783"
        color={whatsappError ? "red" : COLORS.APP_ASH}
      />
      <Input
        title={phoneError ? phoneError : "Phone"}
        value={phone}
        handleChange={(e: string) => setPhone(e)}
        handleUpdate={updatePhone}
        placeholder="e.g 9079125783"
        color={phoneError ? "red" : COLORS.APP_ASH}
      />
    </Container>
  );
};

export default Settings;
