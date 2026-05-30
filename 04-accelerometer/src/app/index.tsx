import { GyroscopeCard } from "@/components/gyroscope-card";
import { TiltGame } from "@/components/tilt-game";
import { useAccelerometer } from "@/hooks/use-accelerometer";
import { Text, View, StyleSheet, StatusBar } from "react-native";

export default function Index() {
  // const { available, x, y, z } = useAccelerometer();
  // console.log(available,x,y,z);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      {/* useAccelerometer */}
      {/* <TiltGame /> */}

      {/* gyroscope */}
      <GyroscopeCard/>
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
