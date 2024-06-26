import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, router } from "expo-router";
import { Text } from "react-native-paper";
import { getAuth } from "firebase/auth";
import { getApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isLoading, setIsLoading] = useState(true);
  const app = getApp();
  const db = getFirestore();

  getAuth(app).onAuthStateChanged((user) => {
    setIsLoading(false);
    if (user) {
      setDoc(
        doc(db, "users", user.uid),
        {
          _id: user.uid,
          email: user.email,
        },
        { merge: true }
      );
    } else {
      router.replace("/(app)/authentification/landing");
    }
  });

  if (isLoading) return <Text style={{ paddingTop: 10 }}>Loading...</Text>;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Messages",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="envelope" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="database"
        options={{
          title: "Database",
          tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
        }}
      />
    </Tabs>
  );
}
