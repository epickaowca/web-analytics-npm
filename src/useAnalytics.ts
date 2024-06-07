import { useEffect } from "react";
import { getBrowser } from "./utils";

export const useAnalytics = () => {
  useEffect(() => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log(userTimeZone);
    console.log(getBrowser());
  }, []);
};
