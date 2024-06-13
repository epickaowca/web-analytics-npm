import { useEffect } from "react";
import { BASE_URL, AVAILABLE_PROJECTS, currentProject } from "./constants";

export const useAnalytics = () => {
  useEffect(() => {
    //@ts-ignore
    const projectName = AVAILABLE_PROJECTS[currentProject];

    if (!projectName) {
      throw new Error("incorrect variable REACT_APP_WA_PROJECT_NAME");
    }

    const timeStamp = localStorage.getItem("OO_WB_TimeStamp");
    if (timeStamp) {
      const now = new Date();
      const isOneHourPass =
        now.getTime() - new Date(timeStamp).getTime() >= 3600000;
      if (!isOneHourPass) {
        return () => {};
      }
    }

    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    localStorage.setItem("OO_WB_TimeStamp", new Date().toString());
    try {
      fetch("https://web-analytics-sigma.vercel.app/api", {
        method: "POST",
        body: JSON.stringify({ userTimeZone, projectName }),
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
};
