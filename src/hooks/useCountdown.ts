import { useState, useEffect } from "react";

export function useCountdown() {
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    // Standard initialization
    const getOrSetExpiry = () => {
      const now = Date.now();
      const savedExpiry = localStorage.getItem("biblia_offer_expiry");
      
      if (savedExpiry) {
        const expiryTime = parseInt(savedExpiry, 10);
        // If expired or invalid, reset a new 2-minute timer
        if (isNaN(expiryTime) || expiryTime <= now) {
          const newExpiry = now + 120 * 1000;
          localStorage.setItem("biblia_offer_expiry", newExpiry.toString());
          return newExpiry;
        }
        return expiryTime;
      } else {
        const newExpiry = now + 120 * 1000;
        localStorage.setItem("biblia_offer_expiry", newExpiry.toString());
        return newExpiry;
      }
    };

    const targetTime = getOrSetExpiry();

    const updateTimer = () => {
      const now = Date.now();
      const remaining = Math.max(0, Math.round((targetTime - now) / 1000));
      setTimeLeft(remaining);

      // If it reaches zero, we can choose to restart or keep at zero. 
      // Let's keep it at 0 during the current session, but if they reload it'll get a fresh 2 mins.
      if (remaining === 0) {
        // Option to reset if needed, but keeping it at 0 creates the final peak urgency.
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format helper: returns "01:59" format
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return {
    timeLeft,
    formattedTime: formatTime(),
    isExpired: timeLeft === 0,
  };
}
