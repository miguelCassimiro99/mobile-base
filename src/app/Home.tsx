import { View, Text } from "react-native";
import { Button } from "../components/Button";
import { List } from "../components/feed/List";

export function Home() {
  return (
    <View className="flex flex-1 justify-center items-center bg-gray-700 h-screen border border-red-400 overflow-hidden">
      <List />
      {/* <Button label="Teste" className="bg-gray-300" /> */}
    </View>
  );
}
