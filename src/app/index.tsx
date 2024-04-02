import { useState } from "react";
import { Alert, Image, StatusBar, View } from "react-native";
import { Link } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export default function Home() {
  const [code, setCode] = useState("");

  function handleAccessCredential() {
    if (!code.trim()) {
      return Alert.alert('Aviso', 'Informe o código do ingresso');
    }
  }

  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8">
      <StatusBar barStyle="light-content" />

      <Image
        source={require("@/assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />

      <View className="w-full mt-8 gap-3">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={20}
            color={colors.green[200]}
          />

          <Input.Field
            placeholder="Código do ingresso"
            onChangeText={setCode}
          />
        </Input>

        <Button title="Acessar credencial" onPress={handleAccessCredential} />

        <Link href="/register" className="text-gray-100 text-base font-bold text-center mt-8">
          Ainda não possui ingresso?
        </Link>
      </View>
    </View>
  );
}