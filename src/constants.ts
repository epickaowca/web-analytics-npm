export const BASE_URL = "https://web-analytics-sigma.vercel.app";
export const AVAILABLE_PROJECTS = [
  "audiophile-ecommerce-website",
  "google-drive-clone",
  "interactive-comments-section",
  "multi-step-form",
] as const;

export const currentProject = process.env.REACT_APP_WA_PROJECT_NAME;
