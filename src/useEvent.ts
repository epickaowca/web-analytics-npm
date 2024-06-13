import { BASE_URL, AVAILABLE_PROJECTS, currentProject } from "./constants";

export const useAnalytics = (eventName: string, label: string) => {
  //@ts-ignore
  const projectName = AVAILABLE_PROJECTS[currentProject];
  if (!projectName)
    throw new Error("incorrect variable REACT_APP_WA_PROJECT_NAME");

  return () => {
    try {
      fetch(`${BASE_URL}/event/api`, {
        method: "POST",
        body: JSON.stringify({ projectName, eventName, label }),
      });
    } catch (err) {
      console.log(err);
    }
  };
};
