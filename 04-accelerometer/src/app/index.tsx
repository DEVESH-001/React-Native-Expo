import { GyroscopeCard } from "@/components/gyroscope-card";
import { LightMeter } from "@/components/lightmeter";
import { TiltGame } from "@/components/tilt-game";
import { useAccelerometer } from "@/hooks/use-accelerometer";
import { DeviceMotion } from "expo-sensors";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { useEffect } from "react";

export default function Index() {
  // const { available, x, y, z } = useAccelerometer();
  // console.log(available,x,y,z);
  useEffect(()=>{},[])

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
