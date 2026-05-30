//[https://docs.expo.dev/versions/v55.0.0/sdk/accelerometer/]

import { useEffect, useState } from "react";
import { Accelerometer } from "expo-sensors";

export function useAccelerometer() {
  const [available, setAvailable] = useState<boolean | null>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

  useEffect(() => {
    let subscription: { remove: () => void } | undefined;

    // this is an immediately invoked async function(used because useEffect cannot be async)
    // create async function to check if accelerometer is available and set up listener
    (async () => {
      const isAvailable = await Accelerometer.isAvailableAsync();
      setAvailable(isAvailable);

      if (!isAvailable) return;

      Accelerometer.setUpdateInterval(100); // 100ms

      // add listener to update state
      subscription = Accelerometer.addListener((data) => {
        setX(data.x);
        setY(data.y);
        setZ(data.z);
      });
    })();

    // cleanup function to remove listener(prevents memory leaks)
    return () => subscription?.remove();
  }, []);

  return { available, x, y, z };
}
