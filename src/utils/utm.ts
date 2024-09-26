import { setCookie } from "./cookies";

export const processUTMParams = () => {
  if (typeof window === "undefined") return;

  const urlParams = new URLSearchParams(window.location.search);

  const utmSource = urlParams.get("utm_source");
  const utmMedium = urlParams.get("utm_medium");
  const utmCampaign = urlParams.get("utm_campaign");
  const utmContent = urlParams.get("utm_content");
  const utmTerm = urlParams.get("utm_term");

  const gclid = urlParams.get("gclid");
  const yclid = urlParams.get("yclid");
  const gclientid = urlParams.get("gclientid");
  const ymUid = urlParams.get("_ym_uid");
  const ymCounter = urlParams.get("_ym_counter");

  if (utmSource) setCookie("utm_source", utmSource, 30);
  if (utmMedium) setCookie("utm_medium", utmMedium, 30);
  if (utmCampaign) setCookie("utm_campaign", utmCampaign, 30);
  if (utmContent) setCookie("utm_content", utmContent, 30);
  if (utmTerm) setCookie("utm_term", utmTerm, 30);

  if (gclid) setCookie("gclid", gclid, 30);
  if (yclid) setCookie("yclid", yclid, 30);
  if (gclientid) setCookie("gclientid", gclientid, 30);
  if (ymUid) setCookie("_ym_uid", ymUid, 30);
  if (ymCounter) setCookie("_ym_counter", ymCounter, 30);
};
