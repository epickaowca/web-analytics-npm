import { useEffect } from "react";

export const useAnalytics = (
  projectName:
    | "audiophile-ecommerce-website"
    | "google-drive-clone"
    | "interactive-comments-section"
    | "multi-step-form"
) => {
  useEffect(() => {
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
