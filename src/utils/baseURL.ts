export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://fone-study-resources.herokuapp.com"
    : "http://localhost:4000";