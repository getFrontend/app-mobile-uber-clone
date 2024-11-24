import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" />
        <Stack.Screen name="sign-up" />
        <Stack.Screen name="sign-in" />
      </Stack>
    </>
  );
};

export default Layout;
