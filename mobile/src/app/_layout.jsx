import { Slot } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <safeAreaView style={{ flex: 1 }}>
        <Slot />
      </safeAreaView>
    </ClerkProvider>
  );
}