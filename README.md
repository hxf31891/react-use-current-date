# useCurrentDate - a custom React hook

A lightweight package containing a simple hook to track current date

## Install

`npm install react-use-current-date`

## Example

```js
import React from "react";
import { useWindowSizes } from "react-use-current-date";

function MyApp() {
  const {
    date,
    mmddyyyy,
    ddmmyyyy,
    month,
    year,
    day,
    dayName,
    monthName,
    dmdy
  } = useCurrentDate();
  console.log(
    date,
    mmddyyyy,
    ddmmyyyy,
    month,
    year,
    day,
    dayName,
    monthName,
    dmdy
  );
}
```
