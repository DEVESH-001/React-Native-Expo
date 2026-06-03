import { GyroscopeCard } from "@/components/gyroscope-card";
import { LightMeter } from "@/components/lightmeter";
import { TiltGame } from "@/components/tilt-game";
import { useAccelerometer } from "@/hooks/use-accelerometer";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { useEffect } from "react";

import { ShakeDetector } from "@/components/device-motionShakeDetector";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      {/* useAccelerometer */}
      {/* <TiltGame /> */}

      {/* gyroscope */}
      {/* <GyroscopeCard/> */}

      {/* Light sensor only for android !ios */}
      {/* <LightMeter /> */}

      {/* Acc + gyro + magnetometer = DeviceMotion */}
      {/* device moiton */}
      <ShakeDetector />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
