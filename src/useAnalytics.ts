import { useEffect } from "react";

export const useAnalytics = (
  projectName:
    | "audiophile-ecommerce-website"
    | "google-drive-clone"
    | "interactive-comments-section"
    | "multi-step-form"
) => {
  useEffect(() => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    try {
      fetch("https://web-analytics-sigma.vercel.app/api", {
        method: "POST",
        body: JSON.stringify({ userTimeZone, projectName }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
};
