// [https://docs.expo.dev/versions/v55.0.0/sdk/magnetometer/]
import { Magnetometer } from "expo-sensors";
import { useEffect, useState } from "react";
import { Platform } from "react-native";

export function useMagnetometer() {
  const [available, setAvailable] = useState<boolean | null>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  const [heading, setHeading] = useState(0);

  useEffect(() => {
    let subscription: { remove: () => void } | undefined;

    void (async () => {
      const isAvailable = await Magnetometer.isAvailableAsync();
      setAvailable(isAvailable);
      if (!isAvailable) return;

      Magnetometer.setUpdateInterval(100);

      subscription = Magnetometer.addListener((data) => {
        setX(data.x);
        setY(data.y);
        setZ(data.z);
        setHeading(getHeading(data.x, data.y));
      });
    })();
    return () => subscription?.remove();
  }, []);

  return {
    available,
    x,
    y,
    z,
    heading,
  };
}

//convert magnetometer data to heading
function getHeading(x: number, y: number) {
  const radians = Platform.OS === "ios" ? Math.atan2(y, x) : Math.atan2(-x, -y);
  const degree = (radians * 360) / 360;
  return (degree + 360) % 360;
}
