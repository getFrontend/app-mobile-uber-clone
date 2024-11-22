import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-blue-200">
      <Text className="text-blue-500 text-8xl text-center font-bold">Uber</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
