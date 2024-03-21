import { FlatList, Image, View, TouchableOpacity, Text } from "react-native";

const feedsList = [
  {
    name: "Feed 1",
    cover: "https://avatars.githubusercontent.com/u/64820512?v=4",
    url: "#",
  },
  {
    name: "Feed 2",
    cover: "https://avatars.githubusercontent.com/u/64820512?v=4",
    url: "#",
  },
  {
    name: "Feed 3",
    cover: "https://avatars.githubusercontent.com/u/64820512?v=4",
    url: "#",
  },
];

export function List() {
  return (
    <View className="flex-1 bg-white p-4">
      <FlatList
        data={feedsList}
        keyExtractor={(item, index) => `feed-${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-row items-center mb-4 p-2 bg-gray-100 rounded-lg">
            <Image
              source={{ uri: item.cover }}
              style={{ width: 50, height: 50, borderRadius: 25 }}
              className="mr-4"
            />
            <Text className="font-bold">{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
