import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffffff", 
        },
        headerTintColor: "#000000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: " ",
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerTitle: " ",
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerTitle: " ",
        }}
      />
    </Stack>
  );
}