import {
  DarkTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { PaperProvider } from "react-native-paper";

import { theme } from "@/theme";
import React from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAqCZto7RwvPwoeBy7szpmEu8BFWQb2Q0M",
  authDomain: "test-13bb8.firebaseapp.com",
  projectId: "test-13bb8",
  storageBucket: "test-13bb8.appspot.com",
  messagingSenderId: "989485836687",
  appId: "1:989485836687:web:9ea7808a111aff6fd683fa",
  measurementId: "G-JJQ3M1J0FT"
};

const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
getFirestore(app);

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(app)/(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function AuthLayout() {
  // const [loaded, error] = useFonts({
  //   SpaceMono: require("../../../assets/fonts/SpaceMono-Regular.ttf"),
  //   ...FontAwesome.font,
  // });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  // useEffect(() => {
  //   if (error) throw error;
  // }, [error]);

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  return <AuthLayoutNav />;
}

function AuthLayoutNav() {
  return (
    <PaperProvider theme={theme}>
      <ThemeProvider value={DarkTheme}>
        <Stack>
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          <Stack.Screen name="landing" options={{ headerShown: false }} />
          <Stack.Screen
            name="login"
            options={{
              headerTitleAlign: "center",
              headerTitle: "Sign In",
              presentation: "modal",
            }}
          />
          <Stack.Screen
            name="register"
            options={{
              headerTitleAlign: "center",
              headerTitle: "Create Account",
              presentation: "modal",
            }}
          />
        </Stack>
      </ThemeProvider>
    </PaperProvider>
  );
}
