import { View, Text } from "react-native";
import { Button } from "../components/Button";

export function Home() {
  return (
    <View className="flex flex-1 justify-center items-center bg-gray-700">
      <Text className="text-gray-200">Hello world</Text>
      <Button label="Teste" className="bg-gray-300" />
    </View>
  );
}
