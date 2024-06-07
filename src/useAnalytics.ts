import { useEffect } from "react";

export const useAnalytics = () => {
  useEffect(() => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    fetch(
      "https://web-analytics-sigma.vercel.app/audiophile-ecommerce-website/api",
      {
        method: "POST",
        body: JSON.stringify({ userTimeZone }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }, []);
};
