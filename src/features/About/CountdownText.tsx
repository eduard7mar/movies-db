import { Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export function CountdownText() {
  const intervalRef = useRef<any>(null);
  const [countdown, setCountdown] = useState(9);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCountdown((value) => value - 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(intervalRef.current);
    }
  }, [countdown]);

  return (
    <Typography variant="h4" align="center" sx={{ mb: 2 }}>
      Coming soon: {countdown}.
    </Typography>
  );
}
