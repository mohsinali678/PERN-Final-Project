export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3333"
    : "https://secret-taiga-58818.herokuapp.com";
};
