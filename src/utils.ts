export const getBrowser = () => {
  const userAgent = navigator.userAgent;
  let browser = "unkown";
  // Detect browser name
  browser = /ucbrowser/i.test(userAgent) ? "UCBrowser" : browser;
  browser = /edg/i.test(userAgent) ? "Edge" : browser;
  browser = /googlebot/i.test(userAgent) ? "GoogleBot" : browser;
  browser = /chromium/i.test(userAgent) ? "Chromium" : browser;
  browser =
    /firefox|fxios/i.test(userAgent) && !/seamonkey/i.test(userAgent)
      ? "Firefox"
      : browser;
  browser =
    /; msie|trident/i.test(userAgent) && !/ucbrowser/i.test(userAgent)
      ? "IE"
      : browser;
  browser =
    /chrome|crios/i.test(userAgent) &&
    !/opr|opera|chromium|edg|ucbrowser|googlebot/i.test(userAgent)
      ? "Chrome"
      : browser;
  browser =
    /safari/i.test(userAgent) &&
    !/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i.test(
      userAgent
    )
      ? "Safari"
      : browser;
  browser = /opr|opera/i.test(userAgent) ? "Opera" : browser;

  return browser;
};
