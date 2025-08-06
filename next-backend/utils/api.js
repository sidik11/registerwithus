// utils/api.js
const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3001"
    : "https://rwutestlink.techgeering.info/";

export default API_BASE_URL;
