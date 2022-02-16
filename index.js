import {
  differenceInMilliseconds,
  startOfSecond,
  addSeconds,
  getMonth,
  getDay,
  getYear,
  format
} from "date-fns";
import { useEffect, useState, useRef } from "react";

function msUntilNext() {
  const start = startOfSecond;
  const add = addSeconds;
  const date = new Date();
  return differenceInMilliseconds(add(start(date), 1), date);
}

function useCurrentDate() {
  const [date, setDate] = useState(startOfSecond(new Date()));
  const timer = useRef(0);

  useEffect(() => {
    function delayedTimeChange() {
      timer.current = setTimeout(() => {
        delayedTimeChange();
      }, msUntilNext());

      setDate(new Date(startOfSecond(new Date())));
    }

    delayedTimeChange();
    return () => clearTimeout(timer.current);
  }, []);

  return {
    date,
    mmddyyyy: format(date, "MM/dd/yyyy"),
    ddmmyyyy: format(date, "dd/MM/yyyy"),
    month: getMonth(date),
    year: getYear(date),
    day: getDay(date),
    dayName: format(date, "EEEE"),
    monthName: format(date, "LLLL"),
    dmdy: format(date, "EEEE MMMM do, yyyy")
  };
}

export { useCurrentDate };
