"use client";
import useTimer from "../_hooks/use-timer-hook";
export const TimerComponent = () => {
  const { isTimerRunning, startTimer, stopTimer, seconds } = useTimer(5);
  return (
    <div className="space-y-3">
      <div className="flex justify-center">
        <h2>{isTimerRunning ? seconds : "No Timer Running"}</h2>
      </div>
      <div className="flex justify-between">
        <button
          className="border bg-gray-100 mr-1"
          onClick={() => {
            startTimer();
          }}
        >
          Start Timer
        </button>
        <button
          className="border bg-gray-100 ml-1"
          onClick={() => {
            stopTimer();
          }}
        >
          End Timer
        </button>
      </div>
    </div>
  );
};
