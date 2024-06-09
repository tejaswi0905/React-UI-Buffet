import { useState, useRef, useEffect, useCallback } from "react";

const useTimer = (totalDuration: number) => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(totalDuration);
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const startTimer = useCallback(() => {
    /**
     * start the timer
     * decrement seconds evers 1s
     * update the isRunning --> true
     */
    timerRef.current = setInterval(() => {
      setSeconds((currentState) => {
        return (currentState -= 1);
      });
    }, 1000);
    setIsTimerRunning(true);
  }, [setSeconds, setIsTimerRunning]);

  const stopTimer = useCallback(() => {
    clearInterval(timerRef.current);
    setIsTimerRunning(false);
    setSeconds(totalDuration);
  }, [setSeconds, setIsTimerRunning, totalDuration]);

  useEffect(() => {
    if (seconds < 1) {
      stopTimer();
    }
  }, [stopTimer, seconds]);
  return {
    isTimerRunning,
    startTimer,
    stopTimer,
    seconds,
  };
};

export default useTimer;
